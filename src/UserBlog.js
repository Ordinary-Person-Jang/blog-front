import React, { useState } from 'react'
import {Card, Button, Tab, Tabs } from 'react-bootstrap';
import './Userblog.scss';
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function UserBlog() {
    const [key, setKey] = useState('home');

    return (
        <div className="Container">
            <div className="ProfileBox">
                <img className="ProfilePic" src=""></img>
                <div className="ProfileDetail">
                    <div className="TitleRow">
                        <h3 className="Nickname">User</h3>
                        <Button variant="outline-info">메세지</Button>
                        <button className="utilBtn"><FontAwesomeIcon icon={faEllipsisH}/></button>
                    </div>
                </div>
            </div>
            <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)}>
            <Tab eventKey="home" title="Home">
            <div className="CardBox">
                <Card >
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>

                <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>

                <Card >
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>

                <Card >
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>

                <Card >
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </div>
            </Tab>
            <Tab eventKey="profile" title="Profile">
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
            </Tab>
            </Tabs>
        </div>
    )
}
// render(<ControlledTabs />);

export default UserBlog
