import React from "react"
import ImmutablePureComponent from "react-immutable-pure-component"
import ImPropTypes from "react-immutable-proptypes"
import PropTypes from "prop-types"
import { getModelName } from './utils'

export default class ModelFlatWrapper extends ImmutablePureComponent {
  static propTypes = {
    namespace: PropTypes.string.isRequired,
    schema: ImPropTypes.map.isRequired,
    getComponent: PropTypes.func.isRequired,
    getConfigs: PropTypes.func.isRequired,
    specSelectors: PropTypes.object.isRequired,
    includeReadOnly: PropTypes.bool,
    includeWriteOnly: PropTypes.bool,
  }

  // TODO: allOf, anyOf, not, $ref
  getAllModels = (name, schema, options, models = {}) => {
    if (schema) {
      name = getModelName(schema) || name

      const type = schema.get('type') || 'object'

      if (type === 'object') {
        models[name] = schema
        const properties = schema.get("properties")
        const additionalProperties = schema.get("additionalProperties")
        if (properties) {
          properties
            .filter((value) => {
              return (!value.get("readOnly") || options.includeReadOnly) &&
                (!value.get("writeOnly") || options.includeWriteOnly)
            })
            .mapKeys((propertyName, propertyValue) => {
              this.getAllModels(propertyName, propertyValue, options, models)
            })
        }
        if (additionalProperties) {
          this.getAllModels('<*>', additionalProperties, options, models) // TODO: there should be no models with <*> name
        }
      } else if (type === 'array' && schema.get('items')) {
        this.getAllModels(name, schema.get('items'), options, models)
      }
    }
    return models
  }
  // TODO: support primitive type at root or array at root

  render() {
    let { namespace, schema, getComponent, getConfigs, specSelectors, includeReadOnly, includeWriteOnly } = this.props
    const ModelFlat = getComponent('ModelFlat')

    const models = this.getAllModels(null, schema, { includeReadOnly, includeWriteOnly })

    return <div className="model-box schema-flat">
      {Object.entries(models).map(([key, value]) => {
        return <ModelFlat
          namespace={namespace}
          key={key}
          name={key}
          schema={value}
          getComponent={getComponent}
          getConfigs={getConfigs}
          specSelectors={specSelectors}
          includeReadOnly={includeReadOnly}
          includeWriteOnly={includeWriteOnly} />
      })}
    </div>
  }
}
