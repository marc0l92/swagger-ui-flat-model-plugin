import React, { Component } from "react"
import PropTypes from "prop-types"
import { getExtensions, getModelName, sanitizeUrl } from "./utils"

const propClass = "property primitive"

export default class ModelFlatProperty extends Component {
    static propTypes = {
        schema: PropTypes.object.isRequired,
        getComponent: PropTypes.func.isRequired,
        getConfigs: PropTypes.func.isRequired,
        name: PropTypes.string,
        displayName: PropTypes.string,
        depth: PropTypes.number,
        expandDepth: PropTypes.number
    }

    render() {
        let { getComponent, getConfigs, schema, name } = this.props
        console.log(name, schema.toJS())

        const { showExtensions } = getConfigs()

        if (!schema || !schema.get) {
            // don't render if schema isn't correctly formed
            return <div></div>
        }

        let type = schema.get("type")
        let xml = schema.get("xml")
        let enumArray = schema.get("enum")
        // let title = schema.get("title") || name
        let description = schema.get("description")
        let example = schema.get("example")
        let extensions = getExtensions(schema)
        let properties = schema
            .filter((_, key) => ["example", "enum", "type", "description", "$$ref", "externalDocs", "items", "properties", "additionalProperties", "xml"].indexOf(key) === -1)
            .filterNot((_, key) => extensions.has(key))
        let externalDocsUrl = schema.getIn(["externalDocs", "url"])
        let externalDocsDescription = schema.getIn(["externalDocs", "description"])

        const Markdown = getComponent("Markdown", true)
        const Property = getComponent("Property")
        const Link = getComponent("Link")

        let innerItem = null
        let showProperties = false
        if (type === 'object') {
            innerItem = {
                name: getModelName(schema),
            }
        } else if (type === 'array') {
            if (schema.get('items')) {
                const itemsType = schema.get('items').get('type')
                if (itemsType === 'object') {
                    innerItem = {
                        name: getModelName(schema.get('items')),
                        schema: schema.get('items'),
                    }
                } else {
                    innerItem = {
                        name: itemsType,
                        schema: schema.get('items'),
                    }
                }
            } else {
                innerItem = { name: '' }
            }
            showProperties = true
        } else {
            showProperties = true
        }

        return <span className="model">
            <span className="prop">
                <span className="prop-type">
                    {
                        type !== 'object' ? null : innerItem.name
                    }
                    {
                        type !== 'array' ? null : <>
                            Array[{innerItem.name}]
                            {/* <ModelFlatProperty
                                getComponent={getComponent}
                                getConfigs={getConfigs}
                                schema={innerItem.schema}
                                name={innerItem.name} /> */}
                        </>
                    }
                    {
                        !(type !== 'object' && type !== 'array') ? null : type
                    }
                </span>
                {
                    !showProperties ? null : <>
                        {
                            !(properties && properties.size) ? null : <span className="properties-list">( {properties.entrySeq().map(([key, v]) =>
                                <span key={`${key}-${v}`} className={propClass} >{key}: {v}</span>
                            )} )</span>
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
                            description &&
                            <Markdown source={description} />
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
                    </>
                }
            </span>
        </span>
    }
}
