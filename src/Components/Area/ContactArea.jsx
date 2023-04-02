import { useMemo, useState } from "react"
import { useHistory, useLocation } from "react-router-dom"
import StarIcon from '@mui/icons-material/Star';
import styled from "styled-components"
import { mailFormValid } from "../Functions/MailFormValid";
import { useInView } from "react-intersection-observer";

export const ContactArea = () => {
  const history = useHistory()
  const location = useLocation()

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  })

  const enteredData = useMemo(() => {
    if (location.state !== undefined) {
      return location.state;
    } else {
      return {
        name : '',
        companyName: '',
        mail: '',
        phoneNumber: '',
        address: '',
        wayToContact: '',
        message: '',
      };
    }
  }, [location.state])

  const [inputData, setInputData] = useState(enteredData)
  const [validFlags, setValidFlags] = useState({
    nameNotEntered : false, // 名前未入力
    mailNotEntered : false, // メールアドレス未入力
    mailWrongFormat : false, // メールアドレス形式違い
    phoneNumberNotEntered : false, // 電話番号未入力
    wayToContactNotEntered : false, // 連絡手段未入力
    messageNotEntered : false // メッセージ未入力
  })

  const onClickConfirm = () => {
    // 入力された値をチェック
    const errCheck = mailFormValid(inputData)
    // 結果をセット
    setValidFlags(errCheck)
    // errCheckオブジェクトにtrueが含まれているかチェック
    const allKeysTrue = Object.values(errCheck).includes(true)
    // 含まれていたら処理を終了
    if(allKeysTrue) {
      return
    }
    // 正しく入力されていれば確認画面へ遷移
    history.push({pathname: '/contactConfirm', state: inputData})
  }

  return(
      <section className="section">
        <SContentTitle className={`contentTitle ${inView ? 'titleDelay fadeUp' : ''}`}>Contact</SContentTitle>
        <SContactContents className={`cover-side ${inView ? 'inview' : ''}`} ref={ref}>
          <SInputArea>
            <SInputWrap>
              <p>
                Name
                <SRequired>
                  <StarIcon style={{ fontSize: '1em' }} />
                  { validFlags.nameNotEntered && <SValidMessage>名前を入力してください。</SValidMessage> }
                </SRequired>
              </p>
              <SInput type="text" value={inputData.name} placeholder="お名前" onChange={(e)=> setInputData({...inputData, name:e.target.value})} />
            </SInputWrap>
            <SInputWrap>
              <p>Company Name</p>
              <SInput type="text" value={inputData.companyName} placeholder="会社名" onChange={(e)=> setInputData({...inputData, companyName:e.target.value})} />
            </SInputWrap>
            <SInputWrap>
              <p>
                Mail
                <SRequired>
                  { inputData.wayToContact === 'メール' && <StarIcon style={{ fontSize: '1em' }} /> }
                </SRequired>
                { validFlags.mailNotEntered && <SValidMessage>メールアドレスを入力してください。</SValidMessage> }
                { validFlags.mailWrongFormat && <SValidMessage>正しいメールアドレスを入力してください。</SValidMessage> }
              </p>
              <SInput type="text" value={inputData.mail} placeholder="メールアドレス" onChange={(e)=> setInputData({...inputData, mail:e.target.value})} />
            </SInputWrap>
            <SInputWrap>
              <p>
                Phone Number
                <SRequired>
                  { inputData.wayToContact === 'お電話' && <StarIcon style={{ fontSize: '1em' }} /> }
                </SRequired>
                { validFlags.phoneNumberNotEntered && <SValidMessage>電話番号を入力してください。</SValidMessage> }
              </p>
              <SInput type="text" value={inputData.phoneNumber} placeholder="電話番号" onChange={(e)=> setInputData({...inputData, phoneNumber:e.target.value})} />
            </SInputWrap>
            <SInputWrap>
              <p>Address</p>
              <SInput type="text" value={inputData.address} placeholder="ご住所" onChange={(e)=> setInputData({...inputData, address:e.target.value})} />
            </SInputWrap>
            <SInputWrap>
              <p>Ways To Contact
                <SRequired>
                  <StarIcon style={{ fontSize: '1em' }} />
                </SRequired>
                { validFlags.wayToContactNotEntered && <SValidMessage>ご連絡手段を選択してください。</SValidMessage> }
              </p>
              <SSelectForm value={inputData.wayToContact} onChange={(e)=> setInputData({...inputData, wayToContact:e.target.value})} >
                <option value="" disabled>
                  選んでください
                </option>
                <option value="メール">メール</option>
                <option value="お電話">お電話</option>
              </SSelectForm>
            </SInputWrap>
            <STextAreaWrap>
              <p>
                Message
                <SRequired>
                  <StarIcon style={{ fontSize: '1em' }} />
                </SRequired>
                { validFlags.messageNotEntered && <SValidMessage>メッセージを入力してください。</SValidMessage> }
              </p>
              <STextArea value={inputData.message} placeholder="メッセージ" onChange={(e)=> setInputData({...inputData, message:e.target.value})} />
            </STextAreaWrap>
            <STextAreaWrap>
              <p>Caution</p>
              <SCautionArea>
                <SCautionText>
                  *は必須項目となっております。必ず入力をお願いいたします。<br />
                  お問合せをいただいてから３日以内に返信を心がけておりますが、状況によっては返信が遅れる場合がございます。<br />
                  制作の依頼、その他お仕事の依頼についてのお問い合わせ、見積もり依頼等のお問合せは必ず返信いたしますが、営業や勧誘等のお問い合わせについては返信しない場合がございます。<br />
                  お問合せをいただいた際に得た個人情報はお問合せの返信、見積もり作成等必要な範囲のみの使用をさせていただきます。<br />
                  即答できないお問い合わせに関しましてはその旨返信をいたしますが、お時間を頂戴する場合がございます。<br />
                  あらかじめご了承ください。
                </SCautionText>
              </SCautionArea>
            </STextAreaWrap>
            <SSubmitBtn className={inView && 'delay fadeUp mainBtn'} onClick={onClickConfirm}>Confirmation</SSubmitBtn>
          </SInputArea>
        </SContactContents>
      </section>
  )
}
const SContentTitle = styled.h2`
  top: 8%;
  left: 16%;
  @media screen and (max-width: 480px) {
    top: 9%;
    left: 12%;
  }
`
const SContactContents = styled.div`
  background: #707070;
  top: 10%;
  position: absolute;
  right: 10%;
  height: 85%;
  width: 60%;
  @media screen and (max-width: 480px) {
    top: 22%;
    right: 2%;
    height: 77%;
    width: 90%;
  }
`
const SInputArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 8em auto 0 auto;
  @media screen and (max-width: 480px) {
    margin-top: 2em;
    width: 90%;
  }
`
const SInputWrap = styled.div`
  margin: 0.3em 0;
  width: 45%;
  @media screen and (max-width: 480px) {
    font-size: 3em;
    width: 49%;
  }
`
const STextAreaWrap = styled.div`
  margin: 0.3em 0;
  width: 100%;
  @media screen and (max-width: 480px) {
    font-size: 3em;
  }
`
const SInput = styled.input`
  width: 100%;
  padding: 0.8em;
`
const SSelectForm = styled.select`
  width: 100%;
  padding: 0.8em;
`
const STextArea = styled.textarea`
  width: 100%;
  height: 12vh;
  padding: 0.8em;
  resize: none;
`
const SCautionArea = styled.div`
  width: 100%;
  height: 10vh;
  background: #fff;
  overflow: auto;
  padding: 0.8em;
`
const SSubmitBtn = styled.button`
  width: 40%;
  left: 50%;
  transform: translateX(-50%) !important;
  margin-top: 0.8em;
  z-index: 9;
  @media screen and (max-width: 480px) {
    left: 5%;
    width: 85%;
  }
`
const SRequired = styled.span`
  color: #df0000;
  vertical-align: middle;
  margin: 0 0.2em;
`
const SValidMessage = styled.span`
  color: #df0000;
  font-size: 0.8em;
  margin-left: 0.3em;
  font-weight: bold;
  vertical-align: text-bottom;
`
const SCautionText = styled.p`
  font-size: 0.8em;
  color: #000;
`