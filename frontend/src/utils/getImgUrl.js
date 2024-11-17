function getImgUrl(img) {
  return new URL(`../assets/books/${img}`, import.meta.url)
}

function getNewsImgUrl(img) {
  return new URL(`../assets/news/${img}`, import.meta.url)
}

export { getImgUrl, getNewsImgUrl }
