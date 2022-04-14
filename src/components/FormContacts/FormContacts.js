import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "redux/contacts/actions";
import './FormContacts.css'

function ContactsForm() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = event => {
        const {name, value} = event.target;

        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;

            default:
                return;
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(addContact(name, number));
        resetForm();
    }

    const resetForm = () =>{
        setName('');
        setNumber('');
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
          <label className="label">
            Name
            <input
              className="input"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={name}
              onChange={handleChange}
              placeholder="Enter new contact name"
            />
          </label>
          <label className="label">
            Number
            <input
              className="input"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={handleChange}
              value={number}
              placeholder="Enter new contact number"
            />
          </label>
          <button className="button" type="submit">
            Add contact
          </button>
        </form>
      );
    }
    
    export default ContactsForm;
