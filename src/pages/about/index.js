import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { SitemapCrumbs } from 'gatsby-plugin-breadcrumb'
import Breadcrumb from "../../components/breadcrumb/breadcrumb"
export const AboutPage = ({ pageContext, location, crumbLabel }) => {
  console.log("pageContext: ", pageContext)
  const {
    breadcrumb: { crumbs },
  } = pageContext

  // Example of dynamically using location prop as a crumbLabel
  const customCrumbLabel = location.pathname.toLowerCase().replace('-', ' ')

  return (
  <Layout>
    <div className="breadcrumb mw8 center">
      <SitemapCrumbs
            crumbs={crumbs}
            crumbSeparator=" / "
            crumbStyle={{ color: "#0275d8" }}
            crumbActiveStyle={{ color: "#01447e" }}
            crumbLabel="About"
          />
</div>
   <section className="mw8 center">
    <SEO title="About the ICI" />



    <div className="w-100 pa2">
    <h1>About</h1>
    <p> ICI recently <a href="http://50.communityinclusion.org/">celebrated our 50th anniversary</a> as a <a href="https://www.aucd.org/template/index.cfm">University Center for Excellence in Developmental Disabilities (UCEDD)</a>. President John F. Kennedy launched the UCEDD network in 1963, and today UCEDDs are located at public universities in every U.S. state and territory. </p>
    <p>These 67 UCEDDs collaborate with people with disabilities, members of their families, state and local government agencies, and service providers. The goal is to empower all citizens, with and without disabilities, to fully participate in community settings. This includes workplaces, health care facilities, schools, and everywhere else where people engage with one another.</p> 
    <p>As a member of the UCEDD network, ICI provides training, technical assistance, service, research, and information sharing, with a focus on ending disability-based discrimination and exclusion, and building the capacity of communities to sustain all their citizens.</p>

    </div>
</section>
  </Layout>
)
}


export default AboutPage