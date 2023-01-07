import React, { useEffect, useState } from 'react'
import { Col, Container, Row,DropdownButton, Dropdown, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
//http://localhost:5000/products/2


const ProductDetail = () => {


  let {id}  = useParams();

  const [prodect, setProduct] = useState(null);

  const getProductDetail =  async() => {
    //let url = `http://localhost:5000/products/${id}`;
    let url = `https://my-json-server.typicode.com/jongwooPark/noon-shop/products/${id}`;
    let respose = await fetch(url);
    let data = await respose.json();
    console.log('data=', data);

    setProduct(data);
  };

  useEffect(()=>{

    getProductDetail();

  },[]);
  return (
    <div>

      <Container>
          <Row>
              <Col className='product-img'>
               <img src= {prodect?.img} />
              </Col>
              <Col>
                <div> {prodect?.title} </div>
                <div> {prodect?.price} </div>
                <div>
                  <DropdownButton id="dropdown-basic-button" title="사이즈선택">
                    {prodect?.size.map((item)=>(
                       <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                    ))}
                    

                  </DropdownButton>
                </div>
                <div>
                <Button variant="dark">추가</Button>{' '}
                </div>

              </Col>
            </Row>
      </Container>

    </div>
  )
}

export default ProductDetail
