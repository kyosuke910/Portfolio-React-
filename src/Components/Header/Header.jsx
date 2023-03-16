import styled from "styled-components"
import { HeaderMenu, SubPageHeaderMenu } from "../../Config/MenuConfig"
import { Link } from "react-router-dom"

export const Header = (props) => {
  const { state } = props
  const linkName =  '#' + state

  return(
    <SHeaderNav>
      <div>
        <STopLink href="/#top">KYOSUKE OCHIAI</STopLink>
      </div>
      <div>
        {HeaderMenu.map(menu => (
          <a key={menu.link} href={menu.link} className={linkName === menu.link ? 'activeLink' : 'navLink'} >{menu.name}</a>
        ))}
      </div>
    </SHeaderNav>
  )
}

export const SubPageHeader = () => {
  return(
    <SHeaderNav>
      <div>
        <STopLink href="/#top">KYOSUKE OCHIAI</STopLink>
      </div>
      <div>
        {SubPageHeaderMenu.map(menu => (
          <Link key={menu.link} to={menu.link} className="navLink">{menu.name}</Link>
        ))}
      </div>
    </SHeaderNav>
  )
}

const SHeaderNav = styled.nav`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1em 2em;
  font-size: 1.5em;
  top: 0;
  z-index: 10000;
  background: #000;
`
const STopLink = styled.a`
  color: #fff;
`