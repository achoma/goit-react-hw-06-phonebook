import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, onFilterChange }) => {
  return (
    <div className={css.search}>
      <label className={css.label} htmlFor="searchField">
        Find contacts by name
      </label>
      <input
        className={css.input}
        id="searchField"
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
        placeholder="Search by name"
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
