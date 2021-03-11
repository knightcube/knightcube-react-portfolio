import React from 'react'
import styles from './WorkItemLayout2.css'
import logo_one from '../../images/round_logo_xrdi.png'

const WorkItemLayout2 = (props) => {
    return (
        <div className="work-detail-card mr-4 mr-md-4 ml-4 ml-md-4">
            <img src={logo_one} alt="logo"/>
           
            <a href={props.message.companyUrl}>
                <h2 className="company" >{props.message.companyName}</h2>
            </a>

            <h4 className="role">{props.message.role} </h4>
            <div className="work-summary">
                {props.message.description}
            </div>
            <div id="tags">
                <p>
                    <span id="tag">AR/VR</span>
                    <span id="tag">Front-end</span>
                    <span id="tag">Unity3D</span>
                    <span id="tag">C#</span>
                    <span id="tag">HTML</span>
                    <span id="tag">CSS</span>
                    <span id="tag">Python</span>
                    <span id="tag">Flask</span>
                    <span id="tag">Firebase</span>
                    <span id="tag">Code Analysis</span>
                    <span id="tag">Adobe XD</span>
                    <span id="tag">Git</span>
                    <span id="tag">Unit Testing</span>
                    <span id="tag">Design</span>
                    <span id="tag">Development</span>
                    <span id="tag">Deployment</span>
                </p>
            </div>
        </div>
    )
}

export default WorkItemLayout2
