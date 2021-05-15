import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div class="section-1">
      <h2 class="section-1_h2">Mina Bui</h2>
      <p>
        Front-End Developer and Web Designer based in Vancouver. <br />
      I build responsive, interactive websites and web applications. <Link to="/about/">Learn more.</Link>
      </p>
      <p>
        <Link to="/contact/"><button>Contact Me</button></Link>
      </p>
    </div>

    <div class="section-2">
      <h3>About Me</h3>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
      </p>
      <p>
        <Link to="/about/"><button>Learn More</button></Link>
      </p>
    </div>

    <div class="section-3">
      <h3>My Projects</h3>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi. architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.
    </p>
      <p>
        <Link to="/projects/"><button>See All Projects</button></Link>
      </p>
    </div>

  </Layout>
)

export default IndexPage
