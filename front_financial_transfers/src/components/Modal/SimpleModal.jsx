import React, { Component } from 'react';
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import customModalStyle from '../../assets/css/custom-modal.css'


class SimpleModal extends Component {

    constructor(props) {
        super(props)

        this.state = {
            modalTitle: '',
            modalDescription: '',
            modalMsg: '',
            modalButtonHome:false,
            historyObj:''
        }

        this.modalGetInitialState = this.modalGetInitialState.bind(this)
        this.modalClose = this.modalClose.bind(this)
        this.modalOpen = this.modalOpen.bind(this)
        this.goToTheHome = this.goToTheHome.bind(this)
    }

    goToTheHome(){
        this.state.historyObj.push('/');
    }

    modalGetInitialState() {
        return { showModal: false };
    }
    modalClose() {
        this.setState({ showModal: false });
    }
    modalOpen(modalTitle, modalDescription, modalMsg, modalButtonHome, historyObj) {
        
        this.setState({ 
                modalTitle: modalTitle,
                modalDescription: modalDescription,
                modalMsg: modalMsg,
                modalButtonHome: modalButtonHome,
                historyObj: historyObj,
                showModal: true

            }
        );
    }

    render() {
        return (
            <Modal show={this.state.showModal} onHide={this.modalClose}>
                <Modal.Header closeButton>
                    <Modal.Title><span className="font_1">{this.state.modalTitle}</span></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span className="font_2">
                        <h5>{this.state.modalDescription}</h5>
                        <p>{this.state.modalMsg}</p>
                    </span>
                </Modal.Body>
                <Modal.Footer>
                    {this.state.modalButtonHome ? (
                        <Button variant="success" onClick={this.goToTheHome}>Home</Button>
                    ) : (
                        <Button variant="success" onClick={this.modalClose}>Fechar</Button>
                    )}
                </Modal.Footer>
            </Modal>
        )
    }
}

export default SimpleModal