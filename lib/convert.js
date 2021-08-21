const convert = (cotacao, valor) => {

  return cotacao * valor
}

const toMoney = (valor) => {

  return parseFloat(valor).toFixed(2)
}

module.exports = {
  convert,
  toMoney
}