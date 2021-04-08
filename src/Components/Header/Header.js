import './Header.scss'
import Navbar from 'react-bootstrap/Navbar'
import venturusLogo from './logo-venturus.png'
import avatar from './avatar.png'

function Header() {
    return (
        <>
            <Navbar bg="gradient" expand="sm">
                <Navbar.Brand>
                    <img
                        alt=""
                        src={venturusLogo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Squad Management Tool
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>John Doe</Navbar.Text>
                </Navbar.Collapse>
                <Navbar.Brand href="#home">
                    {' '}
                    <img
                        alt=""
                        src={avatar}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
            </Navbar>
        </>
    )
}

export default Header