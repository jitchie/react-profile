import React from 'react';
import Header from '../navigations/Header';
import Footer from '../navigations/footer';


const Layout = (props) => {
    console.log(props);
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
