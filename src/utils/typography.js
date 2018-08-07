import Typography from "typography";
import githubTheme from 'typography-theme-github'
import gray from 'gray-percentage';

githubTheme.overrideStyles = ({ rhythm }) => ({
    h1: {
        borderBottom: `1px solid ${gray(93)}`,
        paddingBottom: `calc(${rhythm(1 / 4)} - 1px)`,
        marginBottom: rhythm(3 / 4),
        marginTop: rhythm(1.5),
    },
    h2: {
        borderBottom: `1px solid ${gray(93)}`,
        paddingBottom: `calc(${rhythm(1 / 4)} - 1px)`,
        marginBottom: rhythm(1 / 4),
        marginTop: rhythm(1),
    },
    h6: {
        color: gray(47),
    },
    'h3,h4,h5,h6': {
        marginBottom: rhythm(1 / 2),
        marginTop: rhythm(1),
    },
    'ol,ul': {
        marginLeft: rhythm(1.25),
    },
    // children ol, ul
    'li>ol,li>ul': {
        marginLeft: rhythm(1.25),
    },
    a: {
        color: '#4078c0',
        textDecoration: 'none',
    },
    'a:hover,a:active': {
        textDecoration: 'underline',
    },
    pre: {
        borderRadius: `0.2rem`,
        background: gray(95),
        padding: "1rem"
    },
    blockquote: {
        borderLeft: `4px solid ${gray(87)}`,
        color: gray(47),
        marginTop: 0,
        marginRight: 0,
        marginLeft: 0,
        paddingLeft: `calc(${rhythm(1 / 2)} - 1px)`,
    },
});

const typography = new Typography(githubTheme);

export default typography;