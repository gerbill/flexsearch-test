import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Search from "../../components/Search";
import Layout from "../../components/Layout";

export default function IndexPage() {
  const posts = useStaticQuery(graphql`
    query MyQuery {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              description
              slug
              title
              posted
            }
          }
        }
      }
    }
  `);
  console.log(window.__FLEXSEARCH__);
  return (
    <Layout title="Gatsby FlexSearch Plugin Test">
      <main>
        <Search />
        <ul>
          {posts.allMdx.edges.map((p) => {
            return (
              <li key={p.node.id}>
                <Link to={`/${p.node.frontmatter.slug}`}>
                  {p.node.frontmatter.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </Layout>
  );
}
