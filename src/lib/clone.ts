function clone<e>(data:e):e{
  return JSON.parse(JSON.stringify(data))
}
export default clone