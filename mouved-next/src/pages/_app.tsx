import '../styles/global.css'
import {ChallengeContext, ChallengeContextProvider} from '../contexts/ChallengeContext'
import React from 'react'

function MyApp({ Component, pageProps }) {
  return( 
          <ChallengeContextProvider> 
            <Component {...pageProps} />
         </ChallengeContextProvider>
         )
}

export default MyApp
