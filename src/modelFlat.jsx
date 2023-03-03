import React from "react"
import ImmutablePureComponent from "react-immutable-pure-component"
import ImPropTypes from "react-immutable-proptypes"
import PropTypes from "prop-types"

export default class ModelFlat extends ImmutablePureComponent {
  static propTypes = {
    schema: ImPropTypes.map.isRequired,
    getComponent: PropTypes.func.isRequired,
    specSelectors: PropTypes.object.isRequired,
    name: PropTypes.string,
    displayName: PropTypes.string,
    required: PropTypes.bool,
    includeReadOnly: PropTypes.bool,
    includeWriteOnly: PropTypes.bool,
  }

  // getModelName = (ref) => {
  //   if (ref.indexOf("#/definitions/") !== -1) {
  //     return ref.replace(/^.*#\/definitions\//, "")
  //   }
  //   if (ref.indexOf("#/components/schemas/") !== -1) {
  //     return ref.replace(/^.*#\/components\/schemas\//, "")
  //   }
  // }

  // getRefSchema = (model) => {
  //   let { specSelectors } = this.props
  //   return specSelectors.findDefinition(model)
  // }

  render() {
    let { getComponent, specSelectors, schema, required, name, displayName, includeReadOnly, includeWriteOnly} = this.props
    console.log(this.props)
    return <span>Test Model Flat2</span>
    let type = "object"

    // const deprecated = specSelectors.isOAS3() && schema.get("deprecated")
    // type = schema && schema.get("type") || type
  }
}
