import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Hero, Container, Section, Content, Columns, Message, Button,
} from 'react-bulma-components';
import { submitApplication } from '../services/applications';
import Navbar from '../components/Navbar';
import { getFormData } from '../helpers';
import MedicineField from '../components/MedicineField';
import AreaField from '../components/AreaField';
import SupplyField from '../components/SupplyField';

const responseMessages = {
  200: (
    <>
      Su solicitud fue cargada con éxito, puede seguir el estado de la misma
      {' '}
      <Link to="/mis-solicitudes">aquí</Link>
    </>
  ),
  404: 'Página no encontrada.',
  422: 'Revisá los datos ingresados y volvé a intentar.',
  409: 'El email ingresado ya fue registrado previamente.',
  500: 'Ocurrió un error en el servidor, intenta nuevamente.',
};

const ApplicationForm = () => {
  const [isMedicine, setIsMedicine] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const body = getFormData(event.target);
    submitApplication(body)
      .then((res) => [res.ok ? setIsSuccess : setIsError, res.status])
      .then(([fn, status]) => fn({ message: responseMessages[status] }));
    setIsLoading(false);
  };

  const enableMedicinePicker = () => setIsMedicine(true);
  const disableMedicinePicker = () => setIsMedicine(false);

  const handleChange = ({ target: { value } }) => (value === 'Medicamento' ? enableMedicinePicker() : disableMedicinePicker());

  return (
    <>
      <Navbar />
      <Hero>
        <Hero.Body>
          <Container>
            <Section>
              <Columns>
                <Columns.Column size={8} offset={2}>
                  <Content size="medium">
                    <h1 className="title">Cargá tu solicitud:</h1>
                    <p>
                      Completá el siguiente formulario para realizar tu solicitud, un administrador
                      la evaluará y la misma será derivada una organización capaz de generar el
                      insumo requerido.
                    </p>
                    <Columns>
                      <Columns.Column size={9} offset={1}>
                        <form style={{ backgroundColor: 'rgb(247, 247, 247)', padding: 20, borderRadius: 10 }} onSubmit={handleSubmit}>
                          { isError && (
                          <Message color="danger">
                            <Message.Body>{isError.message}</Message.Body>
                          </Message>
                          ) }
                          { isSuccess && (
                            <Message color="success">
                              <Message.Body>{isSuccess.message}</Message.Body>
                            </Message>
                          ) }
                          <SupplyField handleChange={handleChange} />
                          { isMedicine && <MedicineField /> }
                          <AreaField />
                          <Button submit fullwidth outlined size="medium" color="info" loading={isLoading}>Enviar</Button>
                        </form>
                      </Columns.Column>
                    </Columns>
                  </Content>
                </Columns.Column>
              </Columns>
            </Section>
          </Container>
        </Hero.Body>
      </Hero>
    </>
  );
};

export default ApplicationForm;
