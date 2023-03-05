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
        const { name } = this.props
        return <div>
            <span>{name}</span>
        </div>
    }
}
