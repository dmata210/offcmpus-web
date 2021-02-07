import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'

import ViewWrapper from '../components/ViewWrapper'
import {ReduxState} from '../redux/reducers/all_reducers'

import {
    useGetStudentNotificationsLazyQuery,
    StudentNotification
} from '../API/queries/types/graphqlFragmentTypes'

// TODO add authentication verificaation on getStudentNotifications query so only
// authenticated users can acquire this information

const StudentNotificationsView = () => {

    //======== GRAPHQL ========
    const [GetNotifications, {data: getNotificationsResponse}] = useGetStudentNotificationsLazyQuery();

    //======== STATE ========
    const user = useSelector((state: ReduxState) => state.user);
    const [notifications, setNotifications] = useState<StudentNotification[]>([]);
    
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
        <div>
            Student Notifications ({notifications.length} Notifications)
        </div>
    </ViewWrapper>)
}

export default StudentNotificationsView;