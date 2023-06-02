import React from 'react';
import styled from 'styled-components';
import profileImageUrl from './jonas-reitmann.jpg';

const Image = styled.img`
    max-width: 100%;
    border-radius: 100%;
`;

export const ProfilePicture = () => {
    return (
        <Image
            height={128}
            width={128}
            loading="lazy"
            src={profileImageUrl}
            alt="Picture of Jonas Reitmann"
        />
    );
};
