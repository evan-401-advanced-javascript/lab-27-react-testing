import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import Counter from '../components/counter/counter';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});


describe('up and down', () => {
  it('count should be incremented', () => {
    const app = mount(<Counter />);
    const button = app.find('#up');
    button.simulate('click');
    expect(app.state().count).toBe(1);
  });

  it('count should be decremented', () => {
    const app = mount(<Counter />);
    const button = app.find('#down');
    button.simulate('click');
    expect(app.state().count).toBe(-1);
  });

  it('count should show a higher number in the DOM', () => {
    act(() => {
      ReactDOM.render(<Counter />, container);
    });
    const label = container.querySelector('span');
    expect(label.textContent).toBe('0');
  });

  it('should show that the snapshot matches', () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
