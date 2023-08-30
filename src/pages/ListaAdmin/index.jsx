import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Admin from '../../components/Admin';
import api from '../../services/api';
import styles from '../Cadastrar/styles.module.css';
import { useNavigate, Link } from 'react-router-dom';



const Container = styled.div`
  max-width: 960px;
  margin: 30px auto;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
`;

function ListaAdmin() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const url = '/books';

    const params = {};
    if (search) {
      params.title_like = search

      api.get('/books?_embed=books', { params })
        .then((response) => {
          // console.log(response)
          setBooks(response.data)
        })

    } else {

      api.get(url) // all
        .then((response) => {
          // console.log(response)
          setBooks(response.data)
        })

    }
  }, [search])


  return (
    <Container>
      <h1>Administar Lista de Livros</h1>
      <div>

        <input
          className={styles.listaSearchInput}
          type="search"
          placeholder='Buscar - Digite aqui  '
          value={search}
          onChange={(ev) => setSearch(ev.target.value)}
        />

        <button className={styles.Lista}>Cadastrar</button>

      </div>

      <ListContainer>
        {
          books.map(book => (<Admin
            key={book.id}
            books={book}

          />)
          )
        }

      </ListContainer>
    </Container>
  )
}

export default ListaAdmin;