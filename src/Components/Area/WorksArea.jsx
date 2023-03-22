import { useHistory } from "react-router-dom"
import styled from "styled-components"

export const WorksArea = () => {
  const history = useHistory()

  const onClickMoreBtn = () => {
    history.push('/worksList')
  }

  return(
    <section className="section">
      <SContentTitle className="contentTitle">Works</SContentTitle>
      <SImage src="images/works/work_img.jpg" alt="Works画像" />
      <SMoreBtn onClick={onClickMoreBtn} className='mainBtn'>Lean More</SMoreBtn>
    </section>
  )
}
const SContentTitle = styled.h2`
  top: 20%;
  left: 15%;
`
const SImage = styled.img`
  position: absolute;
  top: 15%;
  right: 10%;
  width: 60%;
`
const SMoreBtn = styled.button`
  bottom: 5%;
  left: 18%;
`