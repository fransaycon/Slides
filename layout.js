import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import styled from '@emotion/styled'

const Main = styled.main`
    display: flex;
    flex: 1;
    height: 95vh;
    justify-content: center;
    align-items: center;
`

const Footer = styled.footer`
    display: flex;
    flex: 1;
    height: 5vh;
    justify-content: center;
    padding: 0px 100px 0px 100px;
    align-items: space-between;
    font-size: 2.5vh;
`

const Wrapper = props => <Main  {...props} />

const Layout = ({ children }) => (
    <MDXProvider components={{ wrapper: Wrapper }}>
        <Main>{children}</Main>
        <Footer>
            (c) Franrey Saycon (me@fsaycon.dev)
        </Footer>
    </MDXProvider>
)

export default Layout
