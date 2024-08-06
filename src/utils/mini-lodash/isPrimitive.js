// 判断是否是原始值
export function isPrimitive(value) {
  return (
    value === null ||
    (typeof value !== 'object' && typeof value !== 'function')
  )
}
