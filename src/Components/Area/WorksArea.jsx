import { useInView } from "react-intersection-observer"
import { useHistory } from "react-router-dom"
import styled from "styled-components"

export const WorksArea = () => {
  const history = useHistory()

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  })

  const onClickMoreBtn = () => {
    history.push('/worksList')
  }

  return(
    <section className="section">
      <SContentTitle className="contentTitle">Works</SContentTitle>
      <SImageArea className={`cover-side ${inView ? 'inview' : ''}`} ref={ref}>
        <SImage src="images/works/work_img.jpg" alt="Works画像" />
      </SImageArea>
      <SMoreBtn onClick={onClickMoreBtn} className='mainBtn'>Lean More</SMoreBtn>
    </section>
  )
}
const SContentTitle = styled.h2`
  top: 20%;
  left: 15%;
`
const SImageArea = styled.div`
  position: absolute;
  top: 15%;
  right: 10%;
  width: 60%;
`
const SImage = styled.img`
width: 100%;
`
const SMoreBtn = styled.button`
  bottom: 5%;
  left: 18%;
`