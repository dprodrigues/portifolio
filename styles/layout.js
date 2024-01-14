'use client'

import styled from 'styled-components'

export const Main = styled.main`
  animation: BackgroundAnimation 30s ease infinite;
  background-size: 400% 400%;
  background: linear-gradient(to top, #3fa3ab 0%, #79b6b4 100%);
  border-radius: 1rem;
  height: var(--screen-height);
  overflow: hidden;
  position: relative;
  width: var(--screen-width);

  @keyframes BackgroundAnimation {
    0% {
      background-position: 75% 0%;
    }

    50% {
      background-position: 25% 100%;
    }

    100% {
      background-position: 75% 0%;
    }
  }
`
