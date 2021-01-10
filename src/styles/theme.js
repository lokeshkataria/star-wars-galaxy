import { colors } from './colors';

export const theme = {
    color: {
        primary: colors.yellow,
        secondary: colors.white,
        background: colors.black,
        error: colors.red,
        ...colors
    },
    size: {
        contentMaxWidth: '1280px',
        contentPadding: {
            mobile: '20px',
            tablet: '40px',
            desktop: '20px'
        }
    },
    breakpoints: {
        md: '768px',
        lg: '992px'
    },
    fontSize: {
        smaller: '10px',
        small: '12px',
        medium: '14px',
        base: '16px',
        large: '18px',
        larger: '20px',
        smallHeading: '24px',
        mediumHeading: '32px',
        largeHeading: '48px'
    },
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif`,
    up: breakpoint => `@media (min-width: ${breakpoint})`,
    down: breakpoint => `@media (max-width: ${breakpoint})`
};