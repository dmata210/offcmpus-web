import React, {useEffect, useState} from 'react'

import ViewWrapper from '../components/ViewWrapper'
import {useNumberCounter} from '../components/hooks/useNumberCounter';
import {
    useGetPropertiesForLandlordLazyQuery,
    Property,
    Lease
} from '../API/queries/types/graphqlFragmentTypes';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import urlencode from 'urlencode';

import {ReduxState} from '../redux/reducers/all_reducers'
import Button from '../components/toolbox/form/Button';
import MoreDetails from '../components/toolbox/misc/MoreDetails2'

/**
 * The view shows all the leases that the landlord has (active or inactive), 
 * grouped by the property that the lease is for.
 */
const LandlordAllLeasesView = () => {

    //====== GRALHQL =======
    const [GetPropertiesAndLeases, {data: propertyLeasesResponse}] = useGetPropertiesForLandlordLazyQuery({
        fetchPolicy: 'no-cache'
    });

    //====== STATES =======
    const user = useSelector((state: ReduxState) => state.user);
    const [properties, setProperties] = useState<Property[]>([]);
    const [leases, setLeases] = useState<{[key: string]: Lease[]}>({});
    
    //====== EFFECTS =======
    useEffect(() => {

        // On load, get all of the properties that this landlord owns, along with the
        // lease information for each of those properties.
        if (user && user.user) {
            GetPropertiesAndLeases({
                variables: {
                    landlord_id: user.type == 'landlord' ? user.user._id : '',
                    with_leases: true
                }
            });
        } // end getPropewrtiesAndLeases

    }, [user]);

    useEffect(() => {

        // store the information from the graphql query
        if (propertyLeasesResponse && propertyLeasesResponse.getPropertiesForLandlord
            && propertyLeasesResponse.getPropertiesForLandlord.data
            && propertyLeasesResponse.getPropertiesForLandlord.success) {

            let properties: Property[] = propertyLeasesResponse.getPropertiesForLandlord.data.properties;

            // Go through each of the properties and extract the lease information
            let leses_state: {[key: string]: Lease[]} = {};
            properties.forEach((property: Property) => {
                let leases: Lease[] = [];
                if (property.leases != undefined) {
                    leases = property.leases;
                    delete property.leases;
                }

                leses_state[property._id] = leases;
            })

            // save the property information
            setProperties(properties);
            // save the lease information
            setLeases(leses_state);
        }

    }, [propertyLeasesResponse]);

    
    //====== FUNCTIONS =======

    /** 
     * Return the count of leases for all properties
     * owned by this landlord.
    */
    const getLeaseCount = (): number => {
        let count_ = 0;
        Object.keys(leases).forEach((property_id: string) => {
            count_ += leases[property_id].length;
        })
        return count_;
    }

    
    //====== MISC HOOKS =======
    const leasesCounter = useNumberCounter({
        value: getLeaseCount(),
        duration: 800
    })

    //====== RENDER =======
    return (<ViewWrapper>
        
        <div>
            <div className="section-header-2" style={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <div className="title-area">Leases</div>
                <div className="counter_">{leasesCounter} leases</div>
            </div>

            {/* Show the leases grouped by property */}
            <div style={{
                marginTop: `15px`
            }}>
                {properties.map((property: Property, i: number) => 
                    <PropertyAndLeases 
                        key={i}
                        property={property}
                        leases={Object.prototype.hasOwnProperty.call(leases, property._id) ? leases[property._id] : []}
                    />
                )}
            </div>

        </div>

    </ViewWrapper>)
}

/**
 * PropertyAndLeases
 * @desc Show the modal that contains the list of all leases for a
 * given property.
 */
const PropertyAndLeases = ({
    property, leases
}: {property: Property, leases: Lease[]}) => {

    
    //====== FUNCTIONS =======
    const getAddress = (): string => {
        let addr = `${property.address_line}, ${ property.address_line_2 ? `${property.address_line_2}, ` : `` }`;
        addr += `${property.city} ${property.state}, ${property.zip}`;
        return addr;
    }

    const isOnMarket = (lease: Lease):boolean => lease.active && !lease.external_occupant;

    const getLeaseInfoView = (lease: Lease, i: number): any => {
        return (<div key={i} className="lease-info-view">
            <div style={{
                fontWeight: 600,
                padding: `0 10px`
            }}>Room {i+1}</div>

            {/* Show student occupying */}
            <div className="occupant-info">
                {lease.occupant_id == undefined && `Unoccupied`}
                {lease.occupant_id != undefined && `Occupied by: TODO`}

            </div>

            <div className="market-info">
                {!isOnMarket(lease) && 
                <div>
                    <div style={{marginBottom: `5px`}}>No active lease</div>
                    <Button 
                        link_to={`/landlord/property/lease/new/${property._id}?lease=${urlencode(lease._id)}`}
                        text="Create Lease"
                        textColor="white"
                        bold={true}
                        transformDisabled={true}
                        background="#E0777D"
                    />
                </div>}

                {isOnMarket(lease) &&
                <div>
                    <div>On Market</div>
                    <div><span style={{fontWeight: 600}}>${lease.price_per_month}</span> /month</div>
                    <div style={{fontSize: `0.7rem`}}>
                        {dateAbbr(new Date(lease.lease_availability_start_date ? lease.lease_availability_start_date : ''))} - {dateAbbr(new Date(lease.lease_availability_end_date ? lease.lease_availability_end_date : ''))}
                    </div>

                    <div style={{
                        marginTop: `8px`,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div style={{width: `85%`}}>
                            <Button 
                                text="Assign Lease"
                                textColor="white"
                                bold={true}
                                transformDisabled={true}
                                background="#3B4353"
                            />
                        </div>
                        <div>
                            <MoreDetails 
                                width={200}
                                details={`
                                    Assign a lease to a student who has expressed interest in this
                                    property. They will be sent the lease document and be able to
                                    digitally sign the lease with you.
                                `}
                            />
                        </div>
                    </div>

                </div>}

            </div>
        </div>)
    }

    const dateAbbr = (date: Date): string => {
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    }

    return (<div className="property-and-leases-modal">

        <div className="addr">
            <div style={{marginRight: `8px`}}>{getAddress()}</div>
            <Link to={`/landlord/property/${property._id}`}>Go to property</Link>   
        </div>
        
        {/* 
            If the landlord has not initialized the property details, they must 
            do that first before they can see any lease information for that property
        */}
        {leases.length == 0 && <div className="init-details">
            <div className="content">
                <div style={{marginBottom: `5px`}}>Setup information about this property</div>
                <div>
                    <Button 
                        link_to={`/landlord/property/${property._id}`}
                        text="Setup Info"
                        background="#E0777D"
                        bold={true}
                        textColor="white"
                        transformDisabled={true}
                    />
                </div>
            </div>
        </div>}

        {/* 
            If the landlord has initialized the property details for this property, there
            should be lease documents stored for this property. We can show each of those
            leases individually and allow the landlord to act on each one.
         */}
        {
            leases.length > 0 && <div className="lease-info-container">
                
                {leases.map((lease: Lease, i: number) => {

                    return (getLeaseInfoView(lease, i))

                })}

            </div>
        }

    </div>)
}

export default LandlordAllLeasesView;