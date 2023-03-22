import React, { useState, useEffect } from 'react'
import styledComponents from "styled-components"
import { SubPageHeader } from "../Components/Header/Header"
import { useHistory } from 'react-router-dom'
import { blogCategoryFetchAll, blogDataFetchAll } from '../Components/Functions/microCmsFetch'
import Paper from '@mui/material/Paper'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import Box from '@mui/material/Box'
import { LocalOffer } from '@mui/icons-material'
import { createTheme } from '@mui/material/styles'
import { styled } from '@mui/material/styles'
import { AiOutlineLeft } from 'react-icons/ai'

export const BlogCategory = () => {
  const idParam = window.location.search
  const categoryName = idParam.slice(1)

  const history = useHistory()
  const [blogs, setBlogs] = useState([])
  const [category, setCategory] = useState([])
  const [archive, setArchive] = useState([])
  const [categoryTitle, setCategoryTitle] = useState()

  useEffect(() => {
    blogDataFetchAll((data) => {
      const filterBlogs = data.filter((value) => {
        return value.category.categoryParam === categoryName
      })
      setBlogs(filterBlogs)
    })
    blogCategoryFetchAll(setCategory)
  }, [categoryName])

  useEffect(() => {
    const publishedAts = blogs.map((blog) => blog.publishedAt.substr(0,7))
    const uniquePublishedAts = [...new Set(publishedAts)]
    setArchive(uniquePublishedAts)
  },[blogs])
  
  useEffect(() => {
    const filteredCategories = category.filter((c) => c.categoryParam === categoryName);
    setCategoryTitle(filteredCategories[0]?.categoryName || "");
  }, [category, categoryName]);

  const theme = createTheme();

  const onClickLink = (data) => {
    window.location.href = '/blogPost?' + data.id
  }

  // Topボタンを押した際の処理
  const onClickTop = () => {
    // トップページへ遷移
    history.push('/')
  }

  // カテゴリーを選択した際の処理
  const onClickCategory = (data) => {
    window.location.href = '/blogCategory?' + data.categoryParam
  }

  // アーカイブを選択した際の処理
  const onClickArchive = (data) => {
    window.location.href = '/blogArchive?' + data
  }

  return(
    <>
      <SubPageHeader />
      <SMainArea>
        <SImgArea>
          <SImg src="/images/blog/blogListTop.png" alt="カテゴリーページトップ画像" />
          <STitle className="subContentsTitle">Category</STitle>
        </SImgArea>
        <SCategoryTitle>{categoryTitle ? categoryTitle : ''}</SCategoryTitle>
        <SBlogListArea>
          <SContentArea>
          {blogs.map(blog => (
            <SBlogLink key={blog.id} onClick={() => {onClickLink(blog)}}>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <StyledBox>
                  <Paper elevation={3}>
                    <SBlogImg src={blog.image.url} alt="Image" />
                    <STextArea>
                      <SBlogTitle>{blog.title}</SBlogTitle>
                      <p>{blog.headline}</p>
                      <STagArea>
                        {blog.tags.map((tag) => (
                          <STag key={tag.id}><STagIcon/>{tag.tag}</STag>
                        ))}
                      </STagArea>
                      <SDateArea>
                        <SDateText>投稿日 : {blog.publishedAt && blog.publishedAt.substr(0,10)}</SDateText>
                        <SDateText>更新日 : {blog.revisedAt && blog.revisedAt.substr(0,10)}</SDateText>
                      </SDateArea>
                    </STextArea>
                  </Paper>
                </StyledBox>
              </ThemeProvider>
            </SBlogLink>
          ))}
          </SContentArea>
          <SSidebarArea>
              <SSidebarLabel>Category</SSidebarLabel>
              <ul>
                {category.sort((a, b) => a.sortNumber - b.sortNumber).map((value) => (
                  <SSidebarContents onClick={() => {onClickCategory(value)}} key={value.id}>{value.categoryName}</SSidebarContents>
                ))}
              </ul>
              <SArchiveLabel>Archive</SArchiveLabel>
              <ul>
              {archive ? archive.map((value, index) => (
                <SSidebarContents onClick={() => {onClickArchive(value)}} key={index}>
                  {`${value.substr(0,4)}年${value.substr(6,1)}月`}
                </SSidebarContents>
              )) : ''}
              </ul>
          </SSidebarArea>
        </SBlogListArea>
        <SButtonArea>
          <button className='subBtn leftSubBtn bgRight' onClick={onClickTop}>
              <span>
                <AiOutlineLeft className='leftSubBtnArrow' />Top
              </span>
          </button>
        </SButtonArea>
      </SMainArea>
    </>
  )
}
const StyledBox = styled(Box)({
  backgroundColor: 'white',
  boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2)',
  margin: '0 1em',
  borderRadius: '15px',
})
const STitle = styledComponents.h1`
  top: 75%;
  left: 11%;
`
const SMainArea = styledComponents.main`
  width: 100%;
  margin-top: 5em;
`
const SImgArea = styledComponents.div`
  position: relative;
`
const SImg = styledComponents.img`
  width: 100%;
  height: 25vw;
  object-fit: cover;
`
const SBlogListArea = styledComponents.section`
  width: 80%;
  margin: 3em  auto auto auto;
  display: flex;
`
const SBlogImg = styledComponents.img`
  width: 100%;
  height: 15vw;
  object-fit: cover;
`
const STextArea = styledComponents.div`
  width: 100%;
  padding: 1em;
  height: 20vw;
  position: relative;
`
const SBlogTitle = styledComponents.h2`
  font-size: 1.5em;
`
const SDateArea = styledComponents.div`
  position: absolute;
  bottom : 10%;
`
const SDateText = styledComponents.p`
  font-size: 0.8em;
`
const STagArea = styledComponents.div`
  margin-top: 1em;
  display: flex;
  align-items: flex-start;
  height: 4vw;
  flex-wrap: wrap;
  font-size: 0.8em;
`
const STag = styledComponents.p`
  background: rgba(0,0,0,0.1);
  padding: 0.2em 0.5em;
  border-radius: 6px;
  margin: 0 0.4em;
  padding-right: 0.5em;
  display: flex;
  align-items: center;
`
const STagIcon = styledComponents(LocalOffer)`
  width: 0.8em !important;
  height: 0.8em !important;
  margin-right: 0.3em;
`
const SBlogLink = styledComponents.div`
  cursor: pointer;
`
const SContentArea = styledComponents.article`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2em;
`
const SSidebarArea = styledComponents.aside`
  width: 30%;
  padding-left: 5em;
`
const SSidebarLabel = styledComponents.h1`
  font-size: 1.5em;
  color: #fff;
  border-left: 5px solid #fff;
  line-height: 0.8;
  padding-left: 0.5em;
  margin-bottom: 0.5em;
`
const SArchiveLabel = styledComponents(SSidebarLabel)`
  margin-top: 2em;
`
const SSidebarContents = styledComponents.li`
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  padding: 0.5em;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`
const SButtonArea = styledComponents.div`
  width: 100%;
  text-align: center;
  padding: 4em 0 6em 0;
`
const SCategoryTitle = styledComponents.p`
  width: 79%;
  margin: 3em  auto auto auto;
  font-size: 2em;
  border-left: 8px solid #fff;
  line-height: 0.8;
  padding-left: 0.5em;
`