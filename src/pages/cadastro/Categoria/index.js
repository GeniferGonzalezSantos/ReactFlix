import React from 'react';
import PageDefault from '../../../components/PageDefault';
import InputForm from '../../../components/Form/components/Input';
import ButtonForm   from '../../../components/Form/components/ButtonForm';
import Select from '../../../components/Form/components/Select';
import TextArea from '../../../components/Form/components/TextArea';
import '../../../components/Form/styles.css';

import { Link } from 'react-router-dom';

function CadastroCategoria() {
  return (
    <PageDefault>
      <h1>Nova Categoria</h1>
      <form>
        <fieldset>
          <label for="nome">
            <InputForm type='text' placeholder='Nome' />
          </label>
          <label for="área de texto">
            <TextArea type='text' placeholder='Vídeo' />
          </label>
          <label for="seleção de cores">
            <Select />
          </label>
          <label for="código de seguraça">
            <InputForm type='text' placeholder='Código de segurança' />
          </label>
          <div className='btn-position'>
          <ButtonForm className='buttonColor'>Salvar</ButtonForm>
          <ButtonForm>Limpar</ButtonForm>
        </div>
        </fieldset>
      </form>

      <Link to="/">
        Ir para home
    </Link>
    </PageDefault>
  )
};


export default CadastroCategoria;