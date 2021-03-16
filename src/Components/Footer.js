import React, { Component } from 'react';
import "./footer.css";

class Footer extends Component {

  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    function monit(){
      window.location.href="https://monit-bhandari.web.app/?fbclid=IwAR0fEaXdEa59AQhMeCKTyd2Nofvvuq4HEQPpck4_hxpfi8p_F2S2Mcacwbg"
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

           <ul className="copyright">
             <li onClick={monit}>Created by <span className="creator">Monit Bhandari</span></li>
              
              <li>Design by <a title="Styleshout">Mahaboob Alam and Dhurba Gautam</a></li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
