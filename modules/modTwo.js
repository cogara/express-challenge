module.exports = {
  toCurrency: toUSD
}

function toUSD(v) {
  return v.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
}
