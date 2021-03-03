import React, {useState, useEffect} from 'react'
import {HiX} from 'react-icons/hi'
import {motion, useSpring, useTransform} from 'framer-motion'

import {HiArrowRight, HiArrowLeft} from 'react-icons/hi'

const ImageGalleryPopup = ({show, onClose, images}: {show: boolean, onClose: Function, images: string[]}) => {
    
    const [offset, setOffset] = useState<number>(0);
    const [selected, setSelected] = useState<number>(0);
    const [size, setSize] = useState<number>(1);
    const showSpring = useSpring(0, {duration: 750});
    const displayTransform = useTransform(showSpring, (x: number) => {
        if (x == 0) return 'none';
        return 'block';
    });

    useEffect(() => {
        if (show) showSpring.set(1);
        else showSpring.set(0);
    }, [show]);

    const getWidth = () => {
        if (size == 0) return '400px';
        if (size == 1) return '600px';
        if (size == 2) return '800px';
    }
    
    const getHeight = () => {
        if (size == 0) return '400px';
        if (size == 1) return '600px';
        if (size == 2) return '800px';
    }

    const maxVisibleThumbsForSize = () => {
        // small has width of 400
        // medium has width of 600
        // large has width of 800
        // each  thumb is 40 in width
        // small can fit 10
        // medium can fit 15
        // large can fit 20
        if (size == 0) return 8;
        if (size == 1) return 13;
        if (size == 2) return 18;
        return 0;
    }

    return (<motion.div 
        style={{
            opacity: showSpring,
            display: displayTransform
        }}
        className="image-gallery-popup">
        <div className="image-gallery-popup-container" style={{
            width: getWidth(), height: getHeight()
        }}>
            
            {/* Header */}
            <div className="header-area">
                <div className="left_">
                    <div onClick={() => setSize(0)} className={`btn_ ${size == 0 ? 'active' : ''}`}>Small</div>
                    <div onClick={() => setSize(1)} className={`btn_ ${size == 1 ? 'active' : ''}`}>Medium</div>
                    <div onClick={() => setSize(2)} className={`btn_ ${size == 2 ? 'active' : ''}`}>Large</div>
                </div>
                <div className="right_">
                    <div 
                        onClick={() => onClose()}
                        style={{
                            fontWeight: 600,
                            fontSize: '1.1rem',
                            transform: 'translateY(-4px)',
                            cursor: 'pointer',
                            opacity: 0.4
                    }}>
                        <HiX />
                    </div>
                </div>
            </div>

            {/* Image Container */}
            <div className="image-holder-area no-select">
                <img src={images[selected]} width="100%" />
            </div>

            {/* Thumbnail Area */}
            <div className="image-thumbnails no-select">
                <div className="slider-contrils">
                    <div className="arrow-ctrl" onClick={() => setOffset(Math.max(0, offset-1))}><HiArrowLeft /></div>
                    <div className="arrow-ctrl" onClick={() => setOffset( Math.max(0, Math.min(offset + 1, images.length - maxVisibleThumbsForSize())) )}>
                        <HiArrowRight />
                    </div>
                </div>
                <div 
                    className="image-thumbnails-slider" 
                    style={{
                        width: `${40 * images.length + 80}px`,
                        transform: `translateX(${-1 * offset * 40 + 40}px)`
                    }}>
                    {images.map((img: string, i: number) => 
                        <div key={i} 
                            onClick={() => setSelected(i)}
                            className={`img-thumb ${i == selected ? 'active' : ''}`}>
                            <img src={img} width="100%" />
                        </div>
                    )}
                </div>
            </div>


        </div>
    </motion.div>);
}

export default ImageGalleryPopup;