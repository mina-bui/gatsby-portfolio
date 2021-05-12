import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <StaticImage
      src="../images/index_s1.jpg"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Mushrooms on a log. Photo by Sander Weeteling on Unsplash. (https://unsplash.com/photos/4MZlDAiIpoI)"
    />
    <h1>Section 1: Mina Bui</h1>
    <p>
      Front-End Developer and Web Designer based in Vancouver, BC. <br />
      I like to build responsive, interactive websites and web applications.
    </p>
    <p>
      <button>Hire Me</button>
    </p>

    <hr />

    <h2>Section 2: About Me</h2>
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
    </p>
    <p>
      <button>Read More About Me</button>
    </p>

    <hr />

    <h2>Section 3: My Projects</h2>
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
    </p>
    <p>
      <button>See All My Projects</button>
    </p>

    <hr />

    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>

    <hr />

  </Layout>
)

export default IndexPage
