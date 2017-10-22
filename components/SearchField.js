import React from 'react';
import './SearchField.css';

export class SearchField extends React.Component {
  handleChange() {
    this.props.onUserInput(this.refs.filterTextInput.value);
  }
  render() {
    return (
      <div className="header">
        <h1>Recruiter.</h1>
        <input className="SearchInput" type="text" placeholder="Search candidate" value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange.bind(this)}/>
      </div>

    );
  }

}
