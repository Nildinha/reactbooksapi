import React, { useState } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import styles from '../Cadastrar/styles.module.css';

const initialValue = {
    title: '',
    image: '',
    price: 0,
    url: '',
};


function Cadastrar() {
    const [values, setValues] = useState(initialValue);

    const navigate = useNavigate();

    function onSubmit(ev) {
        ev.preventDefault(); // não execulta o comportamento do defourm
        const url = '/books';

        api.post(url, values)
           .then(() =>{
                navigate('/');
           })


    }
    function onChange(ev) {
        const {name, value } = ev.target
        // console.log({name, value});

        setValues({ ...values, [name]: value })
        // console.log({value});


    }


    return (
        <>
            <h1>Cadastrar</h1>
            <form onSubmit={onSubmit}>
                <div className={styles.booksFormGroup}>
                    <label htmlFor="title">Titulo</label>
                    <input type="text" id="title" name="title" onChange={onChange} />
                </div>
                <div className={styles.booksFormGroup}>
                    <label htmlFor="url">Url do livro</label>
                    <input type="text" id="url" name="url" onChange={onChange} />
                </div>
                <div className={styles.booksFormGroup}>
                    <label htmlFor="image">Url/Image</label>
                    <input type="text" id="image" name="image" onChange={onChange} />
                </div>
                <div className={styles.booksFormGroup}>
                    <label htmlFor="price">Price</label>
                    <input type="text" id="price" name="price" onChange={onChange} />
                </div>
                <button type="submit">Salvar</button>

            </form>
        </>
    )
}

export default Cadastrar;