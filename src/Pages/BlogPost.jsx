import { useHistory, useLocation } from "react-router-dom"
import { SubPageHeader } from "../Components/Header/Header"
import { useEffect, useState } from "react"
import { fetchBlogById } from "../Components/Functions/microCmsFetch"

export const BlogPost = () => {
  const blogId = window.location.search
  const [blog, setBlog] = useState()

  useEffect(() => {
    const blogData = fetchBlogById(blogId)
    console.log(blogData)
  },[])

  return(
    <main>
      <SubPageHeader />
      <h1>ブログページ</h1>
      <p>{blog}</p>
    </main>
  )
}