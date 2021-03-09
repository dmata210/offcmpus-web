import React, {useEffect, useState} from 'react'
import Centered from '../components/toolbox/layout/Centered'
import Button from '../components/toolbox/form/Button'
import Logo from '../components/Logo'
import urlencode from 'urlencode'
import {backendPath} from '../config'
import queryString from 'query-string'
import {Helmet} from "react-helmet";
import {useHistory} from 'react-router';
import {
    useStatsStudentAccountCreationMutation,
    useStatsStudentLoginMutation
} from '../API/queries/types/graphqlFragmentTypes'

const StudentLoginViewRPI = () => {


    //===================== STATE =====================
    const [StudentAccountCreation, {data: accountCreationStats}] = useStatsStudentAccountCreationMutation();
    const [StudentLoginStat] = useStatsStudentLoginMutation();
    const history = useHistory();
    const [mode, setMode] = useState<'login' | 'register'>('login');

    //===================== EFFECT =====================
    useEffect(() => {

        if (accountCreationStats && accountCreationStats.Stats_StudentAccountCreation) {
            StudentLoginStat();
            window.location.href = getRedirect();
        }
    }, [accountCreationStats]);

    useEffect(() => {
        let params = queryString.parse(window.location.search);

        console.log('params: ', params);
        if (Object.prototype.hasOwnProperty.call(params, 'register')
            && params.register == 'true') {
                setMode('register');
        }
    }, []);

    //===================== FUNCTIONS =====================
    const getRedirect = (): string => {
        let params = queryString.parse(window.location.search);
        if (Object.prototype.hasOwnProperty.call(params, `redirect`)) {
            return params.redirect as string;
        }
        // default redirect
        else return `/`;
    }

    const handleRpiCasLogin = () => {
        createAuthContext(getCASURL());
    }

    const createAuthContext = (url: string) => {
        const ctxWindow = window.open(url, undefined, "height=700,width=500,status=yes,toolbar=no,menubar=no,location=yes");
        window.addEventListener('message', (message) => {
            if (message.data && message.data.authSuccess == true) {
            console.log(`CAS Auth successful!`);
            ctxWindow?.close();
            // history.push('/');
            // window.location.reload();
            
            // Statistics for login
            /**
             * If the student has already been registered, this
             * gql stats query won't record anything.
             * Otherwise, it will create a new stat object for
             * this student.
             */
            StudentAccountCreation({variables:{}});
            // window.location.href = getRedirect();
            }
            else console.log(`CAS Auth failed`);
        });

        return ctxWindow;
    }
    
    const getCASURL = (): string => {
    // const urlencoded_ = `http://localhost:9010/auth/rpi/cas-auth` => http%3A%2F%2Flocalhost%3A9010%2Fauth%2Frpi%2Fcas-auth
    const urlencoded_ = urlencode(backendPath('/auth/rpi/cas-auth'))

    return `https://cas-auth.rpi.edu/cas/login?service=${urlencoded_}`
    }

    
    //===================== RENDER =====================
    return (<Centered width={400} height={400}>
        

        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>offcmpus | Student Login</title>
            </Helmet>

            <div style={{width: `150px`, margin: `0 auto`, marginBottom: `30px`,}}>
                <Logo withBeta={true} withText={true} />
            </div>
            
            {/* Continue as section...
            <div className="rp-saved-user-area">
                <div className="school-logo"></div>
                <div className="info-area">
                    <div className="name-area">Abdul-Muiz Yusuff</div>
                    <div className="action-area">
                        <Button 
                            text="Continue as Abdul-Muiz"
                            textColor="white"
                            bold={true}
                            transformDisabled={true}
                            background="#E0777D"
                        />
                    </div>
                </div>
            </div> */}

            {/* Different Login section... */}
            <div>
                {/* <div style={{marginBottom: `5px`}}>Not Abdul-Muiz?</div> */}
                <Button 
                    text="Login with RPI CAS"
                    textColor="white"
                    bold={true}
                    transformDisabled={true}
                    background="#3B4353"
                    onClick={() => handleRpiCasLogin()}
                />
                
                {/* <div style={{marginTop: '10px'}}>
                    <Button 
                        text={`${mode == 'register' ? 'Register' : 'Login'} with Email`}
                        textColor="white"
                        bold={true}
                        transformDisabled={true}
                        background="#E0777D"
                        onClick={() => {history.push(`/student/standard/${mode}`)}}
                    />
                </div> */}
            </div>

        </div>

    </Centered>)
}

export default StudentLoginViewRPI;