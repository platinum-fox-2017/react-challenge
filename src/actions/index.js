const fetchAllArticles = (articles) => {
  return {
    type: "GET_DATA",
    payload : articles
  }
}

export {fetchAllArticles}