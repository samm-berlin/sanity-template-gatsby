/**
 * Formats price so it's always X.XX
 *
 * @param {string} amount Decimal value from Shopify API
 */
export const getSanitizedPrice = (amount) => {
  const priceParts = amount.split('.')
  const sanitizedPriceParts = [priceParts[0]]

  // make sure cents are always displayed with 2 digits
  if (priceParts.length === 1) {
    sanitizedPriceParts.push('00')
  } else if (priceParts[1].length === 1) {
    sanitizedPriceParts.push(`${priceParts[1]}0`)
  } else {
    sanitizedPriceParts.push(priceParts[1])
  }

  return sanitizedPriceParts.join('.')
}

/**
 * Formats prices with amount value from Shopify
 *
 * @param {string} amount Decimal value from Shopify API
 */
export const getPriceString = (amount) => {
  const price = getSanitizedPrice(amount)

  return `EUR ${price}`
}
