import React from 'react';
import { CandidateInfo } from './CandidateInfo';
import './CandidateContainer.css';

export class CandidateContainer extends React.Component {

  render() {
    var onCandidateContainerUpdate = this.props.onCandidateContainerUpdate;
    var candidateDelete = this.props.onCandidateDelete;
    var filterText = this.props.filterText;
    var candidate = this.props.candidates.map(function(candidate) {
      if (candidate.name.indexOf(filterText) === -1) {
        return;
      }
      return (<CandidateInfo onCandidateContainerUpdate={onCandidateContainerUpdate} candidate={candidate} onDeleteEvent={candidateDelete.bind(this)} key={candidate.id}/>
    )
    });
    return (
        <div className="flexibleBoxContainer">
          <div className="candidatesContainer flexItem">
            <h2>Kontakt</h2>
              {candidate}
              <button type="button" onClick={this.props.onCandidateAdd} className="addCandidate">Add candidate</button>
          </div>
          <div className="flexItem">
            <h2>Dialog</h2>
          </div>
          <div className="flexItem">
            <h2>Intervju</h2>
          </div>
          <div className="flexItem">
            <h2>Erbjudande</h2>
          </div>
          <div className="flexItem">
            <h2>Avslutad</h2>
          </div>
        </div>
    );

  }

}
