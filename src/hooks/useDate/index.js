export default function useDate() {
  const date = new Date();

  const formatedHours = `${date.getDate()}/${String(
    date.getMonth() + 1
  ).padStart("2", "0")}/${date.getFullYear()}`;
  const formatedDate = `${String(date.getHours()).padStart("2", "0")}:${String(
    date.getMinutes()
  ).padStart("2", "0")}:${String(date.getSeconds()).padStart("2", "0")}`;
  return {
    formatedHours,
    formatedDate,
  };
}
