import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { IconTwitter } from "../components/icons"
import { useStaticQuery, graphql, Link } from "gatsby"

const IndexPage = () => {
  const res = useStaticQuery(
    graphql`
      query {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              frontmatter {
                title
                path
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <div className="flex flex-col items-center mt-20">
        <aside className="flex flex-col items-center">
          <h1 className="mt-2">
            Hello, je suis{" "}
            <a className="font-bold" href="http://adriantoine.com">
              Adrien
            </a>
            !
          </h1>

          <div className="max-w-3xl mt-6 text-center">
            <span>
              Sur ce blog, j'écris et je partage mes histoires écrites pour le
              défi{" "}
              <a
                className="hover:text-blue-500"
                href="https://www.theliteralchallenge.com/liketheprose"
                target="_blank"
              >
                Like The Prose
              </a>
              ! Cela consisite principalement à écrire une nouvelle par jour sur
              un thème donné.
            </span>
            <a
              className="ml-2 hover:text-blue-500"
              href="https://twitter.com/adriantoine"
              target="_blank"
            >
              <IconTwitter className="h-4 w-4 inline-block" />
            </a>
          </div>
        </aside>

        <div className="mt-16 max-w-xl">
          <main>
            {res.allMdx.edges.map((post: any) => (
              <article key={post.node.frontmatter.path} className="mb-16">
                <header className="leading-tight text-blue-600 font-serif text-3xl">
                  <Link
                    className="no-underline"
                    to={post.node.frontmatter.path}
                  >
                    {post.node.frontmatter.title}
                  </Link>
                </header>
                <small className="text-gray-500 text-sm">
                  {post.node.frontmatter.date}
                </small>
              </article>
            ))}
          </main>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
