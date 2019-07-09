import React from "react"
import Layout from "../../components/layout"
import SidebarProject from "../../components/sidebarproject"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import catadaLong from '../../images/catada-long.png'

const CatadaPage = () => (
  <Layout>
      <section className="mw8 center">
       <SEO title="CATADA" />
  
   
   <div className="cf ph2-ns">
       <SidebarProject />
   
       <div className="fl w-75 pa2">
       <h1>Catada</h1>
       <img src={catadaLong} className="db" alt = "Catada" />
  <p>The <Link className="link dim blue" to="https://catada.info/">Center for Assistive Technology Act Data Assistance</Link> (CATADA) provides technical assistance and supports to state Assistive Technology (AT) programs. AT is any item, piece of equipment, or system that is used to increase, maintain, or improve functional capabilities of individuals with disabilities.</p>

<p>State and territory AT programs improve the provision AT through comprehensive, statewide programs that are consumer-responsive. The goal of these programs is to increase access to and acquisition of AT. Programs serve people with all types of disabilities, of all ages, in all environments. Strategies used by AT programs include device reuse initiatives and financial loans to ensure that AT is available to everyone who needs it.</p>

<p><Link className="link dim blue" to="https://catada.info/">Explore CATADA’s work advancing AT across the nation.</Link> </p>
</div>
</div>
</section>
  </Layout>
)

export default CatadaPage