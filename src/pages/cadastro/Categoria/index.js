import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/Form/components/Input';
import Button from '../../../components/Form/components/ButtonForm';
import TextArea from '../../../components/Form/components/TextArea';
import '../../../components/Form/styles.css';

import { Link } from 'react-router-dom';

function CadastroCategoria() {

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);


  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function showName(infosDoEvento) {
    const { getAttribute, value } = infosDoEvento.target
    setValue(
      getAttribute('name'),
      value
    );
  }

  return (
    <PageDefault>
      <h1>Nova Categoria</h1>
      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);
        setValues({});
      }}>
        <fieldset>

          <FormField
            label="Nome da Categoria"
            name='nome'
            onChange={showName}
            type='text'
            value={values.nome}
          />

          <TextArea type='text'  />

          <FormField 
            label="Cor"
            name='cor'
            onChange={showName}
            type='color'
            value={values.cor} />

          <FormField 
            label="Código de segurança"
            name='código de segurança'
            onChange={showName}
            type='text'
            value={values.codigo} />

            <Button>Salvar</Button>
            <Button>Remover</Button>
            
         
        </fieldset>
      </form>

      <ul >
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
    </Link>
    </PageDefault>
  )
};


export default CadastroCategoria;