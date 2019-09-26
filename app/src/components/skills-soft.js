import React, {
    Component
} from 'react';

import { 
    Card, 
    Button, 
    CardBody,
    CardTitle, 
    CardText, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    ListGroup, 
    ListGroupItem
} from 'reactstrap';

import icon from '../assets/img/human.png';
import {
    humanSkills
} from '../data';
import '../styles/skills.css';

class HumanSkills extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
    }

    render(){
        return (
              <Card>
                <CardBody>
                    <img src={icon} alt='Soft Skills Icon'/>
                  <CardTitle>Human Skills</CardTitle>
                  <CardText>Communicating and Interacting with Others to Get the Job Done</CardText>
                  <Button onClick={this.toggle}>View More</Button>
                </CardBody>

                <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Soft Skills</ModalHeader>
                    <ModalBody>
                    <ListGroup flush>
                        {humanSkills.map(s => 
                        <ListGroupItem>
                            {s}
                        </ListGroupItem> 
                        )}
                    </ListGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
              </Card>
          );
    }
};

export default HumanSkills;