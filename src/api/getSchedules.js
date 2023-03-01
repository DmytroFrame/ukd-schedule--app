export async function getSchedules() {
    const req = await fetch("http://91.241.120.109:7000/api/schedules?group=ІПЗс-19")
    // console.log(await req.json())
    // 
    return await req.json()

}