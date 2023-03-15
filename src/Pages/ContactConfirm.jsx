import { useHistory, useLocation } from "react-router-dom"
import { SubPageHeader } from "../Components/Header/Header"

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
      <h1>Confirmation</h1>
      <p>Name: {sendData.name}</p>
      <p>Company Name: {sendData.companyName}</p>
      <p>Mail: {sendData.mail}</p>
      <p>Phone Number: {sendData.phoneNumber}</p>
      <p>Address: {sendData.address}</p>
      <p>Way To Contact: {sendData.wayToContact}</p>
      <p>Message: {sendData.message}</p>
      <button onClick={onClickBack}>Return</button>
    </>

  )
}