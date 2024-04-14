import { Link, useLocation } from 'react-router-dom'
import Button, { GhostButton } from '../button/Button'
import tw from 'twin.macro'
import styled from 'styled-components'

function Header() {
    const location = useLocation()

    return (
<<<<<<< HEAD
        <header className="flex justify-between items-center border-2 border-gray-600 bg-primary p-5">
=======
        <header className="flex flex-col items-center justify-between p-5 border-2 border-gray-600 md:flex-row bg-primary">
>>>>>>> 9a802b463370013f9c48469f5e97dad11bf8bd9a
            <h1 className="text-3xl font-bold text-secondary">logo</h1>
            <Gnb>
                <ul>
                    <li className={location.pathname === '/' ? 'active' : ''}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={location.pathname === '/about' ? 'active' : ''}>
                        <Link to="/about">About</Link>
                    </li>
                    <li className={location.pathname === '/login' ? 'active' : ''}>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </Gnb>

            <Util>
                <Button default>마이페이지</Button>
                <Button>마이페이지</Button>
            </Util>
        </header>
    )
}

<<<<<<< HEAD
// const Gnb = tw.nav`
//     bg-secondary p-3
// `
=======
const Util = styled.div`
    ${tw`hidden md:block`}
`
>>>>>>> 9a802b463370013f9c48469f5e97dad11bf8bd9a

const Gnb = styled.nav`
    ul {
        ${tw`flex gap-6`}
        border: 1px solid #fff;
    }
    li {
        a {
            ${tw`text-white`}
        }
    }
    li {
        a {
            ${tw`text-white`}
        }
    }
`

export default Header
