import React, {useEffect, useState} from 'react'
import queryString from 'query-string'
import {useHistory} from 'react-router-dom'
import {HiCheck, HiX} from 'react-icons/hi'
import { Alert } from 'antd';
import {Helmet} from "react-helmet";

import Centered from '../components/toolbox/layout/Centered'
import Input from '../components/toolbox/form/Input'
import Button from '../components/toolbox/form/Button'
import {
    useCheckPasswordResetKeyLazyQuery,
    useLandlordResetPasswordMutation
} from '../API/queries/types/graphqlFragmentTypes'


const LandlordPasswordResetView = ({reset_key}: {reset_key: string}) => {

    
    //============== GRAPHQL ==============
    const [CheckPasswordReset, {data: passResetResponse}] = useCheckPasswordResetKeyLazyQuery({
        fetchPolicy: 'no-cache'
    })
    const [ChangePassword, {data: changePasswordResponse}] = useLandlordResetPasswordMutation();

    //============== STATE ==============
    const history = useHistory();
    const [pass, setPass] = useState<string>("");
    const [passConf, setPassConf] = useState<string>("");
    const [error, setError] = useState<boolean>(false);

    //============== EFFECTS ==============
    useEffect(() => {

        // check if this is a valid password reset instance
        let params = queryString.parse(window.location.search);
        
        // 1. if there is no email in the url query params, this is not a valid link
        if (!Object.prototype.hasOwnProperty.call(params, 'email')) {
            history.push('/landlord/login')
        }

        CheckPasswordReset({
            variables: {
                reset_key: reset_key,
                email: params.email as string
            }
        })

    }, []);

    useEffect(() => {
        if (passResetResponse && passResetResponse.checkPasswordResetKey) {

            // if success is false, then this password reset link is not valid
            if (!passResetResponse.checkPasswordResetKey.success) {
                history.push('/landlord/login')
            }
        }
    }, [passResetResponse]);

    useEffect(() => {
        if (changePasswordResponse && changePasswordResponse.resetPassword) {

            // after successful password change, redirect to the login
            if (changePasswordResponse.resetPassword.success) {
                history.push('/landlord/login')
            }

            // otherwise, alert
            else {
                setError(true);
            }
        }
    }, [changePasswordResponse]);

    //============== FUNCTIONS ==============
    const handleChangePassword = () => {
        if (!passLenReq() || !capitalizationReq() || !numberReq() || !matchReq()) return;

        // update the password
        ChangePassword({
            variables: {
                email: queryString.parse(window.location.search).email as string,
                reset_key: reset_key,
                new_password: pass
            }
        })
    }

    const passLenReq = (): boolean => pass.length >= 7;
    // const specialReq = (): boolean => /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(pass);
    const capitalizationReq = (): boolean => /[A-Z]/g.test(pass)
    const numberReq = (): boolean => /[0-9]/g.test(pass)
    const matchReq = (): boolean => pass == passConf;

    return (<Centered width={400} height={400}>

        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>offcmpus | Password Reset</title>
            </Helmet>

            <div style={{fontWeight: 600, fontSize: `1.2rem`}}>Reset Your Password</div>
            {error && 
            <div style={{padding: `10px 0`}}>
                <Alert
                    message="Error"
                    description="Problem occurred while trying to reset password. Please try again."
                    type="error"
                    showIcon
                />
            </div>}

            <div>Enter a new password for the account associated with {<span style={{fontWeight: 600}}>{queryString.parse(window.location.search).email}</span> || <span style={{fontWeight: 600}}>none@email.com</span>}</div>

            <div style={{marginTop: `10px`, marginBottom: `8px`}}>
                <Input 
                    label="New Password"
                    type="password"
                    onChange={(e: string) => setPass(e)}
                />
            </div>
            <div>
                <Input 
                    label="Confirm New Password"
                    type="password"
                    onChange={(e: string) => setPassConf(e)}
                />
            </div>

            <div style={{marginTop: `5px`}}>
                <Requirement val="At least 7 charaters long" met={passLenReq()} />
                <Requirement val="At least one number" met={numberReq()} />
                <Requirement val="At least one capitalized letter" met={capitalizationReq()} />
                <Requirement val="Passwords match" met={matchReq()} />
            </div>

            <div style={{marginTop: `10px`}}>
                <div>
                    <Button 
                        text="Change Password"
                        textColor="white"
                        bold={true}
                        transformDisabled={true}
                        onClick={handleChangePassword}
                    />
                </div>
            </div>

        </div>

    </Centered>)
}

const Requirement = ({val, met}: {val: string, met: boolean}) => {

    return (<div style={{
        display: `flex`
    }}>
        <div style={{
            marginRight: `5px`,
            color: met ? `#6AD68B` : `#E0777D`
        }}>{met ? <HiCheck /> : <HiX />}</div>
        <div>{val}</div>
    </div>)
}

export default LandlordPasswordResetView;