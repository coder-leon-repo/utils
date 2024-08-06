export const isPrimitive = (value) => {
  return (
    value === null ||
    (typeof value !== 'object' && typeof value !== 'function')
  )
}

export const isObject = (value) => {
  return !!value && value.constructor === Object
}
