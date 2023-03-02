import { mockSchedules } from "./mockSchedules";

export async function getSchedules() {
  try {
    const req = await fetch(
      "https://tophot2022.online:7000/api/schedules?group=ІПЗс-19",
    );
    return await req.json();
  } catch (error) {
    return mockSchedules
  }
  // console.log(await req.json())
  //
}
