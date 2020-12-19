import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Loading, { ILoadingProps } from './Loading';

export default {
    title: 'martin-lib/Loading',
    component: Loading,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<ILoadingProps> = (args) => <Loading {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithWidth = Template.bind({});
WithWidth.args = {
    width: 15,
};

export const WithWidthAndHeight = Template.bind({});
WithWidthAndHeight.args = {
    width: 20,
    height: 20,
};

export const WithHiddenTrue = Template.bind({});
WithHiddenTrue.args = {
    hidden: true,
};

export const WithHiddenFalse = Template.bind({});
WithHiddenFalse.args = {
    hidden: false,
};
