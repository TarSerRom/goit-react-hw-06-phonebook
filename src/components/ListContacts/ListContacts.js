import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/actions';
import { getVisibleContacts } from '../../redux/contacts/selectors';
import './ListContacts.css';


const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(getVisibleContacts);

  return (
    <ul className="list">
      {visibleContacts.map(({ id, name, number }) => (
        <li className="item" key={id}>
          <p className="text">
            {name}: <span className="span">{number}</span>
          </p>
          <button
            className="button"
            type="button"
            onClick={() => dispatch(deleteContact(id))}
            title="Удалить"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;