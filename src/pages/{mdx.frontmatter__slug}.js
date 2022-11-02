import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/Layout";

export default function Post({ data, children }) {
  const image = getImage(data.mdx.frontmatter.image);
  return (
    <Layout title={data.mdx.frontmatter.title}>
      <p>Posted: {data.mdx.frontmatter.posted}</p>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.image_alt} />
      {children}
    </Layout>
  );
}

export const query = graphql`
  query PostData($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        description
        slug
        image_alt
        posted
      }
      excerpt
    }
  }
`;
