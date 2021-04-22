import React, { Component } from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBInput } from 'mdbreact';
import axios from 'axios';

class ModalPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      modal: false,
      id: '',
      track: 0, 
      title: '',
      artist: '',
      album: '',
      release_date: '',
      likes: 0,
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
    const song = {
      id: this.state.id,
      track: this.state.track,
      title: this.state.title,
      artist: this.state.artist,
      album: this.state.album,
      release_date: this.state.release_date,
      likes: this.state.likes
    }

    axios.put('http://127.0.0.1:8000/songs/', (song))
    .then(res => {
      console.log(res);
      console.log(res.data);
      }
    )
    
  }

  toggle = () => {
    this.setState(
      {modal: !this.state.modal}
      );
  }

  shouldComponentUpdate(nextProps){
    console.log('**USF-Should Component Update**')
    console.log('USF-SCU NextProps: ', nextProps)
    console.log('USF-SCU thisState: ', this.state)
    if (nextProps.id !== this.state.id ) {
      // this.setState({
      //   id: nextProps.id,
      //   track: nextProps.track,
      //   title: nextProps.title,
      //   artist: nextProps.artist,
      //   album: nextProps.album,
      //   release_date: nextProps.release_date,
      //   likes: nextProps.likes}) 
      console.log("USF-SCU State:", this.state)
      console.log('USF-SCU: state updated')
      return true
    }
    else
      console.log('USF-SCU: no change detected')
      return false
  }

  render() {
    console.log('USF-Render: props: ', this.props);
    console.log("USF-Render State: ", this.state)
    return (

      <MDBModal isOpen={this.state.modal} toggle={() => this.toggle}>
        <MDBModalHeader className="editmodal" toggle={this.toggle}><strong>Update a Song</strong></MDBModalHeader>
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
            <MDBBtn color="primary" type="submit" >Save</MDBBtn>
          </form>
        </MDBModalBody>
      </MDBModal>

    );
  }
}

export default ModalPage;