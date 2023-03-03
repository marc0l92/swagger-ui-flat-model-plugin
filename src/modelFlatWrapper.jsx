import React from "react"
import ImmutablePureComponent from "react-immutable-pure-component"
import ImPropTypes from "react-immutable-proptypes"
import PropTypes from "prop-types"
import { List } from "immutable"

export default class ModelFlatWrapper extends ImmutablePureComponent {
  static propTypes = {
    schema: ImPropTypes.map.isRequired,
    getComponent: PropTypes.func.isRequired,
    specSelectors: PropTypes.object.isRequired,
    name: PropTypes.string,
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
    let { getComponent, specSelectors, schema, required, name, displayName, includeReadOnly, includeWriteOnly } = this.props
    console.log(this.props)
    const type = (schema && schema.get("type")) || 'object'
    const properties = schema.get("properties")
    const requiredProperties = schema.get("required")
    if (!name) {
      name = 'Object'
    }


    return <div>
      <div>{name} {'{'} </div>
      {!(properties && properties.size) ? null : properties.entrySeq().map(
        ([key, value]) => {
          let isRequired = List.isList(requiredProperties) && requiredProperties.contains(key)

          let classNames = ["property-row"]

          if (isRequired) {
            classNames.push("required")
          }

          return (<div key={key} className={classNames.join(" ")}>
            {key}{isRequired && <span className="star">*</span>}
          </div>)
        }).toArray()}
        <div>{'}'} </div>
    </div>
  }
}
