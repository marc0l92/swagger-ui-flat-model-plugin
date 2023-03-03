import type { SwaggerUIPlugin } from "swagger-ui"
import ModelExample from './modelExample'
import ModelFlat from './modelFlat'

const swaggerUiFlatModelPlugin: SwaggerUIPlugin = (system: any) => {
  return {
    components: {
      modelExample: ModelExample,
      ModelFlat: ModelFlat,
    }
  }
}

window['swaggerUiFlatModelPlugin'] = swaggerUiFlatModelPlugin