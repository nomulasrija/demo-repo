import React from 'react'
import img1 from '../Images/1.jpg'
import img2 from '../Images/2.jpg'
import img3 from '../Images/3.jpg'
import img4 from '../Images/4.jpg'
import img5 from '../Images/5.jpg'
import Carousel  from 'react-bootstrap/Carousel'
function Slideshow() {
 
    return (
      < div className='' >
        <Carousel>
          <Carousel.Item>
            <img className="img-fluid w-100" src={img1} alt="..." />
          </Carousel.Item >

          <Carousel.Item >
            <img className="img-fluid  w-100" src={img3} alt="..." />
          </Carousel.Item >

          <Carousel.Item>
            <img className="img-fluid w-100" src={img2} alt="..." />
          </Carousel.Item >

          <Carousel.Item>
            <img className="img-fluid w-100" src={img5} alt="..." />
          </Carousel.Item >

          <Carousel.Item >
            <img className="img-fluid  w-100" src={img4} alt="..." />
          </Carousel.Item >
        </Carousel >
      </div >
  )
}

export default Slideshow;