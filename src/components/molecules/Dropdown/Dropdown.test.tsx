import React from 'react';
import Enzyme, { mount, ReactWrapper } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'jest-enzyme';
import Dropdown, { IDropdownProps } from './index';

Enzyme.configure({ adapter: new Adapter() });

const mockOnChange = jest.fn();
const defaultProps: IDropdownProps = {
    options: [],
    selected: '',
    onChange: (value: string) => mockOnChange(value),
};

describe('Dropdown Component', () => {
    let component: ReactWrapper;

    const renderComponent = (props: IDropdownProps = defaultProps) => {
        component = mount(<Dropdown {...defaultProps} {...props} />);
    };

    beforeEach(() => {
        mockOnChange.mockClear();
    });

    describe('Rendering', () => {
        it('WHEN component is rendering THEN instance is to be defined and render "Select one"', () => {
            renderComponent();

            expect(component).toBeDefined();
            expect(component.find('option')).toHaveLength(1);
            expect(component.find('option').at(0).props().children).toBe('Select one');
        });

        it('WHEN options are filled THEN render all options and default value is empty', () => {
            const propsWithOptions = {
                ...defaultProps,
                options: [
                    { label: 'Foo', value: 'foo' },
                    { label: 'Bar', value: 'bar' },
                ],
            };

            renderComponent(propsWithOptions);

            expect(component.find('option').at(0).props().children).toBe('Select one');
            expect(component.find('option').at(1).props().value).toBe('foo');
            expect(component.find('option').at(2).props().value).toBe('bar');
            expect(component.find('option')).toHaveLength(3);
            expect(component.find('select').at(0).props().defaultValue).toBe('');
        });

        it('WHEN options and selected are filled THEN render all options and default value is one of them', () => {
            const propsWithOptions = {
                ...defaultProps,
                options: [
                    { label: 'Foo', value: 'foo' },
                    { label: 'Bar', value: 'bar' },
                    { label: 'Oof', value: 'oof' },
                    { label: 'Rab', value: 'rab' },
                ],
                selected: 'bar',
            };

            renderComponent(propsWithOptions);

            expect(component.find('option')).toHaveLength(5);
            expect(component.find('select').at(0).props().defaultValue).toBe('bar');
        });

        it('WHEN onChange is called THEN mockOnchange should be called', () => {
            const propsWithOptions = {
                ...defaultProps,
                options: [
                    { label: 'Foo', value: 'foo' },
                    { label: 'Bar', value: 'bar' },
                ],
            };

            renderComponent(propsWithOptions);

            const event = {
                currentTarget: {
                    value: 'foo-bar',
                },
            } as React.ChangeEvent<HTMLInputElement>;
            const { onChange = jest.fn() } = component.find('select').at(0).props();
            onChange(event);

            expect(mockOnChange).toHaveBeenCalledWith('foo-bar');
        });
    });
});
