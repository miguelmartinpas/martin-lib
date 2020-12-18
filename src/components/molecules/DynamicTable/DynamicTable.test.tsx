import React from 'react';
import Enzyme, { mount, ReactWrapper } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'jest-enzyme';
import DynamicTable, { IDynamicTableProps } from './index';

Enzyme.configure({ adapter: new Adapter() });

const defaultProps: IDynamicTableProps = {
    headers: [],
    items: [],
};

describe('DynamicTable Component', () => {
    let component: ReactWrapper;

    const renderComponent = (props: IDynamicTableProps = defaultProps) => {
        component = mount(<DynamicTable {...defaultProps} {...props} />);
    };

    describe('Rendering', () => {
        it('WHEN component is rendering THEN instance is to be defined', () => {
            renderComponent();

            expect(component).toBeDefined();
        });
    });
});
