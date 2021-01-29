import React, { useState } from 'react'
import ViewWrapper from '../components/ViewWrapper';
import Tabs from '../components/toolbox/misc/Tabs';
import { Select, Rate } from 'antd';

const { Option } = Select;

const StudentPropertyInfoView = ({ property_id }: {property_id: string}) => {

    const [reviewView, setReviewView] = useState<'landlord' | 'property'>('property')

    // review order structure
    type ReviewOrder = {
        property: 'most-recent' | 'least-recent'
        landlord: 'most-recent' | 'least-recent'
    }
    const [reviewOrder, setReviewOrder] = useState<ReviewOrder>({
        property: 'most-recent',
        landlord: 'most-recent'
    })

    const getOrderSelect = () => {

        if (reviewView == 'property') {
            return (
                <Select 
                    key={0}
                    defaultValue={reviewOrder['property']} 
                    onChange={(value: 'most-recent' | 'least-recent') => {
                        let old_order = {...reviewOrder};
                        old_order['property'] = value;
                        setReviewOrder(old_order);
                    }
                }>
                    <Option value="most-recent">Most Recent</Option>
                    <Option value="least-recent">Lease Recent</Option>
                </Select>)
        }
        else return (
            <Select 
                key={1}
                defaultValue={reviewOrder['landlord']} 
                onChange={(value: 'most-recent' | 'least-recent') => {
                    let old_order = {...reviewOrder};
                    old_order['landlord'] = value;
                    setReviewOrder(old_order);
                }
            }>
                <Option value="most-recent">Most Recent</Option>
                <Option value="least-recent">Lease Recent</Option>
            </Select>)

    }

    return (<ViewWrapper>
        <div className="section-header-2" style={{height: `30px`, marginBottom: `16px`}}>
            <div className="title-area">Property Info</div>
        </div>
    
        <div className="student-property-view-modal">

            {/* Property Info & Image */}
            <div className="property-info">
                
                <div className="image-area_">
                    
                </div>
                <div className="info-area_">
                    
                    <div className="top_">
                        
                        {/* Property Info */}
                        <div className="addr_">
                            <div className="__">
                                <div className="addr1">
                                    2227 14th St
                                </div>
                                <div className="addr2">
                                    Troy NY, 12180
                                </div>
                            </div>

                            <div className="owner-info">
                                Owned by: John Smith
                            </div>
                        </div>
                        {/* Price Area */}
                        <div className="price-range">
                            <div className="price_">$200-500</div> <div>/month</div>
                        </div>

                        <div className="property-tags_">
                            <div className="tag_">Furnished</div>
                            <div className="tag_">Furnished</div>
                            <div className="tag_">Furnished</div>
                            <div className="tag_">Furnished</div>
                        </div>

                        <div className="meta-area">
                            
                            <div className="meta-section">
                                2 Rooms
                            </div>

                            <div className="meta-section">
                                10 Reviews
                            </div>

                        </div>

                        <div className="description">
                            <div className="header">Description</div>
                            This is a sample property description. 
                            This is a sample property description. 
                            This is a sample property description. 
                            This is a sample property description. 
                            This is a sample property description. 
                            This is a sample property description. 
                        </div>

                        {/* Ratings Area */}
                        <div className="property-ratings">
                            
                            <div className="ratings_">
                                <div className="header">Property Score</div>

                            </div>
                            <div className="ratings_">
                                <div className="header">Landlord Score</div>

                            </div>

                        </div>

                    </div>

                    {/* Image Area */}
                    <div className="img-thumbs">
                        {function () {
                            let arr: any[] = [];

                            for (let i = 0; i < 15; ++i) 
                                arr.push(<div key={i} className={`image-thumb ${i == 0? 'active' : ''}`} />);

                            return arr;
                        }()}
                    </div>

                </div>

            </div>

        </div>

        {/* Reviews Area */}
        <div style={{
            width: '90%',
            margin: '0 auto',
            marginTop: `30px`,
        }}>
            <div style={{fontFamily: 'khumbh-sans', fontWeight: 600}}>Student Reviews</div>
            {/* Tab Controls */}
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>
                    <Tabs
                        activeTab={reviewView == 'property' ? 0 : 1}
                        tabs={["Property", "Landlord"]}
                        onChange={(tab_ind: number) => {
                            if (tab_ind == 0) setReviewView('property');
                            else setReviewView('landlord');
                        }}
                    />
                </div>
                <div>
                    {getOrderSelect()}
                </div>
            </div>

            <div style={{marginBottom: `50px`}}>
                {function () {
                    let reviews: any[] = [];

                    for (let i = 0; i < 5; ++i) {
                        reviews.push(<ReviewResponse key={i} />)
                    }

                    return reviews;
                }()}
            </div>

        </div>

    </ViewWrapper>)
}


const ReviewResponse = () => {

    return (<div className="review-response-container">

        <div className='review-box'>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: `5px`}}>
                <div style={{fontWeight: 600}}>Leased 2018</div>
                <div>
                    <Rate disabled defaultValue={Math.random() * 5} />
                </div>
            </div>
            <div className="review_">
                The property is pretty good. Everything was in really good shape. I can recommend this property to others
                to lease it out. Only a few downsides. This and that. That and this. Yatta yatta. Kapeiche Kablowie.
            </div>

            <div className="response_">
                <div style={{fontWeight: 600}}>Response from Landlord</div>
            <div className="review_">
                The property is pretty good. Everything was in really good shape. I can recommend this property to others
                to lease it out. Only a few downsides. This and that. That and this. Yatta yatta. Kapeiche Kablowie.
            </div>
            </div>
        </div>

    </div>)
}

export default StudentPropertyInfoView;