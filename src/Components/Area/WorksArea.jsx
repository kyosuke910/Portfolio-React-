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
      <SContents>
        <SContentTitle className={`contentTitle ${inView ? 'titleDelay fadeUp' : ''}`}>Works</SContentTitle>
        <SImageArea className={`cover-side ${inView ? 'inview' : ''}`} ref={ref}>
          <SImage src="images/works/work_img.jpg" alt="Works画像" />
        </SImageArea>
        <SMoreBtn onClick={onClickMoreBtn} className={inView ? 'delay fadeUp mainBtn' : 'dpNone'}>Lean More</SMoreBtn>
      </SContents>
    </section>
  )
}
const SContents = styled.div`
  height: 80vh;
`
const SContentTitle = styled.h2`
  top: 20%;
  left: 15%;
  @media screen and (max-width: 480px) {
    top: 20%;
  }
`
const SImageArea = styled.div`
  position: absolute;
  top: 15%;
  right: 10%;
  width: 60%;
  @media screen and (max-width: 480px) {
    top: 35%;
    width: 85%;
    left: 11%;
  }
`
const SImage = styled.img`
width: 100%;
@media screen and (max-width: 480px) {
  height: 30vh;
  object-fit: cover;
}
`
const SMoreBtn = styled.button`
  top: 40%;
  left: 18%;
  @media screen and (max-width: 480px) {
    position: absolute;
    top: 80%;
    left: 21%;
  }
`