export function empty(x) {
  switch (typeof x) {
    case "number":
      return x === 0
    default:
      return x.length === 0
  }
}
