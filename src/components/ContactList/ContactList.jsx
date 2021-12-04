import React, {useEffect} from "react";
import { useSelector, useDispatch} from "react-redux";
import { getContacts, deleteContacts } from '../../redux/operations';
import { getFilteredContacts } from "../../redux/selectors";
import style from './style.module.css';


 export default function  ContactList () {
 
   const dispatch = useDispatch();
   const contactFilter = useSelector(getFilteredContacts);
  
   useEffect(() => {
     dispatch(getContacts());
     
   }, [dispatch]);

    return (
      <ul className={style.contacts__list} >
        {contactFilter.map((el) => (
          <li key={el.id} className={style.contacts__item}>
            {el.name} : {el.number}
           <button
              type="button"
              id={el.id}
              onClick={() => {
                dispatch(deleteContacts(el.id));
                dispatch(getContacts());
              }}
                    className={style.contact__button}
            >
              Delete
            </button>
            </li>            
        ))}
            
        </ul>
         
    );
}



