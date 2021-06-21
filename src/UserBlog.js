import React, { useState } from 'react'
import {Card, Button, Tab, Tabs } from 'react-bootstrap';
import './CSS/Userblog.scss';
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Data from "./Data/Data.js";
import UserData from "./Data/UserData.js"
import UserImg from "./img/userPic/USER_1.jpg"

function UserBlog() {
    const [key, setKey] = useState('home');
    const [data, setData] = useState(Data);
    const [userData, setUserData] = useState(UserData);
    const [userImg, setUserImg] = useState(UserImg);
    return (
        <div className="Container">
            <div className="ProfileBox">
                <img className="ProfilePic" src={ userImg }></img>
                <div className="ProfileDetail">
                    <div className="TitleRow">
                        <h3 className="Nickname ttb_element">{userData[0].userName}</h3>
                        <Button className="ttb_element" variant="outline-info">팔로우</Button>
                        <button className="utilBtn ttb_element"><FontAwesomeIcon icon={faEllipsisH}/></button>
                    </div>
                    <div className="TitleCFF">
                        <p>게시물 5</p>
                        <p>팔로워 5</p>
                        <p>팔로우 5</p>
                    </div>
                    <div className="Title_comment">
                        <p>입력해주세요.</p>
                    </div>
                </div>
            </div>
            <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)}>
                <Tab eventKey="home" title="Home">
                    <div className="CardBox">
                        {
                            data.map(function(e, i) {
                                return ( 
                                    // console.table(e)
                                    <Cards Data={e} Num={i} key={i}/>
                                );
                            })
                        }
                    </div>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                </Tab>
            </Tabs>
        </div>
    )
    function Cards(props){
        return(
            <Card >
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{props.Data.title}</Card.Title>
                    <Card.Text>
                    {props.Data.content}
                    </Card.Text>
                    <small className="card_Writer" style={{marginBottom : '3px'}}>{"by "+props.Data.createby}</small>
                    <Card.Footer>
                        <small className="text-muted">{props.Data.createDate}</small>
                    </Card.Footer>
                </Card.Body>
            </Card>
        );
    }
}

// render(<ControlledTabs />);

export default UserBlog
