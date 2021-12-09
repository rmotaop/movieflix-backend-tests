import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getAcessTokenDecoded, isAuthenticated, logout } from '../../utils/auth'
import './styles.scss'

const Navbar = () => {
  const [isUserLogged, setIsUserLogged] = useState({})
  const [currentUser, setCurrentUser ] = useState('');
  const location = useLocation()

  useEffect(() => {
    const userLogged = isAuthenticated()
    setIsUserLogged(userLogged)
  }, [location])

  useEffect(() => {
    const currentUserData = getAcessTokenDecoded();
    setCurrentUser(currentUserData.user_name);
}, [location]);

  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        <Link to="/movies" className="navbar-logo">MovieFlix</Link>

        <span>  {`Olá:  ${currentUser}  `} </span>
        
        {isUserLogged && (
                    
          <div
            className="navbar-logout-button"
            onClick={ logout }
          >
            <span className="navbar-logout-button-text">
             Sair
            </span>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar