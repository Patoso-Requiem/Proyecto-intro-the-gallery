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
            { position: 'fixed', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', fontSize: '20px', width: '33%' } } >
        <
        Title / >
        <
        UploadForm / >
        <
        ImageGrid / > {
            selectedImg && ( <
                Modal selectedImg = { selectedImg }
                setSelectedImg = { setSelectedImg }
                />
            )
        } <
        /div>
    );
}