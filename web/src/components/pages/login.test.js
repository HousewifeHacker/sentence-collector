import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import ConnectedLogin from '../../containers/login';
import { getStore } from '../../tests/testUtils';

test('Login button is disabled without input values', () => {
    const initialState = {
        app: {
            authed: false,
            username: null,
            errormessage: null,
            loginDisabled: true,
        }
    };
    let store = getStore(initialState);
    let component = mount(<Provider store={store}><ConnectedLogin /></Provider>);

    expect(component).toMatchSnapshot();
})

