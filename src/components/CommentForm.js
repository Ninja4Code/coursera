import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Label, Row, Col, } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { REQUIRED, MIN_LENGTH, MAX_LENGTH } from '../shared/validationUtils';

export default class CommentForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isModalOpen: false
        };        
        this.toggleModal = this.toggleModal.bind(this);  
        this.handleSubmit = this.handleSubmit.bind(this);                
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        }); 
    }
    handleSubmit(values){
        this.toggleModal();
        const {rating, author, comment} = values;       
        const {postComment, dishId} = this.props;       
        postComment(dishId, parseInt(rating), author, comment);
    }
    render() {
        return (
            <div className="container">                
                <Button outline onClick={this.toggleModal}>
                <span className="fa fa-edit fa-lg"></span> Submit Comment
                 </Button>                                   
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>                          
                            <Row className="form-group">
                                <Col md={10}>
                                    <Label htmlFor="rating" md={2} className="control-label">Rating</Label>                                
                                    <Control.select model=".rating" name="rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>                                        
                                    </Control.select>                                     
                                </Col> 
                            </Row>
                            <Row className="form-group">
                                <Col md={10}>
                                    <Label htmlFor="author" md={2}>Author</Label>                                
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            REQUIRED, MIN_LENGTH: MIN_LENGTH(3), MAX_LENGTH: MAX_LENGTH(15)
                                        }}                                        
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            REQUIRED: 'Required',
                                            MIN_LENGTH: 'Must be greater than 2 characters',
                                            MAX_LENGTH: 'Must be 15 characters or less'
                                        }}
                                    />                                    
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={10}>
                                    <Label htmlFor="comment" md={2}>Comment</Label>                                
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6" className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={10}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>                
            </div>
        );
    }  
}