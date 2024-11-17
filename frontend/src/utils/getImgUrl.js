function getImgUrl(img) {
  return new URL(`../assets/books/${img}`, import.meta.url)
}

function getNewsImgUrl(img) {
  return new URL(`../assets/news/${img}.png`, import.meta.url)
}

export { getImgUrl, getNewsImgUrl }
