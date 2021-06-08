import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div class="section-1">
      <h1 class="section-1_h2">Mina Bui</h1>
      <p>
        Front-End Developer with a love for web design, based in Vancouver.
      </p>
      <p>
        <Link to="/contact/"><button>Contact Me</button></Link>
      </p>
    </div>

    <div class="section-2">
      <h2>About Me</h2>
      <p>
        Vietnamese-Canadian living in British Columbia who loves all things design and spends an unusual amount of time on the internet. Has a particular interest in user friendly, responsive interfaces.
      </p>

      <p>
        <Link to="/about/"><button>More About Mina</button></Link>
      </p>

      <hr />

      <h3>Skills and Technologies</h3>
      <div class="bar">
        <span class="bar_content">
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Sass / SCSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Gatsby.js</li>
            <li>TypeScript</li>
            <li>PHP</li>
            <li>Visual Studio Code</li>
            <li>GitHub</li>
            <li>Git</li>
            <li>Figma</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Responsive UX/UI design</li>
            <li>WordPress</li>
            <li>Trello</li>
            <li>SEO</li>
            <li>Google Analytics</li>
          </ul>
        </span>
      </div>

      <hr />

      <h3>Things I Like</h3>
      <div class="venn-diagram">
        <div class="venn-circle-1">
          <p>Problem Solving</p>
        </div>
        <div class="venn-circle-2">
          <p>Being Creative</p>
        </div>
        <div class="venn-middle">
          <p>Web Design</p>
        </div>
      </div>
    </div>

    <div class="section-3">
      <h2>My Projects</h2>
      <p>
        Check out a few of my projects, from my time at BCIT and beyond.
    </p>
      <p>
        <Link to="/projects/"><button>See All Projects</button></Link>
      </p>

      <div class="s3-gallery">

        <div class="s3-gallery-block1">
          <StaticImage
            src="../images/index_s1.jpg"
            class="s3-gallery-img1"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Mina Bui's Portfolio Piece 1"
          />
          <p>
            Project 1 <span>Jan 2021</span><br />
            React.js movie database web application.
          </p>
        </div>

        <div class="s3-gallery-block2">
          <StaticImage
            src="../images/index_s1.jpg"
            class="s3-gallery-img2"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Mina Bui's Portfolio Piece 2"
          />
          <p>
            Project 2 <span>March 2021</span><br />
            WordPress Woocommerce website selling apparel.
          </p>
        </div>

        <div class="s3-gallery-block3">
          <StaticImage
            src="../images/index_s1.jpg"
            class="s3-gallery-img3"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Mina Bui's Portfolio Piece 3"
          />
          <p>
            Project 3 <span>June 2021</span><br />
            Gatsby.js and Typescript based portfolio site (that's where you are).
          </p>
        </div>
      </div>

    </div>

  </Layout>
)

export default IndexPage
