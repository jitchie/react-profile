import React from 'react';
import Header from '../../navigations/components/Header';
import Footer from '../../navigations/components/Footer';
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