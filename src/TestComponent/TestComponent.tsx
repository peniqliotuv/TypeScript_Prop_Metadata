import 'reflect-metadata';
import * as React from 'react';
import TestComponentProps from './TestComponentProps';
import { getMetadata, IMetadataAttribute } from '../Metadata/Metadata';

class TestComponent extends React.Component<TestComponentProps, any> {
  render() {
    return (
      <div>
        <h1>I am a test component</h1>
        <div>
          <p>My label is {this.props.label}</p>
        </div>
        <div>My theme is {this.props.theme}</div>
      </div>
    );
  }
}

export default TestComponent;
