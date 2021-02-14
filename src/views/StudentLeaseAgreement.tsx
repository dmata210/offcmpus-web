import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router'
import { Alert } from 'antd';

import ViewWrapper from '../components/ViewWrapper'
import {ReduxState} from '../redux/reducers/all_reducers'
import {
    useCheckEligibleForLeaseAgreementLazyQuery,
    useGetPropertyForOwnershipLazyQuery,
    useGetOwnershipLazyQuery,
    useGetLandlordLazyQuery,
    useGetRoomNoLazyQuery,
    useAcceptLeaseAgreementMutation,
    useDeclineLeaseAgreementMutation,
    Lease,
    Property,
    Ownership,
    Landlord
} from '../API/queries/types/graphqlFragmentTypes'
import {Card} from './PropertyDetails'
import KVPair from '../components/toolbox/misc/kvpair'
import {getPropertyAddress,getDate} from '../components/helpers/meta'
import Button from '../components/toolbox/form/Button'

/**
 * StudentLeaseAgreementView
 * @desc Show the lease agreement sent to the student from the landlord.
 * If the lease agreement was not sent to the student, they cannot view the
 * lease agreement.
 * @param lease_id: The id of the lease to view the agreement for
 */

const StudentLeaseAgreementView = ({lease_id}: {lease_id: string}) => {

    //====================== GQL ======================
    const [CheckEligibility, {data: eligibilityResponse}] = useCheckEligibleForLeaseAgreementLazyQuery();
    const [GetProperty, {data: propertyResponse}] = useGetPropertyForOwnershipLazyQuery();
    const [GetOwnership, {data: ownershipResponse}] = useGetOwnershipLazyQuery();
    const [GetLandlord, {data: landlordResponse}] = useGetLandlordLazyQuery();
    const [GetRoomNo, {data: roomNoResponse}] = useGetRoomNoLazyQuery();
    const [AcceptAgreement, {data: acceptResponse}] = useAcceptLeaseAgreementMutation();
    const [DeclineAgreement, {data: declineResponse}] = useDeclineLeaseAgreementMutation();

    //====================== STATE ======================
    const user = useSelector((state: ReduxState) => state.user);
    const history = useHistory();
    const [lease, setLease] = useState<Lease | null>(null);
    const [property, setProperty] = useState<Property | null>(null);
    const [ownership, setOwnership] = useState<Ownership | null>(null);
    const [landlord, setLandlord] = useState<Landlord | null>(null);
    const [roomNo, setRoomNo] = useState<number | null>(null);
    const [showLease, setShowLease] = useState<boolean>(false);

    //====================== EFFECTORS ======================
    useEffect(() => {
        if (user && user.user) {
            CheckEligibility({
                variables: {
                    student_id: user.user._id,
                    lease_id
                }
            })
        }
    }, [user]);

    useEffect(() => {
        if (eligibilityResponse && eligibilityResponse.checkEligibleForLeaseAgreement) {

            // if they are not eligeble, redirect to the notifications page
            if (eligibilityResponse.checkEligibleForLeaseAgreement.success == false) {
                history.push(`/student/notifications`);
            }
            else if (eligibilityResponse.checkEligibleForLeaseAgreement.data) {
                setLease(eligibilityResponse.checkEligibleForLeaseAgreement.data);
            }

        }
    });

    useEffect(() => {
        if (lease != null) {
            GetProperty({
                variables: {
                    ownership_id: lease.ownership_id
                }
            })

            GetOwnership({
                variables: {
                    ownership_id: lease.ownership_id
                }
            })
        }
    }, [lease]);

    useEffect(() => {
        if (ownership != null) {
            GetLandlord({
                variables: {
                    landlord_id: ownership.landlord_id
                }
            })
        }
    }, [ownership]);

    useEffect(() => {
        if (roomNo == null) {
            if (lease != null && ownership != null) {
                GetRoomNo({
                    variables: {
                        lease_id: lease._id,
                        ownership_id: ownership._id
                    }
                })
            }
        }
    }, [lease, ownership]);

    useEffect(() => {
        if (!property) {
            if (propertyResponse && propertyResponse.getPropertyForOwnership
            && propertyResponse.getPropertyForOwnership.data) {
                setProperty(propertyResponse.getPropertyForOwnership.data)
            }
        }
    }, [propertyResponse]);

    useEffect(() => {
        if (!ownership) {
            if (ownershipResponse && ownershipResponse.getOwnership
            && ownershipResponse.getOwnership.data) {
                setOwnership(ownershipResponse.getOwnership.data);
            }
        }
    }, [ownershipResponse]);

    useEffect(() => {
        if (!landlord) {
            if (landlordResponse && landlordResponse.getLandlord
            && landlordResponse.getLandlord.data) {
                setLandlord(landlordResponse.getLandlord.data);
            }
        }
    }, [landlordResponse]);

    useEffect(() => {
        if (roomNo == null) {
            if (roomNoResponse && roomNoResponse.getRoomNo
            && roomNoResponse.getRoomNo.data) {
                setRoomNo(roomNoResponse.getRoomNo.data.value);
            }
        }
    }, [roomNoResponse]);

    //====================== FUNCTIONS ======================
    const getPropertyAddr = (): string => {
        if (property == null) return ``;
        return getPropertyAddress(property);
    }

    const getLandlordName = (): string => {
        if (landlord == null) return ``;
        return `${landlord.first_name} ${landlord.last_name}`;
    }
    
    const getLandlordPhoneNumber = (): string => {
        if (landlord == null) return ``;
        if (landlord.phone_number) return landlord.phone_number;
        return `none`;
    }

    const getPrice = (): string => {
        if (lease == null) return ``;
        return `$${lease.price_per_month} /month`;
    }

    return (<ViewWrapper>
        <div>
            
            {/* Title */}
            <div className="section-header-2" style={{
                height: `30px`, 
                marginBottom: `16px`,
                alignItems: `center`
            }}>
                <div className="title-area">Lease Agreement</div>
            </div>

            <Card 
                header="Property Info"
                children={<div>
                    <KVPair key_="Property" value={getPropertyAddr()} />
                    <KVPair key_="Room #" value={roomNo == null ? `` : `${roomNo}`} />
                    <KVPair key_="Price" value={getPrice()} />
                    <KVPair key_="Landlord" value={getLandlordName()} />
                    <KVPair key_="Landlord Phone Number" value={getLandlordPhoneNumber()} />
                    <KVPair key_="Lease Start Date" value={getDate(lease != null && lease.lease_availability_start_date ? lease.lease_availability_start_date : '', {withTime: true})} />
                    <KVPair key_="Lease End Date" value={getDate(lease != null && lease.lease_availability_end_date ? lease.lease_availability_end_date : '', {withTime: true})} />
                </div>}
            />

            <Card 
                header="Accept or Decline"
                children={landlord != null && roomNo != null && property != null && <div>
                    <div>
                        <span style={{fontWeight: 600}}>{landlord.first_name} {landlord.last_name}</span> has sent you the lease agreement for the property 
                        <span style={{fontWeight: 600}}>{getPropertyAddr()}, Room # {roomNo}</span>. You can choose to accept or decline this lease agreement.
                    </div>
                    <div style={{marginTop: `7px`}}>
                        <Alert message={`
                            Accepting this lease agreement is binding, so make sure to call and chat with the landlord
                            to make sure you want to sign the lease. The landlord's phone number is ${landlord.phone_number}.
                        `} type="warning" />
                    </div>
                    <div style={{display: `flex`, justifyContent: `space-between`, marginTop: `10px`}}>
                        <div>
                            <Button 
                                text={showLease ? `Hide Lease` : `Show Lease`}
                                textColor="white"
                                background="#3B4353"
                                bold={true}
                                transformDisabled={true}
                                onClick={() => {
                                    setShowLease(!showLease)
                                }}
                            />
                        </div>
                        <div style={{display: `flex`}}>
                            <div style={{marginRight: `8px`}}>
                                <Button 
                                    text="Decline"
                                    textColor="white"
                                    background="#E0777D"
                                    bold={true}
                                    transformDisabled={true}
                                    onClick={() => {
                                        if (lease != null && user && user.user) {
                                            DeclineAgreement({
                                                variables: {
                                                    student_id: user.user._id,
                                                    lease_id: lease._id
                                                }
                                            })
                                        }
                                    }}
                                />
                            </div>
                            <div>
                                <Button 
                                    text="Accept"
                                    textColor="white"
                                    background="#6AD68B"
                                    bold={true}
                                    transformDisabled={true}
                                    onClick={() => {
                                        if (lease != null && user && user.user) {
                                            AcceptAgreement({
                                                variables: {
                                                    student_id: user.user._id,
                                                    lease_id: lease._id
                                                }
                                            })
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>}
            />

            {showLease && <Card 
                header="Lease Document"
                children={<div>
                    TODO: Do lease agreement stuff...
                </div>}
            />}

        </div>
    </ViewWrapper>)
}

export default StudentLeaseAgreementView;