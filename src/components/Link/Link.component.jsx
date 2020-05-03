import React from 'react'
import styled from 'styled-components'

const InnerLink = styled.a`
    color : #61daab;
    text-decoration: none;
    `;

export default function Link({ url ,  title }) {
    return (
        <div>
            < InnerLink
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </ InnerLink>
        </div>
    )
}
