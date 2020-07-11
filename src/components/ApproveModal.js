import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal, Form, Icon, Button,
} from 'react-bulma-components';
import { renderOption, getFormData } from '../helpers';
import { approve } from '../services/applications';

const ApproveModal = ({ application, show, handleClose }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const body = getFormData(event.target, {
      id: application.applicationID.S,
      filler: application.filler.S,
    });
    approve(body);
  };

  return (
    <Modal show={show} onClose={handleClose}>
      <Modal.Card>
        <Modal.Card.Head onClose={handleClose}>
          <Modal.Card.Title>Aprobar solicitud</Modal.Card.Title>
        </Modal.Card.Head>
        <form onSubmit={handleSubmit}>
          <Modal.Card.Body>
            <Form.Field>
              <Form.Label htmlFor="provider">Seleccione un proveedor:</Form.Label>
              <Form.Control iconLeft>
                <div className="select is-fullwidth">
                  <select id="provider" name="provider" required>
                    <option value="">Seleccione un proveedor</option>
                    {['A', 'B', 'C'].map((e, i) => renderOption(e, e, i))}
                  </select>
                </div>
                <Icon size="small" align="left"><i className="fas fa-medkit" /></Icon>
              </Form.Control>
            </Form.Field>
          </Modal.Card.Body>
          <Modal.Card.Foot style={{ textAlign: 'right' }}>
            <Button submit color="success" onClick={() => {}}>Guardar</Button>
            <Button color="info" onClick={handleClose}>Salir</Button>
          </Modal.Card.Foot>
        </form>
      </Modal.Card>
    </Modal>
  );
};

ApproveModal.propTypes = {
  applicationId: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ApproveModal;
