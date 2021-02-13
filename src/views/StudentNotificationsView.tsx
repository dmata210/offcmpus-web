import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router'
import { Empty } from 'antd';

import {useNumberCounter} from '../components/hooks/useNumberCounter'
import ViewWrapper from '../components/ViewWrapper'
import {ReduxState} from '../redux/reducers/all_reducers'
import Button from '../components/toolbox/form/Button'

import {
    useGetStudentNotificationsLazyQuery,
    useMarkAsSeenMutation,
    StudentNotification,
} from '../API/queries/types/graphqlFragmentTypes'
import {getDateAbbr} from '../components/helpers/meta'

// TODO add authentication verificaation on getStudentNotifications query so only
// authenticated users can acquire this information

const StudentNotificationsView = () => {

    //======== GRAPHQL ========
    const [GetNotifications, {data: getNotificationsResponse}] = useGetStudentNotificationsLazyQuery();

    //======== STATE ========
    const user = useSelector((state: ReduxState) => state.user);
    const [notifications, setNotifications] = useState<StudentNotification[]>([]);

    const notificationsCount = useNumberCounter({
        value: notifications.filter((notif: StudentNotification) => notif.date_seen == undefined).length,
        duration: 1000
    })
    
    //======== EFFECT ========
    useEffect(() => {

        if (user && user.user) {
            GetNotifications({
                variables: {
                    student_id: user.user._id
                }
            })
        }

    }, [user])

    useEffect(() => {
        if (getNotificationsResponse
            && getNotificationsResponse.getStudentNotifications
            && getNotificationsResponse.getStudentNotifications.data) {
                setNotifications(getNotificationsResponse.getStudentNotifications.data.notifications);
            }
    }, [getNotificationsResponse]);
    
    //======== FUNCTIONS ========


    return (<ViewWrapper>
        <div style={{
            width: `400px`,
            margin: `0 auto`
        }}>

            {/* Title */}
            <div className="section-header-2" style={{
                height: `30px`, 
                marginBottom: `16px`,
                alignItems: `center`
            }}>
                <div className="title-area">Notifications</div>
                <div className="counter_">{notificationsCount} New Notifications</div>
            </div>

            {/* Body */}
            {notifications.length == 0 && <div style={{marginTop: `40px`}}>
                <Empty description={<span>No notifications</span>} />
            </div>}
            {notifications.length > 0 && notifications.map((notif: StudentNotification, i: number) => 
                <NotifComponent notif={notif} student_id={user && user.user ? user.user._id : ''} key={i} />)}

        </div>
    </ViewWrapper>);
}

const NotifComponent = ({notif, student_id}: {notif: StudentNotification, student_id: string}) => {
    
    //======== GRAPHQL ========
    const [MarkAsSeen, {data: markAsSeenResponse}] = useMarkAsSeenMutation();

    //======== STATE ========
    const history = useHistory();

    //======== EFFECTORS ========
    useEffect(() => {
        // once a response is recieved, if there is 
        // an action associated with the notification,
        // redirect there
        if (markAsSeenResponse
            && markAsSeenResponse.markStudentNotificationAsSeen
            && markAsSeenResponse.markStudentNotificationAsSeen.success
            && markAsSeenResponse.markStudentNotificationAsSeen.data
        ) {

            if (notif.action) {
                history.push(notif.action.action_url);
            }

        }
    }, [markAsSeenResponse]);

    //======== FUNCTIONS ========
    const initMarkAsSeen = () => {
        MarkAsSeen({
            variables: {
                student_id,
                notification_id: notif._id
            }
        });
    }

    return (<div className={`student-notification ${notif.date_seen == undefined ? `new`: ``}`}
                onMouseOver={() => {
                    // if the notification has no action properties (button), we mark
                    // as seen when the user hovers over the notification
                    if (!notif.action) { initMarkAsSeen() }
                }}
            >
            <div className="notif-head">
                <div className="subject">{notif.subject}</div>
                <div className="date-area">{getDateAbbr(notif.date_created)}</div>
            </div>
            <div className="notif-body">
                <div className="body_">{notif.body}</div>
                {notif.action && <div className="action-area">
                    <div style={{width: `170px`}}>
                        <Button 
                            text={notif.action.action_text}
                            background="#E0777D"
                            textColor="white"
                            bold={true}
                            transformDisabled={true}
                            onClick={() => initMarkAsSeen()}
                        />
                    </div>
                </div>}
            </div>
        </div>)
}

export default StudentNotificationsView;