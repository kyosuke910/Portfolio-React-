import { useHistory, useLocation } from "react-router-dom"
import { SubPageHeader } from "../Components/Header/Header"
import { useEffect, useState } from "react"
import { fetchBlogById } from "../Components/Functions/microCmsFetch"

export const BlogPost = () => {
  const idParam = window.location.search
  const blogId = idParam.slice(1)

  const [blog, setBlog] = useState()

  useEffect(() => {
    const getBlogData = async () => {
      const blogData = await fetchBlogById(blogId)
      setBlog(blogData.contents[0])
    }
    getBlogData()
  }, [blogId, setBlog])

  return(
    <main>
      <SubPageHeader />
      {blog ? (
      <>
        <h1>ブログページ</h1>
        <img src={blog.image.url} alt="" />
        <p>{blog.title}</p>
        <div dangerouslySetInnerHTML={{__html: blog.body}}></div>
        <p>{blog.publishedAt}</p>
        <p>{blog.revisedAt}</p>
      </>
    ) : (
      <div className="loadingArea">
        <span className="loader"></span>
      </div>
    )}
    </main>
  )
}