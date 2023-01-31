import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Navbar } from 'react-bootstrap';

// import authContext from '../../store/contexts/auth';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  // const { user } = useContext(authContext);
  // const { name, role } = user;

  const logOut = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <header className="d-flex justify-content-between bg-success">
      <Navbar className="row py-0 gx-0 text-light">
        <Link
          to={ `/actions` }
          data-testid="customer_products__element-navbar-link-products"
          className="bg-primary text-light h-100 d-flex align-items-center px-5 w-fit"
        >
          Ganhar Dinheiro
        </Link>
        <Link
           to={ `/buy-followers` }
          data-testid="customer_products__element-navbar-link-orders"
        className="text-light h-100 d-flex align-items-center px-5"
        >
          Comprar Seguidores
        </Link>
      </Navbar>
      <div className="d-flex justify-content-between align-items-center bg-warning p-2">
        <p
          data-testid="customer_products__element-navbar-user-full-name"
          className="h-100 d-flex align-items-center px-5 mb-0"
        >
        </p>
        <Button
          onClick={ logOut }
          data-testid="customer_products__element-navbar-link-logout"
          className="px-3"
        >
          sair
        </Button>
      </div>
    </header>
  );
}

export default Header;