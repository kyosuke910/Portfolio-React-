export const mailFormValid = (inputData) => {
  const validStates = {
    nameNotEntered : false, // 名前未入力
    mailNotEntered : false, // メールアドレス未入力
    mailWrongFormat : false, // メールアドレス形式違い
    phoneNumberNotEntered : false, // 電話番号未入力
    wayToContactNotEntered : false, // 連絡手段未入力
    messageNotEntered : false // メッセージ未入力
  }
  // 入力された値がメールアドレス形式か判定する処理
  const isValidEmail = (email) => {
    if(email) {
        // 正しい形式であればtrueを返す
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }
  }
  // メールアドレスの判定後
  const mailChecked = isValidEmail(inputData.mail)

  // 名前の入力チェック
  if(inputData.name === '') {
    validStates.nameNotEntered = true
  }

  // 連絡手段に何を選択したかで判定を分ける
  if(inputData.wayToContact === 'メール') { // メールを選択した場合
    // メールアドレスのチェック
    if(inputData.mail === '') { // 未入力かどうかの判定
      validStates.mailNotEntered = true
    } else if(!mailChecked) { // 正しい形式かの判定
      validStates.mailWrongFormat = true
    }
  } else if(inputData.wayToContact === 'お電話') { // 電話を選択した場合
    // 電話番号のチェック
    if(inputData.phoneNumber === '') {
      validStates.phoneNumberNotEntered = true
    }
  } else { // 何も選択しなかった場合
    validStates.wayToContactNotEntered = true
  }

  // メッセージの入力チェック
  if(inputData.message === '') {
    validStates.messageNotEntered = true
  }

  // 結果をリターン
  return validStates
}