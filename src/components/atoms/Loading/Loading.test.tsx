import React from 'react';
import Enzyme, { mount, ReactWrapper } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'jest-enzyme';
import Loading, { ILoadingProps } from './index';

Enzyme.configure({ adapter: new Adapter() });

const defaultProps: ILoadingProps = {};

describe('Loading Component', () => {
    let component: ReactWrapper;

    const renderComponent = (props: ILoadingProps = defaultProps) => {
        component = mount(<Loading {...defaultProps} {...props} />);
    };

    describe('Rendering', () => {
        it('WHEN component is rendering THEN instance is to be defined', () => {
            renderComponent();

            expect(component).toBeDefined();
        });
    });

    it.each`
        type         | width        | height       | hidden       | expectedType   | expectedWidth | expectedHeight | expectedDisplay
        ${undefined} | ${undefined} | ${undefined} | ${undefined} | ${'dual-ring'} | ${50}         | ${50}          | ${'block'}
    `(
        'WHEN type is $type, width is $width and height is $height THEN style should be { width: "$expectedWidth", height: "$expectedHeight" }',
        ({ type, width, height, hidden, expectedType, expectedWidth, expectedHeight, expectedDisplay }) => {
            const propsWithColor = {
                ...defaultProps,
                type,
                width,
                height,
                hidden,
            };

            renderComponent(propsWithColor);

            const { style = {}, className } = component.find('div').at(0).props();

            expect(className).toBe(`ml-${expectedType}`);
            expect(style.width).toBe(expectedWidth);
            expect(style.height).toBe(expectedHeight);
            expect(style.display).toBe(expectedDisplay);
        }
    );
});
