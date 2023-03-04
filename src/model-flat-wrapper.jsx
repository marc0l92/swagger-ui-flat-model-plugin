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

  getModelName = (ref) => {
    if (ref.indexOf("#/definitions/") !== -1) {
      return ref.replace(/^.*#\/definitions\//, "")
    }
    if (ref.indexOf("#/components/schemas/") !== -1) {
      return ref.replace(/^.*#\/components\/schemas\//, "")
    }
  }

  getRefSchema = (model) => {
    let { specSelectors } = this.props
    return specSelectors.findDefinition(model)
  }

  getAllModels = (schema) => {
    return {}
  }

  render() {
    console.log(this.props)
    let { getComponent, specSelectors, schema, required, name, displayName, includeReadOnly, includeWriteOnly } = this.props
    const ModelFlat = getComponent('ModelFlat')

    const $$ref = schema && schema.get("$$ref")
    if (!name && $$ref) {
      name = this.getModelName($$ref)
    }

    const models = this.getAllModels(schema)


    return <div className="model-box">
      {Object.entries(models).map(([key, value]) => {
        return <ModelFlat getComponent={getComponent} name={value.name} schema={value.schema} />
      })}
    </div>
  }
}
