# Fill Square

The function fill square should take an array of arrays and should complete these arrays so that they are a square matrix with the value `null` standing in for any blank positions in the matrix. If extra sub-arrays are needed to complete the square, these should be added at the bottom of the matrix.

## Examples

Here, for example, to complete a 3 \* 3 square we need to fill up the last two sub arrays with `null`.

```javascript
const square = [[1, 2, 3], [1, 2], [1]]

fillSquare(square)
/*
  [
    [1, 2, 3],
    [1, 2, null],
    [1, null, null]
  ]
*/
```

In this example, we will need to create a 6 \* 6 square since the longest row is 6 long, so we also need additional arrays at the bottom of the matrix.

```javascript
const square = [[1, 2, 3], [1, 2, 3, 4, 5, 6], [1]]

fillSquare(square)
/*
  [
  ]
    [1, 2, 3, null, null, null],
    [1, 2, 3, 4, 5, 6],
    [1, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null]
*/
```

```javascript
const square = [[1, 2, 3], [1, 2, 3], [1], [], [1, 2, 3], [1]]

fillSquare(square)
/*
  [
    [1, 2, 3, null, null, null],
    [1, 2, 3, null, null, null],
    [1, null, null, null, null, null],
    [null, null, null, null, null, null],
    [1, 2, 3, null, null, null],
    [1, null, null, null, null, null]
  ]
*/
```
