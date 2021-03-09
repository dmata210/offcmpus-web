import React, {useState} from 'react';
import Centered from '../components/toolbox/layout/Centered'
import Logo from '../components/Logo'
import Input, {Validators, noSpaces} from '../components/toolbox/form/Input'
import Checkbox from '../components/toolbox/form/Checkbox'
import Button from '../components/toolbox/form/Button'

const {email} = Validators;

type StudentRegFormInfo = {
    first_name: string,
    last_name: string,
    school_email: string,
    school_email_confirm: string,
    preferred_email_set: boolean,
    preferred_login_email: string,
    preferred_email_confirm: string
}

const StudentStandardRegister = () => {

    const [formInfo, setFormInfo] = useState<StudentRegFormInfo>({
        first_name: "", last_name: "", school_email: "", school_email_confirm: "",
        preferred_email_set: false, preferred_login_email: "", preferred_email_confirm: ""
    });

    const handleRegistration = () => {
        
    }

    return (<Centered width={400} height={600}>
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

        <div style={{marginTop: '20px'}}>
            <div style={{marginBottom: '15px'}}>
                <Input 
                    label="First Name"
                    onChange={(val: string) => {
                        let form = {...formInfo};
                        form.first_name = val;
                        setFormInfo(form);
                    }}
                />
            </div>
            <div style={{marginBottom: '15px'}}>
                <Input 
                    label="Last Name"
                    onChange={(val: string) => {
                        let form = {...formInfo};
                        form.last_name = val;
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
                        let form = {...formInfo};
                        form.school_email = val;
                        setFormInfo(form);
                    }}
                />
            </div>
            <div style={{marginBottom: '20px'}}>
                <Input 
                    label="Confirm School Email"
                    onChange={(val: string) => {
                        let form = {...formInfo};
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
                        {validator: email, errorMsg: "Email expected"},
                        {validator: eduValidator, errorMsg: "Email must be a .edu"}
                    ]}
                    onChange={(val: string) => {
                        let form = {...formInfo};
                        form.preferred_login_email = val;
                        setFormInfo(form);
                    }}
                />
            </div>
            <div style={{marginBottom: '15px'}}>
                <Input 
                    label="Confirm Preferred Login Email"
                    
                    onChange={(val: string) => {
                        let form = {...formInfo};
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
                onClick={handleRegistration}
            />
            </div>
        </div>

        </div>
    </Centered>)
}

const eduValidator = (val: string) => val.length > 4 && /.edu$/.test(val)

export default StudentStandardRegister;