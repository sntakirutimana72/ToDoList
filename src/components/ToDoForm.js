import React from 'react';
import PropTypes from 'prop-types';

class ToDoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    this.setState({ title: target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { addItem } = this.props;
    const { title } = this.state;
    addItem(title);
    this.setState({ title: '' });
  }

  render() {
    const { title } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="list-form">
        <div className="flex-align-center heading-wrapper row">
          <h1 className="no-spacing">Today&apos;s TODO List</h1>
        </div>
        <div className="flex-align-center field-wrap row">
          <input
            type="text"
            name="desc"
            value={title}
            placeholder="Add to your list.."
            onChange={this.handleChange}
          />
          <button type="submit" aria-label="submit" className="fa fa-level-down" />
        </div>
      </form>
    );
  }
}

ToDoForm.propTypes = { addItem: PropTypes.func.isRequired };

export default ToDoForm;
