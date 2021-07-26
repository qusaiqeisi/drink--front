import React, { Component } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'

export class UpdateForm extends Component {
    render() {
        return (
            <div>
                <Modal show={true} >
                    <Modal.Header >
                        <Modal.Title>Drink </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={(e) => { this.props.updateFavDrink(e) }}>

                            <Form.Label for='fname'>Name</Form.Label>
                            <Form.Control type="text" value={this.props.strDrink} onChange={(e) => { this.props.onChangeName(e) }} />


                            <Form.Label for='lname'>Img</Form.Label>
                            <Form.Control type="text" value={this.props.strDrinkThumb} onChange={(e) => { this.props.onChangeImg(e) }} />


                            <Form.Label for='lname'>ID</Form.Label>
                            <Form.Control type="text" value={this.props.idDrink} onChange={(e) => { this.props.onChangeNumber(e) }} />


                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>

                </Modal>
            </div>
        )
    }
}

export default UpdateForm
