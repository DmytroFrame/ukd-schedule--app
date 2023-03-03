export async function getSchedules() {
  const req = await fetch(
    "https://api.dmytroframe.site/ukd/schedules?group=ІПЗс-19",
  );
  return  req.json();
}
