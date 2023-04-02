import styled from "styled-components"
import { HeaderMenu, SubPageHeaderMenu } from "../../Config/MenuConfig"
import { Link } from "react-router-dom"
import { useState } from "react"

export const Header = (props) => {
  const { state } = props
  const linkName =  '#' + state

  const [hbMenuOpenFlag, setHbMeneOpenFlag] = useState(false)

  const onClickNavChange = () => {
    setHbMeneOpenFlag(!hbMenuOpenFlag)
  }
  return(
    <>
    
        <SHeaderNav>
          <div>
            <STopLink href="/#top">KYOSUKE OCHIAI</STopLink>
          </div>
          <div>
            {HeaderMenu.map(menu => (
              <a key={menu.link} href={menu.link} className={linkName === menu.link ? 'activeLink pc' : 'navLink pc'} >{menu.name}</a>
            ))}
          </div>
        </SHeaderNav>
        <nav className="sp">
          <SSpNavArea onClick={onClickNavChange}>
            <span className={hbMenuOpenFlag ? 'hbMenuLine topLine active' : 'hbMenuLine topLine'}></span>
            <span className={hbMenuOpenFlag ? 'hbMenuLine secondLine active' : 'hbMenuLine secondLine'}></span>
            <span className={hbMenuOpenFlag ? 'hbMenuLine thirdLine active' : 'hbMenuLine thirdLine'}></span>
          </SSpNavArea>
        </nav>
        <div onClick={onClickNavChange} className={hbMenuOpenFlag ? 'spDrawerMenuArea active sp' : 'spDrawerMenuArea sp'}>
        </div>
        <nav className={hbMenuOpenFlag ? 'spDrawerMenu active sp' : 'spDrawerMenu sp'}>
        {HeaderMenu.map(menu => (
          <ul>
            <li className="mb-3em">
              <SpDrawerLink onClick={onClickNavChange} key={menu.link} href={menu.link} className='navLink' >{menu.name}</SpDrawerLink>
            </li>
          </ul>
        ))}
        </nav>
    </>
  )
}

export const SubPageHeader = () => {
  const [hbMenuOpenFlag, setHbMeneOpenFlag] = useState(false)

  const onClickNavChange = () => {
    setHbMeneOpenFlag(!hbMenuOpenFlag)
  }

  return(
    <>
      <SHeaderNav>
        <div>
          <STopLink href="/#top">KYOSUKE OCHIAI</STopLink>
        </div>
        <div>
          {SubPageHeaderMenu.map(menu => (
            <Link key={menu.link} to={menu.link} className="navLink pc">{menu.name}</Link>
          ))}
        </div>
      </SHeaderNav>
      <nav className="sp">
          <SSpNavArea onClick={onClickNavChange}>
            <span className={hbMenuOpenFlag ? 'hbMenuLine topLine active' : 'hbMenuLine topLine'}></span>
            <span className={hbMenuOpenFlag ? 'hbMenuLine secondLine active' : 'hbMenuLine secondLine'}></span>
            <span className={hbMenuOpenFlag ? 'hbMenuLine thirdLine active' : 'hbMenuLine thirdLine'}></span>
          </SSpNavArea>
        </nav>
        <div onClick={onClickNavChange} className={hbMenuOpenFlag ? 'spDrawerMenuArea active sp' : 'spDrawerMenuArea sp'}>
        </div>
        <nav className={hbMenuOpenFlag ? 'spDrawerMenu active sp' : 'spDrawerMenu sp'}>
        {SubPageHeaderMenu.map(menu => (
          <ul>
            <li className="mb-3em">
            <SpSubDrawerLink key={menu.link} to={menu.link} className="navLink">{menu.name}</SpSubDrawerLink>
            </li>
          </ul>
        ))}
        </nav>
    </>
  )
}

const SHeaderNav = styled.nav`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
  font-size: 1.5em;
  top: 0;
  z-index: 10000;
  background: #000;
  @media screen and (max-width: 480px) {
    font-size: 4em;
    padding: 1em;
}
`
const STopLink = styled.a`
  color: #fff;
`
const SSpNavArea = styled.div`
  width: 15vw;
  height: 15vw;
  position: fixed;
  top: 1vw;
  left: 80%;
  cursor: pointer;
  z-index: 100001;
`
const SpDrawerLink = styled.a`
  font-size: 6em;
`
const SpSubDrawerLink = styled(Link)`
  font-size: 6em;
`
