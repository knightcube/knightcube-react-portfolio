import React from 'react';
import { WorkItems } from './WorkItems';
import { Card, Button, Badge, Container, Row, Col, CardColumns } from 'react-bootstrap';
import styles from './Work.css';
import logo_one from '../../images/round_logo_xrdi.png'
import WorkItemLayout from './WorkItemLayout';
import WorkItemLayout2 from './WorkItemLayout2';

class Work extends React.Component {
    render() {
        const items = WorkItems
        const chunk = (arr, chunkSize = 1, cache = []) => {
            const tmp = [...arr]
            if (chunkSize <= 0) return cache
            while (tmp.length) cache.push(tmp.splice(0, chunkSize))
            return cache
        }

        const workItemChunks = chunk(items, 3);

        const rows = workItemChunks.map((itemChunk, index) => {
            const workCols = itemChunk.map((item, index) => {
                return (
                        <WorkItemLayout message={item} ></WorkItemLayout>
                );
            });

            return <Row className="" align="center">{workCols}</Row>
        });

        return (
            <div>
                <h1 className="title">Work</h1>
                {rows}
            </div>
        )
    }
}

export default Work
