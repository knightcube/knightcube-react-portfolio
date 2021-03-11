import React from 'react'
import {Card,Col,Button} from 'react-bootstrap'
import logo_one from '../../images/round_logo_xrdi.png'
import styles from './Books.css'

const BookItemLayout = (props) => {
    return (
        <Col className="work-col col-lg-4 col-md-6 col-sm-12">
            <a href="https://google.com" target="_blank">
                <img href="https://google.com" target="_blank" src={props.message.thumbnailUrl} className="book-img" alt={props.message.title}></img>
            </a>
            <h5  className="book-title">
                <a href="https://google.com" target="_blank">
                    {props.message.title}
                </a>
            </h5>
            <p className="book-author">- {props.message.author}</p> 
        </Col>
    )
}

export default BookItemLayout
