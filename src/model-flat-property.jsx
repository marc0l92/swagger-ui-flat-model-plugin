import React, { Component } from "react"
import PropTypes from "prop-types"
import { getExtensions, getModelName, sanitizeUrl } from "./utils"

const propClass = "property primitive"

export default class ModelFlatProperty extends Component {
    static propTypes = {
        namespace: PropTypes.string.isRequired,
        schema: PropTypes.object.isRequired,
        getComponent: PropTypes.func.isRequired,
        getConfigs: PropTypes.func.isRequired,
        name: PropTypes.string,
        displayName: PropTypes.string,
        depth: PropTypes.number,
        expandDepth: PropTypes.number
    }

    getFilteredProperties(schema) {
        const extensions = getExtensions(schema)
        return schema
            .filter((_, key) => ["example", "enum", "type", "description", "$$ref", "externalDocs", "items", "properties", "additionalProperties", "xml"].indexOf(key) === -1)
            .filterNot((_, key) => extensions.has(key))
    }

    renderProperties(schema) {
        if (schema) {
            const type = schema.get("type") || 'object'
            const properties = this.getFilteredProperties(schema)
            if (type !== 'object' && properties.size) {
                return <span className="properties-list">({
                    properties.entrySeq().map(([key, v]) =>
                        <span key={`${key}-${v}`} className={propClass} >{key}: {v}</span>
                    )
                })</span>
            }
        }
        return ''
    }

    renderTypeAndProperties(schema, namespace) {
        const type = schema.get("type")
        if (type === 'object') {
            const name = getModelName(schema)
            return <span className="prop-type">
                <a href={'#' + namespace + '__' + name}>{name}</a>
            </span>
        } else if (type === 'array' && schema.get('items')) {
            return <span className="prop-type">
                Array[{this.renderTypeAndProperties(schema.get('items'), namespace)}{this.renderProperties(schema.get('items'))}]{this.renderProperties(schema.get('items'))}
            </span>
        } else {
            return <span className="prop-type">
                {type || 'object'}{this.renderProperties(schema.get('items'))}
            </span>
        }
    }

    render() {
        const { namespace, getComponent, getConfigs, schema, name } = this.props
        const { showExtensions } = getConfigs()

        if (!schema || !schema.get) {
            // don't render if schema isn't correctly formed
            return <div></div>
        }

        const xml = schema.get("xml")
        const enumArray = schema.get("enum")
        const description = schema.get("description")
        const example = schema.get("example")
        const extensions = getExtensions(schema)
        const externalDocsUrl = schema.getIn(["externalDocs", "url"])
        const externalDocsDescription = schema.getIn(["externalDocs", "description"])

        const Markdown = getComponent("Markdown", true)
        const Property = getComponent("Property")
        const Link = getComponent("Link")

        return <span className="model">
            <span className="prop">
                {
                    this.renderTypeAndProperties(schema, namespace)
                }
                {
                    !(showExtensions && extensions.size) ? null : extensions.entrySeq().map(([key, v]) =>
                        <Property key={`${key}-${v}`} propKey={key} propVal={v} propClass={propClass} />
                    )
                }
                {
                    example &&
                    <Property propKey="example" propVal={example} propClass={propClass} />
                }
                {
                    enumArray && <span className="prop-enum">
                        Enum: [ {enumArray.join(", ")} ]
                    </span>
                }
                {
                    description && <span className="description">
                        <Markdown source={description} />
                    </span>
                }
                {
                    externalDocsUrl &&
                    <div className="external-docs">
                        <Link target="_blank" href={sanitizeUrl(externalDocsUrl)}>{externalDocsDescription || externalDocsUrl}</Link>
                    </div>
                }
                {
                    !(xml && xml.size) ? null : <div>
                        <span className={propClass}>xml:</span>
                        {
                            xml.entrySeq().map(([key, v]) => <span key={`${key}-${v}`} className={propClass}><br />&nbsp;&nbsp;&nbsp;{key}: {String(v)}</span>).toArray()
                        }
                    </div>
                }
            </span>
        </span>
    }
}
