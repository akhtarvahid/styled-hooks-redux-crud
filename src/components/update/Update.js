import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import './update.scss';
import { UPDATE_ITEM } from '../../utils/constant';

function Update({ status, handleClose, handleChange,
  submitUpdateForm, state }) {
  const { title, description } = state;
  return (
      <Modal show={status} onHide={handleClose} animation={true} centered>
        <Modal.Header closeButton className='modal-content_update'>
          <Modal.Title>{UPDATE_ITEM}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitUpdateForm}>
            <Form.Group controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Title"
                name="title"
                value={title || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Description"
                name="description"
                value={description || ''}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={submitUpdateForm}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default Update;