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
            color        | width        | height       | expectedColor | expectedWidth | expectedHeight
            ${undefined} | ${undefined} | ${undefined} | ${'olive'}    | ${50}         | ${50}
            ${'red'}     | ${undefined} | ${undefined} | ${'red'}      | ${50}         | ${50}
            ${undefined} | ${100}       | ${undefined} | ${'olive'}    | ${100}        | ${50}
            ${undefined} | ${undefined} | ${120}       | ${'olive'}    | ${50}         | ${120}
        `(
            'WHEN color is $color, width is $width and height is $height THEN style should be { backgroundColor: "$expectedColor", width: "$expectedWidth", height: "$expectedHeight",  }',
            ({ color, width, height, expectedColor, expectedWidth, expectedHeight }) => {
                const propsWithColor = {
                    ...defaultProps,
                    color,
                    width,
                    height,
                };

                renderComponent(propsWithColor);

                const { style = {} } = component.find('div').at(0).props();

                expect(style.backgroundColor).toBe(expectedColor);
                expect(style.width).toBe(expectedWidth);
                expect(style.height).toBe(expectedHeight);
            }
        );
    });
});
