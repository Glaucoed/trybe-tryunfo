import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    // hasTrunfo: true,
    isSaveButtonDisabled: true,
    data: [],
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
      // hasTrunfo: true,
      isSaveButtonDisabled: true,
    }));
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
    } = this.state;

    return (
      <>
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
      </>
    );
  }
}

export default App;
