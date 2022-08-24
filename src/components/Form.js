import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (

      <form>
        <div>
          <label htmlFor="name-id">
            Nome da carta:
            <input
              data-testid="name-input"
              id="name-id"
              name="cardName"
              type="text"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="description-id">
            Descrição:
            <textarea
              data-testid="description-input"
              id="description-id"
              name="cardDescription"
              type="textarea"
              value={ cardDescription }
              onChange={ onInputChange }
              rows="5"
              cols="33"
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr1-id">
            Atributo 1:
            <input
              data-testid="attr1-input"
              id="attr1-id"
              name="cardAttr1"
              type="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr2-id">
            Atributo 2:
            <input
              data-testid="attr2-input"
              id="attr2-id"
              name="cardAttr2"
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr3-id">
            Atributo 3:
            <input
              data-testid="attr3-input"
              id="attr3-id"
              name="cardAttr3"
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="image-id">
            Insira a URL:
            <input
              data-testid="image-input"
              id="image-id"
              name="cardImage"
              type="text"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="option-id">
            Seleciona a Raridade:
            <select
              data-testid="rare-input"
              name="cardRare"
              id="option-id"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="checkbox-id">
            <input
              data-testid="trunfo-input"
              type="checkbox"
              checked={ cardTrunfo }
              name="cardTrunfo"
              id="checkbox-id"
              onChange={ onInputChange }
            />
            Super Trunfo
          </label>
        </div>
        <button
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ () => onSaveButtonClick({ cardName,
            cardDescription,
            cardAttr1,
            cardAttr2,
            cardAttr3,
            cardImage,
            cardRare,
            cardTrunfo }) }
          data-testid="save-button"
        >
          Salvar

        </button>
      </form>
    );
  }
}
Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.string,
  isSaveButtonDisabled: PropTypes.string,
}.isRequired;
