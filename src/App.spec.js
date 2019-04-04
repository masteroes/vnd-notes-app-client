import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { Link } from "react-router-dom";

it('renders welcome message', () => {
    const wrapper = shallow(<App />);
    const node = <Link to="/">EasyNotes</Link>;
    // s
});
