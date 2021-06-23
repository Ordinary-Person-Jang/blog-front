import React from 'react'
import { useState } from 'react';
import { Card, Button } from 'react-bootstrap'
import { faEllipsisV, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaCaretSquareDown } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './CSS/Contents.scss'
import Data from "./Data/Data.js";

function Contents() {
    const [data, setData] = useState(Data);

    return (
        <div className="Container">
            <div className="UtilBar">
                <div className="left_btn_box">
                    <a href="/"><FontAwesomeIcon icon={faChartLine}/> 인기글</a>
                    <a href="/recent"><FontAwesomeIcon icon={faClock}/> 최신</a>
                    <div className="selectbox">
                        <span>이번달</span>
                        <div className="dropdown-icon"><FaCaretSquareDown/></div>
                    </div>
                </div>
                <div className="right_btn_box"><FontAwesomeIcon icon={faEllipsisV}/></div>
            </div>
            <div className="CardBox">
                {
                    data.map(function(e, i) {
                        return(
                            <Cards Data={e} Num={i} key={i}/>
                        )
                    })
                }
            </div>
        </div>
    )
    
    function Cards(props){
        return(
            <Card>
                <Link to="/view/1">
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{props.Data.title}</Card.Title>
                        <Card.Text>
                        {props.Data.content}
                        </Card.Text>
                            <small className="text-muted">{props.Data.createDate}</small>
                        <Link to="/@DevJang">
                        <Card.Footer>
                            <small className="card_Writer" style={{marginBottom : '3px'}}>{"by "+props.Data.createby}</small>
                        </Card.Footer>
                        </Link>
                    </Card.Body>
                </Link>
            </Card>
        );
    }
}

export default Contents
