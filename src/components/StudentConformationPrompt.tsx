import React from 'react'

export const StudentConfirmPrompt = () => {

    return (<div className="student-confirm-prompt">
        <div className="header_">Confirm Your Email</div>
        <div className="body_">
            You must confirm your email within 24-hours to continue
            using this service. You will have restricted access until
            your <span className="code">.edu</span> email has been confirmed.
        </div>
        <div className="btn-area">
            <div className="_btn1_">Resend Confirmation Email</div>
        </div>
    </div>)
}
