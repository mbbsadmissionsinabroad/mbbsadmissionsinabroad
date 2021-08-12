import React, { useEffect } from 'react';
import tawkTo from "tawkto-react";

function TawkComponent() {

  const tawkToPropertyId = '6114f086649e0a0a5cd0c9cd';
  const tawkToKey = 'c1750d87345da8d2071f35c771ab10bdcb7ab9dd';
  useEffect(() => {
    tawkTo(tawkToPropertyId, tawkToKey)
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default TawkComponent
