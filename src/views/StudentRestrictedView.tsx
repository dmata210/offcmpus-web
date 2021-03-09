import React from 'react'
import Centered from '../components/toolbox/layout/Centered'
import Button from '../components/toolbox/form/Button'

const StudentRestrictedView = () => {

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
                    />
                </div>
            </div>
        </div>
    </Centered>)
}

export default StudentRestrictedView;