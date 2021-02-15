import React, {useEffect, useState} from 'react'
import { PageHeader, Alert } from 'antd';
import {useHistory} from 'react-router';
import {Helmet} from "react-helmet";

import Centered from '../components/toolbox/layout/Centered'
import Input from '../components/toolbox/form/Input'
import Button from '../components/toolbox/form/Button'
import {
    useSendPasswordResetMutation
} from '../API/queries/types/graphqlFragmentTypes'

const LandlordForgotPassword = () => {

    //================== GRAPHQL ==================
    const [SendReset, {data: sendResetResponse}] = useSendPasswordResetMutation();
    
    //================== STATE ==================
    const [sendError, setSendError] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");

    const history = useHistory();

    //================== EFFECTS ==================
    useEffect(() => {
        if (sendResetResponse && sendResetResponse.sendPasswordReset) {
            if (sendResetResponse.sendPasswordReset.success) {
                history.push('/landlord/login');
            }
            else {
                // an error occurred when trying to send the
                // password recovery link
                setSendError(true);
            }
        }
    }, [sendResetResponse]);
    
    //================== FUNCTIONS ==================
    const handleAccountRecovery = () => {
        SendReset({
            variables: {
                email: email
            }
        })
    }

    return (<Centered width={400} height={500}>

        <div>

            <Helmet>
                <meta charSet="utf-8" />
                <title>offcmpus | Forgot Password</title>
            </Helmet>

            {/* Header */}
            <PageHeader
                className="site-page-header"
                onBack={() => { history.push('/landlord/login') }}
                title="Account Recovery"
                subTitle="Forgot Your Password"
            />

            {sendError && 
            <div style={{width: `80%`, margin: `0 auto`, padding: `10px 0`}}>
                <Alert
                    message="Error"
                    description="No landlord found."
                    type="error"
                    showIcon
                />
            </div>}

            {/* Form Area */}
            <div style={{
                width: `80%`,
                margin: `0 auto`
            }}>
                <div>
                    <div style={{marginBottom: `5px`}}>
                        Enter your email address. We will send you a password reset link.
                    </div>
                    <Input 
                        onChange={(val: string) => {
                            setEmail(val);
                        }}
                        label="email"
                    />

                    <div style={{marginTop: `15px`}}>
                        <Button 
                            text="Reset Password"
                            textColor="white"
                            bold={true}
                            transformDisabled={true}
                            onClick={handleAccountRecovery}
                        />
                    </div>
                </div>

            </div>

        </div>

    </Centered>)
}

export default LandlordForgotPassword;