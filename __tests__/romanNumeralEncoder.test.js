const { romanNumeralEncoder } = require('../romanNumeralEncoder')

describe('romanNumeralEncoder()', () => {
  it('return I when passed 1', () => {
    expect(romanNumeralEncoder(1)).toBe("I")
  })
  it('return I when passed 1', () => {
    expect(romanNumeralEncoder(2)).toBe("II")
  })
  it('return I when passed 1', () => {
    expect(romanNumeralEncoder(10)).toBe("X")
  })
  it('return I when passed 1', () => {
    expect(romanNumeralEncoder(17)).toBe("XVII")
  })
  it('return I when passed 1', () => {
    expect(romanNumeralEncoder(60)).toBe("LX")
  })
  it('return I when passed 1', () => {
    expect(romanNumeralEncoder(75)).toBe("LXXV")
  })
  it('return I when passed 1', () => {
    expect(romanNumeralEncoder(91)).toBe("XCI")
  })
})
