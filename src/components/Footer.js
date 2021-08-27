 import React from 'react';
import logoFooter from '../assets/images/ucla-samueli-logo.svg';


const Footer = () => {

  return (
    <div className=" site-footer ">
      <div className=" footer-logo">
          <img
            src={logoFooter}
            alt="UCLA"
            title="UCLA footer"
          />
        </div>
        <div className="footer-dept">
          Electrical and Computer Engineering Department - 2019-2020 Annual Report
        </div>
    </div>
  );
}

export default Footer;
