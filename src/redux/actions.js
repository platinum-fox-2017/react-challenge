const setCount = (payload) => {
    return {
        type: 'SET_COUNT',
        payload: payload
    }
}

const getNews = (payload) => {
    return {
        type: 'GET_NEWS',
        payload: payload
    }
}

module.exports = {
    setCount,
    getNews
}