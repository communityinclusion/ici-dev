import React from "react"
import Layout from "../../components/layout"
import SidebarProject from "../../components/sidebarproject"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import selnLong from '../../images/seln-long.gif'
import Breadcrumb from "../../components/breadcrumb/breadcrumb"

const SelnPage = () => (
  <Layout>
         <Breadcrumb crumbs={ [ 'Home', 'Projects' ,'SELN'] } />
      <section className="mw8 center">
       <SEO title="Seln" />
  
   
   <div className="cf ph2-ns">
       <SidebarProject />
   
       <div className="fl w-75 pa2">
       <h1>SELN</h1>
       <img src={selnLong} className="db" alt = "SELN" />
  <p>The <Link className="link dim blue" to="https://selnhub.org/home/">State Employment Leadership Network</Link> (SELN) brings together state intellectual and developmental disability (IDD) agencies for sharing, educating, and providing guidance on practices and policies around employment. The SELN offers technical assistance to its member states to boost their efforts to make substantial changes in their service systems.</p>
<p>Run by ICI and the National Association of State Directors of Developmental Disabilities Services, the SELN supports states to improve integrated employment outcomes for people with IDD. Its members put into practice core beliefs: that employment is a path to opportunity, that employment connects people, that employment means equity, and that employment means increased economic opportunity.
</p>

<p><Link className="link dim blue" to="https://selnhub.org/home/">Explore the SELN and its accomplishments.</Link></p>
</div>
</div>
</section>
  </Layout>
)

export default SelnPage