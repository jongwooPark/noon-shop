import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';


const ProductAll = () => {


  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();


  const getProducts = async() => {

    let searchQuery = query.get("q") || "";

    //https://my-json-server.typicode.com/<your-username>/<your-repo>
    //let url = `http://localhost:5000/products?q=${searchQuery}`;
    let url = `https://my-json-server.typicode.com/jongwooPark/noon-shop/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data =  await response.json();
    console.log('data=', data);
      setProductList(data);
   
  };
  
  useEffect(()=>{
    getProducts();
    console.log('useEffect');
  },[query] );

  return (
    <div>
      <Container>
        <Row>
          {productList.map(menu=>(
             <Col lg={3} >   <ProductCard menu={menu}/>    </Col>
          ))}


        </Row>
      </Container>

    </div>
  )
}

export default ProductAll
