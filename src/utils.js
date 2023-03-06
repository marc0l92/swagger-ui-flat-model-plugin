import { sanitizeUrl as braintreeSanitizeUrl } from "@braintree/sanitize-url"

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

export const getModelName = (schema) => {
  let name = ''
  if (schema.get("$$ref")) {
    name = getRefName(schema.get("$$ref"))
  }
  if (schema.get('title')) {
    name = schema.get('title')
  }
  return name
}