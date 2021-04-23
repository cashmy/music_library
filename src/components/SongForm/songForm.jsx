import React, { Component } from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBInput } from 'mdbreact';
import axios from 'axios';

class ModalPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      modal: false,

      track: 0, 
      title: '',
      artist: '',
      album: '',
      release_date: '',
      likes: 0
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const song = {
      track: this.state.track,
      title: this.state.title,
      artist: this.state.artist,
      album: this.state.album,
      release_date: this.state.release_date,
      likes: this.state.likes
    }

    axios.post('http://127.0.0.1:8000/songs/', (song))
         .then(response => this.setState({ updatedAt: response.data.updatedAt }))
         .catch(error => {
           this.setState({ errorMessage: error.message });
           alert('There was an error! ' + error.message);
        }
      );
    
    this.setState ( { 
      track: 0, 
      title: '',
      artist: '',
      album: '',
      release_date: '',
      likes: 0
    })
  }

  toggle = () => {
    this.setState(
      {modal: !this.state.modal}
    );
    
  }

  render() {
    return (
      
      <MDBModal position="top-left" isOpen={this.state.modal} toggle={() => this.toggle}>
                        
        <MDBModalHeader toggle={this.toggle}><strong>Add a Song</strong></MDBModalHeader>
        <MDBModalBody>
          <form onSubmit={this.handleSubmit}>
            <div className="grey-text">

              <MDBInput label="Track" name="track" icon='caret-square-right' group type='number' 
                value={this.state.track} onChange={this.handleChange}
                validate error="wrong" success="right" />

              <MDBInput label="Title" name="title" icon="signature" group type="text"
                value={this.state.title} onChange={this.handleChange} 
                validate error="wrong" success="right" />

              <MDBInput label="Artist" name="artist" icon="user" group type="text" 
                value={this.state.artist} onChange={this.handleChange}
                validate error="wrong" success="right" />

              <MDBInput label="Album" name="album" icon="record-vinyl" group type="text"
                value={this.state.album} onChange={this.handleChange}
                validate error="wrong" success="right" />

              <MDBInput icon='calendar' name="release_date" group type="date"
                value={this.state.release_date} onChange={this.handleChange}
                validate error="wrong" success="right" />

              <MDBInput label="Likes" name="likes" icon='heart' group type="number"
                value={this.state.likes} onChange={this.handleChange}
                validate error="wrong" success="right"/>
            </div>
            <MDBBtn color="secondary" onClick={this.toggle} >Cancel</MDBBtn>
            <MDBBtn color="primary" type="submit" >Add</MDBBtn>
          </form>
        </MDBModalBody>

      </MDBModal>


    );
  }
}

export default ModalPage;