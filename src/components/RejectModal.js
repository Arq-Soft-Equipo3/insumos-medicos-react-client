import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal, Form, Button,
} from 'react-bulma-components';
import { reject } from '../services/applications';
import { getFormData } from '../helpers';

const RejectModal = ({ applicationId: id, show, handleClose }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const body = getFormData(event.target, { id });
    reject(body);
  };
  return (
    <Modal show={show} onClose={handleClose}>
      <Modal.Card>
        <Modal.Card.Head onClose={handleClose}>
          <Modal.Card.Title>Rechazar solicitud</Modal.Card.Title>
        </Modal.Card.Head>
        <form onSubmit={handleSubmit}>
          <Modal.Card.Body>
            <Form.Field>
              <Form.Label htmlFor="rejection_reason">Ingrese el motivo por el cual desea rechazar la solicitud:</Form.Label>
              <Form.Control>
                <textarea id="rejection_reason" name="rejection_reason" className="textarea" />
              </Form.Control>
            </Form.Field>
          </Modal.Card.Body>
          <Modal.Card.Foot>
            <Button submit color="primary" onClick={() => {}}>Guardar</Button>
            <Button color="white" onClick={handleClose}>Salir</Button>
          </Modal.Card.Foot>
        </form>
      </Modal.Card>
    </Modal>
  );
};

RejectModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default RejectModal;
