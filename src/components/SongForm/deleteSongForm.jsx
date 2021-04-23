import React, { Component } from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBInput } from 'mdbreact';
import axios from 'axios';

class DeleteModalPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      modal: false,
      id: '',
      title: '',
      artist: '',
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
    // event.preventDefault();
    console.log('DSF-hS props: ', this.props)

    const song = this.props.props['id']

    console.log('DSF-hS song: ', song)
    axios.delete('http://127.0.0.1:8000/songs/'+song)
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

  componentDidUpdate(prevProps){
    console.log('\n*** DSF-Component Did Update **')
    console.log('DSF-CDU prevProps: ', prevProps)
    console.log(prevProps.props.id)
    console.log(prevProps.props.title)
    console.log('DSF-CDU thisState: ', this.state)
    if (prevProps.props.id !== this.state.id ) {
      this.setState({
        id: prevProps.props.id,
        title: prevProps.props.title,
        artist: prevProps.props.artist}) 
      console.log("DSF-CDU Post setState:", this.state.id)
      console.log('DSF-CDU: state updated <---------------------------')
    }
    else
      console.log('DSF-SCU: no change detected')
  }


  render() {
    console.log('\n*** Delete Render ***')
    console.log('DSF-Render: props: ', this.props);
    console.log('DSF-Render State: ', this.state)
    return (

      <MDBModal isOpen={this.state.modal} toggle={() => this.toggle}>
        <MDBModalHeader className="deletemodal" toggle={this.toggle}><strong>Delete this Song?</strong></MDBModalHeader>
        <MDBModalBody>
          <form onSubmit={this.handleSubmit}>
            <div className="grey-text">

              <MDBInput label="Title" name="title" icon="signature" group type="text"
                value={this.state.title} onChange={this.handleChange} 
                validate error="wrong" success="right" />

              <MDBInput label="Artist" name="artist" icon="user" group type="text" 
                value={this.state.artist} onChange={this.handleChange}
                validate error="wrong" success="right" />

            </div>
            <MDBBtn color="secondary" onClick={this.toggle} >Cancel</MDBBtn>
            <MDBBtn color="primary" type="submit" >Delete</MDBBtn>
          </form>
        </MDBModalBody>
      </MDBModal>

    );
  }
}

export default DeleteModalPage;