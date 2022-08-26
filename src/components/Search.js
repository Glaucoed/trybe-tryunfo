import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
  render() {
    const { saveInputSearch,
      onInputChange,
      optionSelect,
      findSuperTrunfo,
    } = this.props;
    return (
      <>
        <div>
          <label htmlFor="busca-id">
            Filtro de Busca:
            <input
              placeholder="busque a carta desejada"
              data-testid="name-filter"
              id="busca-id"
              name="saveInputSearch"
              type="text"
              value={ saveInputSearch }
              onChange={ onInputChange }
              disabled={ findSuperTrunfo }
            />
          </label>
        </div>

        <div>
          <label htmlFor="option-id">
            Filtro de Busca:
            <select
              data-testid="rare-filter"
              name="optionSelect"
              id="option-id"
              value={ optionSelect }
              onChange={ onInputChange }
              disabled={ findSuperTrunfo }

            >
              <option value="">todas</option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="find-id">
            <input
              data-testid="trunfo-filter"
              type="checkbox"
              checked={ findSuperTrunfo }
              name="findSuperTrunfo"
              id="find-id"
              onChange={ onInputChange }
            />
            Super Trunfo
          </label>
        </div>
      </>
    );
  }
}
Search.propTypes = {
  saveInputSearch: PropTypes.string,
  option: PropTypes.string,
}.isRequired;
