import type { SwaggerUIPlugin } from "swagger-ui"
import ModelExample from './modelExample'
import ModelFlatWrapper from './modelFlatWrapper'

const swaggerUiFlatModelPlugin: SwaggerUIPlugin = (system: any) => {
  return {
    components: {
      modelExample: ModelExample,
      ModelFlatWrapper: ModelFlatWrapper,
    }
  }
}

window['swaggerUiFlatModelPlugin'] = swaggerUiFlatModelPlugin