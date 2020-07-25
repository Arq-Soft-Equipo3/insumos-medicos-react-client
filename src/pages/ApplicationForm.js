import React, { useState, useRef } from 'react';
import {
  Hero, Container, Section, Content, Columns, Button,
} from 'react-bulma-components';
import { toast } from 'react-toastify';
import { submitApplication } from '../services/applications';
import Navbar from '../components/Header/Navbar';
import { getFormData, verifySession } from '../helpers';
import SupplyField from '../components/Forms/Fields/SupplyField';
import AreaField from '../components/Forms/Fields/AreaField';
import MedicineField from '../components/Forms/Fields/MedicineField';

const responseMessages = {
  200: 'Su solicitud fue cargada con éxito.',
  404: 'Página no encontrada.',
  412: 'Ya existe una solicitud para esa combinación área/insumo en estado pendiente, a la brevedad la revisaremos.',
  422: 'Revisá los datos ingresados y volvé a intentar.',
  409: 'El email ingresado ya fue registrado previamente.',
  500: 'Ocurrió un error en el servidor, intenta nuevamente.',
};

const ApplicationForm = () => {
  const [isMedicine, setIsMedicine] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formElement = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const body = getFormData(event.target);
    submitApplication(body)
      .then(verifySession)
      .then(({ ok, status }) => [ok ? toast.success : toast.error, responseMessages[status]])
      .then(([toastFn, message]) => {
        toastFn(message);
        formElement.current.reset();
      })
      .finally(() => setIsLoading(false));
  };

  const enableMedicinePicker = () => setIsMedicine(true);
  const disableMedicinePicker = () => setIsMedicine(false);

  const handleChange = ({ target: { value } }) => (value === 'Medicamentos' ? enableMedicinePicker() : disableMedicinePicker());

  return (
    <>
      <Navbar />
      <Hero>
        <Hero.Body>
          <Container fluid>
            <Section>
              <Columns>
                <Columns.Column size={12}>
                  <Content size="medium">
                    <h1 className="title">Cargá tu solicitud:</h1>
                    <p>
                      Completá el siguiente formulario para realizar tu solicitud, un administrador
                      la evaluará y la misma será derivada una organización capaz de generar el
                      insumo requerido.
                    </p>
                    <form ref={formElement} style={{ backgroundColor: 'rgb(247, 247, 247)', padding: 20, borderRadius: 10 }} onSubmit={handleSubmit}>
                      <SupplyField handleChange={handleChange} />
                      { isMedicine && <MedicineField /> }
                      <AreaField />
                      <Button submit fullwidth outlined size="medium" color="info" loading={isLoading}>Enviar</Button>
                    </form>
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
