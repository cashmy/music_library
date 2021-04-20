import React from 'react'

const MusicTable = (props) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Track</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Album</th>
                    {/* <th>Play Length</th> */}
                </tr>
            </thead>
            {props.mapSongs()}
        </table>
    );
}

export default PlayerTable;