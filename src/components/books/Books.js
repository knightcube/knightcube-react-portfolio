import React from 'react'
import {BookItems} from '../books/BookItems'
import {Card,Col,Button,Tabs,Tab,Row} from 'react-bootstrap'
import BookItemLayout from './BookItemLayout'
import styles from '../projects/Projects.css'

class Books extends React.Component{
    render(){
        const items = BookItems
        const chunk = (arr, chunkSize = 1, cache = []) => {
            const tmp = [...arr]
            if (chunkSize <= 0) return cache
            while (tmp.length) cache.push(tmp.splice(0, chunkSize))
            return cache
        }

        const bookItemChunks = chunk(items, 3);

        const rows = bookItemChunks.map((itemChunk, index) => {
            const bookCols = itemChunk.map((item, index) => {
                return (
                        <BookItemLayout message={item} ></BookItemLayout>
                );
            });

            return <Row className="" align="center">{bookCols}</Row>
        });

        return (
            <div>
                <h1 className="title">Books</h1>
                <p className="title">I love reading books. Books have shaped me into someone completely different from what I was few years ago.</p>
                {rows}
            </div>
        )
    }
}

export default Books