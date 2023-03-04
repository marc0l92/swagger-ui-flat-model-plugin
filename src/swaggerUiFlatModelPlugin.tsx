import type { SwaggerUIPlugin } from "swagger-ui"
import ModelExample from './model-example'
import ModelFlatWrapper from './model-flat-wrapper'
import ModelFlat from './model-flat'
import ModelFlatProperty from './model-flat-property'

const swaggerUiFlatModelPlugin: SwaggerUIPlugin = (system: any) => {
  return {
    components: {
      modelExample: ModelExample,
      ModelFlatWrapper: ModelFlatWrapper,
      ModelFlat: ModelFlat,
      ModelFlatProperty: ModelFlatProperty,
    }
  }
}

window['swaggerUiFlatModelPlugin'] = swaggerUiFlatModelPlugin