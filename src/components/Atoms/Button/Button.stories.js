import React from 'react';
import Button from './Button.js'
import { withKnobs, select } from '@storybook/addon-knobs';
import { addDecorator } from '@storybook/react';

export default {
    component: Button,
    title: 'Button',
};
addDecorator(withKnobs);

export const primmary = () => {
    const label = 'Colors';
    const options = {
        Primary: 'hsl(49, 100%, 58%)',
        Secondary: 'hsl(196, 83%, 75%)',
        Tertiary: 'hsl(106, 47%, 64%)',
    };
    const defaultValue = 'hsl(49, 100%, 58%)';
    const groupId = 'GROUP-ID1';
    const value = select(label, options, defaultValue, groupId);
    return <Button color={value}>Hello Button</Button>;
};
export const secondary = () => <Button secondary>Hello Button</Button>;


