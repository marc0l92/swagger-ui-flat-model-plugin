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

  getAllModels(namespace, schema, options, models = {}) {
    if (schema) {
      const type = schema.get('type') || 'object'

      if (type === 'object') {
        const modelName = getModelName(schema, namespace)
        models[modelName] = schema
        const properties = schema.get("properties")
        const additionalProperties = schema.get("additionalProperties")
        if (properties) {
          properties
            .filter((value) => {
              return (!value.get("readOnly") || options.includeReadOnly) &&
                (!value.get("writeOnly") || options.includeWriteOnly)
            })
            .mapKeys((propertyName, propertyValue) => {
              this.getAllModels(namespace, propertyValue, options, models)
            })
        }
        if (additionalProperties) {
          this.getAllModels(namespace, additionalProperties, options, models)
        }
      } else if (type === 'array' && schema.get('items')) {
        this.getAllModels(namespace, schema.get('items'), options, models)
      }
    }
    return models
  }

  render() {
    let { namespace, schema, getComponent, getConfigs, specSelectors, includeReadOnly, includeWriteOnly } = this.props
    const ModelFlat = getComponent('ModelFlat')
    const ModelFlatProperty = getComponent('ModelFlatProperty')

    const type = schema.get('type') || 'object'
    const models = this.getAllModels(namespace, schema, { includeReadOnly, includeWriteOnly })

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
      {
        type === 'object' ? null :
          <ModelFlatProperty
            namespace={namespace}
            getComponent={getComponent}
            getConfigs={getConfigs}
            schema={schema}
            name={""} />
      }
    </div>
  }
}
