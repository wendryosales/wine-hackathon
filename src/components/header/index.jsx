// third imports
import { GiCellarBarrels } from 'react-icons/gi';
import { Grid, Image } from 'semantic-ui-react';

// project imports
import logo from '../../static/images/black.svg';
import ProfileImage from '../../static/images/profile.png';
import SearchBar from '../searchBar';

// local css
import './header.css';

function Header() {
  return (
    <div className="header-container">
      <div className="page-header">
        <Grid>
          <Image
            src={logo}
            className="wine-logo"
          />
          <Image
            src={ProfileImage}
            className="profile-image"
          />
          <SearchBar />
          <section className="cellar">
            <GiCellarBarrels className="icon" />
            <p>Minha adega</p>
            <p className="amount">5</p>
          </section>
          <ul className="links">
            <li className="active">Clube</li>
            <li>Loja</li>
            <li>Produtores</li>
            <li>Ofertas</li>
            <li>Eventos</li>
          </ul>
        </Grid>
      </div>
    </div>
  );
}

export default Header;
