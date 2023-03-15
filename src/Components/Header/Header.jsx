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
`
const STopLink = styled.a`
  color: #fff;
`
const SNavLink = styled.a`
  color: #fff;
  margin-left: 1em;
  position: relative;
  &:after {
    content: '';
    /*絶対配置で線の位置を決める*/
    position: absolute;
    bottom: -0.5vw;
    left: 0%;
    /*線の形状*/
    width: 100%;
    height: 2px;
    background:#fff;
    /*アニメーションの指定*/
    transition: all .3s;
    transform: scale(0, 1);/*X方向0、Y方向1*/
    transform-origin: left top;/*左上基点*/
  }
  &:hover:after {
    transform: scale(1, 1);
  }
`