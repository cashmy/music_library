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
import DeleteSongForm from '../SongForm/deleteSongForm';
import '../app.css';

const MusicTable = (props) => {
    const addSong=useRef();
    const editSong=useRef();
    const deleteSong=useRef();
    let tableEntries = 20; 

    const songUpdParam = {};
    const songDelParam = {};

    const handleOnClickAdd = () => {
        addSong.current.toggle();
    }

    const handleOnClickEdit = (song) => {
        songUpdParam['id'] = song.id
        songUpdParam['track'] = song.track
        songUpdParam['title'] = song.title
        songUpdParam['artist'] = song.artist
        songUpdParam['album'] = song.album
        songUpdParam['release_date'] = song.release_date
        songUpdParam['likes'] = song.likes
        
        console.log('\n *** Music Table ***: ')
        console.log('MT-hOCE SongUpdParam: ', songUpdParam)
        editSong.current.toggle();
    }

    const handleOnClickDelete = (song) => {
        songDelParam['id'] = song.id
        songDelParam['title'] = song.title
        songDelParam['artist'] = song.artist
        
        console.log('\n *** Music Table ***: ')
        console.log('MT-hOCD SongDelParam: ', songDelParam)
        deleteSong.current.toggle();
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
                            onClick={() => handleOnClickDelete(song)}
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
                                        entries={tableEntries}
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
                <UpdateSongForm props={songUpdParam} ref={editSong} />
                <DeleteSongForm props={songDelParam} ref={deleteSong} />
            </MDBMask>


    );
}

export default MusicTable;