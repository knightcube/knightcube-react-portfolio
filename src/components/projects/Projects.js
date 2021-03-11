import React from 'react';
import {ProjectItems} from './ProjectItems';
import ProjectItemLayout from '../projects/ProjectItemLayout';
import {Row,Col,Card, Button,Tabs,Tab} from 'react-bootstrap';
import styles from './Projects.css'
import YouTube from '@u-wave/react-youtube';

class Projects extends React.Component{
    render(){
        const items = ProjectItems
        const chunk = (arr, chunkSize = 1, cache = []) => {
            const tmp = [...arr]
            if (chunkSize <= 0) return cache
            while (tmp.length) cache.push(tmp.splice(0, chunkSize))
            return cache
        }

        const projectItemChunks = chunk(items, 3);

        const rows = projectItemChunks.map((itemChunk, index) => {
            const projectCols = itemChunk.map((item, index) => {
                return (
                        <ProjectItemLayout message={item} ></ProjectItemLayout>
                );
            });

            return <Row className="" align="center">{projectCols}</Row>
        });

        return (
            <div>
                <h1 className="title">Projects</h1>
                <Tabs className="projects-tab" defaultActiveKey="arvr" id="uncontrolled-tab-example">
                <Tab eventKey="arvr" title="AR/VR">
                    <br></br>
                    {rows}
                </Tab>
                <Tab eventKey="android" title="Android">
                    <h2 className="android-projects">Android Projects</h2>
                </Tab>
                <Tab eventKey="misc" title="Miscellaneous">
                    <h2 className="misc-projects">Miscellaneous Projects</h2>
                </Tab>
                </Tabs>
            </div>
        )
    }

}

export default Projects
