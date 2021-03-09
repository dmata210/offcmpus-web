import React, { useState, useEffect } from 'react'
import Popup, {PopupHeader, ConfirmLine} from '../components/toolbox/misc/Popup'

import {
    useResendStudentEmailConfirmationMutation
} from '../API/queries/types/graphqlFragmentTypes'

export const StudentConfirmPrompt = () => {

    const [ResendEmail, {data: emailResendResponse}] = useResendStudentEmailConfirmationMutation();
    const [confirmationSent, setConfirmationSent] = useState<boolean>(false);
    const [emailSendTo, setEmailSendTo] = useState<string | null>(null);

    const handleResendConfirmation = () => {
        ResendEmail();
    }

    useEffect(() => {
        if (emailResendResponse && emailResendResponse.resendStudentEmailConfirmation) {
            if (emailResendResponse.resendStudentEmailConfirmation.success) {
                setConfirmationSent(true);
                // I set the email that the confirmation is sent to in the 'error' field. (probably not the best idea ;o)
                if (emailResendResponse.resendStudentEmailConfirmation.error)
                    setEmailSendTo(emailResendResponse.resendStudentEmailConfirmation.error);
            }
        }
    }, [emailResendResponse]);

    return (<div className="student-confirm-prompt">

        <Popup width={400} height={140} show={confirmationSent}>
            <PopupHeader withClose={true} onClose={() => setConfirmationSent(false)}>
                Resend Email Confirmation
            </PopupHeader>

            <div style={{
                color: 'black',
                padding: '0 10px'
            }}>
                A confirmation email has been resent to <span className="code">{emailSendTo}</span>
            </div>

            <ConfirmLine 
                withCancel={false}
                onConfirm={() => setConfirmationSent(false)}
            />
        </Popup>

        <div className="header_">Confirm Your Email</div>
        <div className="body_">
            You must confirm your email within 24-hours to continue
            using this service. You will have restricted access until
            your <span className="code">.edu</span> email has been confirmed.
        </div>
        <div className="btn-area">
            <div className="_btn1_" onClick={handleResendConfirmation}>Resend Confirmation Email</div>
        </div>
    </div>)
}
