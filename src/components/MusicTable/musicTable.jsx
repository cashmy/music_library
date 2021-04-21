import React from 'react';
import {  } from 'mdbreact';
import { 
    MDBDataTable, 
    MDBCard, 
    MDBCardHeader, 
    MDBCardBody, 
    MDBBtn, 
    MDBIcon,
    MDBMask,
    MDBRow,
    MDBContainer,
    MDBAnimation
} from "mdbreact";
import '../app.css';

const MusicTable = (props) => {

    const data = {
        columns: [

            {
                label: 'Track',
                field: 'track',
                sort: 'asc'
            },
            {
                label: 'Title',
                field: 'title',
                sort: 'asc'
            },
            {
                label: 'Artist',
                field: 'artist',
                sort: 'asc'
            },
            {
                label: 'Album',
                field: 'album',
                sort: 'asc'
            },
            {
                label: 'Rls Date',
                field: 'release_date',
                sort: 'asc'
            },
            {
                label: 'Likes',
                field: 'likes',
                sort: 'asc'
            },
        ],
        rows: props.songs

    }
    

    return (

            <MDBMask className="d-flex justify-content-center align-items-center gradient">
                <MDBContainer>
                    <MDBRow>
                        <MDBAnimation
                            type="fadeInRight"
                            delay="3.6"
                            className="col-md-12 mt-xl-5 mb-5"
                        >

                            <MDBCard>
                                <MDBCardHeader>
                                    <h3 className="text-center"><strong>Music Library Table</strong></h3>
                                    <MDBBtn className="float-right"
                                            tag="a" 
                                            roll="button" 
                                            size="sm" 
                                            floating gradient="blue">
                                        <MDBIcon icon="plus" />
                                    </MDBBtn>
                                </MDBCardHeader>
                                <MDBCardBody className="black-text">
                                    <MDBDataTable 
                                        className="black-text"
                                        responsive
                                        striped
                                        bordered
                                        small
                                        data={data}
                                        />
                                </MDBCardBody>
                            </MDBCard>

                        </MDBAnimation>
                    </MDBRow>
                </MDBContainer>
            </MDBMask>


    );
}

export default MusicTable;