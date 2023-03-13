import type { SwaggerUIPlugin } from "swagger-ui"
import ModelExample from './model-example'
import ModelFlatWrapper from './model-flat-wrapper'
import ModelFlat from './model-flat'
import ModelFlatProperty from './model-flat-property'

export const SwaggerUiFlatModelPlugin: SwaggerUIPlugin = (system: any) => {
  return {
    components: {
      // Override of native component modelExample
      modelExample: ModelExample,
      // New components
      ModelFlatWrapper: ModelFlatWrapper,
      ModelFlat: ModelFlat,
      ModelFlatProperty: ModelFlatProperty,
    }
  }
}

window['swaggerUiFlatModelPlugin'] = SwaggerUiFlatModelPlugin