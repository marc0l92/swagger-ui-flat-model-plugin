import React from "react"
import ImmutablePureComponent from "react-immutable-pure-component"
import ImPropTypes from "react-immutable-proptypes"
import PropTypes from "prop-types"
import { List } from "immutable"
import { sanitizeUrl } from "./utils"

const braceOpen = "{"
const braceClose = "}"

export default class ModelFlat extends ImmutablePureComponent {
    static propTypes = {
        namespace: PropTypes.string.isRequired,
        schema: ImPropTypes.map.isRequired,
        getComponent: PropTypes.func.isRequired,
        getConfigs: PropTypes.func.isRequired,
        specSelectors: PropTypes.object.isRequired,
        name: PropTypes.string,
        includeReadOnly: PropTypes.bool,
        includeWriteOnly: PropTypes.bool,
    }

    render() {
        const { namespace, getComponent, getConfigs, specSelectors, schema, name, includeReadOnly, includeWriteOnly } = this.props
        const { showExtensions } = getConfigs()
        const { isOAS3 } = specSelectors
        const ModelFlatProperty = getComponent('ModelFlatProperty')
        const Markdown = getComponent("Markdown", true)
        const ModelCollapse = getComponent("ModelCollapse")
        const Link = getComponent("Link")
        const Property = getComponent("Property")

        const description = schema.get("description")
        const properties = schema.get("properties")
        const additionalProperties = schema.get("additionalProperties")
        const title = schema.get("title") || name
        const requiredProperties = schema.get("required")
        const infoProperties = schema
            .filter((v, key) => ["maxProperties", "minProperties", "nullable", "example"].indexOf(key) !== -1)
        const deprecated = schema.get("deprecated")
        const externalDocsUrl = schema.getIn(["externalDocs", "url"])
        const externalDocsDescription = schema.getIn(["externalDocs", "description"])

        const collapsedContent = (<span><span>{braceOpen}</span>...<span>{braceClose}</span></span>)
        const titleEl = title && <span className="model-title" id={namespace + '__' + title}><span className="model-title__text">{title}</span></span>

        return <div className="model">
            <ModelCollapse
                modelName={name}
                title={titleEl}
                expanded={true}
                collapsedContent={collapsedContent}>
                <span className="brace-open object">{braceOpen}</span>
                <div className="inner-object">
                    <table className="model table is-hoverable">
                        <tbody>
                            {
                                !description ? null : <tr className="description">
                                    <td colSpan={2}><Markdown source={description} /></td>
                                </tr>
                            }
                            {
                                externalDocsUrl &&
                                <tr className="external-docs">
                                    <td>externalDocs:</td>
                                    <td><Link target="_blank" href={sanitizeUrl(externalDocsUrl)}>{externalDocsDescription || externalDocsUrl}</Link></td>
                                </tr>
                            }
                            {
                                !deprecated ? null :
                                    <tr className="property"><td>deprecated:</td><td>true</td></tr>
                            }
                            {
                                !(properties && properties.size) ? null : properties.filter(
                                    (value) => {
                                        return (!value.get("readOnly") || includeReadOnly) &&
                                            (!value.get("writeOnly") || includeWriteOnly)
                                    }
                                ).map((value, key) => {
                                    const isRequired = List.isList(requiredProperties) && requiredProperties.contains(key)
                                    const isDeprecated = isOAS3() && schema.get("deprecated")
                                    const classNames = ["property-row"]
                                    if (isDeprecated) {
                                        classNames.push("deprecated")
                                    }
                                    if (isRequired) {
                                        classNames.push("required")
                                    }
                                    return <tr key={key} className={classNames.join(" ")}>
                                        <td>
                                            {key}{isRequired && <span className="star">*</span>}
                                        </td>
                                        <td>
                                            <ModelFlatProperty
                                                namespace={namespace}
                                                key={key}
                                                getComponent={getComponent}
                                                getConfigs={getConfigs}
                                                schema={value}
                                                name={key} />
                                        </td>
                                    </tr>
                                }).toArray()
                            }
                            {
                                // empty row before extensions...
                                !showExtensions ? null : <tr><td>&nbsp;</td></tr>
                            }
                            {
                                !showExtensions ? null :
                                    schema.entrySeq().map(
                                        ([key, value]) => {
                                            if (key.slice(0, 2) !== "x-") {
                                                return
                                            }
                                            const normalizedValue = !value ? null : value.toJS ? value.toJS() : value
                                            return (<tr key={key} className="extension">
                                                <td>{key}</td>
                                                <td>{JSON.stringify(normalizedValue)}</td>
                                            </tr>)
                                        }).toArray()
                            }
                            {
                                !(additionalProperties && additionalProperties.size) ? null : <tr>
                                    <td>{"< * >:"}</td>
                                    <td>
                                        <ModelFlatProperty
                                            namespace={namespace}
                                            getComponent={getComponent}
                                            getConfigs={getConfigs}
                                            schema={additionalProperties}
                                            name={"< * >"} />
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
                <span className="brace-close">{braceClose}</span>
                {
                    infoProperties.map((value, key) => {
                        return <Property key={`${key}-${value}`} propKey={key} propVal={value} propClass={'property'} />
                    }).toArray()
                }
            </ModelCollapse>
        </div>
    }
}
