import { Button } from 'bootstrap';
import React, { useEffect } from 'react';
import tawkTo from "tawkto-react";

function TawkComponent() {

  const tawkToPropertyId = '6114f086649e0a0a5cd0c9cd';
  const tawkToKey = 'c1750d87345da8d2071f35c771ab10bdcb7ab9dd';
  
  const openChat = () => {
    useEffect(() => {
      tawkTo(tawkToPropertyId, tawkToKey)
    }, [])
  }

  return (
    <div>
      <Button onClick={openChat}>Click Here to Chat with us</Button>
    </div>
  )
}

export default TawkComponent

{/* <script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6114f086649e0a0a5cd0c9cd/1fcssn43d';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script> */}
