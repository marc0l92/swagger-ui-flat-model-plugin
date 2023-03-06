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
        let format = schema.get("format")
        let xml = schema.get("xml")
        let enumArray = schema.get("enum")
        // let title = schema.get("title") || name
        let description = schema.get("description")
        let extensions = getExtensions(schema)
        let properties = schema
            .filter((_, key) => ["enum", "type", "format", "description", "$$ref", "externalDocs"].indexOf(key) === -1)
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
                            <ModelFlatProperty
                                getComponent={getComponent}
                                getConfigs={getConfigs}
                                schema={innerItem.schema}
                                name={innerItem.name} />
                        </>
                    }
                    {
                        !(type !== 'object' && type !== 'array') ? null : type
                    }
                </span>
                {
                    !showProperties ? null : <>
                        {format && <span className="prop-format">(${format})</span>}
                        {
                            properties.size ? properties.entrySeq().map(([key, v]) => <Property key={`${key}-${v}`} propKey={key} propVal={v} propClass={propClass} />) : null
                        }
                        {
                            showExtensions && extensions.size ? extensions.entrySeq().map(([key, v]) => <Property key={`${key}-${v}`} propKey={key} propVal={v} propClass={propClass} />) : null
                        }
                        {
                            !description ? null :
                                <Markdown source={description} />
                        }
                        {
                            externalDocsUrl &&
                            <div className="external-docs">
                                <Link target="_blank" href={sanitizeUrl(externalDocsUrl)}>{externalDocsDescription || externalDocsUrl}</Link>
                            </div>
                        }
                        {
                            xml && xml.size ? (<span><br /><span className={propClass}>xml:</span>
                                {
                                    xml.entrySeq().map(([key, v]) => <span key={`${key}-${v}`} className={propClass}><br />&nbsp;&nbsp;&nbsp;{key}: {String(v)}</span>).toArray()
                                }
                            </span>) : null
                        }
                        {
                            enumArray && <span className="prop-enum">
                                Enum:<br />
                                [ {enumArray.join(", ")} ]
                            </span>
                        }
                    </>
                }
            </span>
        </span>
    }
}
