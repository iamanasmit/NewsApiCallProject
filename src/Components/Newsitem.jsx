import React from 'react'
import { Card } from 'react-bootstrap'
const Newsitem = (props) => {
  return (
    <div style={{border: "1px solid black", borderRadius: "5px", overflow: "hidden"}}>      
      <Card style={{ width: "20rem", margin: "10px" }} border="primary" className='bg-dark text-light mb-3 d-inline-block'>
        <Card.Img
          src={props.image_source}
          style={{ height: "10rem", width: "20rem", filter: "brightness(0.3) contrast(1.2)" }}
        ></Card.Img>
        <Card.ImgOverlay  className="text-light">{props.title}</Card.ImgOverlay>{/* text over image */}
        <Card.Body> 
            {props.content}
            <br/>
        </Card.Body>
      </Card>
      <a 
        href={props.news_link} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{
          display: "block",
          width: "100%",
          textAlign: "center",
          padding: "10px",
          backgroundColor: "#007bff",
          color: "white",
          textDecoration: "none",
          borderRadius: "0 0 5px 5px",
          fontWeight: "bold"
        }}
      >
        Read more
      </a>
    </div>
  )
}

export default Newsitem
