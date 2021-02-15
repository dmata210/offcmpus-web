import React, {useState, useEffect} from 'react'
import {HiCheck} from 'react-icons/hi'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router'
import {shouldPromptToEnableNotifications} from './PushNotificationsPrompt'

import ViewWrapper from '../components/ViewWrapper'
import Button from '../components/toolbox/form/Button'
import Popup, {PopupHeader} from '../components/toolbox/misc/Popup'
import {ReduxState} from '../redux/reducers/all_reducers'

const StudentFeed = () => {

    const history = useHistory()
    const user = useSelector((state: ReduxState) => state.user)
    const [showPropertyPopup, setShowPropertyPopup] = useState<boolean>(false)
    const [popupTab, setPopupTab] = useState<number>(0)

    const showPropertyInfo = () => {
        setShowPropertyPopup(true);
        setPopupTab(0);
    }

    useEffect(() => {

        if (user && user.user) {
            shouldPromptToEnableNotifications(user)
            .then((shouldPrompt: boolean) => {
                if (shouldPrompt) history.push('/notifications/enable')
            })
        }

    }, [user]);

    return (<ViewWrapper>

        {/* Property Info Popup */}
        <Popup
            show={showPropertyPopup}
            width={600}
            height={850}
        >
            <PopupHeader 
                withClose={true}
                children={<div>Property Info</div>}
                onClose={() => {
                    setShowPropertyPopup(false);
                }}
            />

            {/* Popup Property Info */}
            <div style={{
                margin: `8px 15px`
            }}>
                <div>1999 Burdett Ave</div>
                <div style={{fontSize: `0.8rem`, opacity: 0.7}}>Troy NY, 1280</div>
            </div>

            {/* Popup Tabs */}
            <div className="tabs">
                <div className={`tab ${popupTab == 0 ? 'active' : ''}`}
                    onClick={() => setPopupTab(0)}>Photos</div>
                    <div className={`tab ${popupTab == 1 ? 'active' : ''}`}
                        onClick={() => setPopupTab(1)}>Reviews</div>
            </div>

        </Popup>
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
                        entries.push(<PropertyFeedEntry key={i} 
                            showPropertyInfo={showPropertyInfo}
                        />);
                    }
                    return entries;
                })()}

            </div>
    </ViewWrapper>)
}

const PropertyFeedEntry = ({showPropertyInfo}: {showPropertyInfo: Function}) => {

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
                <div style={{width: `30%`}}>

                    <div style={{marginLeft: `10px`}}>
                    
                        {/* Price Area */}
                        <div style={{display: `flex`, alignItems: 'flex-end'}}>
                            <div style={{
                                fontSize: `1.5rem`,
                                fontWeight: 600,
                                fontFamily: 'khumbh-sans'
                            }}>$500</div>
                            <div style={{transform: `translateY(-5px)`}}>/month</div>
                        </div>

                        {/* Perks Area */}
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

                        {/* Review And Pictures Count */}
                        <div style={{
                            marginTop: `10px`,
                            paddingTop: `10px`,
                            borderTop: `1px solid #E1E6EA`,
                            paddingLeft: `10px`
                        }}>
                            <div
                                style={{
                                    fontSize: `0.85rem`
                                }}
                            >10 Pictures</div>
                            <div
                                style={{
                                    fontSize: `0.85rem`
                                }}
                            >5 Reviews</div>
                        </div>

                        <div style={{
                            marginTop: `10px`
                        }}>
                            <Button 
                                onClick={() => {showPropertyInfo()}}
                                text="See Info"
                                textColor="black"
                                border="#c2c2c2"
                                background="white"
                                transformDisabled={true}
                            />
                        </div>
                        

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
                        transformDisabled={true}
                    />
                </div>
            </div>
        </div>

    </div>)
}

export default StudentFeed;