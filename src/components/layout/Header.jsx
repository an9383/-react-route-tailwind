import { Link, useLocation } from 'react-router-dom'
import Button, { GhostButton } from '../button/Button'
import tw, { styled } from 'twin.macro'
// import styled from 'styled-components'
import { FaBars } from 'react-icons/fa6'
import { FiSearch } from 'react-icons/fi'

import logo from '../../assets/images/logo.png'

function Header() {
    const location = useLocation()

    return (
        <header className="flex items-center justify-between p-6 border-b border-gray-200 border-solid">
            <h1 className="text-3xl font-bold text-secondary">
                <Link to="/">
                    <img src={logo} alt="neighbor system" />
                </Link>
            </h1>
            <Gnb>
                <ul>
                    <li className={location.pathname === '/' ? 'active' : ''}>
                        <Link to="/">홈</Link>
                    </li>
                    <li className={location.pathname === '/about' ? 'active' : ''}>
                        <Link to="/about">회사소개</Link>
                    </li>
                    <li className={location.pathname === '/login' ? 'active' : ''}>
                        <Link to="/login">로그인</Link>
                    </li>
                </ul>
            </Gnb>

            <Util className="util">
                <GhostButton>
                    <FiSearch className="font-3xl" />
                </GhostButton>
                <GhostButton>
                    <FaBars />
                </GhostButton>
            </Util>
        </header>
    )
}

// const Gnb = tw.nav`
//     bg-secondary p-3
// `

const Gnb = styled.nav`
    ul {
        ${tw`flex gap-6`}
    }
    li {
        a {
            ${tw`flex items-center h-10 px-10 text-black opacity-60 hover:opacity-100`}
        }
    }
`

const Util = styled.div`
    ${tw`flex gap-6`}
    button {
        ${tw`flex items-center justify-center w-10 h-10 text-xl`}
    }
`

export default Header
