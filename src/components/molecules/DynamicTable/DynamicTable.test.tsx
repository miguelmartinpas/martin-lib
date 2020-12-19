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

        it('WHEN component has 4 item THEN it should render 4 rows', () => {
            renderComponent({
                ...defaultProps,
                headers: ['foo', 'bar'],
                items: [
                    { id: 'key0', name: 'oof', value: 'rab' },
                    { id: 'key1', name: 'oof1', value: 'rab1' },
                    { id: 'key2', name: 'oof2', value: 'rab2' },
                    { id: 'key3', name: 'oof3', value: 'rab3' },
                ],
            });

            expect(component.find('.ml-row').length).toBe(4);
        });
    });
});
