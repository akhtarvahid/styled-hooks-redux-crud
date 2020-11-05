import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import './create.scss';
import { ADD_ITEM } from '../../utils/constant';

function Create({ status, handleClose,
    handleChange, submitCreateForm, state }) {
    const { title, description } = state;
    return (
        <Modal show={status} onHide={handleClose} animation={true} centered>
            <Modal.Header closeButton className='modal-content_add'>
                <Modal.Title>{ADD_ITEM}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={submitCreateForm}>
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
                <Button variant="success" onClick={submitCreateForm}>
                    Save
          </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Create;