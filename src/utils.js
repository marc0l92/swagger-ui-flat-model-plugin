import { sanitizeUrl as braintreeSanitizeUrl } from "@braintree/sanitize-url"
import hash from 'object-hash'

const modelsIndex = {}

export function sanitizeUrl(url) {
  if (typeof url !== "string" || url === "") {
    return ""
  }

  return braintreeSanitizeUrl(url)
}

export const getExtensions = (defObj) => defObj.filter((v, k) => /^x-/.test(k))

export const getRefName = (ref) => {
  if (ref) {
    if (ref.indexOf("#/definitions/") !== -1) {
      return ref.replace(/^.*#\/definitions\//, "")
    }
    if (ref.indexOf("#/components/schemas/") !== -1) {
      return ref.replace(/^.*#\/components\/schemas\//, "")
    }
  }
  return ''
}

export const getModelName = (schema, namespace) => {
  if (schema.get('title')) {
    return schema.get('title')
  }
  if (schema.get("$$ref")) {
    return getRefName(schema.get("$$ref"))
  }
  if (!(namespace in modelsIndex)) {
    modelsIndex[namespace] = { index: 0, models: {} }
  }
  const objHash = hash(schema.toJS())
  if (!(objHash in modelsIndex[namespace].models)) {
    modelsIndex[namespace].index++
    modelsIndex[namespace].models[objHash] = 'Model_' + modelsIndex[namespace].index
  }
  return modelsIndex[namespace].models[objHash]
}