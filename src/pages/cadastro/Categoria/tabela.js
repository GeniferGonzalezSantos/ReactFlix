import React, { Component } from 'react';

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>Nome</th>
        <th>Descrição</th>
        <th>Editar</th>
        <th>Remover</th>
      </tr>
    </thead>
  );
}

const TableBody = props => {
  const valueInputForm = props.valueInput.map((el) => {
    return (
      <tr key={el}>
        <td>{el.nome}</td>
        <td>{el.descrição}</td>
        <td>{el.editar}</td>
        <td><button onClick={() => { props.removeAutor(linha.id)}} className="waves-effect waves-light indigo lighten-2 btn">Remover</button></td>
      </tr>
    )
  });

  return (
    <tbody>
      {valueInputForm}
    </tbody>

  );

}

class Tabela extends Component {
  render() {
    const { autores, removeAutor } = this.props;
    return (
      <table class="centered highlight">
        <TableHead />
        <TableBody autores={autores} removeAutor={removeAutor} />
      </table>

    )
  };
}


export default Tabela;