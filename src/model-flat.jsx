import React from "react"
import ImmutablePureComponent from "react-immutable-pure-component"
import ImPropTypes from "react-immutable-proptypes"
import PropTypes from "prop-types"
import { List } from "immutable"

const braceOpen = "{"
const braceClose = "}"

export default class ModelFlat extends ImmutablePureComponent {
    static propTypes = {
        schema: ImPropTypes.map.isRequired,
        getComponent: PropTypes.func.isRequired,
        getConfigs: PropTypes.func.isRequired,
        specSelectors: PropTypes.object.isRequired,
        name: PropTypes.string,
        includeReadOnly: PropTypes.bool,
        includeWriteOnly: PropTypes.bool,
    }

    render() {
        console.log(this.props)
        let { getComponent, getConfigs, specSelectors, schema, name, includeReadOnly, includeWriteOnly } = this.props
        const { showExtensions } = getConfigs()
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
        const titleEl = title && <span className="model-title"><span className="model-title__text">{title}</span></span>

        return <div className="model">
            <ModelCollapse
                modelName={name}
                title={titleEl}
                expanded={true}
                collapsedContent={collapsedContent}>
                <span className="brace-open object">{braceOpen}</span>
                <div className="inner-object">
                    <table className="model">
                        <tbody>
                            {
                                !description ? null : <tr className="description">
                                    <td>description:</td>
                                    <td><Markdown source={description} /></td>
                                </tr>
                            }
                            {
                                externalDocsUrl &&
                                <tr className="external-docs">
                                    <td>externalDocs:</td>
                                    <td><Link target="_blank" href={sanitizeUrl(externalDocsUrl)}>{externalDocsDescription || externalDocsUrl}</Link></td>
                                </tr>
                            }
                            {!deprecated ? null : <tr className="property"><td>deprecated:</td><td>true</td></tr>}
                            {
                                !(properties && properties.size) ? null : properties.filter(
                                    (value) => {
                                        return (!value.get("readOnly") || includeReadOnly) &&
                                            (!value.get("writeOnly") || includeWriteOnly)
                                    }
                                ).map((value, key) => {
                                    const isRequired = List.isList(requiredProperties) && requiredProperties.contains(key)
                                    return <ModelFlatProperty
                                        key={key}
                                        schema={value}
                                        getComponent={getComponent}
                                        specSelectors={specSelectors}
                                        name={key}
                                        required={isRequired} />
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
                                !(additionalProperties && additionalProperties.size) ? null :
                                    <ModelFlatProperty
                                        schema={additionalProperties}
                                        getComponent={getComponent}
                                        specSelectors={specSelectors}
                                        name={"< * >"}
                                        required={false} />
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
