import React from "react"

<<<<<<< HEAD
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import FluidImage from "../../components/FluidImage"
=======
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
<<<<<<< HEAD
>>>>>>> refs/rewritten/tutorial-part-5
=======
// import FluidImage from "../../components/FluidImage"
>>>>>>> 5555a05 (Adds image processing to posts)


const Page = ({ pageContext }) => {
  const {
<<<<<<< HEAD
<<<<<<< HEAD
    page: { id, postId, title, content, excerpt, featuredImage },
=======
    page: { title, content },
>>>>>>> refs/rewritten/tutorial-part-5
=======
    page: { title, content, featuredImage },
>>>>>>> 5555a05 (Adds image processing to posts)
  } = pageContext;

  console.log(featuredImage)

  return (
    <Layout>
      <SEO title={title} />

      {/*<FluidImage image={featuredImage} style={{marginBottom: '15px'}} />*/}
      {/*<FluidImage image={null}  />*/}


      <h1> {title} </h1>
      <div dangerouslySetInnerHTML={{__html: content}} />

    </Layout>
  )
}

export default Page
