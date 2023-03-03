export async function getSchedules() {
  const req = await fetch(
    "https://rozklad.dmytroframe.site/api/schedules?group=ІПЗс-19",
  );
  return  req.json();
}
