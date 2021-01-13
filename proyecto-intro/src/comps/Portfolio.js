import React, { useState } from 'react';
import Title from './Title';
import UploadForm from './UploadForm';
import ImageGrid from './ImageGrid';
import Modal from './Modal';
import './Portfolio.css';

export default function Portfolio() {
    const [selectedImg, setSelectedImg] = useState(null);

    return ( <
        div className = "Portfolio"
        style = {
            { position: 'absolute', fontSize: '20px', width: '100%' } } >
        <
        Title / >
        <
        UploadForm / >
        <
        ImageGrid setSelectedImg = { setSelectedImg }
        /> {
            selectedImg && ( <
                Modal selectedImg = { selectedImg }
                setSelectedImg = { setSelectedImg }
                />
            )
        } <
        /div>
    );
}