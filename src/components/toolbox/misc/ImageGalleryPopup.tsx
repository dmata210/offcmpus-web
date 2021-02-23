import React, {useState, useEffect} from 'react'

import {motion, useSpring, useTransform} from 'framer-motion'

const ImageGalleryPopup = ({show}: {show: boolean}) => {
    
    const showSpring = useSpring(0, {duration: 750});
    const displayTransform = useTransform(showSpring, (x: number) => {
        if (x == 0) return 'none';
        return 'block';
    });

    useEffect(() => {
        if (show) showSpring.set(1);
        else showSpring.set(0);
    }, [show]);

    return (<motion.div 
        style={{
            opacity: showSpring,
            display: displayTransform
        }}
        className="image-gallery-popup">
        <div className="image-gallery-popup-container">
            Image Gallery Popup
        </div>
    </motion.div>);
}

export default ImageGalleryPopup;