import React from 'react';
import { Col, Button } from 'react-bootstrap';
import logo_one from '../../images/round_logo_xrdi.png'

const WorkItemLayout = (props) => {
    return (
        <Col className="work-col col-lg-4 col-md-6 col-sm-12">
            <div style={{ width: '20rem' }} className="work-card text-white">
                <div>
                    <img src={props.message.logoUrl} alt="logo" className="work-img"></img>
                    <a href={props.message.companyUrl}>
                        <h2 className="work-card-title" >{props.message.companyName}</h2>
                    </a>
                    <h4 >{props.message.role}</h4>
                    <p className="work-card-description">{props.message.description}</p>
                    <Button variant="info">Go somewhere</Button>
                </div>
            </div>
        </Col>
    )
}

export default WorkItemLayout
