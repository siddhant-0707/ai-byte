export async function GET(request: Request) {
  const res = await fetch('http://localhost:8080/')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res;
}
