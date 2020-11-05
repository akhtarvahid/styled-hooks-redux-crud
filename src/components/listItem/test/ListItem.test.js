import React from 'react';
import renderer from 'react-test-renderer';
import ListItem from '../ListItem';

test('should render ListItem Component', () => {
    let fakeProps = [{
        id: 1,
        title: "title",
        description: "description",
        completed: false
    }];
    const tree = renderer
        .create(<ListItem lists={fakeProps} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
