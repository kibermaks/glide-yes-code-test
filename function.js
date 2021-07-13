window.function = function (value) {
  if (value.value === undefined) return undefined;
  return new Date((new Date(value.value)).getTime() + 24 * 60 * 60 * 1000);
}
