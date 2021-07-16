import React from 'react';
import Header from '../navigations/Header.js';
import Footer from '../navigations/Footer.js';

const Layout = (props) => {
    return (
        <React.Fragment>
            <Header />

            < main className = "main-body">
                {props.children}
            </main>

            <Footer />
        </React.Fragment>
            
        
    )
}

export default Layout; 
