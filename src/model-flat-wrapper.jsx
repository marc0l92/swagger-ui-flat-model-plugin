import React from "react"
import ImmutablePureComponent from "react-immutable-pure-component"
import ImPropTypes from "react-immutable-proptypes"
import PropTypes from "prop-types"

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

  // TODO: allOf, anyOf, not
  getAllModels = (name, schema, models = {}) => {
    if (schema) {
      if (!name && schema.has("$$ref")) {
        name = this.getModelName(schema.get("$$ref"))
      }
      if (schema.has('title')) {
        name = schema.get('title')
      }

      const type = schema.get('type') || 'object'

      if (type === 'object') {
        models[name] = schema
        const properties = schema.get("properties")
        const additionalProperties = schema.get("additionalProperties")
        if (properties) {
          properties
            .filter((value) => {
              return (!value.get("readOnly") || includeReadOnly) &&
                (!value.get("writeOnly") || includeWriteOnly)
            })
            .mapKeys((propertyName, propertyValue) => {
              this.getAllModels(propertyName, propertyValue, models)
            })
        }
        if (additionalProperties) {
          this.getAllModels('<*>', additionalProperties, models)
        }
      } else if (type === 'array' && schema.has('items')) {
        this.getAllModels(name, schema.get('items'), models)
      }
    }
    return models
  }

  render() {
    console.log(this.props)
    let { getComponent, specSelectors, schema, required, name, displayName, includeReadOnly, includeWriteOnly } = this.props
    const ModelFlat = getComponent('ModelFlat')



    const models = this.getAllModels(name, schema)


    return <div className="model-box">
      {Object.entries(models).map(([key, value]) => {
        return <ModelFlat key={key} getComponent={getComponent} name={key} schema={value} />
      })}
    </div>
  }
}
