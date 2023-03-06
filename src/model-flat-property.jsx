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

    getFilteredProperties(schema, extensions) {
        return schema
            .filter((_, key) => ["example", "enum", "type", "description", "$$ref", "externalDocs", "items", "properties", "additionalProperties", "xml"].indexOf(key) === -1)
            .filterNot((_, key) => extensions.has(key))
    }

    renderTypeAndProperties(schema) {
        return <span className="prop-type">
            {
                type !== 'object' ? null : innerItem.name
            }
            {
                type !== 'array' ? null : <>
                    Array[{innerItem.name}{
                        !(innerItem.properties && innerItem.properties.size) ? null : <span className="properties-list">({
                            innerItem.properties.entrySeq().map(([key, v]) =>
                                <span key={`${key}-${v}`} className={propClass} >{key}: {v}</span>
                            )
                        })</span>
                    }]
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
    }

    render() {
        const { namespace, getComponent, getConfigs, schema, name } = this.props
        console.log(name, schema.toJS())

        const { showExtensions } = getConfigs()

        if (!schema || !schema.get) {
            // don't render if schema isn't correctly formed
            return <div></div>
        }

        const type = schema.get("type")
        const xml = schema.get("xml")
        const enumArray = schema.get("enum")
        const description = schema.get("description")
        const example = schema.get("example")
        const extensions = getExtensions(schema)
        const properties = this.getFilteredProperties(schema, extensions)
        const externalDocsUrl = schema.getIn(["externalDocs", "url"])
        const externalDocsDescription = schema.getIn(["externalDocs", "description"])

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
                        properties: this.getFilteredProperties(schema.get('items'), extensions),
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
                        type !== 'object' ? null : <a href={'#' + namespace + '__' + innerItem.name}>{innerItem.name}</a>
                    }
                    {
                        type !== 'array' ? null : <>
                            Array[{innerItem.name}{
                                !(innerItem.properties && innerItem.properties.size) ? null : <span className="properties-list">({
                                    innerItem.properties.entrySeq().map(([key, v]) =>
                                        <span key={`${key}-${v}`} className={propClass} >{key}: {v}</span>
                                    )
                                })</span>
                            }]
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
                            !(properties && properties.size) ? null : <span className="properties-list">(
                                {
                                    properties.entrySeq().map(([key, v]) =>
                                        <span key={`${key}-${v}`} className={propClass} >{key}: {v}</span>
                                    )
                                })</span>
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
