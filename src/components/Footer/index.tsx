import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className={styles.footerBar}>
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <a href="javascrit:void()">Perguntas Frequentes</a>
            </div>
            <div className="col">
              <a href="javascrit:void()">Envio de Arquivos</a>
            </div>
            <div className="col">
              <a href="javascrit:void()">Peça Pelo WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
      <div className={`container ${styles.footer}`}>
        <div className="row">
          <div className="col">
            <img
              src="./images/logo.png"
              alt="PolySteel"
              title="PolySteel"
              className="img-responsive"
            />
            <p className={styles.socialLinks}>
              <a href="#face" className={styles.facebookBtn}>
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#instagram" className={styles.instagramBtn}>
                <i className="fab fa-instagram" />
              </a>
              <a href="#youtube" className={styles.youtubeBtn}>
                <i className="fab fa-youtube" />
              </a>
            </p>
          </div>
          <div className="col">
            <h3>Mapa do Site</h3>
            <ul>
              <li>
                <a href="#url">Home</a>
              </li>
              <li>
                <a href="#url">Produtos</a>
              </li>
              <li>
                <a href="#url">Sobre Nós</a>
              </li>
              <li>
                <a href="#url">Termos de Uso</a>
              </li>
              <li>
                <a href="#url">Fale Conosco</a>
              </li>
              <li>
                <a href="#url">Mapa do Site</a>
              </li>
            </ul>
          </div>
          <div className={`col ${styles.iconsMargin}`}>
            <h3>FALE CONOSCO</h3>
            <ul>
              <li>
                <a href="tel:+551120635366">
                  <i className="fa fa-phone" />
                  (11) 2063-5366
                </a>
              </li>
              <li>
                <a href="tel:+551138063170">
                  <i className="fa fa-phone" />
                  (11) 3806-3170
                </a>
              </li>
              <li>
                <a href="tel:+5511996587395">
                  <i className="fab fa-whatsapp" />
                  (11) 99658-7395
                </a>
              </li>
              <br />
              <p className="therm">
                Atendimento de Seg à Sex, das 08:00 às 18:00
              </p>
            </ul>
          </div>
          <div className="col">
            <h3>Nossa Localização</h3>
            <iframe
              title="Polysteel"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.735716942697!2d-46.6199934844066!3d-23.577933468091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5963d1a1c0ed%3A0x7518f4b5f30ca6fe!2sPoly-Steel!5e0!3m2!1spt-BR!2sbr!4v1608558100171!5m2!1spt-BR!2sbr"
              width="400"
              height="150"
              frameBorder="0"
              aria-hidden="false"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 vertical-align-bottom">
            <div>
              <p className="therm">
                Todas as imagens utilizadas são meramente ilustrativas.
              </p>
              <p className="therm">
                CNPJ: 00.000.000/0000-00 - R. Santa Flora, 229 - Vila Monumento,
                São Paulo - SP, 01549-040
              </p>
              <p className="therm">
                Copyright © 2020 - Poly-Steel - Todos os direitos reservados.
              </p>
            </div>
          </div>
          <div className="col-md-7">
            <h3>Formas de Pagamento</h3>

            <p className="therm">
              Faturado, Licitações Orgãos Públicos e Venda Direta Orgãos
              Públicos
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;