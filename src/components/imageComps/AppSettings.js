import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const AppSettings = ({ width }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "appSettings.png" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <>
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        style={{ width: width, border: '1px solid black' }}
        alt='Quick Product Import app settings window'
      />
      <p style={{ marginLeft: '1rem', fontStyle: 'italic', fontSize: '14px' }}>
        Example of Quick Product Import's app settings window.
      </p>
    </>
  );
};

export default AppSettings;
