import React, {useEffect, useState} from 'react';
import Centered from '../components/toolbox/layout/Centered'
import Logo from '../components/Logo'
import Input, {Validators, noSpaces} from '../components/toolbox/form/Input'
import Checkbox from '../components/toolbox/form/Checkbox'
import Button from '../components/toolbox/form/Button'
import { Alert } from 'antd';
import StudentAPI from '../API/StudentAPI'
import {useDispatch, useSelector} from 'react-redux'
import {fetchUser} from '../redux/actions/user'
import {useCreateStudentMutation} from '../API/queries/types/graphqlFragmentTypes'
import { ReduxState } from '../redux/reducers/all_reducers';
import {
    useStatsStudentAccountCreationMutation,
    useStatsStudentLoginMutation
} from '../API/queries/types/graphqlFragmentTypes'
const {email} = Validators;

type StudentRegFormInfo = {
    first_name: string,
    last_name: string,
    school_email: string,
    school_email_confirm: string,
    preferred_email_set: boolean,
    preferred_login_email: string,
    preferred_email_confirm: string,
    password: string,
    password_confirm: string
}

const StudentStandardRegister = () => {

    const [StudentAccountCreation, {data: accountCreationStats}] = useStatsStudentAccountCreationMutation();
    const [StudentLoginStat] = useStatsStudentLoginMutation();

    const dispatch = useDispatch()
    const [CreateStudent, {data: createStudentResponse}] = useCreateStudentMutation();

    const [_forceUpdate, _setForceUpdate] = useState<boolean>(false);
    const [formInfo, setFormInfo] = useState<StudentRegFormInfo>({
        first_name: "", last_name: "", school_email: "", school_email_confirm: "",
        preferred_email_set: false, preferred_login_email: "", preferred_email_confirm: "",
        password_confirm: "", password: ""
    });
    const [error, setError] = useState<string | null>(null);
    const user = useSelector((state: ReduxState) => state.user);

    useEffect(() => {
        if (createStudentResponse && createStudentResponse.createStudent) {
            if (createStudentResponse.createStudent.success) {

                // Run statistics for logged in user
                StudentAccountCreation({variables:{}});

                // Log the student in
                StudentAPI.login(
                    formInfo.preferred_email_set ? formInfo.preferred_login_email : formInfo.school_email,
                    formInfo.password
                ).then(res => {

                    console.log(res.data);
                    console.log("Successful? ", res.data.success == true);
                    if (res.data.success == true) {

                        // run student login stat
                        StudentLoginStat();

                        dispatch(fetchUser(user, {update: true}))
                    }
                    else {
                        setError("Could not register. Please try again.");
                    }
                });
            }
            else {
                if (createStudentResponse.createStudent.error) 
                    setError(createStudentResponse.createStudent.error);
            }
        }
    }, [createStudentResponse]);

    const forceUpdate = () => {
        _setForceUpdate(!_forceUpdate);
    }

    const handleRegistration = () => {
        // verify form
        if (formInfo.first_name == "" 
        || formInfo.last_name == ""
        || formInfo.school_email == ""
        || formInfo.password == ""
        || (formInfo.preferred_email_set && formInfo.preferred_login_email == "")) {

            // ! Show error: invalid form
            setError("Fields are empty");
            return;
        }

        // check that the school email is an edu email
        if (!eduValidator(formInfo.school_email)) {

            // ! Show error: invalid school email
            setError("Invalid school email");
            return;
        }

        // check that the emails are in email format
        if (!email(formInfo.school_email) 
        || (formInfo.preferred_email_set && !email(formInfo.preferred_login_email))) {

            // ! Show error: emails are not in email format
            setError("Invalid email format");
            return ;
        }

        // check confirm emails
        if (
            (formInfo.school_email != formInfo.school_email_confirm)
            || (formInfo.preferred_login_email != formInfo.preferred_email_confirm)
        ) {
            // ! Show error: emails do not match
            setError("Emails do not match");
            return;
        }

        // check that passwords match
        if (
            formInfo.password != formInfo.password_confirm
        ) {
            setError("Passwords do not match");
            return;
        }

        // Create the student!
        setError(null);
        CreateStudent({
            variables: {
                first_name: formInfo.first_name,
                last_name: formInfo.last_name,
                email: formInfo.school_email,
                password: formInfo.password,
                ...(formInfo.preferred_email_set ? 
                    {preferred_email: formInfo.preferred_login_email} : {})
            }
        });

    }

    return (<Centered width={400} height={800}>
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
            Student Registration
            </div>
        </div>

        {error != null && <div style={{marginTop: '20px'}}>
        <Alert
            message="Registration Failed"
            description={error}
            type="error"
        />
        </div>}

        <div style={{marginTop: '20px'}}>
            <div style={{marginBottom: '15px'}}>
                <Input 
                    label="First Name"
                    onChange={(val: string) => {
                        let form = formInfo;
                        form.first_name = val;
                        setFormInfo(form);
                    }}
                />
            </div>
            <div style={{marginBottom: '15px'}}>
                <Input 
                    label="Last Name"
                    onChange={(val: string) => {
                        let form = formInfo;
                        form.last_name = val;
                        setFormInfo(form);
                    }}
                />
            </div>
        </div>

        <div style={{marginTop: '20px'}}>
            <div style={{marginBottom: '15px'}}>
                <Input 
                    label="Password"
                    type="password"
                    onChange={(val: string) => {
                        let form = formInfo;
                        form.password = val;
                        setFormInfo(form);
                    }}
                />
            </div>
            <div style={{marginBottom: '15px'}}>
                <Input 
                    label="Confirm Password"
                    type="password"
                    onChange={(val: string) => {
                        let form = formInfo;
                        form.password_confirm = val;
                        setFormInfo(form);
                    }}
                />
            </div>
        </div>

        <div style={{marginTop: '30px'}}>
            <div style={{marginBottom: '15px'}}>
                <Input 
                    label="School Email"
                    validators={[
                        {validator: email, errorMsg: "Email expected"},
                        {validator: eduValidator, errorMsg: "Email must be a .edu"}
                    ]}
                    onChange={(val: string) => {
                        let form = formInfo;
                        form.school_email = val;
                        setFormInfo(form);
                    }}
                />
            </div>
            <div style={{marginBottom: '20px'}}>
                <Input 
                    label="Confirm School Email"
                    onChange={(val: string) => {
                        let form = formInfo;
                        form.school_email_confirm = val;
                        setFormInfo(form);
                    }}
                />
            </div>
        </div>

        <div>
            <Checkbox 
                label="Use a different email to manage your account"
                initiallyChecked={formInfo.preferred_email_set}
                onCheck={(val: boolean) => {
                    let old = {...formInfo};
                    old.preferred_email_set = val;
                    setFormInfo(old);
                }}
            />
        </div>

        {formInfo.preferred_email_set &&
            <div style={{marginTop: '20px'}}>
            <div style={{marginBottom: '15px'}}>
                <Input 
                    label="Preferred Login Email"
                    validators={[
                        {validator: email, errorMsg: "Email expected"}
                    ]}
                    onChange={(val: string) => {
                        let form = formInfo;
                        form.preferred_login_email = val;
                        setFormInfo(form);
                    }}
                />
            </div>
            <div style={{marginBottom: '15px'}}>
                <Input 
                    label="Confirm Preferred Login Email"
                    
                    onChange={(val: string) => {
                        let form = formInfo;
                        form.preferred_email_confirm = val;
                        setFormInfo(form);
                    }}
                />
            </div>
        </div>
        }

        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: formInfo.preferred_email_set ? '0px' : '10px'
        }}>
            <div style={{width: '150px'}}>
            <Button 
                text="Cancel"
                textColor="#3B4353"
                background="#ccc"
                bold={true}
                transformDisabled={true}
                link_to="/"
            />
            </div>

            <div style={{width: '150px'}}>
            <Button 
                text="Register"
                textColor="white"
                background="#E0777D"
                bold={true}
                transformDisabled={true}
                onClick={() => handleRegistration()}
            />
            </div>
        </div>

        </div>
    </Centered>)
}

const eduValidator = (val: string) => val.length > 4 && /.edu$/.test(val)

export default StudentStandardRegister;