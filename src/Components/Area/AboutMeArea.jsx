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
        <SContentTitle className='contentTitle'>About Me</SContentTitle>
        <SSnsLinArea>
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
          <SProfileImg src={profile.image.url} alt="プロフィール画像" />
          <SProfileTextArea>
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
            <span>Skills</span>
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
`
const SSnsLinArea = styled.div`
  position: absolute;
  top: 35%;
  left: 12%;
  display: flex;
  width: 20%;
`
const SSnsLink = styled.a`
  display: block;
  width: 15%;
  margin: 0 0.5em;
  transition: 0.3s;
  &:hover {
    opacity: 0.8;
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
`
const SProfileImg = styled.img`
  width: 18%;
  border-radius: 9999px;
  position: absolute;
  top: 40%;
  left: 8%;
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
`
const STextFx = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`
const SLabel = styled.p`
  width: 30%;
`
const SClon = styled.p`
  width: 10%;
`
const SData = styled.p`
  width: 60%;
  text-align: left;
`