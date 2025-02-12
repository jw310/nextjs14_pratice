export async function POST(request) {
  // NextResponse extends the Web Response API with additional convenience methods.
  // let response = NextResponse.next();
  // console.log(request);
  // body info
  const RequestBody = await request.json();

  console.log(RequestBody);

  let data = {
    ...RequestBody,
    message: 'POST',
  };

  // console.log(response);

  return Response.json({ data });
}
