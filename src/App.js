import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Search from './components/Search';
// import './App.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    data: [],
    saveInputSearch: '',
    optionSelect: '',
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      const { cardName,
        cardImage,
        cardRare,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
      } = this.state;

      const numeroMinAttr = 0;
      const numeroMaxAttr = 90;
      const numeroMaxTotal = 210;
      const totalAtributos = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
      const resultadoTotal = (totalAtributos <= numeroMaxTotal);
      const menorMaxAttr1 = (Number(cardAttr1) <= numeroMaxAttr);
      const menorMaxAttr2 = (Number(cardAttr2) <= numeroMaxAttr);
      const menorMaxAttr3 = (Number(cardAttr3) <= numeroMaxAttr);
      const maiorMinAttr1 = (Number(cardAttr1) >= numeroMinAttr);
      const maiorMinAttr2 = (Number(cardAttr2) >= numeroMinAttr);
      const maiorMinAttr3 = (Number(cardAttr3) >= numeroMinAttr);

      if (cardName
        && cardImage
        && cardRare
        && cardDescription
        && resultadoTotal
        && cardAttr1
        && cardAttr2
        && cardAttr3
        && menorMaxAttr1
        && menorMaxAttr2
        && menorMaxAttr3
        && maiorMinAttr1
        && maiorMinAttr2
        && maiorMinAttr3
      ) {
        this.setState({
          isSaveButtonDisabled: false,
        });
      } else {
        this.setState({
          isSaveButtonDisabled: true,
        });
      }
    });
  };

  onSaveButtonClick = (newState) => {
    this.setState((estadoAnterior) => ({
      data: [...estadoAnterior.data, newState],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,

    }), () => {
      const { data } = this.state;
      this.setState({
        hasTrunfo: data.some(({ cardTrunfo }) => cardTrunfo),
      });
    });
  };

  removeCard = (index) => {
    const { data } = this.state;
    data.slice();
    const { cardTrunfo } = data[index];
    if (cardTrunfo) {
      this.setState({
        hasTrunfo: false,
      });
    }

    data.splice(index, 1);
    this.setState({ data });
  };

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      data,
      hasTrunfo,
      saveInputSearch,
      optionSelect,
    } = this.state;

    return (
      <>
        <div className="main">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
            hasTrunfo={ hasTrunfo }

          />

          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
        <h1>Todas as Cartas</h1>

        <Search
          saveInputSearch={ saveInputSearch }
          onInputChange={ this.onInputChange }
          optionSelect={ optionSelect }
        />

        <ul>
          {
            data
              .filter((card) => card.cardName.includes(saveInputSearch))
              .filter((card) => (optionSelect
                ? card.cardRare === optionSelect
                : card))
              .map((card, index) => (
                <li key={ card.cardName }>
                  <Card
                    { ...card }
                  />
                  <button
                    data-testid="delete-button"
                    onClick={ () => this.removeCard(index) }
                    type="button"
                  >
                    Excluir

                  </button>
                </li>))
          }

        </ul>
      </>
    );
  }
}

export default App;
