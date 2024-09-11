export function getDateString(dateTimeString) {
  const date = new Date(dateTimeString);
  return `${date.getDate()}-${date.getMonth() < 9 ? "0" : ""}${date.getMonth() + 1}-${
    date.getFullYear()
  }`;
}
