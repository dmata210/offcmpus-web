import React from 'react'
import {HiCheck} from 'react-icons/hi'

import ViewWrapper from '../components/ViewWrapper'
import Button from '../components/toolbox/form/Button'

const StudentFeed = () => {

    return (<ViewWrapper>
        <div 
            style={{
                width: `600px`,
                margin: `0 auto`,
                paddingBottom: `80px`
            }}>
                <div className="section-header-2" style={{height: `30px`, marginBottom: `16px`}}>
                    <div className="title-area">Your Feed</div>
                </div>

                {/* Feed Entries */}
                {(function(){
                    let entries: any[] = [];

                    for (let i = 0; i < 5; ++i) {
                        entries.push(<PropertyFeedEntry />);
                    }
                    return entries;
                })()}

            </div>
    </ViewWrapper>)
}

const PropertyFeedEntry = () => {

    return (<div className="property-feed-entry">
        <div>
            <div className="feed-entry-title">
                199 Burdett Ave
            </div>
            <div>
                A new property is available for lease from <span style={{fontWeight: 600}}>September 1, 2021</span> to <span style={{fontWeight: 600}}>December 1, 2021</span> for $395/mo, including electricity and utility.
            </div>

            {/* Image Placeholders */}
            <div style={{
                display: 'flex',
                marginTop: `10px`
            }}>
                <div style={{
                        width: `70%`,
                        display: 'flex',
                        height: `300px`
                    }}>
                    
                    <div style={{width: `50%`, marginRight: `10px`}}>
                        <div className="image-filler" />
                    </div>
                    <div style={{width: `50%`}}>
                        
                        <div style={{height: `145px`, marginBottom: `5px`}}>
                            <div className="image-filler" />
                        </div>

                        <div style={{height: `145px`, marginTop: `10px`}}>
                            <div className="image-filler" />
                        </div>
                    </div>

                </div>
                <div className="feed-list">
                    <div className="feed-list-entry">
                        <div className="check"><HiCheck /></div>
                        <div className="value">Utilities Included</div>
                    </div>

                    <div className="feed-list-entry">
                        <div className="check"><HiCheck /></div>
                        <div className="value">Internet Included</div>
                    </div>
                </div>
            </div>

            {/* Interested button */}
            <div style={{
                display: 'flex',
                marginTop: `20px`,
                justifyContent: 'flex-end'
            }}>
                <div style={{width: `200px`}}>
                    <Button 
                        text="I'm Interested"
                        textColor="white"
                        bold={true}
                        background="#E0777D"
                    />
                </div>
            </div>
        </div>

    </div>)
}

export default StudentFeed;