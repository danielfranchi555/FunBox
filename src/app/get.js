export const getData = async ()=>{
  const resp = await fetch("https://opentdb.com/api.php?amount=10")
  const data = await resp.json()
  return data
}