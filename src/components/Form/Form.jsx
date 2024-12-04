import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addToDo } from '../../redux/toDoSlice.js';

export const Form = () => {
  const dispatch = useDispatch();
  const hendleSubmit = e => {
    e.preventDefault();
    const toDo = { text: e.target.elements.text.value, id: nanoid() };
    const action = addToDo(toDo);
    dispatch(action);
    e.target.reset();
  };
  return (
    <form onSubmit={hendleSubmit}>
      <input name="text" type="text" />
      <button type="submit">Submit</button>
    </form>
  );
};
