export async function POST(request: Request) {
  const res = await request.json();
  const force = res.force as boolean | undefined;
  if (force) {
    //
    return Response.json(
      { message: "Logout success" },
      {
        status: 200,
        headers: {
          "Set-Cookie": "accesstoken=; Path=/; HttpOnly, Max-Age=0",
        },
      }
    );
  }
  // const cookieStore = cookies();
  // const accesstoken = cookieStore.get("accesstoken");
  // if (!accesstoken) {
  //   return Response.json(
  //     { message: "Not token" },
  //     {
  //       status: 401,
  //     }
  //   );
  // }
  // try {
  //  const result = await
  // } catch (error) {

  // }
}
