import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {Empty} from 'antd'

import Button from '../components/toolbox/form/Button'
import KVPair from '../components/toolbox/misc/kvpair'
import {useNumberCounter} from '../components/hooks/useNumberCounter'
import ViewWrapper from '../components/ViewWrapper'
import {ReduxState} from '../redux/reducers/all_reducers'
import {
    useGetAcceptedLeasesLazyQuery,
    LeaseHistory,
    Landlord,
    Lease,
    Property,
    LeaseHistorySummary
} from '../API/queries/types/graphqlFragmentTypes'
import {getPropertyAddress, getDateAbbr} from '../components/helpers/meta'

const StudentAcceptedLeases = () => {

    //============== GRAPHQL ==============
    const [GetAcceptedLeases, {data: acceptedLeasesResponse}] = useGetAcceptedLeasesLazyQuery({
        fetchPolicy: 'no-cache'
    });

    //============== STATE ==============
    const user = useSelector((state: ReduxState) => state.user);
    const [leaseSummaries, setLeaseSummaries] = useState<LeaseHistorySummary[]>([]);

    //============== EFFECTS ==============
    useEffect(() => {
        if (user && user.user) {
            GetAcceptedLeases({
                variables: {
                    student_id: user.user._id
                }
            })
        }
    }, [user]);

    useEffect(() => {
        if (acceptedLeasesResponse && acceptedLeasesResponse.getAcceptedLeases
        && acceptedLeasesResponse.getAcceptedLeases.data
        && acceptedLeasesResponse.getAcceptedLeases.success) {

            setLeaseSummaries(acceptedLeasesResponse.getAcceptedLeases.data.histories);
        }
    }, [acceptedLeasesResponse]);

    //============== FUNCTIONS ==============
    

    const acceptedLeaseCount = useNumberCounter({
        value: leaseSummaries.length,
        duration: 1000
    })

    const getActiveLease = (): LeaseHistorySummary | undefined => {
        let active_ = leaseSummaries.filter(y => {
            let ys = new Date(y.lease_history.start_date);
            let ye = new Date(y.lease_history.end_date);
            let t = new Date();
            return ys <= t && ye >= t;
        });
        if (active_.length == 0) return undefined;
        return active_[0];
    }

    const getInactiveLeases = (): LeaseHistorySummary[] => {
        return leaseSummaries.filter(y => {
            let ys = new Date(y.lease_history.start_date);
            let ye = new Date(y.lease_history.end_date);
            let t = new Date();
            return !(ys <= t && ye >= t);
        });
    }

    return (<ViewWrapper>
        <div>
            <div className="section-header-2" style={{
                height: `30px`, 
                marginBottom: `16px`,
                alignItems: `center`
            }}>
                <div className="title-area">Accepted Leases</div>
                <div className="counter_">{acceptedLeaseCount} Accepted {leaseSummaries.length == 1 ? 
                    <span>Lease</span> : <span>Leases</span>}
                </div>
            </div>

            {getActiveLease() != undefined && <div style={{marginBottom: `20px`}}>
                <div style={{fontWeight: 600, marginBottom: `8px`}}>Active Lease</div>
                <div style={{display: 'flex'}}>
                    <ActiveLeaseSummaryEntry summary={getActiveLease() as LeaseHistorySummary} />
                </div>
            </div>}

            <div>
                <div style={{fontWeight: 600, marginBottom: `8px`}}>Inactive Leases ({getInactiveLeases().length})</div>
                <div style={{display: 'flex'}}>
                    {getInactiveLeases()
                        .sort((a, b) => {
                            let a_: Date = new Date(a.lease_history.end_date);
                            let b_: Date = new Date(b.lease_history.end_date);
                            return a_ < b_ ? 1 : -1;
                        })
                        .map((summary: LeaseHistorySummary, i: number) => <LeaseSummaryEntry key={i} summary={summary} /> )}
                </div>
                {getInactiveLeases().length == 0 && 
                <div>
                    <Empty description={<span>No inactive leases</span>} />    
                </div>}
            </div>

        </div>
    </ViewWrapper>)
}

const ActiveLeaseSummaryEntry = ({summary}: {summary: LeaseHistorySummary}) => {

    return (<div className="active-lease-summary-entry">
        <div className="prop-name">{getPropertyAddress(summary.property)}</div>
        <div>
            <KVPair key_={"Room #"} value={`${summary.room_no}`} />
        </div>
        
        <div className="landlord-area">
            <KVPair key_={"Landlord"} value={`${summary.landlord.first_name} ${summary.landlord.last_name}`} />
            <div>Get Contact</div>
        </div>

        <div style={{marginTop: `5px`}}>
            <Button 
                text="View Lease"
                background="#E0777D"
                textColor="white"
                bold={true}
                transformDisabled={true}
                link_to={`/student/lease/info/${summary.lease._id}/${summary.lease_history_id}`}
            />
        </div>

    </div>)
}

const LeaseSummaryEntry = ({summary}: {summary: LeaseHistorySummary}) => {

    return (<div className="accepted-lease-summary-entry">
        <div className="prop-name">{getPropertyAddress(summary.property)}</div>
        <div>
            <KVPair key_={"Room #"} value={`${summary.room_no}`} />
        </div>

        <div className="landlord-area">
            <KVPair key_={"Landlord"} value={`${summary.landlord.first_name} ${summary.landlord.last_name}`} />
            <div>Get Contact</div>
        </div>

        <div className="date-section">
            <div className="date_">
                <div className="title">Start Date</div>
                <div className="date-area">{getDateAbbr(summary.lease_history.start_date, {withTime: false})}</div>
            </div>
            <div className="date_">
                <div className="title">End Date</div>
                <div className="date-area">{getDateAbbr(summary.lease_history.end_date, {withTime: false})}</div>
            </div>
        </div>

        <div style={{marginTop: `5px`}}>
            <Button 
                text="View Lease"
                background="#E0777D"
                textColor="white"
                bold={true}
                transformDisabled={true}
                link_to={`/student/lease/info/${summary.lease._id}/${summary.lease_history_id}`}
            />
        </div>
    </div>)
}

export default StudentAcceptedLeases;