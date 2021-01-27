import React from 'react'
import ViewWrapper from '../components/ViewWrapper';

const StudentPropertyInfoView = ({ property_id }: {property_id: string}) => {

    return (<ViewWrapper>
    
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

    </ViewWrapper>)
}

export default StudentPropertyInfoView;