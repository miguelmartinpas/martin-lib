import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Square, { ISquareProps } from './Square';

export default {
    title: 'martin-lib/Square',
    component: Square,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<ISquareProps> = (args) => <Square {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithColor = Template.bind({});
WithColor.args = {
    color: 'red',
};

export const WithWidth = Template.bind({});
WithWidth.args = {
    width: 200,
};

export const WithHeight = Template.bind({});
WithHeight.args = {
    height: 200,
};

export const WithRadius = Template.bind({});
WithRadius.args = {
    radius: 5,
};

export const WithCustom = Template.bind({});
WithCustom.args = {
    color: 'lime',
    width: 8,
    height: 8,
    radius: 8,
};
