import * as React from 'react'
import type { SwaggerUIPlugin } from "swagger-ui"

const swaggerUiFlatModelPlugin: SwaggerUIPlugin = (system: any) => {
  console.log('ciao')
  console.log(system)

  return {
    // statePlugins?: {
    //     [stateKey: string]: {
    //         actions?: Indexable | undefined;
    //         reducers?: Indexable | undefined;
    //         selectors?: Indexable | undefined;
    //         wrapActions?: Indexable | undefined;
    //         wrapSelectors?: Indexable | undefined;
    //     };
    // } | undefined;
    // components?: Indexable | undefined;
    // wrapComponents?: Indexable | undefined;
    // rootInjects?: Indexable | undefined;
    // afterLoad?: ((system: any) => any) | undefined;
    // fn?: Indexable | undefined;
    // components: {
    //   info: () => null
    // },
    // wrapComponents: {
    //   modelExample: (Original, system) => (props) => {
    //     console.log({ Original, system, props })
    //     return new Original(props)
    //   },
    // },
  }
}

window['swaggerUiFlatModelPlugin'] = swaggerUiFlatModelPlugin