import React from 'react';
import { Link, unmountComponentAtNode } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button'
import './Menu.css';

function Menu() {
  return (
    <nav className="Menu">

      <Link to="/">
        <img className="Logo" src={Logo} alt="FermentaFlix logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video" >
        Novo vídeo
      </Button>

    </nav>
  );
}

export default Menu;