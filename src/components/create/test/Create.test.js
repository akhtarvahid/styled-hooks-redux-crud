import React from 'react';
import renderer from 'react-test-renderer';
import Create from '../Create';

test('should render Create Component', () => {
    let fakeProps = {
        id: 1,
        title: "title",
        description: "description",
        completed: false
    };
    const tree = renderer
        .create(<Create state={fakeProps} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
