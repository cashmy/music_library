import React, { Component } from 'react';
import axios from 'axios';
import { MDBContainer } from "mdbreact";
import Navbar from './Navbar/navbar';
import Footer from './Footer/footer';
import BackgroundImage from './BackgroundImage/backgroundImage';
import MusicTable from './MusicTable/musicTable';

class App extends Component {

    state = {
        songs: []
    }

    componentDidMount() {
        this.getAllSongs();
    }

    async getAllSongs() {
        let response = await axios.get('http://127.0.0.1:8000/songs/')
        this.setState({ 
            songs: response.data
        })
        console.log(this.state.songs)
    }

    
    render() {
        return (
            <MDBContainer>
            {/* <div className="container-fluid"> */}
                <Navbar />
                {/* <BackgroundImage /> */}
                <MDBContainer style={{ marginTop: '75px'}}>
                    <MusicTable songs={this.state.songs} />
                </MDBContainer>
                <Footer />
            {/* </div> */}
            </MDBContainer>
        );
    }
}

export default App;