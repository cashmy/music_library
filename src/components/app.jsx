import React, { Component } from 'react';
import axios from 'axios';
import { MDBView } from "mdbreact";
import Navbar from './Navbar/navbar';
import Footer from './Footer/footer';
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
        // this.mapSongsWithButton()
    }

    // handleOnClickEdit = () => {
    //     editSong.current.toggle();
    // }

    // mapSongsWithButton() {
    //     let newSongsMapResult = this.state.songs.map((song) => {
    //         song.action =   <MDBBtn
    //                             icon='edit'
    //                             className='cyan-text'
    //                             size='lg'
    //                             style={{ cursor: 'pointer' }}
    //                             type="button"
    //                             onClick={this.handleOnClickEdit}
    //                         />;
    //         return song;
    //     });
    //     this.setState({songs: newSongsMapResult});
    //     console.log(this.state.songs)
    //     return
    // }
    
    render() {
        return (
            <div id="classicformpage">
                <Navbar />
                <MDBView>
                    <MusicTable songs={this.state.songs} /> 
                </MDBView>
                <Footer />
            </div>

        );
    }
}

export default App;