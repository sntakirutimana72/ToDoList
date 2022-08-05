import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions/todos';
import './TodoForm.css';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const onChange = ({ target }) => {
    setTitle(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const refinedTitle = title.trim();

    if (refinedTitle !== '') {
      dispatch(addTodo(title));
      setTitle('');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h1 className="form-title">Today&apos;s Todo</h1>
      <div className="add-field">
        <input
          type="text"
          name="title"
          value={title}
          onChange={onChange}
          placeholder="Add Title"
        />
        <button
          type="submit"
          aria-label="submit"
          className="fa fa-plus btn add-btn"
        />
      </div>
    </form>
  );
};

export default TodoForm;
