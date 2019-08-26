import React from "react";
import { Link } from "gatsby";
import '../components/navbar.css'
import '../layouts/custom.css'



     	var Navbar = React.createClass({
  render: function() {
    return (
      <div>
         <nav role="navigation" className="bg-blue">
    <Link to={null} className="ic menu" tabindex="1">
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </Link>
    <Link to={null} className="ic close"></Link>
    <ul className="main-nav">
      <li className="top-level-link">
        <Link to="/"><span>Home</span></Link>
      </li>

      <li className="top-level-link">
        <Link to="/about" className="mega-menu"><span>About</span></Link>
        <div className="sub-menu-block">
          <div className="cf">
            <div className="fl w-two-thirds-l db-l dn pa2">


             <p>The Institute for Community Inclusion at UMass Boston supports the rights of children and adults with disabilities to participate in all aspects of the community. As practitioners, researchers, and teachers, we form partnerships with individuals, families, and communities. Together we advocate for personal choice, self-determination, and social and economic justice.</p>
            </div>


            <div className="fl w-third-l w-100 pa2">

              <ul className="sub-menu-lists ma0 pa0">
                <li><Link to="/about">About the ICI</Link></li>
                <li><Link to="/about/history">History of ICI</Link></li>
                <li><Link to="/about/mission">Mission and Vision</Link></li>
                <li><Link to="/about/staff">Staff</Link></li>
                  <li><Link to="/about/directions">Directions</Link></li>
                    <li><Link to="/about/contact">Contact</Link></li>
              </ul>
            </div>
          </div>



        </div>
      </li>
      <li className="top-level-link">


           <Link to="/areas-of-emphasis" className="mega-menu"><span>Areas of Emphasis</span></Link>
        <div className="sub-menu-block">
          <div className="cf">
            <div className="fl w-two-thirds-l db-l dn pa2">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed pellentesque lorem, sit amet placerat arcu. Etiam viverra quam quis leo feugiat, et pellentesque enim fermentum.   </p>
            </div>

            <div className="fl w-third-l w-100 pa2">

              <ul className="sub-menu-lists ma0 pa0">
                <li><Link to="/areas-of-emphasis/employment">Employment</Link></li>
                <li><Link to="/areas-of-emphasis/education">Education</Link></li>
                <li><Link to="/areas-of-emphasis/community">Community Life</Link></li>
                <li><Link to="/areas-of-emphasis/healthcare">Healthcare</Link></li>
              </ul>
            </div>
          </div>



        </div>
      </li>
      <li className="top-level-link">
        <Link to="/projects" className="mega-menu"><span>Projects</span></Link>
        <div className="sub-menu-block">
          <div className="cf">
            <div className="fl w-60-l db-l dn pa2 br">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed pellentesque lorem, sit amet placerat arcu. Etiam viverra quam quis leo feugiat, et pellentesque enim fermentum.   </p>
            </div>

            <div className="fl w-20-l w-100">

              <ul className="sub-menu-lists ml1">
                <li><Link to="/projects/thinkcollege">ThinkCollege</Link></li>
                <li><Link to="/projects/thinkwork">ThinkWork!</Link></li>
                <li><Link to="/projects/explorevr">ExploreVR</Link></li>
                 <li><Link to="/projects/seln">SELN</Link></li>
                  <li><Link to="/projects/statedata">StateData</Link></li>
                   <li><Link to="/projects/catada">CATADA</Link></li>

              </ul>
            </div>

            <div className="fl w-20-l w-100">

              <ul className="sub-menu-lists ma0 pa0">


  <li><Link to="/projects/nercve">NERCVE</Link></li>
   <li><Link to="/projects/employmentfirstma">EmploymentFirstMA</Link></li>
      <li><Link to="/projects/fqi">Future Quest Island</Link></li>
   <li><Link to="/projects/lend">BostonLEND</Link></li>
<li><Link to="/projects/bchdsp">BCH Down Syndrome Program</Link></li>
              </ul>
            </div>
          </div>
          <nav className="db dt-l w-100 border-box pa3 ph5-l bg-dark-blue ">
            <ul className="db dtc-l v-mid w-100 w-75-l tc  ">
              <li className="dib mr2"> <a className="link dim white f6 f5-l dib mr3 mr4-l" href="#" title="About">ABOUT ICI</a></li>
              <li className="dib mr2"> <a className="link dim white f6 f5-l dib mr3 mr4-l" href="#" title="Store">AREAS OF EMPHASIS</a></li>
              <li className="dib mr2"> <a className="link dim white f6 f5-l dib mr3 mr4-l" href="#" title="Contact">PROJECTS</a></li>
              <li className="dib mr2">   <a className="link dim white f6 f5-l dib mr3 mr4-l" href="#" title="Contact">SERVICES</a></li>
              <li className="dib mr2"> <a className="link dim white f6 f5-l dib" href="#" title="Contact">RESOURCES</a></li>
            </ul>
          </nav>
        </div>
      </li>
      <li className="top-level-link">
         <Link to="/services" className="mega-menu"><span>Services</span></Link>
            <div className="sub-menu-block">
            <div className="cf">
            <div className="fl w-two-thirds-l db-l dn pa2">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed pellentesque lorem, sit amet placerat arcu. Etiam viverra quam quis leo feugiat, et pellentesque enim fermentum.   </p>
            </div>

            <div className="fl w-third-l w-100 pa2">

              <ul className="sub-menu-lists pa0 ma0">
                <li><Link to="/services/ici-consulting">ICI Consulting</Link></li>
                <li><Link to="/services/training-and-ta">Training and TA</Link></li>
                <li><Link to="/services/employment-services">ICI Employment Services</Link></li>
                 <li><Link to="/services/college-of-employment-services">College of Employment Services</Link></li>
                  <li><Link to="/services/ces-acre">CES/ACRE</Link></li>


              </ul>
            </div>

          </div>
          </div>
        </div>
      </div>
    );
  }
});


export default Navbar
