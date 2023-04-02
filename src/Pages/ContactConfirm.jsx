import { useHistory, useLocation } from "react-router-dom"
import { SubPageHeader } from "../Components/Header/Header"
import styled from "styled-components"
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import emailjs from '@emailjs/browser'

export const ContactConfirm = () => {
  const location = useLocation()
  const history = useHistory()

  // 直接アクセスの場合トップへリダイレクト
  if(location.state === undefined) {
    history.push('/#contact')
  }

  const sendData = location.state

  // Returnボタンを押した際の処理
  const onClickBack = () => {
    // 情報を保持したままフォームへ戻る
    history.push({pathname: '/#contact', state: sendData})
  }

  // Submitボタンを押した際の処理
  const onCLickSubmit = () => {
    const publicKey = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
    const serviceId = process.env.REACT_APP_EMAIL_JS_SERVICE_ID
    const templateId = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID

    emailjs.init(publicKey)

    const template_param = {
      name : sendData.name,
      companyName : sendData.companyName,
      mail : sendData.mail,
      phoneNumber : sendData.phoneNumber,
      wayToContact : sendData.wayToContact,
      message: sendData.message
    }
    emailjs.send(serviceId, templateId, template_param, publicKey).then(() => {
      history.push({pathname: '/contactThanks', state: 'sendEmail'})
    })
  }
  return(
    <>
      <SubPageHeader />
      <STopImageArea>
        <STopImage src="/images/contact/contactConfirmTop.png" alt="お問い合わせ確認ページトップ画像" />
      </STopImageArea>
      <SContentsTitle>Confirmation</SContentsTitle>
      <STextArea>
        <SLabel>Name</SLabel>
        <SClon>:</SClon>
        <SData>{sendData.name}</SData>
      </STextArea>
      <STextArea>
        <SLabel>Company Name</SLabel>
        <SClon>:</SClon>
        <SData>{sendData.companyName}</SData>
      </STextArea>
      <STextArea>
        <SLabel>Mail</SLabel>
        <SClon>:</SClon>
        <SData>{sendData.mail}</SData>
      </STextArea>
      <STextArea>
        <SLabel>Phone Number</SLabel>
        <SClon>:</SClon>
        <SData>{sendData.phoneNumber}</SData>
      </STextArea>
      <STextArea>
        <SLabel>Address</SLabel>
        <SClon>:</SClon>
        <SData>{sendData.address}</SData>
      </STextArea>
      <STextArea>
        <SLabel>Way To Contact</SLabel>
        <SClon>:</SClon>
        <SData>{sendData.wayToContact}</SData>
      </STextArea>
      <STextArea>
        <SLabel>Message</SLabel>
        <SClon>:</SClon>
        <SData>{sendData.message}</SData>
      </STextArea>
      <SButtonArea>
        <button className='subBtn leftSubBtn bgRight' onClick={onClickBack}>
          <span>
            <AiOutlineLeft className='leftSubBtnArrow' />Return
          </span>
        </button>
        <button className='subBtn rightSubBtn bgLeft' onClick={onCLickSubmit}>
          <span>
            Submit<AiOutlineRight className='rightSubBtnArrow'/>
          </span>
        </button>
      </SButtonArea>
    </>

  )
}
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
const STextArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin: 0.5em auto;
  font-size: 1.5em;
  @media screen and (max-width: 480px) {
    width: 80%;
    font-size: 4em;
  }
`
const SLabel = styled.p`
  width: 40%;
  @media screen and (max-width: 480px) {
    width: 50%;
  }
`
const SClon = styled.p`
  width: 10%;
  @media screen and (max-width: 480px) {
    width: 5%;
  }
`
const SData = styled.p`
  width: 50%;
  text-align: left;
`
const SButtonArea = styled.div`
  width: 100%;
  padding: 4em 0 8em 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`