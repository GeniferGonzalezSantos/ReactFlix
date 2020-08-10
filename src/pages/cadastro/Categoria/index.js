import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault/index';
import FormField from '../../../components/Form/components/Input';
import Button from '../../../components/Form/components/ButtonForm';
import TextArea from '../../../components/Form/components/TextArea';
import useForm from '../../../hooks/useForm';
import '../../../components/Form/styles.css';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  
  const { showName, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);
  


  useEffect(() => {

    const URL_TOP = 'http://localhost:8080/categorias';
      
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  },[]);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria
        {values.nome}
      </h1>

      <form onSubmit={function showName(e) {
        e.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);
        clearForm();
      }}
      >
        <fieldset>
          <FormField
            label="Nome da Categoria"
            name="titulo"
            onChange={showName}
            type="text"
            value={values.nome}
          />

          <TextArea type="text" />

          <FormField
            label="Cor"
            name="cor"
            onChange={showName}
            type="color"
            value={values.cor}
          />

          <FormField
            label="Código de segurança"
            name="código de segurança"
            onChange={showName}
            type="text"
            value={values.codigo}
          />

          <div className="btn-position">
            <Button style={{ background: '#BF6E50' }}>Salvar</Button>
            <Button>Remover</Button>
          </div>

        </fieldset>
      </form>
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
