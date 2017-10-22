import React from 'react';
import { SearchField } from './SearchField';
import { CandidateContainer } from './CandidateContainer';
import './Candidates.css';

export class Candidates extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.filterText = "";
    this.state.candidates = [
      {
        id: 1,
        name: 'Amanda Larsson',
        age: '27 år',
        email: 'amanda.larsson@gmail.com',
        address: 'Lilla vägen 1, 123 45 Huddinge'
      },
      {
        id: 2,
        name: 'Karl Ljung',
        age: '33 år',
        email: 'karl@ljung.se',
        address: 'Forsvägen 13, 127 85 Älvsjö'
      },
      {
        id: 3,
        name: 'Alfred Törnqvist',
        age: '41 år',
        email: 'tornqvist.a@gmail.com',
        address: 'Bäckslingan 7, 119 20 Stockholm'
      },
      {
        id: 4,
        name: 'Zeinah Abadi',
        age: '35 år',
        email: 'zeinah@abadi.com',
        address: 'Lundagatan, 753 20 Uppsala'
      },
      {
        id: 5,
        name: 'Linda Schultz',
        age: '23 år',
        email: 'linda.v.schultz@gmail.com',
        address: 'Tomtegatan 2, 114 13 Stockholm'
      },
    ];
  }


  handleUserInput(filterText) {
    this.setState({filterText: filterText});
  };

  // Raderar en kandidat baserat på index genom splice
  handleDeleteCandidate(candidate) {
    var index = this.state.candidates.indexOf(candidate);
    this.state.candidates.splice(index, 1);
    this.setState(this.state.candidates);
  };

  // Skapar en ny kandidat med unikt ID och pushar den till arrayn med kandidater
  handleAddCandidate(evt) {
    var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var candidate = {
      id: id,
      name: "",
      age: "",
      email: "",
      adress: ""
    }
    this.state.candidates.push(candidate);
    this.setState(this.state.candidates);

  }

  handleCandidateContainer(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
    var candidates = this.state.candidates.slice();
    var newCandidates = candidates.map(function(candidate) {

      for (var key in candidate) {
        if (key == item.name && candidate.id == item.id) {
          candidate[key] = item.value;
      }
    }
    return candidate;
  });
    this.setState({candidates:newCandidates});
  };
  render() {
    return (
      <div>
        <SearchField filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)} />
        <CandidateContainer onCandidateContainerUpdate={this.handleCandidateContainer.bind(this)} onCandidateAdd={this.handleAddCandidate.bind(this)} onCandidateDelete={this.handleDeleteCandidate.bind(this)} candidates={this.state.candidates} filterText={this.state.filterText} />
      </div>
    );

  }

}
