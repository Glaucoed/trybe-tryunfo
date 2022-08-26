import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
  render() {
    const { saveInputSearch,
      onInputChange,
      optionSelect,

    } = this.props;
    return (
      <>
        <div>
          <label htmlFor="busca-id">
            Filtro de Busca:
            <input
              data-testid="name-filter"
              id="busca-id"
              name="saveInputSearch"
              type="text"
              value={ saveInputSearch }
              onChange={ onInputChange }
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

            >
              <option value="">todas</option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
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
