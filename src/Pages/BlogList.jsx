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
import RefreshIcon from '@mui/icons-material/Refresh'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

export const BlogList = () => {
  const history = useHistory()
  const [blogs, setBlogs] = useState([])
  const [category, setCategory] = useState([])
  const [archive, setArchive] = useState([])
  useEffect(() => {
    blogDataFetchAll(setBlogs)
    blogCategoryFetchAll(setCategory)
  },[])

  useEffect(() => {
    const publishedAts = blogs.map((blog) => blog.publishedAt.substr(0,7))
    // 重複を削除する
    const uniquePublishedAts = [...new Set(publishedAts)]
    setArchive(uniquePublishedAts)
  },[blogs])
  
  const theme = createTheme();

  const onClickLink = (data) => {
    window.location.href = '/blogPost?' + data.id
  }

  // Topボタンを押した際の処理
  const onClickTop = () => {
    // トップページへ遷移
    history.push('/#top')
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
          <SImg src="/images/blog/blogListTop.png" alt="ブログ一覧ページトップ画像" />
          <STitle className="subContentsTitle">Blog</STitle>
        </SImgArea>
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
                      <SHeadLine>{blog.headline}</SHeadLine>
                      <STagArea>
                        {blog.tags.map((tag) => (
                          <STag key={tag.id}><STagIcon/>{tag.tag}</STag>
                        ))}
                      </STagArea>
                      <SDateArea>
                        <SDateText><STimeIcon />{blog.publishedAt && blog.publishedAt.substr(0,10)}</SDateText>
                        <SDateText><SUpdateIcon />{blog.revisedAt && blog.revisedAt.substr(0,10)}</SDateText>
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
  @media screen and (max-width: 480px) {
    top: 82%;
    left: 5%;
    font-size: 8em;
  }
`
const SMainArea = styledComponents.main`
  width: 100%;
  margin-top: 5em;
  @media screen and (max-width: 480px) {
    margin-top: 14em;
  }
`
const SImgArea = styledComponents.div`
  position: relative;
`
const SImg = styledComponents.img`
  width: 100%;
  height: 25vw;
  object-fit: cover;
  @media screen and (max-width: 480px) {
    height: 40vw;
  }
`
const SBlogListArea = styledComponents.section`
  width: 80%;
  margin: 8em  auto auto auto;
  display: flex;
  @media screen and (max-width: 480px) {
    width: 90%;
    margin: 14em  auto auto auto;
  }
`
const SBlogImg = styledComponents.img`
  width: 100%;
  height: 15vw;
  object-fit: cover;
  @media screen and (max-width: 480px) {
    height: 40vw;
  }
`
const STextArea = styledComponents.div`
  width: 100%;
  padding: 1em;
  height: 20vw;
  position: relative;
  @media screen and (max-width: 480px) {
    height: 40vw;
  }
`
const SBlogTitle = styledComponents.h2`
  font-size: 1.5em;
  @media screen and (max-width: 480px) {
    font-size: 4em;
  }
`
const SHeadLine = styledComponents.p`
@media screen and (max-width: 480px) {
  font-size: 3em;
  padding-left: 0.5em;
}
`
const SDateArea = styledComponents.div`
  position: absolute;
  bottom : 10%;
`
const SDateText = styledComponents.p`
  font-size: 0.8em;
  @media screen and (max-width: 480px) {
    font-size: 2em;
  }
`
const STagArea = styledComponents.div`
  margin-top: 1em;
  display: flex;
  align-items: flex-start;
  height: 4vw;
  flex-wrap: wrap;
  font-size: 0.8em;
  @media screen and (max-width: 480px) {
    height: 14vw;
    font-size: 2em;
  }
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
  @media screen and (max-width: 480px) {
    width: 60%;
    grid-template-columns: repeat(1, 1fr);
    gap: 8em;
  }
`
const SSidebarArea = styledComponents.aside`
  width: 30%;
  padding-left: 5em;
  @media screen and (max-width: 480px) {
    width: 40%;
  }
`
const SSidebarLabel = styledComponents.h1`
  font-size: 1.5em;
  color: #fff;
  border-left: 5px solid #fff;
  line-height: 0.8;
  padding-left: 0.5em;
  margin-bottom: 0.5em;
  @media screen and (max-width: 480px) {
    font-size: 5em;
    border-left: 2px solid #fff;
  }
`
const SArchiveLabel = styledComponents(SSidebarLabel)`
  margin-top: 2em;
`
const SSidebarContents = styledComponents.li`
  border-top: 1px solid #fff;
  padding: 0.5em;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
  @media screen and (max-width: 480px) {
    font-size: 3em;
  }
  &:last-child {
    border-bottom: 1px solid #fff;
  }
`
const SButtonArea = styledComponents.div`
  width: 100%;
  text-align: center;
  padding: 4em 0 6em 0;
`
const STimeIcon = styled(AccessTimeIcon)`
  vertical-align: bottom;
  font-size: 1.4em;
  margin-right: 0.3em;
`
const SUpdateIcon = styled(RefreshIcon)`
  vertical-align: bottom;
  font-size: 1.4em;
  margin-right: 0.3em;
`