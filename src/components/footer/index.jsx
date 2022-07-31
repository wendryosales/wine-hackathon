import { useState } from 'react';
// import { GiCellarBarrels } from 'react-icons/gi';
import {
  Grid, Image, Search,
} from 'semantic-ui-react';
import './footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-section">
        <h2 className="footer-h2">LOJA</h2>
        <p className="footer-P">Vinhos</p>
        <p className="footer-P">Outras bebidas</p>
      </section>
      <section className="footer-section">
        <h2 className="footer-h2">CLUBE WINE</h2>
        <p className="footer-P">Como funciona</p>
        <p className="footer-P">Indique Amigos</p>
        <p className="footer-P">WineBox Essenciais</p>
        <p className="footer-P">WineBox Surpreendentes</p>
        <p className="footer-P">WineBox Notáveis</p>
      </section>
      <section className="footer-section">
        <h2 className="footer-h2">MINHA CONTA</h2>
        <p className="footer-P">Dados pessoais</p>
        <p className="footer-P">Pedidos</p>
        <p className="footer-P">Cartões</p>
        <p className="footer-P">Endereços</p>
        <p className="footer-P">Clube Wine</p>
        <p className="footer-P">Favoritos</p>
        <p className="footer-P">Cupons</p>
        <p className="footer-P">Presentes</p>
        </section>
        <section className="footer-section">
        <h2 className="footer-h2">CONHEÇA TAMBÉM</h2>
        <p className="footer-P">Institucional</p>
        <p className="footer-P">Lojas Oficiais</p>
        <p className="footer-P">Lojas Físicas</p>
        <p className="footer-P">Bodegas</p>
        <p className="footer-P">App Wine</p>
        <p className="footer-P">WineUP</p>
        <p className="footer-P">Wine Eventos</p>
      </section>
      <section className="footer-section">
        <h2 className="footer-h2">Equipe G5 Hackathon</h2>
        <p className="footer-P">Veronica Alves</p>
        <p className="footer-P">Wendryo Sales</p>
        <p className="footer-P">Guilherme Cunha </p>
        <p className="footer-P">Imar Mendes</p>
      </section>
      
    </div>
  );
}

export default Footer;
