import React, { useState, useEffect } from 'react'
import Centered from '../components/toolbox/layout/Centered'
import Button from '../components/toolbox/form/Button'
import {Alert} from 'antd'
import {
    useStudentAccessShouldBeRestrictedLazyQuery,
    useResendStudentEmailConfirmationMutation
} from '../API/queries/types/graphqlFragmentTypes'
import {ReduxState} from '../redux/reducers/all_reducers'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router'

const StudentRestrictedView = () => {

    const history = useHistory();
    const user = useSelector((state: ReduxState) => state.user);
    const [ResentConfirmation, {data: resendCOnfirmationResponse}] = useResendStudentEmailConfirmationMutation();
    const [sent, setSent] = useState<boolean>(false);
    const [CheckAccessRestricted, {data: accessRestrictedResponse}] = useStudentAccessShouldBeRestrictedLazyQuery();

    const handleResendConfirmation = () => {
        ResentConfirmation();
    }

    useEffect(() => {
        CheckAccessRestricted();
    }, []);

    useEffect(() => {
        if (accessRestrictedResponse && accessRestrictedResponse.studentAccessShouldBeRestricted) {
            
            // if they should not be restricted access, then send them back to the home page
            if (!accessRestrictedResponse.studentAccessShouldBeRestricted.success) {
                history.push('/');
            }
        }
    }, [accessRestrictedResponse]);

    useEffect(() => {
        // TODO handle state change stuff
        if (resendCOnfirmationResponse
            && resendCOnfirmationResponse.resendStudentEmailConfirmation
            && resendCOnfirmationResponse.resendStudentEmailConfirmation.success) {
                setSent(true);
            }
    }, [resendCOnfirmationResponse]);

    return (<Centered width={400} height={400}>
        <div>
            
            <div style={{fontWeight: 600}}>Access Restricted</div>

            <div style={{marginTop: '10px'}}>
                Your access to the application has been restricted
                because you have not yet confirmed 
                your <span className="code">.edu</span> email.
                Once you confirm your email, you will be restored access.
            </div>

            <div style={{
                display: 'flex',
                marginTop: '15px',
                justifyContent: 'flex-end'
            }}>
                
                <div style={{width: '300px'}}>
                    <Button 
                        text="Resend Email Confirmation"
                        textColor="white"
                        background="#3B4353"
                        bold={true}
                        transformDisabled={true}
                        onClick={handleResendConfirmation}
                    />
                </div>
            </div>

            {sent && <div style={{marginTop: '15px'}}>
                <Alert
                    message="Email Confirmation Resent!"
                    description={`Successfully resent email confirmation to ${user && user.user && user.user.email ? user.user.email : ''}`}
                    type="success"
                />
            </div>}
        </div>
    </Centered>)
}

export default StudentRestrictedView;