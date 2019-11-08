import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

const ContactPage = ({
  pageContext: {
    breadcrumb: { crumbs },
  },
}) => (
  <Layout>
     <section className="mw8 center">
       <SEO title="Contact Us" />
      <div className="breadcrumbs">
    <Breadcrumb
            crumbs={crumbs}
            crumbSeparator=" / "
            
          />
          </div>

     

   
  
   
       <div className="w-100 pa2">
       <h1>Contact Us</h1>
  <p>The Institute for Community Inclusion is based at the University of Massachusetts Boston with additional offices at Boston Children's Hospital.</p>


<address>
Institute for Community Inclusion/UCEDD<br />
UMass Boston<br />
100 Morrissey Blvd.<br />
Boston, Massachusetts 02125<br />
Voice: 617.287.4300<br />
Fax: 617.287.4352<br />
TTY: 617.287.4350<br />
Email: <a href="mailto:ici@umb.edu">ici@umb.edu</a></address>
</div>

</section>
  </Layout>
)
export default ContactPage