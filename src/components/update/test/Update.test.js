import React from 'react';
import renderer from 'react-test-renderer';
import Update from '../Update';

test('should render Update Component', () => {
    let fakeProps = {
        id: 1,
        title: "title",
        description: "description",
        completed: false
    };
    const tree = renderer
        .create(<Update state={fakeProps} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
