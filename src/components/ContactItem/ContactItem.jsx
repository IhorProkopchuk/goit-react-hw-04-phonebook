import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';

const ContactItem = ({ contact, onDeleteContact }) => {
  const handleDelete = () => {
    onDeleteContact(contact.id);
  };
  return (
    <div className={styles.container}>
      <li className={styles.list}>
        <div className={styles.name}>{contact.name}</div>
        <div className={styles.number}>{contact.number}</div>
        <button className={styles.btn} onClick={handleDelete}>
          Delete
        </button>
      </li>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
