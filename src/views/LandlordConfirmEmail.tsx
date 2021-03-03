import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router'
import queryString from 'query-string'
import {useConfirmLandlordEmailMutation} from '../API/queries/types/graphqlFragmentTypes'
import {Helmet} from "react-helmet";
import successLottieJSON from '../assets/lottie/success.json';
import Button from '../components/toolbox/form/Button';
import {useLottie} from "lottie-react";

const LandlordConfirmEmail = ({confirm_key}: {confirm_key: string}) => {
    const history = useHistory()
    const [ConfirmEmail, {data: confirmEmailResponse}] = useConfirmLandlordEmailMutation()

    const [confirmed, setConfirmed] = useState<boolean>(false);

    const {View: successAnim} = useLottie({
        animationData: successLottieJSON,
        loop: true, autoplay: true
    });

    useEffect(() => {

        let query_ = queryString.parse(window.location.search)
        if (!Object.prototype.hasOwnProperty.call(query_, `email`)) {
            history.push('/')
        }
        else {
            console.log(`attempting to confirm email`)
            ConfirmEmail({
                variables: {
                    email: query_.email as string,
                    confirm_key: confirm_key
                }
            })
        }

    }, []);

    useEffect(() => {
        if (confirmEmailResponse && confirmEmailResponse.confirmLandlordEmail) {
            if (confirmEmailResponse.confirmLandlordEmail.error) {
                history.push("/");
            }
            else {
                setConfirmed(true);
            }
        }
    }, [confirmEmailResponse]);

    return (<div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>offcmpus | Landlord Email Confirmation</title>
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
                    link_to="/landlord/login"
                />
            </div>
        </div>}

    </div>);
}

export default LandlordConfirmEmail