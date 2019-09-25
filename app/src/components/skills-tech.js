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
    ListGroupItem, 
    Progress
} from 'reactstrap';

import icon from '../assets/img/tech.png';

import {
    techSkills
} from '../data';

class TechSkills extends Component {
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
            <div>
              <Card>
                <CardBody>
                    <img src={icon} alt='Additional Tech Skills Icon'/>
                  <CardTitle>Tech Utility Belt</CardTitle>
                  <CardText>Creating the look, feel and design of the site.</CardText>
                  <Button onClick={this.toggle}>View More</Button>
                </CardBody>

                <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Additional Tech Skills</ModalHeader>
                    <ModalBody>
                    <ListGroup flush>
                        {techSkills.map(s => 
                        <ListGroupItem>
                            {s.name}
                            {
                                s.value > 80 ? (
                                    <Progress multi>
                                        <Progress bar color="danger" value="20"></Progress>
                                        <Progress bar color="warning" value="20"></Progress>
                                        <Progress bar color="success" value="20"></Progress>
                                        <Progress bar color='info' value="20"></Progress>
                                        <Progress animated bar value="20">Mastered</Progress>
                                    </Progress>
                                ) : (s.value <= 80 && s.value > 60) ? (
                                    <Progress multi>
                                        <Progress bar color="danger" value="20"></Progress>
                                        <Progress bar color="warning" value="20"></Progress>
                                        <Progress bar color="success" value="20"></Progress>
                                        <Progress animated bar  color='info' value="20">Advanced</Progress>
                                    </Progress>
                                ) : (s.value <= 60 && s.value > 40) ? (
                                    <Progress multi>
                                        <Progress bar color="danger" value="20"></Progress>
                                        <Progress bar color="warning" value="20"></Progress>
                                        <Progress animated bar color="success" value="20">Novice</Progress>
                                    </Progress>
                                ) : (s.value <= 40 && s.value > 20) ? (
                                    <Progress multi>
                                        <Progress bar color="danger" value="20"></Progress>
                                        <Progress animated bar color="warning" value="20">Fundamentals</Progress>
                                    </Progress>
                                ) : (
                                    <Progress multi>
                                        <Progress animated bar color="danger" value="20">Newbie</Progress>
                                    </Progress>
                                )
                            }
                        </ListGroupItem> 
                        )}
                    </ListGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
              </Card>
            </div>
          );
    }
};

export default TechSkills;