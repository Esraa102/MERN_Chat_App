export const formateTime = (time) => {
  const date = new Date(time);
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  return `${hours}:${minutes}`;
};

function padZero(number) {
  return number.toString().padStart(2, "0");
}
