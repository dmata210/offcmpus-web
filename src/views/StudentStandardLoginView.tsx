import React, {useState} from 'react';

import Centered from '../components/toolbox/layout/Centered'
import Logo from '../components/Logo'
import Input, {Validators, noSpaces} from '../components/toolbox/form/Input'
import Button from '../components/toolbox/form/Button'
import { Alert } from 'antd';
import StudentAPI from '../API/StudentAPI'
import {useDispatch, useSelector} from 'react-redux'
import {fetchUser} from '../redux/actions/user'
import { ReduxState } from '../redux/reducers/all_reducers';
import {
    useStatsStudentLoginMutation
} from '../API/queries/types/graphqlFragmentTypes'
import queryString from 'query-string'

const {email} = Validators;

const StudentStandardLogin = () => {

    const [StudentLoginStat] = useStatsStudentLoginMutation();

    const [loginInfo, setLoginInfo] = useState<{email: string, password: string}>({
        email: '', password: ''
    });
    const [error, setError] = useState<string | null>(null);
    const user = useSelector((state: ReduxState) => state.user);
    const dispatch = useDispatch();

    const getRedirect = (): string => {
        let params = queryString.parse(window.location.search);
        if (Object.prototype.hasOwnProperty.call(params, `redirect`)) {
            return params.redirect as string;
        }
        // default redirect
        else return `/`;
    }

    const handleLogin = () => {
        if (loginInfo.email == "" || loginInfo.password == "") {
            setError("Form is empty");
            return;
        }

        if (!email(loginInfo.email)) {

            setError("Invalid email format");
            return;
        }

        // attempt to login
        setError(null);
        StudentAPI.login(
            loginInfo.email,
            loginInfo.password
        ).then(res => {
            if (res.data.success) {
                StudentLoginStat();
                // do fetch user stuff
                dispatch(fetchUser(user, {update: true}));
                window.location.href = getRedirect();
            }
            else {
                setError("Problem logging in");
            }
        })
        .catch(err => {
            console.log("Error in login:");
            console.error(err);

            setError("Could not log in.");
        });

    }

    return (<Centered width={400} height={500}>
        <div>
            
            <div style={{display: 'flex'}} className="padded upper">
                <div style={{width: '40px', height: '40px'}}>
                <Logo />
                </div>
                <div style={{
                fontWeight: 600,
                fontSize: '1rem',
                lineHeight: '45px',
                marginLeft: '10px'
                }}>
                Student Login
                </div>
            </div>

            {error != null && <div style={{marginTop: '15px'}}>
            <Alert
                message="Registration Failed"
                description={error}
                type="error"
            />
            </div>}

            <div style={{marginTop: '15px'}}>
                <Input 
                    label="email"
                    validators={[
                        {errorMsg: "Invalid email format", validator: email}
                    ]}
                    onChange={(val) => {
                        let form = loginInfo;
                        form.email = val;
                        setLoginInfo(form);
                    }}
                />
            </div>

            <div style={{marginTop: '15px'}}>
                <Input 
                    label="password"
                    type="password"
                    onChange={(val) => {
                        let form = loginInfo;
                        form.password = val;
                        setLoginInfo(form);
                    }}
                />
            </div>

            <div style={{marginTop: '15px', display: 'flex', justifyContent: 'flex-end'}}>
                <div style={{width: '150px'}}>
                    <Button 
                        text="Login"
                        textColor="white"
                        background="#E0777D"
                        bold={true}
                        transformDisabled={true}
                        onClick={handleLogin}
                    />
                </div>
            </div>

        </div>
    </Centered>)
}

export default StudentStandardLogin;