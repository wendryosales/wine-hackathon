import { useState } from 'react';
import { GiCellarBarrels } from 'react-icons/gi';
import {
  Grid, Image, Search,
} from 'semantic-ui-react';
import logo from '../../static/images/black.svg';
import ProfileImage from '../../static/images/profile.png';
import './header.css';

function Header() {
  const [query, setQuery] = useState('');
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
          <Search
            size="huge"
            loading={false}
            placeholder="Search..."
            onResultSelect={() => {}}
            onSearchChange={(_e, data) => setQuery(data.value)}
            results={[]}
            value={query}
          />
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
