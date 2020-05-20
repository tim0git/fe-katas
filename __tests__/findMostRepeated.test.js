const { findMostRepeated } = require('../findMostRepeated')

describe('findMostRepeated()', () => {
  it('should return null when array is empty', () => {
    expect(findMostRepeated([])).toEqual({elements: [], repeats: null})
  })
  it('should return null when element is not repeated in array', () => {
    expect(findMostRepeated(['foo', 'bar', 'hello', 'world'])).toEqual({elements: [], repeats: null})
  })
  it('should return null when element is not present in array', () => {
    expect(findMostRepeated(['foo', 'foo', 'bar', 'hello', 'world'])).toEqual({elements: ['foo'], repeats: 2})
  })
  it('should return null when element is not present in array', () => {
    expect(findMostRepeated(['foo', 'foo', 1, 2, 3, 'bar', 2, 3, 4, 'bar', 'bar', 'foo'])).toEqual({elements: ['foo', 'bar'], repeats: 3})
  })
  it('should return null when element is not present in array', () => {
    expect(findMostRepeated(['foo', 'foo', 'foo', 1, 2, 3, 'bar', 2, 3, 4, 'bar', 'bar', 'foo'])).toEqual({elements: ['foo'], repeats: 4})
  })
})

/*
##### examples

You can use these examples to start building up your test suite

```javascript
findMostRepeated([]);
  --> {elements: [], repeats: null}
```

```javascript
findMostRepeated(['foo', 'bar', 'hello', 'world']);
  --> {elements: [], repeats: null}
```

```javascript
findMostRepeated(['foo', 'foo', 'bar', 'hello', 'world']);
  --> {elements: ['foo'], repeats: 2}
```

```javascript
findMostRepeated(['foo', 'foo', 1, 2, 3, 'bar', 2, 3, 4, 'bar', 'bar', 'foo']);
  --> {elements: ['foo', 'bar'], repeats: 3}
```
*/