import React from 'react';
import { graphql } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import Img from 'gatsby-image';
import Layout from '../components/layout';

const Team = ({ data }) => (
  <Layout>
    <h1>Team</h1>
    {data.allDatoCmsTeamMember.edges.map(({ node: teamMember }) => (
      <div>
        <div style={{ maxWidth: '400px' }}>
          <Img fluid={teamMember.image.fluid} />
        </div>
        <div>{teamMember.name}</div>
        <div>{teamMember.role}</div>
      </div>
    ))}
  </Layout>
);

export default Team;

export const query = graphql`
  query TeamQuery {
    allDatoCmsTeamMember(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          role
          name
          image {
            resolutions {
              src
            }
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`;
