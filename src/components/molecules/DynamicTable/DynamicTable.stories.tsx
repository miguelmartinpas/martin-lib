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
        { name: 'Gary', lastname: 'Ortiz', email: 'gortiz0@mapy.cz', country: 'Indonesia', created: '2015-05-16' },
        {
            name: 'Albert',
            lastname: 'Williamson',
            email: 'awilliamson1@narod.ru',
            country: 'China',
            created: '2015-03-11',
        },
        { name: 'Mildred', lastname: 'Fuller', email: 'mfuller2@npr.org', country: 'Peru', created: '2015-02-15' },
        {
            name: 'Russell',
            lastname: 'Robinson',
            email: 'rrobinson3@google.pl',
            country: 'Belarus',
            created: '2014-10-31',
        },
        {
            name: 'Laura',
            lastname: 'Harper',
            email: 'lharper4@boston.com',
            country: 'Philippines',
            created: '2015-01-14',
        },
        { name: 'Larry', lastname: 'Sanders', email: 'lsanders5@cornell.edu', country: 'China', created: '2015-01-11' },
        {
            name: 'Michael',
            lastname: 'Rice',
            email: 'mrice6@geocities.jp',
            country: 'Philippines',
            created: '2014-12-06',
        },
        {
            name: 'Sara',
            lastname: 'Harris',
            email: 'sharris7@deliciousdays.com',
            country: 'Indonesia',
            created: '2014-11-05',
        },
        { name: 'Phyllis', lastname: 'Webb', email: 'pwebb8@reddit.com', country: 'China', created: '2015-04-02' },
    ],
};

export const WithThreeColumns = Template.bind({});
WithThreeColumns.args = {
    headers: ['Name', 'Last name', 'E-mail'],
    items: [
        { name: 'Gary', lastname: 'Ortiz', email: 'gortiz0@mapy.cz' },
        {
            name: 'Albert',
            lastname: 'Williamson',
            email: 'awilliamson1@narod.ru',
        },
        { name: 'Mildred', lastname: 'Fuller', email: 'mfuller2@npr.org' },
        {
            name: 'Russell',
            lastname: 'Robinson',
            email: 'rrobinson3@google.pl',
        },
        {
            name: 'Laura',
            lastname: 'Harper',
            email: 'lharper4@boston.com',
        },
        { name: 'Larry', lastname: 'Sanders', email: 'lsanders5@cornell.edu' },
        {
            name: 'Michael',
            lastname: 'Rice',
            email: 'mrice6@geocities.jp',
        },
        {
            name: 'Sara',
            lastname: 'Harris',
            email: 'sharris7@deliciousdays.com',
        },
        { name: 'Phyllis', lastname: 'Webb', email: 'pwebb8@reddit.com' },
    ],
};

export const WithTwoColumns = Template.bind({});
WithTwoColumns.args = {
    headers: ['Name', 'Last name'],
    items: [
        { name: 'Gary', lastname: 'Ortiz' },
        {
            name: 'Albert',
            lastname: 'Williamson',
        },
        { name: 'Mildred', lastname: 'Fuller' },
        {
            name: 'Russell',
            lastname: 'Robinson',
        },
        {
            name: 'Laura',
            lastname: 'Harper',
        },
        { name: 'Larry', lastname: 'Sanders' },
        {
            name: 'Michael',
            lastname: 'Rice',
        },
        {
            name: 'Sara',
            lastname: 'Harris',
        },
        { name: 'Phyllis', lastname: 'Webb' },
    ],
};

export const WithMoreItemsThamHeaders = Template.bind({});
WithMoreItemsThamHeaders.args = {
    headers: ['Name', 'Last name', 'E-mail'],
    items: [
        { name: 'Gary', lastname: 'Ortiz', email: 'gortiz0@mapy.cz' },
        {
            name: 'Albert',
            lastname: 'Williamson',
            email: 'awilliamson1@narod.ru',
            country: 'Spain',
        },
        { name: 'Mildred', lastname: 'Fuller', email: 'mfuller2@npr.org' },
        {
            name: 'Russell',
            lastname: 'Robinson',
            email: 'rrobinson3@google.pl',
        },
        {
            name: 'Laura',
            lastname: 'Harper',
            email: 'lharper4@boston.com',
        },
        { name: 'Larry', lastname: 'Sanders', email: 'lsanders5@cornell.edu', country: 'China', created: '2015-01-11' },
        {
            name: 'Michael',
            lastname: 'Rice',
            email: 'mrice6@geocities.jp',
        },
        {
            name: 'Sara',
            lastname: 'Harris',
            email: 'sharris7@deliciousdays.com',
        },
        { name: 'Phyllis', lastname: 'Webb', email: 'pwebb8@reddit.com' },
    ],
};
