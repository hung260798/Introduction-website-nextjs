export const currentPosition = { href: "#home" };

export function reducer(current, action) {
  switch (action.type) {
    case "set":
      return { href: action.href };
      break;
    default:
      return { href: "#home" };
      break;
  }
}
