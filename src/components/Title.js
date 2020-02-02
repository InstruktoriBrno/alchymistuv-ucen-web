import React from 'react';
import PropTypes from 'prop-types';
import {useStaticQuery, graphql} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import ResponsiveContainer from './ResponsiveContainer';

import style from './Title.module.scss';

const Title = ({title, subtitle, children}) => {
    const {background: {childImageSharp: {fluid}}} = useStaticQuery(graphql`
        query {
            background: file(relativePath: {eq: "title.jpg"}) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 1920) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    return (
        <BackgroundImage
            Tag="header"
            fluid={fluid}
            className={style.main}
        >
            <ResponsiveContainer className={style.container}>
                <h1 className={style.title}>{title}</h1>
                <h2 className={style.subtitle}>{subtitle}</h2>
                {children}
            </ResponsiveContainer>
        </BackgroundImage>
    );
};

Title.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    children: PropTypes.node,
};

Title.defaultProps = {
    children: null,
};

export default Title;