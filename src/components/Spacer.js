import styled from 'styled-components';

const spacing = props => {
    switch (props.space) {
        case 'xs':
            return '8px';
        case 'sm':
            return '16px';
        case 'md':
            return '32px';
        case 'lg':
            return '70px';
        case 'xlg':
            return '120px';
        default:
            return '0';
    }
};

export const Spacer = styled.div`
    margin-top: ${spacing};
`;
