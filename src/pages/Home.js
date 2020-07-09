import React from 'react';
import {
  Hero, Container, Columns, Section, Content,
} from 'react-bulma-components';
import Navbar from '../components/Navbar';
import { isAuthenticated } from '../services/auth';
import banner from '../banner.jpg';

const Home = () => (
  <>
    <Navbar />
    <Hero>
      <Hero.Body>
        <Container>
          <Section>
            <Columns>
              <Columns.Column size="8" offset="2">
                <Content size="medium">
                  <h1 className="title">Bienvenido!</h1>
                  <p>
                    { isAuthenticated()
                      ? 'Carga tu solicitud de insumos que nosotros nos encargaremos de derivarla a la organización correspondiente.'
                      : 'Registrate en nuestro sistema para poder cargar tu solicitud de insumos que nosotros nos encargaremos de derivarla a la organización correspondiente.'}
                  </p>
                </Content>
              </Columns.Column>
            </Columns>
          </Section>
          <Columns>
            <Columns.Column size="8" offset="2">
              <figure className="image is-16by9">
                <img src={banner} alt="insumos médicos" />
              </figure>
            </Columns.Column>
          </Columns>
        </Container>
      </Hero.Body>
    </Hero>
  </>
);

export default Home;
