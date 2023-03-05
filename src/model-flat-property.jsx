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
        const { schema, getComponent, specSelectors, name, required } = this.props
        const { isOAS3 } = specSelectors
        let isDeprecated = isOAS3() && schema.get("deprecated")
        let classNames = ["property-row"]
        if (isDeprecated) {
            classNames.push("deprecated")
        }
        if (required) {
            classNames.push("required")
        }
        return <tr className={classNames.join(" ")}>
            <td>{name}{required && <span className="star">*</span>}</td>
            <td>here</td>
        </tr>
    }
}
