import React from 'react'
import { Card } from 'react-bootstrap'
const DisplayNews = (props) => {
  return (
    <div>
      <Card style={{ width: "20rem", margin: "10px" }} border="primary" className='bg-dark text-light mb-3 d-inline-block'>
        <Card.Img
          src={props.image_source}
          style={{ height: "10rem", width: "20rem", filter: "brightness(0.3) contrast(1.2)" }}
        ></Card.Img>
        <Card.ImgOverlay  className="text-light">{props.title}</Card.ImgOverlay>{/* text over image */}
        <Card.Body> 
            {props.content}
            <br/>
            <a href={props.news_link}>Read more</a>
        </Card.Body>
      </Card>
    </div>
  )
}

export default DisplayNews
