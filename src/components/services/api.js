import axios from "axios";

//  axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

export const fetchArticlesWithQuery = async searchQuery => {
  const response = axios.get(`https://hn.algolia.com/api/v1/search?query=${searchQuery}`);
  return response;
};

// export default {
//   fetchArticlesWithQuery,
// };
export default fetchArticlesWithQuery;