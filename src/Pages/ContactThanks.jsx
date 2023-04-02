import { useHistory, useLocation } from "react-router-dom"
import { SubPageHeader } from "../Components/Header/Header"
import styled from "styled-components"
import { AiOutlineLeft } from 'react-icons/ai'

export const ContactThanks = () => {
  const location = useLocation()
  const history = useHistory()

  // 直接アクセスの場合トップへリダイレクト
  if(location.state === undefined) {
    history.push('/')
  }

  // Topボタンを押した際の処理
  const onClickTop = () => {
    // トップページへ遷移
    history.push('/#top')
  }

  return(
    <>
      <SubPageHeader />
      <SContactThanksArea>
        <STopImageArea>
          <STopImage src="/images/contact/contactThanksTop.png" alt="お問い合わせサンクスページトップ画像" />
        </STopImageArea>
        <SContentsTitle>Thanks !</SContentsTitle>
        <div>
          <SThanksText>
            お問合せいただき、誠にありがとうございます。<br />
            お問合せいただきました日より、<br className="sp" />３日以内にご返信いたします。<br />
            なお、内容によってはご返信できない場合が<br className="sp" />ございますので<br className="pc" />
            あらかじめご了承くださいませ。<br />
          </SThanksText>
        </div>
        <SButtonArea>
          <button className='subBtn leftSubBtn bgRight' onClick={onClickTop}>
            <span>
              <AiOutlineLeft className='leftSubBtnArrow' />TOP
            </span>
          </button>
        </SButtonArea>
      </SContactThanksArea>
    </>

  )
}
const SContactThanksArea = styled.div`
  min-height: 90vh;
`
const STopImageArea = styled.section`
  margin-top: 5em;
  width: 100%;
  height: 20vw;
  background: #fff;
  text-align: center;
  @media screen and (max-width: 480px) {
    height: 40vw;
    margin-top: 14em;
  }
`
const STopImage = styled.img`
  width: 60%;
  height: 100%;
  object-fit: cover;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`
const SContentsTitle = styled.h1`
  font-size: 8em;
  text-align: center;
  margin-bottom: 0.8em;
  @media screen and (max-width: 480px) {
    margin-top: 1em;
  }
`
const SButtonArea = styled.div`
  width: 100%;
  padding: 4em 0 8em 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SThanksText = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  @media screen and (max-width: 480px) {
    font-size: 3em;
    line-height: 2.5;
  }
`