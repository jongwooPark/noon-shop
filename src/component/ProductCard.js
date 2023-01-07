import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({menu}) => {

  const navigate = useNavigate();

  const showDetail = () =>{

    navigate(`/product/${menu.id}`);

  }
  return (
    <div className='card' onClick={showDetail}>
        <img src={menu?.img} />
        <div>{menu?.choice == true ? "추천제품" : ""}</div>
        <div> {menu?.title}</div>
        <div>{menu?.price}원</div>
        <div>{menu?.new == true ? "신제품" : ""}</div>
   
    </div>
  )
}

export default ProductCard