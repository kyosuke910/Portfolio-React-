import styled from "styled-components"
import { HeaderMenu } from "../../Config/MenuConfig"

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
          <SNavLink key={menu.index} href={menu.link} className={linkName === menu.link && 'activeLink'} >{menu.name}</SNavLink>
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
`
const STopLink = styled.a`
  color: #fff;
`
const SNavLink = styled.a`
  color: #fff;
  margin-left: 1em;
`