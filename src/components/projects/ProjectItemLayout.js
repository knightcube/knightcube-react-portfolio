import React from 'react'
import {Card,Col,Button} from 'react-bootstrap'
import YouTube from '@u-wave/react-youtube';

const ProjectItemLayout = (props) => {
    return (
        <Col className="work-col col-lg-4 col-md-6 col-sm-12">
            <Card border="info" bg="secondary" style={{ width: '21rem' }}>
                <YouTube video={props.message.videoId} autoplay height="250px"/>
                <Card.Body>
                    <Card.Title className="project-item-title">Card Title</Card.Title>
                    <Card.Text className="project-item-description">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProjectItemLayout
