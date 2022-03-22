import React from 'react';
import "../../Styles/Vendor/vendorbox.css"
function Vendorbox({img}) {
  
  return <div className='venbox'><div className="restimage"><img src={img} alt="" /></div></div>;
}

export default Vendorbox;
