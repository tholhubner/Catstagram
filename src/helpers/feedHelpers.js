import moment from "moment"

// makes a fetch request to get the current feed from the LOFTY api
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

// adds a comment to the existing array and returns it
export function addComment(comments, newComment) {
  const newArray = comments
  const commentLength = comments.length
  const newPK = Number(comments[commentLength - 1]) + 1
  newArray.push({ text: newComment, timestamp_created: moment().toString(), pk: newPK })
  return newArray
}