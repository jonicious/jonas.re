import React from 'react';
import styled from 'styled-components';
import profileImageUrl from './2018-quadratisch.jpg';

const Image = styled.img`
    border-radius: 100%;
`;

export const ProfilePicture = () => {
    return (
        <Image height={144} width={144} loading="lazy" src={profileImageUrl} />
    );
};
