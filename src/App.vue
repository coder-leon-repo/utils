<template>
  <div class="app"></div>
</template>

<script setup lang="ts">
import { cloneDeep } from './utils/mini-lodash'

/**
const obj = {
  number: 123,
  string: 'kdsaljfla',
  boolean: true,
  undefined: undefined,
  null: null,
  array: [1, 2, 3],
  obj: {
    a: 1,
    b: 2
  },
  Map: new Map([
    ['1', 32],
    ['2', 3]
  ])
}

const result = cloneDeep(obj)

console.log('obj:', obj)
console.log('newObj:', result)
console.log(result === obj)
 */
const obj = {
  name: 'Leon',
  age: 18
}

function fn() {
  console.log('fn~')
}

const foo = () => {
  return 'dsaf'
}
</script>

<style scoped></style>
