window.function = function (value, postfix, prefix, showEmpty, showThousands, fixedNumbers, roundMode, noSpaces, emptySubstitution) {


  showEmpty = showEmpty.value ?? false
  value = value.value

  if (!showEmpty && (value == null || value == 0))
  {
    emptySubstitution = emptySubstitution.value ?? ""
    return emptySubstitution
  } 

  showThousands = showThousands.value ?? false

  const formatNumber = (v) => {
    if (roundMode.value != null)
    {
      if (roundMode.value < 0){
        v = Math.floor(v)
      }
      else if (roundMode.value > 0){
        v = Math.ceil(v)
      }
      else
      {
        v = Math.round(v)
      }
    }
    if (fixedNumbers.value != null) {
      v = v.toFixed(fixedNumbers.value)
    }
    v = String(v)
    v = v.replace('.', ',')
    if (showThousands) {
      v = v.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
    }
    return v
  }
  noSpaces = noSpaces.value ?? false
  let result = formatNumber(value)
  if (postfix.value) {
    result = result + (noSpaces ? "" : " ") + postfix.value
  }
  if (prefix.value) {
    result = prefix.value + (noSpaces ? "" : " ") + result
  }
  return result
}
