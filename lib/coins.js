export const formatCoins = (n, digits = 1) => {
  const si = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'B' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'Q' },
    { value: 1e18, symbol: 'Qt' },
  ]
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/

  let i
  for (i = si.length - 1; i > 0; i--) {
    if (n >= si[i].value) {
      break
    }
  }

  return (n / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol
}
