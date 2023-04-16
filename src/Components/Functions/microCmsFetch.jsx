import axios from 'axios'
import { createClient } from 'microcms-js-sdk'

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
// ブログデータアップデート
export const blogDataUpdate = async(content,goodNum) => {
  const client = createClient({
    serviceDomain: 'k-portfolio-blog',
    apiKey: blogApiKey
  })

  const contentId = content.id

  const dataToUpdate = {
    goodOfNumber: goodNum
  }

  client
  .update({
    endpoint: 'blog', // エンドポイントを指定
    contentId: contentId, // 更新するコンテンツのIDを指定
    content: dataToUpdate,
  })
  .then(response => {
    console.log('更新が成功しました:', response)
  })
  .catch(error => {
    console.error('更新に失敗しました:', error)
  })
}