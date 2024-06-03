import PropTypes from 'prop-types';
import css from './ContactsList.module.css';

const ContactsList = ({ contacts, filter, onDelete }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name?.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {filteredContacts.length > 0 ? (
        <table className={css.table}>
          <thead>
            <tr className={css.theading}>
              <th>Name</th>
              <th>Phone Number</th>
              <th className={css.delete}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.map(contact => (
              <tr className={css.tbody} key={contact.id}>
                <td className={css.name}>{contact.name}: </td>
                <td>{contact.number}</td>
                <td>
                  <button
                    className={css.button}
                    onClick={() => onDelete(contact.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className={css.text}>No contacts</p>
      )}
    </div>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactsList;
