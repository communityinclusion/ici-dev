import React from "react"
import { Link } from "gatsby"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import Layout from "../../components/layout"
import SEO from "../../components/seo"


const HistoryPage = ({
  pageContext: {
    breadcrumb: { crumbs },
  },
}) => (
  <Layout>
    <SEO title="History" />
    <section className="mw8 center">
    <div className="breadcrumbs">
    <Breadcrumb
            crumbs={crumbs}
            crumbSeparator=" / "
            
          />
          </div>
       <div className="w-100 pa2">
       <h1>History of ICI</h1>
       <p>The origins of ICI came with the launch of the Developmental Evaluation Clinic (DEC) at <a href="http://www.childrenshospital.org/">Boston Children’s Hospital</a>. The clinic opened its doors in 1967 with a mission of serving children with intellectual and developmental disabilities and their families. Under the leadership of Dr. Allen C. Crocker, the clinic received additional federal funding and collaborated with state agencies in Massachusetts to provide broader-ranging support to children and families with disabilities.</p>

<p>In 1987, the <Link to="/about">about</Link> DEC branched out to create the Training and Research Institute for People with Disabilities, which focused on vocational rehabilitation and employment. In 1990, this unit established offices at the <a href="https://www.umb.edu/">University of Massachusetts Boston</a>, and was renamed the Institute for Community Inclusion in 1992.</p>

<p>In the 1990s, ICI began to apply for and receive federal funding to run Rehabilitation Research and Training Centers: national centers focused on advancing research and practice around employment for people with disabilities. ICI also continued to collaborate with Massachusetts state agencies and initiatives, including those run by community-based organizations and self-advocates with disabilities.</p>

<p>In 2012, ICI officially became part of the <a href="https://globalinclusion.umb.edu/">School for Global Inclusion and Social Development (SGISD)</a> at UMass Boston. This has enabled ICI to connect our disability-focused work to a broader network of research and community engagement activities, including those of the <a href="https://www.umb.edu/inenas">Institute for New England Native American Studies</a> and the <a href="https://www.umb.edu/asamst">Asian American Studies Program</a>, both also housed within SGISD.</p>

<p>Learn more about our history <a href="http://50.communityinclusion.org/">on our timeline</a>. </p>

</div>

</section>
  </Layout>
)
export default HistoryPage
