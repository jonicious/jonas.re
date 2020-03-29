import styled from 'styled-components';

const spacing = props => {
    if (props.space === 'md') {
        return '32px';
    }

    return '16px;';
};

export const Stack = styled.div`
    margin-top: ${spacing};
`;
