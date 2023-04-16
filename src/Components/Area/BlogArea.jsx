import React, { useState, useEffect } from 'react'
import { blogDataFetchAll } from '../Functions/microCmsFetch'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material/styles'
import styledComponents from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { LocalOffer } from '@mui/icons-material';
import { useHistory } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import RefreshIcon from '@mui/icons-material/Refresh'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

export const BlogArea = () => {
  const history = useHistory()

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  })

  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    blogDataFetchAll(setBlogs)
  },[])

  const theme = createTheme();
  
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="arrow arrow--left" onClick={onClick}>
        <AiOutlineLeft />
      </div>
    );
  };
  
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="arrow arrow--right" onClick={onClick}>
        <AiOutlineRight />
      </div>
    );
  };
  
  const settings = {
    infinite: true, // スライドのループ有無
    speed: 500, // スライドのスピード
    slidesToShow: 3, // 一度に表示するスライド数
    slidesToScroll: 1, // 一度にスクロールするスライド数
    autoplay: true, // autoplayをするか
    autoplaySpeed: 3000, // autoplayの速度
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768, // スマートフォンのビューポートの幅
        settings: {
          slidesToShow: 1, // 一度に表示するスライド数
          slidesToScroll: 1, // 一度にスクロールするスライド数
          autoplay: false, // autoplayをするか
        },
      },
    ],
  }
  
  const onClickLink = (data) => {
    window.location.href = '/blogPost?' + data.id
  }

  const onClickMoreBtn = () => {
    history.push('/blogList')
  }

  return (
    <SBlogMain className='section'>
      <SContentTitle className={`contentTitle ${inView ? 'titleDelay fadeUp' : ''}`}>Blog</SContentTitle>
      <SBlogContents className={`cover-side ${inView ? 'inview' : ''}`} ref={ref}>
        <Slider {...settings}>
          {blogs.map(blog => (
            <SBlogLink key={blog.id} onClick={() => {onClickLink(blog)}}>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <StyledBox>
                  <Paper elevation={3}>
                    <SBlogImg src={blog.image.url} alt="Image" />
                    <STextArea>
                      <SBlogTitle>{blog.title}</SBlogTitle>
                      <SHeadline>{blog.headline}</SHeadline>
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
        </Slider>
      </SBlogContents>
      <SMoreBtn onClick={onClickMoreBtn} className={inView ? 'delay fadeUp mainBtn' : 'dpNone'}>Lean More</SMoreBtn>
  </SBlogMain>
  )
}

const StyledBox = styled(Box)({
  backgroundColor: 'white',
  boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2)',
  margin: '0 1em',
  borderRadius: '15px',
})

const SBlogMain = styledComponents.section`
  width: 100vw;
  @media screen and (max-width: 480px) {
    padding-top: 35vw;
  }
`
const SContentTitle = styledComponents.h2`
  top: 12%;
  left: 6%;
  @media screen and (max-width: 480px) {
    top: 15%;
    left: 13%;
  }
`
const SBlogContents = styledComponents.div`
  background: #707070;
  width: 80%;
  height: 83%;
  position: absolute;
  top: 13%;
  left: 50%;
  transform: translateX(-50%);
  @media screen and (max-width: 480px) {
    top: 30%;
    height: 65%;
  }
`
const SBlogImg = styledComponents.img`
  width: 100%;
  height: 12vw;
  object-fit: cover;
  @media screen and (max-width: 480px) {
    height: 35vw;
  }
`
const STextArea = styledComponents.div`
  width: 100%;
  padding: 1em;
  height: 15vw;
  @media screen and (max-width: 480px) {
    height: 35vw;
  }
`
const SBlogTitle = styledComponents.h2`
  font-size: 1.5em;
  @media screen and (max-width: 480px) {
    font-size: 3em;
  }
`
const SDateArea = styledComponents.div`
  position: absolute;
  bottom : 2%;
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
  @media screen and (max-width: 480px) {
    width: 0.5em !important;
  height: 0.5em !important;
  }
`
const SBlogLink = styledComponents.div`
  cursor: pointer;
`
const SMoreBtn = styledComponents.button`
  position: absolute;
  bottom: 6vh;
  right: 5%;
  @media screen and (max-width: 480px) {
    right: 20%;
    bottom: 10%;
  }
`
const SHeadline = styledComponents.p`
@media screen and (max-width: 480px) {
  font-size: 2.5em;
}
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