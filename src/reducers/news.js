export const initialState = {
  newsArticles: [
    'First article',
    'Second article',
    'Third article',
    'Fourth article',
    'Fifth article'
  ]
}

export function getNews(state = initialState) {
  return state
}

export default getNews;
