import styled from 'styled-components';

const spacing = props => {
    switch (props.space) {
        case 'sm':
            return '16px';
        case 'md':
            return '32px';
        case 'lg':
            return '120px';
        case 'xlg':
            return '170px';
        default:
            return '0';
    }
};

export const Spacer = styled.div`
    margin-top: ${spacing};
`;
