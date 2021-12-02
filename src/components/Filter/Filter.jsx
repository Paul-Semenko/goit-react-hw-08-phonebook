import React from "react";
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/actions';
import style from './style.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  
    return (
      <>
        <label htmlFor="search" className={style.filter__title}>
          Find contacts by name
        
        <input
          
                    autoComplete="off"
                    id="search"
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]"
                    onChange={(e) => {
                        e.preventDefault();
                        dispatch(changeFilter(e.target.value.toLocaleLowerCase()));
                    }}
                    className={style.filter__input}
            ></input>
            </label>
      </>
    );
}





