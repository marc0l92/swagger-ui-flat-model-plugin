import React from "react"
import ImmutablePureComponent from "react-immutable-pure-component"
import ImPropTypes from "react-immutable-proptypes"
import PropTypes from "prop-types"

export default class ModelFlatProperty extends ImmutablePureComponent {
    static propTypes = {
        schema: ImPropTypes.map.isRequired,
        getComponent: PropTypes.func.isRequired,
        specSelectors: PropTypes.object.isRequired,
        name: PropTypes.string,
        required: PropTypes.bool,
    }

    render() {
        console.log(this.props)
        const { schema, getComponent, specSelectors, name, required } = this.props

        const { isOAS3 } = specSelectors
        const Markdown = getComponent("Markdown", true)
        const EnumModel = getComponent("EnumModel")
        const Property = getComponent("Property")
        const ModelCollapse = getComponent("ModelCollapse")
        const Link = getComponent("Link")

        const type = schema.get("type")
        const format = schema.get("format")
        const xml = schema.get("xml")
        const enumArray = schema.get("enum")
        const title = schema.get("title") || name
        const description = schema.get("description")
        // const extensions = getExtensions(schema)
        // const properties = schema
        // .filter((_, key) => ["enum", "type", "format", "description", "$$ref", "externalDocs"].indexOf(key) === -1)
        // .filterNot((_, key) => extensions.has(key))
        const externalDocsUrl = schema.getIn(["externalDocs", "url"])
        const externalDocsDescription = schema.getIn(["externalDocs", "description"])


        const isDeprecated = isOAS3() && schema.get("deprecated")
        const classNames = ["property-row"]
        if (isDeprecated) {
            classNames.push("deprecated")
        }
        if (required) {
            classNames.push("required")
        }

        return <tr className={classNames.join(" ")}>
            <td>{name}{required && <span className="star">*</span>}</td>
            <td>
                <span className="prop">
                    <span className="prop-type">{type}</span>
                </span>
            </td>
        </tr>
    }
}
