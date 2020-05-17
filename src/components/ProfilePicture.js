import React from 'react';
import styled from 'styled-components';
import profileImageUrl from './2018-quadratisch.jpg';

const Image = styled.img`
    height: 144px;
    width: 144px;
    border-radius: 100%;
`;

export const ProfilePicture = () => {
    return <Image src={profileImageUrl} />;
};
