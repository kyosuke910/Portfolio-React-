import { useEffect, useState } from 'react';
import TypeWriterEffect from 'react-typewriter-effect'
import styled from 'styled-components'

export const TopArea = () => {
  const [showScrollArea, setShowScrollArea] = useState(false);
  const text = 'Welcome To My Portfolio! '

  useEffect(() => {
    setTimeout(() => {
      setShowScrollArea(true);
    }, 3500);
  }, []);

  return(
    <section className="section">
      <STextArea>
        <TypeWriterEffect
          textStyle={{
            fontSize: '8em',
            textAlign: 'center',
          }}
            startDelay={100}
            cursorColor="white"
            text={text}
            typeSpeed={100}
          />
      </STextArea>
      <SScrollArea>
        <SArrowsText className={showScrollArea && 'show'}>Please Scroll Down!</SArrowsText>
        <svg className={showScrollArea && 'arrows show'}>
          <path className="a1" d="M0 0 L30 32 L60 0"></path>
          <path className="a2" d="M0 20 L30 52 L60 20"></path>
          <path className="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </SScrollArea>
    </section>
  )
}
const STextArea = styled.div`
  width: 80%;
  margin: auto;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`
const SScrollArea = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 15%;
  @media screen and (max-width: 480px) {
    top: 60%;
  }
`
const SArrowsText = styled.p`
  text-align: center;
  font-size: 2em;
  opacity: 0;
  transition: 0.5s;
  @media screen and (max-width: 480px) {
    font-size: 5em;
    width: 100vw;
  }
`