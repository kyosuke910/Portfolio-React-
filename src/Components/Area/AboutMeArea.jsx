import { useEffect, useState } from "react"
import { fetchProfile } from "../Functions/microCmsFetch"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"

export const AboutMeArea = () => {
  const [profile, setProfile] = useState([])
  useEffect(() => {
    fetchProfile(setProfile)
  },[])

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  })

  return(
    <section className="section">
      {profile.name ?
      <div>
        <SContentTitle className={`contentTitle ${inView ? 'titleDelay fadeUp' : ''}`}>About Me</SContentTitle>
        <SSnsLinArea className={inView && 'delay fadeUp'}>
          <SSnsLink href="https://twitter.com/Kyosuke_Ochiai">
            <SSnsIcon src="/images/aboutMe/twitter-icon.png" alt="twitterアイコン" />
          </SSnsLink>
          <SSnsLink href="https://www.facebook.com/profile.php?id=100079641666804">
            <SSnsIcon src="/images/aboutMe/facebook-icon.png" alt="facebookアイコン" />
          </SSnsLink>
          <SSnsLink href="https://www.instagram.com/kyosuke_ochiai/">
            <SSnsIcon src="/images/aboutMe/instagram-icon.png" alt="instagramアイコン" />
          </SSnsLink>
          <SSnsLink href="https://github.com/kyosuke910">
            <SSnsIcon src="/images/aboutMe/github-icon.png" alt="githubアイコン" />
          </SSnsLink>
        </SSnsLinArea>
        <SProfileArea className={`cover-side ${inView ? 'inview' : ''}`} ref={ref}>
          <SProfileImg className={inView && 'iconAnime'} src={profile.image.url} alt="プロフィール画像" />
          <SProfileTextArea className={inView && 'delay fadeUp'}>
            <STextFx>
              <SLabel>Name</SLabel>
              <SClon>:</SClon>
              <SData>{profile.name}</SData>
            </STextFx>
            <STextFx>
              <SLabel>Location</SLabel>
              <SClon>:</SClon>
              <SData>{profile.location}</SData>
            </STextFx>
            <STextFx>
              <SLabel>Works</SLabel>
              <SClon>:</SClon>
              <SData>
              {profile.works.sort((a, b) => a.sortNumber - b.sortNumber).map((work, index, array) => (
                <span key={work.id}>{work.workName}{index === array.length - 1 ? '' : ', '}</span>
              ))}
              </SData>
            </STextFx>
            <SLabel>Skills</SLabel>
            <STextFx>
              <SLabel>　Lang</SLabel>
              <SClon>:</SClon>
              <SData>{profile.skills.lang}</SData>
            </STextFx>
            <STextFx>
              <SLabel>　CMS</SLabel>
              <SClon>:</SClon>
              <SData>{profile.skills.cms}</SData>
            </STextFx>
            <STextFx>
              <SLabel>　Library</SLabel>
              <SClon>:</SClon>
              <SData>{profile.skills.library}</SData>
            </STextFx>
            <STextFx>
              <SLabel>　Frame Work</SLabel>
              <SClon>:</SClon>
              <SData>{profile.skills.framework}</SData>
            </STextFx>
            <STextFx>
              <SLabel>　Tools</SLabel>
              <SClon>:</SClon>
              <SData>{profile.skills.tools}</SData>
            </STextFx>
          </SProfileTextArea>
        </SProfileArea>
      </div>
      : (
        <div className="loadingArea">
          <span className="loader"></span>
        </div>
      )}
    </section>
  )
}
const SContentTitle = styled.h2`
  top: 15%;
  left: 12%;
  @media screen and (max-width: 480px) {
    top: 13%;
    left: 15%;
  }
`
const SSnsLinArea = styled.div`
  position: absolute;
  top: 35%;
  left: 12%;
  display: flex;
  width: 20%;
  @media screen and (max-width: 480px) {
    z-index: 10;
    top: 28%;
    left: 13%;
    width: 60%;
  }
`
const SSnsLink = styled.a`
  display: block;
  width: 15%;
  margin: 0 0.5em;
  transition: 0.3s;
  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 480px) {
    margin: 0 1em;
  }
`
const SSnsIcon = styled.img`
  width: 100%;
`
const SProfileArea = styled.div`
  background: #707070;
  width: 60%;
  height: 80%;
  position: absolute;
  top: 13%;
  right: 10%;
  @media screen and (max-width: 480px) {
    height: 70%;
    width: 80%;
    left: 50%;
    transform: translateX(-50%);
  }
`
const SProfileImg = styled.img`
  width: 18%;
  border-radius: 9999px;
  position: absolute;
  top: 40%;
  left: 8%;
  @media screen and (max-width: 480px) {
    top: 16%;
    left: 70%;
    z-index: 10;
    width: 25%;
  }
`
const SProfileTextArea = styled.div`
  font-size: 1em;
  position: absolute;
  top: 25%;
  right: 5%;
  background: #fff;
  width: 60%;
  padding: 3em 2em;
  color: #000;
  @media screen and (max-width: 480px) {
    width: 90%;
    top: 40%;
  }
`
const STextFx = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 480px) {
    font-size: 2.5em;
  }
`
const SLabel = styled.p`
  width: 30%;
  @media screen and (max-width: 480px) {
    white-space: nowrap;
    width: 35%;
  }
`
const SClon = styled.p`
  width: 10%;
`
const SData = styled.p`
  width: 60%;
  text-align: left;
`