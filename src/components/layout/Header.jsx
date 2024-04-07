import { Link, useLocation } from 'react-router-dom'
import Button from '../button/Button'

function Header() {
    const location = useLocation()

    return (
        <header className="flex justify-between items-center border-b-2 border-gray-600 bg-gray-100 p-5">
            <h1 className="text-3xl font-bold">logo</h1>
            <nav>
                <ul className="flex gap-6">
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
            </nav>

            <div>
                <Button default>마이페이지</Button>
                <Button>마이페이지</Button>
            </div>
        </header>
    )
}

const Gnb = styled.nav`
    ul {
        ${tw`flex gap-6`}
    }
`

export default Header
