import React from 'react'

interface MoreDetailsProps {
    details: string
    width: number
}
const MoreDetails = ({details, width}: MoreDetailsProps) => {

    return (<div className="more-details-2">
        <span>?</span>
        <div className="details_" style={{width: `${width}px`}}>{details}</div>
    </div>)
}

export default MoreDetails