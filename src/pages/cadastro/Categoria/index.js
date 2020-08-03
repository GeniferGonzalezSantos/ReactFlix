import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault/index';
import FormField from '../../../components/Form/components/Input';
import Button from '../../../components/Form/components/ButtonForm';
import TextArea from '../../../components/Form/components/TextArea';
import '../../../components/Form/styles.css';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function showName(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

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
      <h1>Nova Categoria</h1>
      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);
        setValues(valoresIniciais);
      }}
      >
        <fieldset>
          <FormField
            label="Nome da Categoria"
            name="nome"
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
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}${indice}`}>
            {categoria.nome}
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
