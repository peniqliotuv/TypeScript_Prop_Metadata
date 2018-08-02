import ModuleTheme from '../ModuleTheme';
import metadata from '../Metadata/Metadata';

class TestComponentProps {
  @metadata({
    id: 'label',
    displayName: 'Label',
    isRequired: true,
    description: 'This is a test label',
    needsLocalization: false
  })
  public label: string;

  @metadata({
    id: 'moduletheme',
    displayName: 'ModuleTheme',
    isRequired: true,
    description: 'This is a test module theme',
    needsLocalization: false
  })
  public theme: ModuleTheme;

  // NOTE: we must assign all of the values in the constructor, or else we can't iterate over the properties because they won't be defined on the instance of the object
  constructor(label: string, theme: ModuleTheme) {
    this.label = label;
    this.theme = theme;
  }
}

export default TestComponentProps;
