import styled from "styled-components"
import { SubPageHeader } from "../Components/Header/Header"
import { AiOutlineLeft } from 'react-icons/ai'
import { useHistory } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchProducts } from "../Components/Functions/microCmsFetch"

export const WorkList = () => {
  const history = useHistory()
  const [works,setWorks] = useState([])
  useEffect(() => {
    fetchProducts(setWorks)
  },[])
console.log(works)
    // Topボタンを押した際の処理
    const onClickTop = () => {
      // トップページへ遷移
      history.push('/#top')
    }

  return(
    <>
      <SubPageHeader />
      <SMainArea>
        <SImgArea>
          <SImg src="/images/works/workListTop.png" alt="プロダクトページトップ画像" />
          <STitle className="subContentsTitle">Works</STitle>
        </SImgArea>
        <SProductsArea>
        {works.sort((a, b) => a.sortNumber - b.sortNumber).map((value) => (
          <SProductWrapper>
            <SProductsLabelArea key={value.id}>
              <SProductsLabel>
                {value.useTechnology1 && <SProductsLabelTxt>{value.useTechnology1}</SProductsLabelTxt>}
                {value.useTechnologyIcon1 && <SProductsLabelImg src={value.useTechnologyIcon1.url} />}
              </SProductsLabel>
              <SProductsLabel>
                {value.useTechnology2 && <SProductsLabelTxt>{value.useTechnology2}</SProductsLabelTxt>}
                {value.useTechnologyIcon2 &&<SProductsLabelImg src={value.useTechnologyIcon2.url} />}
              </SProductsLabel>
              <SProductsLabel>
                {value.useTechnology3 && <SProductsLabelTxt>{value.useTechnology3}</SProductsLabelTxt>}
                {value.useTechnologyIcon3 && <SProductsLabelImg src={value.useTechnologyIcon3.url} />}
              </SProductsLabel>
              <SProductsLabel>
                {value.useTechnology4 && <SProductsLabelTxt>{value.useTechnology4}</SProductsLabelTxt>}
                {value.useTechnologyIcon4 && <SProductsLabelImg src={value.useTechnologyIcon4.url} />}
              </SProductsLabel>
              <SProductsLabel>
                {value.useTechnology5 && <SProductsLabelTxt>{value.useTechnology5}</SProductsLabelTxt>}
                {value.useTechnologyIcon5 && <SProductsLabelImg src={value.useTechnologyIcon5.url} />}
              </SProductsLabel>
            </SProductsLabelArea>
            <SContentsArea>
              {value.contents.map((content) => (
                <SContent key={content.id} href={content.siteUrl}>
                  <img src={content.siteImage.url} alt="サイト画像" />
                  <SContentTitle>{content.title}</SContentTitle>
                  <SContentTxt dangerouslySetInnerHTML={{__html: content.detail}}></SContentTxt>
                </SContent>
              ))}
            </SContentsArea>
          </SProductWrapper>
        ))}
        </SProductsArea>
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
const SMainArea = styled.main`
  width: 100%;
  margin-top: 5em;
`
const SImgArea = styled.div`
  position: relative;
`
const SImg = styled.img`
  width: 100%;
  height: 25vw;
  object-fit: cover;
`
const STitle = styled.h1`
  top: 75%;
  left: 11%;
`
const SProductsArea = styled.section`
  width: 80%;
  margin: 8em auto 0 auto;
`
const SProductWrapper = styled.div`
  margin-bottom: 6em;
`
const SProductsLabelArea = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #fff;
  border-left: 1em solid;
  padding: 0.5em 0 0.5em 2em;
  margin-bottom: 3em;
`
const SProductsLabel = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.5em;
`
const SProductsLabelTxt = styled.p`
  font-size: 2em;
`
const SProductsLabelImg = styled.img`
  height: 2em;
  width: auto;
  margin-left: 0.5em;
`
const SContentsArea = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 3em;
`
const SContent = styled.a`
  display: block;
  color: #fff;
`
const SContentTitle = styled.h2`
  font-size: 1.5em;
  margin: 0.5em 0;
`
const SContentTxt = styled.p`
  font-size: 0.8em;
`
const SButtonArea = styled.div`
  width: 100%;
  text-align: center;
  padding: 4em 0 6em 0;
`