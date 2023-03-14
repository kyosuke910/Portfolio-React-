import { useState } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"

export const ContactArea = () => {
  const [inputData,setInputData] = useState({
    name : '',
    companyName: '',
    mail: '',
    phoneNumber: '',
    address: '',
    wayToContact: '',
    Message: '',
  })
  const history = useHistory()

  const onClickConfirm = () => {
    history.push({pathname: '/contactConfirm', state: inputData})
  }

  return(
      <section className="section">
        <SContentTitle className="contentTitle">Contact</SContentTitle>
        <SContactContents>
          <SInputArea>
            <SInputWrap>
              <p>Name</p>
              <SInput type="text" placeholder="お名前" onChange={(e)=> setInputData({...inputData, name:e.target.value})} />
            </SInputWrap>
            <SInputWrap>
              <p>Company Name</p>
              <SInput type="text" placeholder="会社名" onChange={(e)=> setInputData({...inputData, companyName:e.target.value})} />
            </SInputWrap>
            <SInputWrap>
              <p>Mail</p>
              <SInput type="text" placeholder="メールアドレス" onChange={(e)=> setInputData({...inputData, mail:e.target.value})} />
            </SInputWrap>
            <SInputWrap>
              <p>Phone Number</p>
              <SInput type="text" placeholder="電話番号" onChange={(e)=> setInputData({...inputData, phoneNumber:e.target.value})} />
            </SInputWrap>
            <SInputWrap>
              <p>Address</p>
              <SInput type="text" placeholder="ご住所" onChange={(e)=> setInputData({...inputData, address:e.target.value})} />
            </SInputWrap>
            <SInputWrap>
              <p>Ways To Contact</p>
              <SInput type="text" placeholder="お返事の手段" onChange={(e)=> setInputData({...inputData, wayToContact:e.target.value})} />
            </SInputWrap>
            <STextAreaWrap>
              <p>Message</p>
              <STextArea placeholder="メッセージ" onChange={(e)=> setInputData({...inputData, message:e.target.value})} />
            </STextAreaWrap>
            <STextAreaWrap>
              <p>Caution</p>
              <SCautionArea>
                <p>
                  あああああああああああああああああああああああああああああああああああああああ<br />
                  あああああああああああああああああああああああああああああああああああああああ<br />
                  あああああああああああああああああああああああああああああああああああああああ<br />
                  あああああああああああああああああああああああああああああああああああああああ<br />
                  あああああああああああああああああああああああああああああああああああああああ<br />
                  あああああああああああああああああああああああああああああああああああああああ<br />
                </p>
              </SCautionArea>
            </STextAreaWrap>
            <SSubmitBtn className="mainBtn" onClick={onClickConfirm}>Confirmation</SSubmitBtn>
          </SInputArea>
        </SContactContents>
      </section>
  )
}
const SContentTitle = styled.h2`
  top: 8%;
  left: 16%;
`
const SContactContents = styled.div`
  background: #707070;
  top: 10%;
  position: absolute;
  right: 10%;
  height: 85%;
  width: 60%;
`
const SInputArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 8em auto 0 auto;
`
const SInputWrap = styled.div`
  margin: 0.3em 0;
  width: 45%;
`
const STextAreaWrap = styled.div`
  margin: 0.3em 0;
  width: 100%;
`
const SInput = styled.input`
  width: 100%;
  padding: 0.4em;
`
const STextArea = styled.textarea`
  width: 100%;
  height: 20vh;
  padding: 0.4em;
  resize: none;
`
const SCautionArea = styled.div`
  width: 100%;
  height: 10vh;
  background: #fff;
  overflow: auto;
  padding: 0.4em;
`
const SSubmitBtn = styled.button`
  width: 40%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 0.8em;
`