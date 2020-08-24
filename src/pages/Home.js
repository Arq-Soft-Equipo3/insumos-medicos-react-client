import React from 'react';
import {
  Hero, Container, Section, Columns, Content,
} from 'react-bulma-components';
import Navbar from '../components/Header/Navbar';
import banner from '../banner.jpg';

const Home = () => (
  <>
    <Navbar />
    <Hero>
      <Hero.Body>
        <Container fluid>
          <Section>
            <Columns>
              <Columns.Column size={12}>
                <Content size="medium">
                  <h1 className="title">Bienvenido!</h1>
                  <p>
                    Registrate en nuestro sistema para poder cargar tu solicitud de insumos
                    que nosotros nos encargaremos de derivarla a la organización correspondiente.
                  </p>
                </Content>
                <figure className="image is-16by9">
                  <img src={banner} alt="insumos médicos" />
                </figure>
              </Columns.Column>
            </Columns>
          </Section>
        </Container>
      </Hero.Body>
    </Hero>
  </>
);

export default Home;
