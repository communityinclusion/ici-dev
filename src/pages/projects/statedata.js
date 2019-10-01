import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import statedataLong from '../../images/statedata-long.png'
import Breadcrumb from "../../components/breadcrumb/breadcrumb"

const StateDataPage = () => (
  <Layout>
         <Breadcrumb crumbs={ [ 'Home', 'Projects' ,'StateData.info'] } />
      <section className="mw8 center">
       <SEO title="StateData" />
  
   
 
    
   
       <div className="w-100 pa2">
       <h1>StateData</h1>
       <img src={statedataLong} className="db" alt = "StateData" />
  <p><a className="link dim blue" href="https://www.statedata.info/">StateData.info</a> offers publications and data related to employment and disability. It builds off of decades of research conducted at ICI about the work of state intellectual and developmental disabilities (IDD) agencies, vocational rehabilitation agencies, and community organizations providing employment support to people with IDD.</p>

<p>This interactive data hub can help policymakers measure the impact of legislation changes, and allows advocates to create graphs and charts to influence decision-making in their state. State agency staff and leadership can use the data to monitor, report on, and analyze their outcomes. Employment providers can identify benchmarks and measure their progress against them, while researchers can perform rapid analyses and download spreadsheets to study data on a national or state-by-state level.</p>

<p><a className="link dim blue" href="https://www.statedata.info/">Dive into the data at StateData.info.</a></p>
</div>
</section>
  </Layout>
)

export default StateDataPage