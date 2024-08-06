import { isPrimitive } from './isPrimitive'

// 深拷贝
export function cloneDeep(source) {
  // 基本数据类型不需要深拷贝
  if (isPrimitive(source)) return source

  // 使用WeakMap处理循环引用
  const cache = new WeakMap()

  // 检查是否已经复制过
  if (cache.has(source)) {
    return cache.get(source)
  }

  let target

  // 判断类型创建新的副本
  if (Array.isArray(source)) {
    target = []
  } else if (source instanceof Date) {
    target = new Date(source.getTime())
  } else if (source instanceof RegExp) {
    target = new RegExp(source)
  } else if (source instanceof Map) {
    target = new Map()
    source.forEach((value, key) => {
      target.set(key, cloneDeep(value))
    })
  } else if (source instanceof Set) {
    target = new Set()
    source.forEach((value, key) => {
      target.add(key, cloneDeep(value))
    })
  } else {
    target = {}
  }

  // 缓存数据
  cache.set(source, target)

  // 拷贝
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      target[key] = cloneDeep(source[key])
    }
  }

  return target
}
