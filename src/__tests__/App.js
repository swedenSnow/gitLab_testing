import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../components/App';

test('should render App corectly', () => {
    const wrapper = shallow(<App user="" />);
    expect(wrapper).toMatchSnapshot();
});

test('should render <App /> without user', () => {
    const wrapper = shallow(<App user="" />);
    expect(wrapper.find('.user').exists()).toBeFalsy();
});

test('should render <App /> with user', () => {
    const user = 'Pelle';
    const wrapper = shallow(<App user={user} />);
    expect(wrapper.find('.user').text()).toEqual(user);
});

test('call the internal method loginSuccessful', () => {
    const user = 'Pelle';
    const wrapper = mount(<App user="" />);
    wrapper.instance().loginSuccessful(user);
    expect(wrapper.state().user).toBe(user);
});

test('call the internal method logout', () => {
    const user = 'Pelle';
    const wrapper = mount(<App user={user} />);
    expect(wrapper.state().user).toBe(user);
    wrapper.instance().logout();
    expect(wrapper.state().user).toBeFalsy();
});
