import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/Form/components/Input';
import Button from '../../../components/Form/components/ButtonForm';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';
import '../../../components/Form/styles.css';


function CadastroVideo() {

  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { showName, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>

      <h1 className="title">
        Cadastro de Vídeo
      </h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            history.push('/');
          });
      }}
      >
        <fieldset>

          <FormField
            label="Título do Vídeo"
            name="titulo"
            value={values.titulo}
            onChange={showName}
          />

          <FormField
            label="URL"
            name="url"
            value={values.url}
            onChange={showName}
          />

          <FormField
            label="Categoria"
            name="categoria"
            value={values.categoria}
            onChange={showName}
            suggestions={categoryTitles}
          />

          <div className="btn-position">
            <Button>Cadastrar</Button>
          </div>

        </fieldset>
      </form>

      <div className="link">
        <Link to="/cadastro/categoria" >
          Cadastrar Categoria
        </Link>
      </div>

    </PageDefault>
  );
}

export default CadastroVideo;