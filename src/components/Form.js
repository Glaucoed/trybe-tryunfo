import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="name-id">
            Nome da carta:
            <input
              data-testid="name-input"
              id="name-id"
              name="name"
              type="text"
              value="{valorDoEstateSemApas}"
              onChange="{funcaoDoComponentePai}"
            />
          </label>
        </div>
        <div>
          <label htmlFor="description-id">
            Descrição:
            <textarea
              data-testid="description-input"
              id="description-id"
              name="description"
              type="textarea"
              value="{valorDoEstateSemApas}"
              onChange="{funcaoDoComponentePai}"
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
              name="attr1"
              type="number"
              value="{valorDoEstateSemApas}"
              onChange="{funcaoDoComponentePai}"
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr2-id">
            Atributo 2:
            <input
              data-testid="attr2-input"
              id="attr2-id"
              name="attr2"
              type="number"
              value="{valorDoEstateSemApas}"
              onChange="{funcaoDoComponentePai}"
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr3-id">
            Atributo 3:
            <input
              data-testid="attr3-input"
              id="attr3-id"
              name="attr3"
              type="number"
              value="{valorDoEstateSemApas}"
              onChange="{funcaoDoComponentePai}"
            />
          </label>
        </div>
        <div>
          <label htmlFor="image-id">
            Insira a URL:
            <input
              data-testid="image-input"
              id="image-id"
              name="image"
              type="text"
              value="{valorDoEstateSemApas}"
              onChange="{funcaoDoComponentePai}"
            />
          </label>
        </div>
        <div>
          <label htmlFor="option-id">
            Seleciona a Raridade:
            <select
              data-testid="rare-input"
              name="option"
              id="option-id"
              value="{valorDoEstateSemApas}"
              onChange="{funcaoDoComponentePai}"
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
              name="agree"
              id="checkbox-id"
              // value={ agree }
              onChange="{funcaoDoComponentePai}"
            />
            Super Trunfo
          </label>
        </div>
        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}
