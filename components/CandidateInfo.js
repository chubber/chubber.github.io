import React from 'react';
import './CandidateInfo.css';
import { CandidateContainer } from './CandidateContainer';
import { Candidates} from './Candidates';
import { InfoInput } from './InfoInput.js';
import { ImageUpload } from './ImageUpload';

export class CandidateInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: true,
      text: "Edit"
    };
  }
  onClick() {
    this.toggleClassName();
    this.toggleButtonText();
  }

  toggleClassName(){
    this.setState((prevState) => ({
        toggle: !prevState.toggle
      })
    );
  }
  toggleButtonText(){
    var toggledText = (this.props.text === "Save" ? "Edit" : "Save");
    this.setState({text: toggledText});
  }

  onDeleteEvent() {
    this.props.onDeleteEvent(this.props.candidate);
  }
  render() {
    return (
      <div className="singleCandidate">
        <ImageUpload />
        <ul className={"savedInfo " + (this.state.toggle ? '' : 'editActive')}>
          <li>{this.props.candidate.name}</li>
          <li>{this.props.candidate.age}</li>
          <li>{this.props.candidate.email}</li>
          <li>{this.props.candidate.address}</li>
        </ul>
        <div className={"editContent " + (this.state.toggle ? '' : 'editActive')}>
          <form>
            <label>Name</label>
            <InfoInput onCandidateContainerUpdate={this.props.onCandidateContainerUpdate} inputData={{
              "type": "name",
              value: this.props.candidate.name,
              id: this.props.candidate.id
            }}/>
            <label>Age</label>
            <InfoInput onCandidateContainerUpdate={this.props.onCandidateContainerUpdate} inputData={{
              type: "age",
              value: this.props.candidate.age,
              id: this.props.candidate.id
            }}/>
            <label>Email</label>
            <InfoInput onCandidateContainerUpdate={this.props.onCandidateContainerUpdate} inputData={{
              type: "email",
              value: this.props.candidate.email,
              id: this.props.candidate.id
            }}/>
            <label>Address</label>
            <InfoInput onCandidateContainerUpdate={this.props.onCandidateContainerUpdate} inputData={{
              type: "address",
              value: this.props.candidate.address,
              id: this.props.candidate.id
            }}/>
          </form>
        </div>
        <button className="editBtn" onClick={this.onClick.bind(this)}>{this.state.toggle ? 'Edit' : 'Save'}</button>
        <button className="deleteBtn" type="button" onClick={this.onDeleteEvent.bind(this)}>Delete</button>
      </div>
    );
  }
}
