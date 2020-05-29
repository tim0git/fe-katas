# Northcoders Morning Katas

## Instructions

Each kata should be completed with full TDD. Every morning you should start a new kata, regardless of the progress you have made on the previous one! You will have a chance to review your progress with your katas in your weekly 1-to-1s.

Just like in backend, we are going to be using [Jest](https://jestjs.io/en/) rather than Mocha and Chai.

Jest was developed by Facebook and performs the roles of both **test runner** (like mocha) and **assertion library** (like Chai).

Once again, we have provided an example (`./example.js`) and its tests (`./__tests__/example.test.js`).
As you know, there are a few differences:

- We have used a slightly different file / folder structure for our test files.
- The test script in our `package.json` reads `jest --watch`.
  - Jest will automatically look for any files in a `spec` or `__tests__` directory, or have `*.spec.js` / `*.test.js` in their file names and run them.
  - The `--watch` flag in the `test` script means that once you run `npm test`, Jest will run all tests related to changed files (based on what is not committed). The `--watch` flag can be removed if you want to run tests on command.
- To exit Jest in the command line hit `q`.
- To run only specific tests press `p` and enter a regex pattern that your test file will match.
- There is no need to require `expect` into test files as jest provides this.
- Whereas `Chai` uses the "matchers" `toEqual` and `toEql`, `Jest` uses the equivalent `toBe` and `toEqual`. Take a look at the [Jest docs](https://jestjs.io/docs/en/using-matchers) for more matchers etc.

## Precommit Hooks & ESLint

- This repo comes with [Husky](https://github.com/typicode/husky) installed as a dev dependency. Husky will run a `"precommit"` script before letting anyone `git commit`.
- It also comes with [ESLint](https://eslint.org/) which checks that your code follows certain rules.
- You can see that the `"precommit"` script in the `./package.json` says `"jest && eslint ."`. This means that before each commit, the tests will be run by Jest and then ESLint will check your code conforms to all of its rules. If there are any errors, you will not be able to commit.

## Running Order

The running order for this block's katas is:

1. subArrSum xx
2. romanNumeralEncoder xx
3. vowelShift xx
4. rgbaModifier xx
5. findPartner xx
6. findMostRepeated xx
7. fillSquare xx
8. needleInHaystack xx refactor> no path for passing tests, pass string on second arg..
9. binarySearch xx
10. parseHexInt xx
11. simplifyDirections xx
12. justifyLine xx refactor> does this work for unhappy path?
13. csvParser 
14. multiplicationTable
15. wrongWayCow
16. getSubSquare
17. crackCode
18. checkDiagonalWinner
19. findConnectFourWinner
20. connectFourGame
21. calculateBinaryScores
22. rotateMatrix
23. runLengthEncoder
24. md5Hashing
25. md5HashingAdvanced

## Setup Instructions

1. Fork this repository to your own GitHub account because you will be pushing your own solutions to it.

2. Clone your fork of this repository to your local machine and `cd` into it:

```
$ git clone <your fork's URL>
$ cd FEND-katas
```

3. Make sure you've navigated into the folder and install all dependecies using `npm install`. You also have access to an npm script to run tests (`npm test`). Try to spend an hour each morning working on a kata. It will give you the edge when you come to do tech tests for your job applications

4. Work on the kata and commit changes as needed. When you are happy with your solution, push all your changes to your forked repo. You should push to your fork frequently but as a bare minimum please make sure it's up to date with last week's kata solutions before Monday morning each week:

```
$ git push origin master
```
