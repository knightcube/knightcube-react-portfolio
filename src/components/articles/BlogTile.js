import React from 'react'
import styles from './Articles.css'


const BlogTile = (props) => {
    const { title, link, thumbnail, content, pubDate, categories } = props.blogData;

    function cleanTitle(checkTitle) {
        checkTitle = checkTitle.replace("amp;", "");
        return checkTitle
    }

    function truncateText(text, start, len) {
        return text.length > len ? text.slice(start, len) : text;
    }

    function toText(block) {
        let tag = document.createElement('div');
        tag.innerHTML = block;
        block = tag.innerText;
        return block
    }

    function convertDate(date) {
        let dateArray = date.slice(0, 10).split("-")
        let year = dateArray.shift();
        dateArray.push(year)
        return `Published: ${dateArray.join("/")}`;
    }

    function blogPost() {
        return <a target="_blank" rel="noopener noreferrer" href={link}>
            <div className="ImageContainer">
                <img src={thumbnail} className="Image" alt={truncateText(cleanTitle(title), 0, 60)}></img>
            </div>
            <div className="TDContainer">
                <h3>{title}</h3><br />
                <p>{truncateText(toText(content), 0, 200) + "...read more"}</p><br />
                <h6>{convertDate(pubDate)}</h6>
            </div>
        </a>

    }
    
    return (
        <div className="PostContainer">
            {blogPost()}
        </div>
    );
}

export default BlogTile
