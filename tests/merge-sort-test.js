var { expect } = require('chai');
var mergeSort = require('../scripts/merge-sort.js');
var generateArray = require('../scripts/generateArray.js')

describe('Merge Sort Fun Time', () => {

  it('should be an array', () => {
    let sortArray = generateArray(10)

    expect(sortArray).to.be.an('array')
  })

  it('should be a function', () => {
    expect(mergeSort).to.be.function
  })

  it('should only accept arrays', () => {
    expect(mergeSort('string')).to.equal('string is not an Array!')
    expect(mergeSort(5)).to.equal('5 is not an Array!')
  })

  it('should have the same elements for unsorted and sorted', () => {
    let sortArray = generateArray(5)
    let copy = Array.from(sortArray)
    let sortedArray = sortArray.sort((a, b) => {
      return a - b
    })

    expect(copy).to.be.an('array')
    expect(mergeSort(copy)).to.deep.equal(sortedArray)
  })

  it('should accept an array of any length', () => {
    let sortArray = generateArray(100)
    let copy = Array.from(sortArray)
    let sortedArray = sortArray.sort((a, b) => {
      return a - b
    })

    expect(copy).to.be.an('array')
    expect(mergeSort(copy)).to.deep.equal(sortedArray)
  })

  it('should sort an array of letters', () => {
    let sortArray = ['b', 'd', 'a', 'c']
    let copy = Array.from(sortArray)
    let sortedArray = sortArray.sort()

    expect(copy).to.be.an('array')
    expect(mergeSort(copy)).to.deep.equal(sortedArray)
  })

  it('should sort positive numbers', () => {
    let sortArray = [5, 10, 2, 4, 55, 3]
    let copy = Array.from(sortArray)
    let sortedArray = sortArray.sort((a, b) => {
      return a - b
    })

    expect(copy).to.be.an('array')
    expect(mergeSort(copy)).to.deep.equal(sortedArray)
  })

  it('should sort negative numbers', () => {
    let sortArray = [-5, -10, -2, -4, -55, -3]
    let copy = Array.from(sortArray)
    let sortedArray = sortArray.sort((a, b) => {
      return a - b
    })

    expect(copy).to.be.an('array')
    expect(mergeSort(copy)).to.deep.equal(sortedArray)
  })

  it('should sort positive and negative numbers', () => {
    let sortArray = [5, -10, 2, -4, 55, 3]
    let copy = Array.from(sortArray)
    let sortedArray = sortArray.sort((a, b) => {
      return a - b
    })

    expect(copy).to.be.an('array')
    expect(mergeSort(copy)).to.deep.equal(sortedArray)
  })
})
