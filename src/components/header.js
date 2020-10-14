import { Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../images/ici-150w.png'
// import Search from './search.js'
import SearchForm from "./searchForm"


const Header = () => (

	<div>
  

    <div className = "header" >
    <div className = "cf flex justify-around mw9 center ph3 ph4-m ph4-l pt3-ns pb3-ns" >
    <div className = "fl w-15 header-first" >
    <Link to= "/" className = "dtc v-mid mid-gray link "
    title = "Home" >
  <img className = "dib mw-80 h-auto"
   			 alt = "Institute for Community Inclusion"
            src={logo}
          />

    </Link> </div> 
    
    <div className = "fl w-80 w-70-m w-60-l pl2 header-second" >
    <p className = "bb-0 banner-text dark-blue b  f5 f3-m f1-l db mb2 mt0-ns mt3 center " >
    Institute
    for Community Inclusion </p>
    <span className = "banner-tagline f6 f5-m f4-l dn db-ns f-subheadline dark-blue tracked-mega-l " > { " " }
    PROMOTING THE INCLUSION OF PEOPLE WITH DISABILITIES </span> </div> 
    
    <div className = "fl w-25 dn dn-m db-l pa2 header-third" >
   
    <ul className = "flex justify-around list pl0 ma0 mb2 header-links" >
    <li className = "flex-item dib pr1" >
   <Link to= "/subscribe/" className="link dim dark-gray f6 dib "
    title = "Subscribe" >
    Subscribe { " " } </Link> </li> <li className = "flex-item dib  pr1 pl1" > { " " }
   <Link to="/about/contact/" className="link dim dark-gray f6 dib "
    title = "Contact" >
    Contact </Link> </li> <li className= "flex-item dib pl1" > { " " }
    <Link to="/donate/"  className= "link dim dark-gray f6 dib "
    title = "Donate" >
    Donate </Link> </li> </ul>  

    <ul className = "social-links flex justify-around list pl0 ma0 mb2" >
    <li className = "flex-item dib" > { " " } <a href = "https://twitter.com/ICInclusion"
    target = "_blank"
    rel = "noopener noreferrer" >
    <i className = "fab  fa-2x fa-twitter" / >
    </a> </li> <li className = "flex-item dib" > { " " }
     <a href = "https://www.instagram.com/communityinclusion/"
    target = "_blank"
    rel = "noopener noreferrer" >
    <i className = "fab fa-2x fa-instagram" / >
    </a> </li> <li className = "flex-item dib pl1" > { " " } 
    <a href = "https://communityinclusion.tumblr.com/"
    target = "_blank"
    rel = "noopener noreferrer" >
    <i className = "fab  fa-2x fa-tumblr-square" / >
    </a> </li> <li className = "flex-item dib pl1" > { " " } <a href = "https://www.facebook.com/communityinclusion/"
    target = "_blank"
    rel = "noopener noreferrer" >
    <i className = "fab  fa-2x fa-facebook-square" / >
    </a> </li> <li className = "flex-item dib pl1" > { " " } <
    a href = "https://www.youtube.com/user/communityinclusion"
    target = "_blank"
    rel = "noopener noreferrer" >
    <i className = "fab fa-2x fa-youtube" / >
    </a> </li> </ul>
    <div className = "k--group ml3" >

<SearchForm />

    </div>
         </div> 
    
  
    </div>
     </div>

    </div>
 )


Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};



export default Header;
