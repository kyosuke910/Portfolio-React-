import { SubPageHeader } from "../Components/Header/Header"
import { useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router-dom"
import { blogDataUpdate, fetchBlogById } from "../Components/Functions/microCmsFetch"
import styled from "styled-components"
import { AiOutlineLeft } from 'react-icons/ai'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { LocalOffer } from '@mui/icons-material'
import RefreshIcon from '@mui/icons-material/Refresh'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

export const BlogPost = () => {
  const idParam = window.location.search
  const blogId = idParam.slice(1)
  const [blog, setBlog] = useState()
  const [good, setGood] = useState()
  const [goodBtnPushFlag, setGoodBtnPushFlag] = useState(false)
  const location = useLocation()
  const history = useHistory()
  
  useEffect(() => {
    const getBlogData = async () => {
      const blogData = await fetchBlogById(blogId)
      setBlog(blogData.contents[0])
      setGood(blogData.contents[0].goodOfNumber)
    }
    getBlogData()
  }, [blogId, setBlog])

    // BlogListボタンを押した際の処理
    const onClickBlogList = () => {
      // ブログ一覧ページへ遷移
      history.push('/blogList')
    }
    // Topボタンを押した際の処理
    const onClickTop = () => {
      // トップページへ遷移
      history.push('/#top')
    }
    const onClickGoodBtn = async () => {
      let goodNum = null
      if(goodBtnPushFlag === true) {
        if(good > 0) {
          goodNum = good - 1
        } else {
          goodNum = 0
        }
      } else {
        goodNum = good + 1
      }
      const result = await blogDataUpdate(blog,goodNum)
      setGood(goodNum)
      setGoodBtnPushFlag(!goodBtnPushFlag)
    }

  return(
    <SMainContents>
      <SubPageHeader />
      {blog ? (
      <>
        <SContentsArea>
          <SBlogImage src={blog.image.url} alt="ブログ画像" />
            <SBlogArea>
              <SBlogTitle>{blog.title}</SBlogTitle>
              <SBlogBody dangerouslySetInnerHTML={{__html: blog.body}}></SBlogBody>
              <SDateTxt><STimeIcon />{blog.publishedAt && blog.publishedAt.substr(0,10)}</SDateTxt>
              <SDateTxt><SUpdateIcon />{blog.revisedAt && blog.revisedAt.substr(0,10)}</SDateTxt>
              <STagArea>
                  {blog.tags.map((tag) => (
                    <STag key={tag.id}><STagIcon/>{tag.tag}</STag>
                  ))}
              </STagArea>
              <SFavoriteArea onClick={onClickGoodBtn} className={goodBtnPushFlag === true && 'goodActive'}>
                <SFavoriteText className={goodBtnPushFlag === true && 'goodActiveTxt'}>いいね!</SFavoriteText>
                <SFavoriteIcon />
                <SFavoriteText className={goodBtnPushFlag === true && 'goodActiveTxt'}>{good}</SFavoriteText>
              </SFavoriteArea>
            </SBlogArea>
        </SContentsArea>
        <SButtonArea>
          <button className='subBtn leftSubBtn bgRight' onClick={onClickBlogList}>
            <span>
              <AiOutlineLeft className='leftSubBtnArrow' />Blog
            </span>
          </button>
          <button className='subBtn leftSubBtn bgRight' onClick={onClickTop}>
            <span>
              <AiOutlineLeft className='leftSubBtnArrow' />Top
            </span>
          </button>
        </SButtonArea>
      </>
    ) : (
      <div className="loadingArea">
        <span className="loader"></span>
      </div>
    )}
    </SMainContents>
  )
}
const SMainContents = styled.main`
  @media screen and (max-width: 480px) {
    margin-top: 14em;
  }
`
const SContentsArea = styled.section`
  width: 60%;
  margin: 5em auto 0 auto;
  @media screen and (max-width: 480px) {
    width: 80%;
  }
`
const SBlogArea = styled.div`
  padding: 2em 1em 4em 1em;
`
const SBlogTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 1em;
  padding-left: 0.8em;
  border-left: 6px solid #fff;
  line-height: 0.8;
  @media screen and (max-width: 480px) {
    font-size: 6em;
    margin: 1em 0;
  }
`
const SBlogImage = styled.img`
  width: 100%;
`
const SBlogBody = styled.div`
  margin-bottom: 6em;
  line-height: 1.6;
  @media screen and (max-width: 480px) {
    font-size: 3em;
    margin-bottom: 3em;
  }
`
const SDateTxt = styled.p`
  @media screen and (max-width: 480px) {
    font-size: 3em;
  }
`
const SButtonArea = styled.div`
  width: 100%;
  padding: 2em 0 8em 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const STagArea = styled.div`
  margin-top: 3em;
  display: flex;
  align-items: flex-start;
  height: 2vw;
  flex-wrap: wrap;
  font-size: 0.8em;
  color: #000;
  @media screen and (max-width: 480px) {
    height: 20vw;
    margin: 3em 0;
    font-size: 2em;
  }
`
const STag = styled.p`
  background: rgba(255,255,255,0.8);
  padding: 0.4em 1em;
  border-radius: 6px;
  margin: 0 0.4em;
  display: flex;
  align-items: center;
`
const STagIcon = styled(LocalOffer)`
  width: 0.8em !important;
  height: 0.8em !important;
  margin-right: 0.3em;
`

const SFavoriteArea = styled.button`
  display: flex;
  align-items: center;
  margin-top: 2em;
  padding: 0.1em 0.5em;
  background: #000;
  border: 1px solid #fff;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    transition: 0.3s;
  }
`
const SFavoriteIcon = styled(FavoriteIcon)`
  color: pink;
  margin-left: 0.3em;
  margin-right: 0.1em;
`
const SFavoriteText = styled.span`
  color: #fff;
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