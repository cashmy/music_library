import React, { Component } from 'react';
import { MDBContainer } from "mdbreact";
import Navbar from './Navbar/navbar';
import Footer from './Footer/footer';
import BackgroundImage from './BackgroundImage/backgroundImage';

class App extends Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        return (
            // <MDBContainer>
            <div className="container-fluid">
                <BackgroundImage />
                <Navbar />

                <Footer />
            </div>
            // </MDBContainer>
        );
    }
}

export default App;