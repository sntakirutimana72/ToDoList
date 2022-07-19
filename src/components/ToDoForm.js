import { useState } from 'react';
import './TodoForm.css';

const TodoForm = () => {
  const [title, setTitle] = useState('');

  const onText = ({ target }) => {
    setTitle(target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <h1 className="form-title">Today&apos;s Todo</h1>
      <div className="add-field">
        <input
          type="text"
          name="title"
          value={title}
          onChange={onText}
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
