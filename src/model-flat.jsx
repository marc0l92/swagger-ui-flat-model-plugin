import React from "react"
import ImmutablePureComponent from "react-immutable-pure-component"
import ImPropTypes from "react-immutable-proptypes"
import PropTypes from "prop-types"

const braceOpen = "{"
const braceClose = "}"

export default class ModelFlat extends ImmutablePureComponent {
    static propTypes = {
        schema: ImPropTypes.map.isRequired,
        getComponent: PropTypes.func.isRequired,
        //     specSelectors: PropTypes.object.isRequired,
        //     name: PropTypes.string,
        //     required: PropTypes.bool,
        //     includeReadOnly: PropTypes.bool,
        //     includeWriteOnly: PropTypes.bool,
    }

    render() {
        let { getComponent, specSelectors, schema, required, name, includeReadOnly, includeWriteOnly } = this.props
        const ModelFlatProperty = getComponent('ModelFlatProperty')
        const Markdown = getComponent("Markdown", true)
        const ModelCollapse = getComponent("ModelCollapse")

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

        const collapsedContent = (<span>
            <span>{braceOpen}</span>...<span>{braceClose}</span>
        </span>)

        const titleEl = title && <span className="model-title">
            <span className="model-title__text">{title}</span>
        </span>

        return <span className="model">
            <ModelCollapse
                modelName={name}
                title={titleEl}
                expanded={true}
                collapsedContent={collapsedContent}>
                <span className="brace-open object">{braceOpen}</span>
                <div className="inner-object">
                    {
                        !description ? null : <div className="description">
                            <span>description:</span>
                            <span>{description}</span>
                        </div>
                    }
                </div>
                <span className="brace-close">{braceClose}</span>
            </ModelCollapse>
        </span>
    }
}
