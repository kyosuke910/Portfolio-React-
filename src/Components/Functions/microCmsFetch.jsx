import axios from 'axios'

const profileApiKey = process.env.REACT_APP_PROFILE_API_KEY
const blogApiKey = process.env.REACT_APP_BLOG_API_KEY
const productsApiKey = process.env.REACT_APP_PRODUCTS_API_KEY

// プロフィールデータ取得
export const fetchProfile = (setProfile) => {
  const fetchData = async() => {
    const result = await axios(
      'https://4zg26jyjab.microcms.io/api/v1/profile',
  
      {
        headers: { 'X-API-KEY': profileApiKey }
      }
    )
    setProfile(result.data.contents[0])
  }
  fetchData()
}

// プロダクトデータ全権取得
export const fetchProducts = (setProducts) => {
  const fetchData = async() => {
    const result = await axios(
      'https://portfolio-products.microcms.io/api/v1/use_technology',
  
      {
        headers: { 'X-API-KEY': productsApiKey }
      }
    )
    setProducts(result.data.contents)
  }
  fetchData()
}

// ブログデータ全件取得
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

// ブログデータ1件取得(ID指定)
export const fetchBlogById = async (id) => {
  const result = await axios.get(
    `https://k-portfolio-blog.microcms.io/api/v1/blog?ids=${id}`,
    {
      headers: { 'X-API-KEY': blogApiKey }
    }
  )
  return result.data;
}

// ブログカテゴリーデータ取得
export const blogCategoryFetchAll = (setArticles) => {
  const fetchData = async () => {
    const result = await axios(
      'https://k-portfolio-blog.microcms.io/api/v1/category',
  
      {
        headers: { 'X-API-KEY': blogApiKey }
      }
    );
    setArticles(result.data.contents)
  };
  fetchData()
}