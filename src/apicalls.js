export function getNewsData () {
  return fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=5cdfa8b4de0a46f1b13b9f49511ffb8f')
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status)
    } else {
      return response.json()
    }
  })
}