import React, {useEffect} from 'react'
import {useHistory} from 'react-router'
import queryString from 'query-string'
import {useConfirmStudentEmailMutation} from '../API/queries/types/graphqlFragmentTypes'
import {Helmet} from "react-helmet";

const StudentConfirmEmail = ({confirm_key}: {confirm_key: string}) => {

    const [ConfirmEmail, {data: confirmEmailResponse}] = useConfirmStudentEmailMutation ()
    const history_ = useHistory()

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
                console.error(`Error confirmeing email`)
            }
            history_.push('/')
        }

    }, [confirmEmailResponse])

    return (<div>

            <Helmet>
            <meta charSet="utf-8" />
            <title>offcmpus | Landlord Email Confirmation</title>
            </Helmet>

        Student] Confirm Email</div>)
}

export default StudentConfirmEmail