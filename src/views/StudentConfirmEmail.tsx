import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router'
import queryString from 'query-string'
import {useConfirmStudentEmailMutation} from '../API/queries/types/graphqlFragmentTypes'
import {Helmet} from "react-helmet";
import {useLottie} from "lottie-react";
import successLottieJSON from '../assets/lottie/success.json';
import Button from '../components/toolbox/form/Button';

const StudentConfirmEmail = ({confirm_key}: {confirm_key: string}) => {

    const [confirmed, setConfirmed] = useState<boolean>(false);
    const [ConfirmEmail, {data: confirmEmailResponse}] = useConfirmStudentEmailMutation ()
    const history_ = useHistory();

    const {View: successAnim} = useLottie({
        animationData: successLottieJSON,
        loop: true, autoplay: true
    });

    useEffect(() => {

        let query_ = queryString.parse(window.location.search)
        if (!Object.prototype.hasOwnProperty.call(query_, `email`)) {
            history_.push('/')
        }
        else {
            ConfirmEmail({
                variables: {
                    email: query_.email as string,
                    confirm_key
                }
            })
        }

    }, [])

    useEffect(() => {

        if (confirmEmailResponse && confirmEmailResponse.confirmStudentEmail) {
            if (confirmEmailResponse.confirmStudentEmail.error) {
                history_.push("/");
            }
            else {
                setConfirmed(true);
            }
            // history_.push('/')
        }

    }, [confirmEmailResponse])

    return (<div>

            <Helmet>
                <meta charSet="utf-8" />
                <title>offcmpus | Student Email Confirmation</title>
            </Helmet>
            <div style={{
                width: "300px",
                margin: "0 auto",
                marginTop: "100px",
                height: confirmed ? "300px" : "0px",
                opacity: confirmed ? 1 : 0,
                overflow: "hidden",
                transition: "height 0.25s, opacity 0.25s"
            }}>
                {successAnim}
            </div>
            {confirmed && <div style={{
                width: "300px",
                margin: "0 auto",
                textAlign: "center"
            }}>
                <div style={{fontFamily: "khumbh-sans", fontSize: 20, fontWeight: 600}}>Email confirmed successfully!</div>
                <div style={{width: "150px", margin: "20px auto"}}>
                    <Button 
                        text="Login" 
                        textColor="white" 
                        background="#E0777D" 
                        bold={true}
                        transformDisabled={true}
                        link_to="/student/login"
                    />
                </div>
            </div>}



        </div>)
}

export default StudentConfirmEmail