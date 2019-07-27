import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import ConnectedLogin from '../../containers/login';

configure({adapter: new Adapter()});

test('Login button is disabled without input values', () => {
    const initialState = {
        app: {
            authed: false,
            username: null,
            errormessage: null,
            loginDisabled: true,
        }
    };
    const mockStore = configureStore();
    let store = mockStore(initialState);
    let component = mount(<Provider store={store}><ConnectedLogin /></Provider>);

    expect(component).toMatchSnapshot();
})

