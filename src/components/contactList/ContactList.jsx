import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import UserContact from '../userContact/UserContact';

const ContactList = ({ contactSearch, deleteContact }) => {
  return (
    <ul className={css.list}>
      {contactSearch.map(({ name, number, id }) => (
        <li className={css.user} key={id}>
          <UserContact name={name} number={number} />
          <button className={css.btn} onClick={() => deleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contactSearch: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;


