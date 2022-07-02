import PropTypes from 'prop-types';

const ListItem = ({
  index,
  desc,
  status,
  focus,
  onState,
  onSelect,
  onUpdate,
  onRemove,
}) => {
  const handleSelect = () => {
    if (!focus) {
      onSelect(index);
    }
  };

  const handleState = () => {
    onState(index, !status);
    handleSelect();
  };

  const handleUpdate = ({ target }) => {
    const { value } = target;
    target.value = '';

    if (value && value !== desc) {
      onUpdate(index, value);
      handleSelect();
    }
  };

  const handleOpt = () => {
    if (focus) {
      onRemove(index);
    }
  };

  const fulfilled = status ? ' fulfilled' : '';
  const [selection, draggable] = (
    focus
      ? [' item-focus', 'fa-trash']
      : ['', 'fa-ellipsis-vertical']
  );

  return (
    <li id={index} className={`flex-align-center row${fulfilled}${selection}`}>
      <input
        type="checkbox"
        checked={status}
        onChange={handleState}
      />
      <input
        type="text"
        className="task-desc"
        placeholder={desc}
        onClick={handleSelect}
        onBlur={handleUpdate}
        required
      />
      <button
        type="button"
        aria-label="Customize Task"
        className={`fa-solid ${draggable}`}
        onClick={handleOpt}
      />
    </li>
  );
};
ListItem.propTypes = {
  index: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  focus: PropTypes.bool,
  onState: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};
ListItem.defaultProps = { focus: false };

export default ListItem;
