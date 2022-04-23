export async function getFeed() {
  let results = fetch("http://catstagram.lofty.codes/api/posts/", { timeout: 5000 })
    .then(async (response) => {
      const feedResults = await response.json()
      return feedResults
    })
    .catch((error) => {
      return error
    })

  return results
}