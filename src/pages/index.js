import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div class="section-1">
      <h2>Mina Bui</h2>
      <p>
        Front-End Developer and Web Designer based in Vancouver, BC. <br />
      I like to build responsive, interactive websites and web applications.
    </p>
      <p>
        <Link to="/page-2/"><button>Hire Me</button></Link>
      </p>
    </div>

    <hr />

    <div class="section-2">
      <h3>About Me</h3>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
    </p>
      <p>
        <Link to="/page-2/"><button>Read More About Me</button></Link>
      </p>
    </div>

    <hr />

    <div class="section-3">
      <h3>My Projects</h3>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
    </p>
      <p>
        <Link to="/page-2/"><button>See All My Projects</button></Link>
      </p>
    </div>

    <hr />

    <div class="section-4">
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

    </div>

    <hr />

  </Layout>
)

export default IndexPage
