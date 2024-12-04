import { useDispatch, useSelector } from 'react-redux';
import { deleteToDo } from '../../redux/toDoSlice.js';

export const ToDoList = () => {
  const toDos = useSelector(state => state.toDos.items);
  const filter = useSelector(state => state.filter.name);
  const dispatch = useDispatch();
  const hendleDelete = id => {
    const action = deleteToDo(id);
    dispatch(action);
  };
  const filteredToDos = toDos.filter(item =>
    item.text.toLowerCase().includes(filter.toLowerCase()),
  );
  return (
    <ul>
      {filteredToDos.map(item => {
        return (
          <li key={item.id}>
            <p>{item.text}</p>
            <button onClick={() => hendleDelete(item.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};
