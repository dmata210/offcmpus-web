import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {Helmet} from "react-helmet";

import ViewWrapper from '../components/ViewWrapper'
import {ReduxState} from '../redux/reducers/all_reducers'
import {
    useGetAcceptedLeaseInfoLazyQuery,
    LeaseHistorySummary
} from '../API/queries/types/graphqlFragmentTypes'
import {getDate, getPropertyAddress} from '../components/helpers/meta'
import {Card} from './PropertyDetails'
import KVPair from '../components/toolbox/misc/kvpair'

/**
 * Show the information for the lease that
 * a student has accepted from a landlord.
*/

const StudentAcceptedLeaseInfoView = (
    {lease_id, history_id}:
    {lease_id: string, history_id: string}
) => {

    //================= GRAPHQL =================
    const [GetAcceptedLeaseSummary, {data: acceptedLeaseSummaryResponse}] = useGetAcceptedLeaseInfoLazyQuery();

    //================= STATE =================
    const user = useSelector((state: ReduxState) => state.user);
    const [historySummary, setHistorySummary] = useState<LeaseHistorySummary | null>(null);

    //================= EFFECTS =================
    useEffect(() => {
        if (user && user.user) {
            GetAcceptedLeaseSummary({
                variables: {
                    student_id: user.user._id,
                    lease_id, history_id
                }
            })
        }
    }, [user]);

    useEffect(() => {
        
        if (acceptedLeaseSummaryResponse
        && acceptedLeaseSummaryResponse.getAcceptedLeaseInfo
        && acceptedLeaseSummaryResponse.getAcceptedLeaseInfo.data
        && acceptedLeaseSummaryResponse.getAcceptedLeaseInfo.success) {
            setHistorySummary(acceptedLeaseSummaryResponse.getAcceptedLeaseInfo.data);
        }
    }, [acceptedLeaseSummaryResponse]);

    //================= FUNCTIONS =================


    return (<ViewWrapper>
        <Helmet>
            <meta charSet="utf-8" />
            <title>offcmpus | Lease Info</title>
        </Helmet>

        <div>
            
            {/* Title */}
            <div className="section-header-2" style={{
                height: `30px`, 
                marginBottom: `16px`,
                alignItems: `center`
            }}>
                <div className="title-area">Lease Information</div>
            </div>

            {/* Property Details */}
            {historySummary != null
            && <Card header="Property Info">
                <div>
                    <KVPair key_="Address" value={getPropertyAddress(historySummary.property)} />
                    <KVPair key_="Room #" value={`${historySummary.room_no}`} />
                    <KVPair key_="Landlord Name" value={`${historySummary.landlord.first_name} ${historySummary.landlord.last_name}`} />
                    <KVPair key_="Landlord Phone Number" value={historySummary.landlord.phone_number!} />
                    <KVPair key_="Lease Start Date" value={getDate(historySummary.lease_history.start_date, {withTime: false})} />
                    <KVPair key_="Lease End Date" value={getDate(historySummary.lease_history.end_date, {withTime: false})} />
                </div>
            </Card>}

        </div>

    </ViewWrapper>)
}

export default StudentAcceptedLeaseInfoView;