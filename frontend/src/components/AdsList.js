import React from 'react'

import Ad from './Ad';

const AdsList = ({ads}) => {




  
  return (

    <div>
        <ul>
            <h1>Ads</h1>
                
                {
                  ads.map((ad) => <Ad key={ad.id} ad={ad} />)
                
                }
        </ul>
    </div>
    )
}

export default AdsList