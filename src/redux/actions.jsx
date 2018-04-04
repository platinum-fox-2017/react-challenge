const getData = (payload) => {
  return {
    type: "GET_GIF_DATA",
    payload
  }
}

const getNewsData = (payload) => {
  return {
    type: "GET_NEWS_DATA",
    payload
  }
}

export { getData, getNewsData }