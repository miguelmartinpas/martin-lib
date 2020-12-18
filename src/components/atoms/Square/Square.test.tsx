import React from 'react';
import Enzyme, { mount, ReactWrapper } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'jest-enzyme';
import Square, { ISquare } from './index';

Enzyme.configure({ adapter: new Adapter() });

const defaultProps: ISquare = {};

describe('Square Component', () => {
    let component: ReactWrapper;

    const renderComponent = (props: ISquare = defaultProps) => {
        component = mount(<Square {...defaultProps} {...props} />);
    };

    describe('Rendering', () => {
        it('WHEN component is rendering THEN instance is to be defined', () => {
            renderComponent();

            expect(component).toBeDefined();
        });

        it.each`
            color        | width        | height       | radius       | expectedColor | expectedWidth | expectedHeight | expectedRadius
            ${undefined} | ${undefined} | ${undefined} | ${undefined} | ${'olive'}    | ${50}         | ${50}          | ${0}
            ${'red'}     | ${undefined} | ${undefined} | ${undefined} | ${'red'}      | ${50}         | ${50}          | ${0}
            ${undefined} | ${100}       | ${undefined} | ${undefined} | ${'olive'}    | ${100}        | ${50}          | ${0}
            ${undefined} | ${undefined} | ${120}       | ${undefined} | ${'olive'}    | ${50}         | ${120}         | ${0}
            ${undefined} | ${undefined} | ${undefined} | ${3}         | ${'olive'}    | ${50}         | ${50}          | ${3}
        `(
            'WHEN color is $color, width is $width and height is $height THEN style should be { backgroundColor: "$expectedColor", width: "$expectedWidth", height: "$expectedHeight", borderRadius: "$expectedRadius", }',
            ({ color, width, height, expectedColor, radius, expectedWidth, expectedHeight, expectedRadius }) => {
                const propsWithColor = {
                    ...defaultProps,
                    color,
                    width,
                    height,
                    radius,
                };

                renderComponent(propsWithColor);

                const { style = {} } = component.find('div').at(0).props();

                expect(style.backgroundColor).toBe(expectedColor);
                expect(style.width).toBe(expectedWidth);
                expect(style.height).toBe(expectedHeight);
                expect(style.borderRadius).toBe(expectedRadius);
            }
        );
    });
});
