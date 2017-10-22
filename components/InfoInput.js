import React from 'react';
import { CandidateContainer } from './CandidateContainer';

export class InfoInput extends React.Component {

  render() {
    return (
        <input type='text' name={this.props.inputData.type} id={this.props.inputData.id} value={this.props.inputData.value} onChange={this.props.onCandidateContainerUpdate}/>
    );

  }

}
