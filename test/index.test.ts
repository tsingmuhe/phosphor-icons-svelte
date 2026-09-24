import {describe, expect, it} from 'vitest';
import {getByTestId, render, screen} from '@testing-library/svelte';
import * as Icons from '../src/icons';
import type {Icon, IconWeight} from '../src';
import CustomIcon from './CustomIcon.svelte';
import ContextWrapper from './ContextWrapper.svelte';
import ContextOverrideWrapper from './ContextOverrideWrapper.svelte';

const weights: IconWeight[] = ['thin', 'light', 'regular', 'bold', 'fill', 'duotone'];

describe('IconContext', () => {
    it('applies IconContext defaults to descendant icons', () => {
        const {container} = render(ContextWrapper);
        const icon = container.firstElementChild;

        expect(icon).toHaveAttribute('width', '32');
        expect(icon).toHaveAttribute('height', '32');
        expect(icon).toHaveAttribute('fill', 'red');
        expect(icon).toHaveAttribute('transform', 'scale(-1, 1)');
    });

    it('prioritizes explicit icon props over IconContext defaults', () => {
        const {container} = render(ContextOverrideWrapper);
        const icon = getByTestId(container, 'test');

        expect(icon).toHaveAttribute('width', '48');
        expect(icon).toHaveAttribute('height', '48');
        expect(icon).toHaveAttribute('fill', 'blue');
        expect(icon).not.toHaveAttribute('transform');
    });
});

describe('IconBase props', () => {
    it('applies default props to the svg element', () => {
        const {container} = render(CustomIcon);
        const icon = container.firstElementChild;

        expect(icon).toHaveAttribute('width', '1em');
        expect(icon).toHaveAttribute('height', '1em');
        expect(icon).toHaveAttribute('fill', 'currentColor');
        expect(icon).not.toHaveAttribute('transform');
    });

    it('applies explicit size, color, and mirror props to the svg element', () => {
        const {container} = render(CustomIcon, {
            props: {
                color: 'red',
                size: 48,
                mirrored: true
            }
        });
        const icon = container.firstElementChild;

        expect(icon).toHaveAttribute('width', '48');
        expect(icon).toHaveAttribute('height', '48');
        expect(icon).toHaveAttribute('fill', 'red');
        expect(icon).toHaveAttribute('transform', 'scale(-1, 1)');
    });

    it('forwards arbitrary rest props to the svg element', () => {
        const {container} = render(CustomIcon, {
            props: {
                'aria-label': 'custom icon',
                class: 'custom-icon',
                style: 'position: absolute;'
            }
        });
        const icon = container.firstElementChild;

        expect(icon).toHaveAttribute('aria-label', 'custom icon');
        expect(icon).toHaveClass('custom-icon');
        expect(icon).toHaveAttribute('style', 'position: absolute;');
    });

    it('renders the alt prop as an accessible svg title', () => {
        render(CustomIcon, {
            props: {
                alt: 'Custom icon'
            }
        });

        expect(screen.getByText('Custom icon').tagName).toBe('title');
    });

    it('renders slotted children inside the svg element', () => {
        const {container} = render(ContextWrapper);

        expect(container.querySelector('text')).toHaveTextContent('Test');
    });

    it.each(weights)('selects the correct svg paths for %s weight', (weight) => {
        const {container} = render(CustomIcon, {
            props: {
                weight
            }
        });
        expect(container.querySelector('path')).toHaveTextContent(weight);
    });
});

const allIcons = Object.entries(Icons) as [string, Icon][];

describe('icon exports', () => {
    allIcons.forEach(([name, TestIcon]) => {
        it(`exports ${name} as a Svelte icon component`, () => {
            expect(TestIcon).toBeTruthy();
        });
    });
});

describe('icon rendering', () => {
    allIcons.forEach(([name, TestIcon]) => {
        it.each(weights)(`renders ${name} when the weight prop is %s`, (weight) => {
            const {container} = render(TestIcon, {
                props: {
                    weight
                }
            });
            const icon = container.firstElementChild;

            expect(icon).toBeTruthy();
        });
    });
});