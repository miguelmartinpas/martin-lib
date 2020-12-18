import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Dropdown, { IDropdownProps } from './Dropdown';

export default {
    title: 'martin-lib/Dropdown',
    component: Dropdown,
    argTypes: {},
} as Meta;

const Template: Story<IDropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
    options: [],
    selected: '',
    onChange: (value: string) => console.log('>>', value),
};

export const WithValuesAndSelected = Template.bind({});
WithValuesAndSelected.args = {
    options: [
        { label: 'Labe one', value: 'one' },
        { label: 'Labe two', value: 'two' },
        { label: 'Labe three', value: 'three' },
    ],
    selected: 'two',
    onChange: (value: string) => console.log('>>', value),
};

export const WithValuesAndUnselected = Template.bind({});
WithValuesAndUnselected.args = {
    options: [
        { label: 'Labe one', value: 'one' },
        { label: 'Labe two', value: 'two' },
        { label: 'Labe three', value: 'three' },
    ],
    selected: '',
    onChange: (value: string) => console.log('>>', value),
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
    options: [
        { label: 'Labe one', value: 'one' },
        { label: 'Labe two', value: 'two' },
        { label: 'Labe three', value: 'three' },
    ],
    selected: 'three',
    onChange: (value: string) => console.log('>>', value),
    disabled: true,
};
