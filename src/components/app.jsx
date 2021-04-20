import React, { Component } from 'react';
import Navbar from './Navbar/navbar';
import Footer from './Footer/footer';

class App extends Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        return (
            <div className="container-fluid">
                <Navbar />

                {/* <Footer /> */}
            </div>
        );
    }
}

export default App;