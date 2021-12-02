import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../../redux/operations';
import { getContact } from '../../redux/selectors';
import style from './Style.module.css';



export default function ContactForm() {
    const contacts = useSelector(getContact);
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    
    const handleInputChange = (event) => {
        if (event.currentTarget.name === 'name') {
            setName(event.currentTarget.value);
        } else if (event.currentTarget.name === 'number') {
            setNumber(event.currentTarget.value);
    }
        
    };
    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContacts({ name, number }));
      setName("");
      setNumber("");
    }
  };

     
    return (
        <>
            <form onSubmit={handleSubmit}
                className={style.form}>
                <h1>Phonebook</h1>
                <label className={style.form__title}>Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        value={name}
                        onChange={handleInputChange}
                        
                        className={style.form__input}
                        
                    />
                </label>
                <label className={style.form__title}>Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        value={number}
                        onChange={handleInputChange}                        
                        className={style.form__input}
                    />
                </label>
                <button className={style.form__button}>Add contact</button>
            </form>
        </>
    );
    
}

