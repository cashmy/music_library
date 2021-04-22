import React, { useRef } from 'react';
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
import SongForm from '../SongForm/songForm';
import UpdateSongForm from '../SongForm/updateSongForm';
import '../app.css';

const MusicTable = (props) => {
    const addSong=useRef();
    const editSong=useRef();
    const songParam = {}

    const handleOnClickAdd = () => {
        addSong.current.toggle();
    }

    const handleOnClickEdit = (song) => {
        console.log('MT-hOCE-Song: ', song)
        songParam['id'] = song.id
        songParam['track'] = song.track
        songParam['title'] = song.title
        songParam['artist'] = song.artist
        songParam['album'] = song.album
        songParam['release_date'] = song.release_date
        songParam['likes'] = song.likes

        console.log('MT-hOCE-SongParam: ', songParam)
        editSong.current.toggle();
    }

    const mapSongsWithButton = () => {
        let newSongsMapResult = props.songs.map((song) => {
            song.edit = <MDBIcon
                            icon='edit'
                            className='cyan-text'
                            size='lg'
                            style={{ cursor: 'pointer' }}
                            type="button"
                            onClick={() => handleOnClickEdit(song)}
                            />;
            song.delete = <MDBIcon
                            icon='trash-alt'
                            className='red-text'
                            size='lg'
                            style={{ cursor: 'pointer' }}
                            type="button"
                            onClick={() => handleOnClickEdit(song)}
                            />;
            return song;
        });
        return newSongsMapResult
    }

    const data = {
        columns: [

            {
                label: 'Track',
                field: 'track',
                sort: 'asc',
                width: 50
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
                sort: 'asc',
                width: 100
            },
            {
                label: 'Likes',
                field: 'likes',
                sort: 'asc',
                width: 50
            },
            {
                label: 'Edit',
                field: 'edit',
                sort: 'disabled',
                width: 50
            },
            {
                label: 'Del',
                field: 'delete',
                sort: 'disabled',
                width: 50
            }
        ],
        rows: mapSongsWithButton()

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
                                            floating gradient="blue"
                                            onClick={handleOnClickAdd}>
                                        <MDBIcon icon="plus" />
                                    </MDBBtn>
                                </MDBCardHeader>
                                <MDBCardBody className="black-text">
                                    <MDBDataTable
                                        autowidth
                                        scrollX
                                        scrollY 
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
                <SongForm ref={addSong} />
                <UpdateSongForm props={songParam} ref={editSong} />
            </MDBMask>


    );
}

export default MusicTable;