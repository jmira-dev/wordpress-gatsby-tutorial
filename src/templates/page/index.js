import React from "react"

<<<<<<< HEAD
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import FluidImage from "../../components/FluidImage"
=======
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
>>>>>>> refs/rewritten/tutorial-part-5


const Page = ({ pageContext }) => {
  const {
<<<<<<< HEAD
    page: { id, postId, title, content, excerpt, featuredImage },
=======
    page: { title, content },
>>>>>>> refs/rewritten/tutorial-part-5
  } = pageContext;

  console.log(featuredImage)

  return (
    <Layout>
      <SEO title={title} />

      <FluidImage image={featuredImage} style={{marginBottom: '15px'}} />
      {/*<FluidImage image={null}  />*/}


      <h1> {title} </h1>
      <div dangerouslySetInnerHTML={{__html: content}} />

    </Layout>
  )
}

export default Page
