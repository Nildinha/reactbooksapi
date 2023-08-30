import React from 'react'
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';

const ItemContainer = styled.div`
  border-radius: 4px;
  height:120px;
  width:600px;
  flex-direction: column;
  color:#29303b;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 10px;
  
`;

const Thumbnail = styled.img`
  width: auto;
  height: 100%;
  border: 0;
  vertical-align: middle;
  float: left;
  margin-right: 20px;
`

const Title = styled.div`
  font-weight: 1000;
  margin-bottom: 5px;
`;

const Price = styled.div`
  margin-bottom: 5px;
  column-gap: 50px;
`;

const ButtonEdit = styled.div`
     display: inline-block;
    margin-bottom: 20px;
    font-weight: 400;
     white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    border: 2px solid transparent;
    font-size: 14px;
    padding: 10px 15px;
    color: #fff;
    background-color: #28a464;
    border-color: #085516;
    border-radius: 20px;
    float: right;
    margin-top: -60px;
    margin-right: -100px;


`;

const ButtonDel = styled.div`
    display: inline-block;
    margin-bottom: 20px;
    font-weight: 400;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    border: 2px solid transparent;
    font-size: 14px;
    padding: 10px 15px;
    color: #fff;
    background-color: #28a464;
    border-color: #085516;
    border-radius: 20px;
    float: right;
    margin-top: -60px;
    margin-right: -200px;

`;

const ItemLink = styled.a`
  text-decoration: none;
`

export default function Admin({ books }) {
  return (
    <>

      <ItemContainer>
        <Thumbnail src={books.image} />
        <Title>{books.title.substring(0, 35)}</Title>
        <Price>{books.price}</Price>
          <ButtonEdit ><Link to={`/administrar/editar/${books.id}`}>Editar</Link></ButtonEdit>
        <ButtonDel><Link onClick={() => onDelete (books.id)}></Link>Deletar</ButtonDel>
      </ItemContainer>

    </>
  )
}
