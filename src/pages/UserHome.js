import React from 'react';
import {
  Hero, Container, Section, Columns, Content,
} from 'react-bulma-components';
import banner from '../banner.jpg';
import { isAuthenticated } from '../services/auth';

const UserHome = () => (
  <Hero>
    <Hero.Body>
      <Container fluid>
        <Section>
          <Columns>
            <Columns.Column size={12}>
              <Content size="medium">
                <h1 className="title">Bienvenido!</h1>
                <p>
                  { isAuthenticated()
                    ? 'Carga tu solicitud de insumos que nosotros nos encargaremos de derivarla a la organización correspondiente.'
                    : 'Registrate en nuestro sistema para poder cargar tu solicitud de insumos que nosotros nos encargaremos de derivarla a la organización correspondiente.'}
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
);

export default UserHome;
