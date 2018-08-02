import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'reflect-metadata';
import TestComponent from './TestComponent/TestComponent';
import TestComponentProps from './TestComponent/TestComponentProps';
import ModuleTheme from './ModuleTheme';
import { getMetadata } from './Metadata/Metadata';

// const props: TestComponentProps = {
//   label: 'Test Label',
//   theme: ModuleTheme.Dark
// };

const props = new TestComponentProps('test label', ModuleTheme.Dark);
ReactDOM.render(<TestComponent {...props} />, document.getElementById('main'));
