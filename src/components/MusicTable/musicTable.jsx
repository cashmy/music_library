import React from 'react';
import { MDBDataTable } from 'mdbreact';

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
        <MDBDataTable 
            responsive
            striped
            bordered
            small
            data={data}
        />

    );
}

export default MusicTable;