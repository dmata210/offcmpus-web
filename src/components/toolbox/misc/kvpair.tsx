import React from 'react'

const kvpair = ({
    key_, value
}: {key_: string, value: string}) => {

    return (<div style={{
        display: 'flex'
    }}>
        <div style={{
            fontWeight: 600,
            marginRight: `5px`,
            color: `#3B4353`
        }}>{key_}</div>
        <div>{value}</div>
    </div>)
}

export default kvpair;