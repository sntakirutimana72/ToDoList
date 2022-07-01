import './List.css';

const List = () => (
  <div className="list-wrapper">
    <form action="#" className="list-form">
      <div className="flex-align-center heading-wrapper row">
        <h1 className="no-spacing">Today&apos;s TODO List</h1>
        <button type="button" className="list-refresh-btn">
          <i className="fa-solid fa-rotate" />
        </button>
      </div>
      <div className="flex-align-center field-wrap row">
        <input type="text" name="desc" placeholder="Add to your list.." required />
        <span>
          <i className="fa fa-level-down" />
        </span>
      </div>
    </form>
    <ul className="flex-column list-container no-spacing" />
    <button type="button" className="list-clear-btn" disabled>Clear all completed</button>
  </div>
);

export default List;
