import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import DynamicTable, { IDynamicTableProps } from './DynamicTable';

export default {
    title: 'martin-lib/DynamicTable',
    component: DynamicTable,
    argTypes: {},
} as Meta;

const Template: Story<IDynamicTableProps> = (args) => <DynamicTable {...args} />;

export const Default = Template.bind({});
Default.args = {
    headers: ['Name', 'Last name', 'E-mail', 'Country', 'Created'],
    items: [
        { id: 'Gary', lastname: 'Ortiz', email: 'gortiz0@mapy.cz', country: 'Indonesia', created: '2015-05-16' },
        {
            id: 'Albert',
            lastname: 'Williamson',
            email: 'awilliamson1@narod.ru',
            country: 'China',
            created: '2015-03-11',
        },
        { id: 'Mildred', lastname: 'Fuller', email: 'mfuller2@npr.org', country: 'Peru', created: '2015-02-15' },
        {
            id: 'Russell',
            lastname: 'Robinson',
            email: 'rrobinson3@google.pl',
            country: 'Belarus',
            created: '2014-10-31',
        },
        {
            id: 'Laura',
            lastname: 'Harper',
            email: 'lharper4@boston.com',
            country: 'Philippines',
            created: '2015-01-14',
        },
        { id: 'Larry', lastname: 'Sanders', email: 'lsanders5@cornell.edu', country: 'China', created: '2015-01-11' },
        {
            id: 'Michael',
            lastname: 'Rice',
            email: 'mrice6@geocities.jp',
            country: 'Philippines',
            created: '2014-12-06',
        },
        {
            id: 'Sara',
            lastname: 'Harris',
            email: 'sharris7@deliciousdays.com',
            country: 'Indonesia',
            created: '2014-11-05',
        },
        { id: 'Phyllis', lastname: 'Webb', email: 'pwebb8@reddit.com', country: 'China', created: '2015-04-02' },
    ],
};

export const WithThreeColumns = Template.bind({});
WithThreeColumns.args = {
    headers: ['Name', 'Last name', 'E-mail'],
    items: [
        { id: 'Gary', lastname: 'Ortiz', email: 'gortiz0@mapy.cz' },
        {
            id: 'Albert',
            lastname: 'Williamson',
            email: 'awilliamson1@narod.ru',
        },
        { id: 'Mildred', lastname: 'Fuller', email: 'mfuller2@npr.org' },
        {
            id: 'Russell',
            lastname: 'Robinson',
            email: 'rrobinson3@google.pl',
        },
        {
            id: 'Laura',
            lastname: 'Harper',
            email: 'lharper4@boston.com',
        },
        { id: 'Larry', lastname: 'Sanders', email: 'lsanders5@cornell.edu' },
        {
            id: 'Michael',
            lastname: 'Rice',
            email: 'mrice6@geocities.jp',
        },
        {
            id: 'Sara',
            lastname: 'Harris',
            email: 'sharris7@deliciousdays.com',
        },
        { id: 'Phyllis', lastname: 'Webb', email: 'pwebb8@reddit.com' },
    ],
};

export const WithTwoColumns = Template.bind({});
WithTwoColumns.args = {
    headers: ['Name', 'Last name'],
    items: [
        { id: 'Gary', lastname: 'Ortiz' },
        {
            id: 'Albert',
            lastname: 'Williamson',
        },
        { id: 'Mildred', lastname: 'Fuller' },
        {
            id: 'Russell',
            lastname: 'Robinson',
        },
        {
            id: 'Laura',
            lastname: 'Harper',
        },
        { id: 'Larry', lastname: 'Sanders' },
        {
            id: 'Michael',
            lastname: 'Rice',
        },
        {
            id: 'Sara',
            lastname: 'Harris',
        },
        { id: 'Phyllis', lastname: 'Webb' },
    ],
};

export const WithMoreItemsThamHeaders = Template.bind({});
WithMoreItemsThamHeaders.args = {
    headers: ['Name', 'Last name', 'E-mail'],
    items: [
        { id: 'Gary', lastname: 'Ortiz', email: 'gortiz0@mapy.cz' },
        {
            id: 'Albert',
            lastname: 'Williamson',
            email: 'awilliamson1@narod.ru',
            country: 'Spain',
        },
        { id: 'Mildred', lastname: 'Fuller', email: 'mfuller2@npr.org' },
        {
            id: 'Russell',
            lastname: 'Robinson',
            email: 'rrobinson3@google.pl',
        },
        {
            id: 'Laura',
            lastname: 'Harper',
            email: 'lharper4@boston.com',
        },
        { id: 'Larry', lastname: 'Sanders', email: 'lsanders5@cornell.edu', country: 'China', created: '2015-01-11' },
        {
            id: 'Michael',
            lastname: 'Rice',
            email: 'mrice6@geocities.jp',
        },
        {
            id: 'Sara',
            lastname: 'Harris',
            email: 'sharris7@deliciousdays.com',
        },
        { id: 'Phyllis', lastname: 'Webb', email: 'pwebb8@reddit.com' },
    ],
};

export const WithHiddeId = Template.bind({});
WithHiddeId.args = {
    headers: ['Last name', 'E-mail'],
    items: [
        { id: 'Gary', lastname: 'Ortiz', email: 'gortiz0@mapy.cz' },
        {
            id: 'Albert',
            lastname: 'Williamson',
            email: 'awilliamson1@narod.ru',
        },
        { id: 'Mildred', lastname: 'Fuller', email: 'mfuller2@npr.org' },
        {
            id: 'Russell',
            lastname: 'Robinson',
            email: 'rrobinson3@google.pl',
        },
    ],
    hideId: true,
};

export const WithMessage = Template.bind({});
WithMessage.args = {
    headers: ['Name', 'Last name', 'E-mail'],
    items: [],
    message: 'Table is empty',
};
