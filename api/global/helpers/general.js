import { get } from 'lodash'
import moment from 'moment'

const sleep = time => new Promise(resolve => setTimeout(resolve, time))
const isArray = arr => Array.isArray(arr)
const isObject = obj => (obj && typeof obj === 'object' && !Array.isArray(obj)) || false
const ensureArray = (arr, defaultValue) => isArray(arr) ? arr : isArray(defaultValue) ? defaultValue : []
const ensureObject = (obj, defaultValue) => isObject(obj) ? obj : isObject(defaultValue) ? defaultValue : {}

const uppercase = string => {
  if (typeof string === 'string') {
    return string.toUpperCase()
  }
  return String(string)
}

const sortCallBack = (keyString, asc = true, type, getValueFunction) => {
  return function (item1, item2) {
    let compareValue1 = item1
    let compareValue2 = item2
    if (keyString) {
      compareValue1 = get(compareValue1, keyString)
      compareValue2 = get(compareValue2, keyString)
    }
    if (typeof getValueFunction === 'function') {
      compareValue1 = getValueFunction(compareValue1)
      compareValue2 = getValueFunction(compareValue2)
    }

    switch (String(type).toLowerCase()) {
      case 'number':
        compareValue1 = Number(compareValue1) || 0
        compareValue2 = Number(compareValue2) || 0
        break
      case 'string':
        compareValue1 = compareValue1 ? uppercase(compareValue1) : ''
        compareValue2 = compareValue2 ? uppercase(compareValue2) : ''
        break
      case 'date':
        if (!compareValue1 && !compareValue2) {
          return 0
        } else if (!compareValue1 && compareValue2) {
          return -1 * (asc ? 1 : -1)
        } else if (compareValue1 && !compareValue2) {
          return (asc ? 1 : -1)
        }
        compareValue1 = moment.utc(compareValue1)
        compareValue2 = moment.utc(compareValue2)
        return (compareValue1.isAfter(compareValue2) ? 1 : -1) * (asc ? 1 : -1)
      case 'boolean':
        compareValue1 = typeof compareValue1 === 'boolean' ? String(compareValue1) : ''
        compareValue2 = typeof compareValue2 === 'boolean' ? String(compareValue2) : ''
        return (compareValue1 > compareValue2 ? 1 : -1) * (asc ? 1 : -1)
    }
    return (compareValue1 > compareValue2 ? 1 : -1) * (asc ? 1 : -1)
  }
}

export {
  sleep,
  isArray,
  isObject,
  ensureArray,
  ensureObject,
  sortCallBack
}