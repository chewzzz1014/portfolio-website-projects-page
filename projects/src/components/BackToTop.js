// for MUI scroll to top icon and utils
import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollTop from './ScrollTop';

// react components
import Nav from './Nav'
import Logo from './logo'
import { dataElements } from './Main'
import Footer from './Footer'

export default function BackToTop(props) {
    return (
        <React.Fragment>
            <div className='App'>
                <div>
                    <Nav />
                    <Toolbar id="back-to-top-anchor" style={{ 'minHeight': '5px', 'margin': '0px', 'padding': '0px' }} />
                    <Logo />
                    {dataElements}
                </div>
                <Footer />
            </div>
            <ScrollTop {...props}>
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    );
}