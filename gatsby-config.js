module.exports = {
  siteMetadata: {
    title: `flexsearch-test`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog/`,
      },
      __key: "blog",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-flexsearch",
      options: {
        languages: ["en"],
        type: "Mdx",
        fields: [
          {
            name: "title",
            indexed: true,
            resolver: "frontmatter.title",
            attributes: {
              encode: "balance",
              tokenize: "strict",
              threshold: 6,
              depth: 3,
            },
            store: true,
          },
          {
            name: "description",
            indexed: true,
            resolver: "frontmatter.description",
            attributes: {
              encode: "balance",
              tokenize: "strict",
              threshold: 6,
              depth: 3,
            },
            store: true,
          },
          {
            name: "url",
            indexed: true,
            resolver: "frontmatter.slug",
            attributes: {
              encode: "balance",
              tokenize: "strict",
              threshold: 6,
              depth: 3,
            },
            store: true,
          },
          {
            name: "excerpt",
            indexed: true,
            resolver: "excerpt",
            attributes: {
              encode: "balance",
              tokenize: "strict",
              threshold: 6,
              depth: 3,
            },
            store: true,
          },
        ],
      },
    },
  ],
};
