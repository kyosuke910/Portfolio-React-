import { useHistory, useLocation } from "react-router-dom"
import { SubPageHeader } from "../Components/Header/Header"
import styled from "styled-components"
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

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
        <SReturnButton onClick={onClickBack}><SLeftArrow />Return</SReturnButton>
        <SSubmitButton >Submit<SRightArrow /></SSubmitButton>
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
`
const STopImage = styled.img`
  width: 60%;
  height: 100%;
  object-fit: cover;
`
const SContentsTitle = styled.h1`
  font-size: 8em;
  text-align: center;
  margin-bottom: 0.8em;
`
const STextArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin: 0.5em auto;
  font-size: 1.5em;
`
const SLabel = styled.p`
  width: 40%;
`
const SClon = styled.p`
  width: 10%;
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
const SButton = styled.button`
  width: 17%;
  padding: 0.5em 0;
  font-size: 1.5em;
  cursor: pointer;
  font-weight: bold;
  color: #fff;
  border: 1px solid #fff;
  background : #000;
  margin-top: 2em;
  transition: 0.3s;
`
const SReturnButton = styled(SButton)`
  &:hover {
    padding-right: 2em;
  }
`
const SSubmitButton = styled(SButton)`
  &:hover {
    padding-left: 2em;
  }
`
const SLeftArrow = styled(AiOutlineLeft)`
  vertical-align: bottom;
  margin-right: 0.5em;
  transition: 0.3s;
`
const SRightArrow = styled(AiOutlineRight)`
  vertical-align: bottom;
  margin-left: 0.5em;
  transition: 0.3s;
`