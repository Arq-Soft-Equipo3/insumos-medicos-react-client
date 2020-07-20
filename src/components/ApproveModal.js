import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bulma-components';
import { toast } from 'react-toastify';
import { getFormData, verifySession } from '../helpers';
import { approve } from '../services/applications';
import ProviderField from './Forms/Fields/ProviderField';

const ApproveModal = ({
  application, show, handleClose, handleApprove,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const body = getFormData(event.target, {
      id: application.applicationID.S,
      filler: application.filler.S,
    });
    approve(body)
      .then(verifySession)
      .then((res) => {
        if (res.ok) {
          handleApprove(application.applicationID.S, (JSON.parse(body)).provider);
          handleClose();
          toast.success('La solicitud fue aprobada con éxito');
        }
      });
  };

  return (
    <Modal show={show} onClose={handleClose}>
      <Modal.Card>
        <Modal.Card.Head onClose={handleClose}>
          <Modal.Card.Title>Aprobar solicitud</Modal.Card.Title>
        </Modal.Card.Head>
        <form onSubmit={handleSubmit}>
          <Modal.Card.Body>
            <ProviderField />
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

const S = { S: PropTypes.string };

ApproveModal.propTypes = {
  application: PropTypes.shape({
    applicationID: PropTypes.shape(S),
    filler: PropTypes.shape(S),
  }),
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleApprove: PropTypes.func.isRequired,
};

export default ApproveModal;
