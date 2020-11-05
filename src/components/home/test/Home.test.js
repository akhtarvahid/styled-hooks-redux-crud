import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home';
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from '../../../reducers';
test('should render Home Component', () => {
    const HomeWrapper = () => {
        const store = createStore(rootReducer);
        return (
            <Provider store={store}>
                <Home />
            </Provider>
        )
    }

    const tree = renderer
        .create(<HomeWrapper />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
