import axios from 'axios'

export const blogDataFetchAll = (setArticles) => {
  const ApiKey = process.env.REACT_APP_BLOG_API_KEY
  const fetchData = async () => {
    const result = await axios(
      'https://k-portfolio-blog.microcms.io/api/v1/blog',
  
      {
        headers: { 'X-API-KEY': ApiKey }
      }
    );
    setArticles(result.data.contents)
  };
  fetchData()
}

export const fetchBlogById = async (id) => {
  const ApiKey = process.env.REACT_APP_BLOG_API_KEY
  const result = await axios.get(
    `https://k-portfolio-blog.microcms.io/api/v1/blog?ids=${id}`,
    {
      headers: { 'X-API-KEY': ApiKey }
    }
  );
  return result.data;
};