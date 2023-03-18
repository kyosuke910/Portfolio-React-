import axios from 'axios'

const profileApiKey = process.env.REACT_APP_PROFILE_API_KEY
const blogApiKey = process.env.REACT_APP_BLOG_API_KEY

export const fetchProfile = (setProfile) => {
  const fetchData = async() => {
    const result = await axios(
      'https://4zg26jyjab.microcms.io/api/v1/profile',
  
      {
        headers: { 'X-API-KEY': profileApiKey }
      }
    )
    setProfile(result.data.contents[0])
  };
  fetchData()
}

export const blogDataFetchAll = (setArticles) => {
  const fetchData = async () => {
    const result = await axios(
      'https://k-portfolio-blog.microcms.io/api/v1/blog',
  
      {
        headers: { 'X-API-KEY': blogApiKey }
      }
    );
    setArticles(result.data.contents)
  };
  fetchData()
}

export const fetchBlogById = async (id) => {
  const result = await axios.get(
    `https://k-portfolio-blog.microcms.io/api/v1/blog?ids=${id}`,
    {
      headers: { 'X-API-KEY': blogApiKey }
    }
  );
  return result.data;
};