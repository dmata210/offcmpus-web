import React, { useEffect, useRef, useState } from 'react'
import {useHistory} from 'react-router'
import {useSelector} from 'react-redux'

import {resolveRedirect} from '../components/hooks/usePushRedirect'
import Centered from '../components/toolbox/layout/Centered'
import RatioInput from '../components/toolbox/form/RadioInput'
import DatePicker from '../components/toolbox/form/DatePicker'
import RangeSlider from '../components/toolbox/form/RangeSlider'
import Button from '../components/toolbox/form/Button'
import {useUpdateStudentSearchStatusMutation} from '../API/queries/types/graphqlFragmentTypes'
import {ReduxState} from '../redux/reducers/all_reducers'

const StudentStatus = () => {

    const user = useSelector((state: ReduxState) => state.user)
    const [searching, setSearching] = useState<boolean | undefined>(false);
    const [dateInfo, setDateInfo] = useState<(Date | null)[]>([null, null]);
    const [priceRange, setPriceRange] = useState<(number | null)[]>([null, null]);
    const [formError, setFormError] = useState<{hasError: boolean, message: string}>({hasError: false, message: ""})

    const history = useHistory();

    const [UpdateStatus, {data: updateStatusResponse}] = useUpdateStudentSearchStatusMutation();

    const [_update, setUpdate] = useState<boolean>(false);
    const updateRef_ = useRef<boolean>(false);
    const forceUpdate = () => {
        updateRef_.current = !updateRef_.current;
        setUpdate(updateRef_.current);
    }

    useEffect(() => {
        let interval__ = setInterval(() => {forceUpdate()}, 50);
        let interval_ = setInterval(() => {forceUpdate()}, 100);
        let interval___ = setInterval(() => {forceUpdate()}, 500);
        return () => {
            clearInterval(interval_);
            clearInterval(interval__);
            clearInterval(interval___);
        }
    }, [])

    useEffect(() => {
        if (updateStatusResponse && updateStatusResponse.updateStudentSearchStatus) {
            if (updateStatusResponse.updateStudentSearchStatus.error || !updateStatusResponse.updateStudentSearchStatus.data) {
                setFormError({hasError: true, message: "Problem updating status. Please try again."});
            }
            else {
                console.log("Status updated!");
                resolveRedirect(history);
            }
        }
    }, [updateStatusResponse])

    useEffect(() => {
        console.log(formError);
    }, [formError])

    const saveForm = () => {

        console.log(`Searching? ${searching}`);
        console.log(`Date Range: `, dateInfo);
        console.log(`Price Range: `, priceRange);
        console.log(`User: `, user);

        if (searching == undefined) {
            setFormError({hasError: true, message: "No answer provided for search status"});
            return;
        }
        if (user && user.user && user.type == "student") {
            
            // if the student is not searching for a property, no other information
            // needs to be provided.
            if (searching == false) {
                UpdateStatus({
                    variables: {
                        id: user.user._id,
                        searching: false
                    }
                });
            }

            // if the student is searching for a property, they must provide the time range
            // they are looking for a property for and the price range they'd prefer.
            else {

                if (dateInfo[0] == null || dateInfo[1] == null) {
                    setFormError({hasError: true, message: "Invalid date range provided"});
                    return;
                }
                else if (dateInfo[0] < new Date()) {
                    setFormError({hasError: true, message: "Cannot set date in the past"});
                    return;
                }
                else if (priceRange[0] == null || priceRange[1] == null) {
                    setFormError({hasError: true, message: "Must provide a preferred price range"});
                    return;
                }
                else {
                    UpdateStatus({
                        variables: {
                            id: user.user._id,
                            searching: true,
                            search_start: dateInfo[0].toISOString(),
                            search_end: dateInfo[1].toISOString(),
                            price_start: priceRange[0],
                            price_end: priceRange[1]
                        }
                    });
                }
            }
        }
    }

    return (<Centered width="400" height="600">
        <div>
            <div className="title-1" style={{marginBottom: '20px'}}>Lease Search Status</div>

            {/* Question Radio Input */}
            <div>
                <RatioInput 
                    onChange={(option: string) => {
                        let searching: boolean | undefined = undefined;
                        if (option.toLowerCase() == "yes") searching = true;
                        else if (option.toLowerCase() == "no") searching = false;
                        setSearching(searching);

                        if (!searching) setDateInfo([null, null]);
                    }}
                    question="Are you currently looking for a lease?"
                    options={["Yes", "No"]}
                />
            </div>

            {/* Date Picker */}
            {searching == true && <div style={{marginTop: `20px`}}>
                <div style={{marginBottom: `20px`}}>What time frame are you looking to lease for?</div>
                <DatePicker type="range" onChange={(start: Date | null, end: Date | null) => {
                    setDateInfo([start, end]);
                }} />
            </div>}

            {/* Price Range */}
            {searching && dateInfo[0] != null && dateInfo[1] != null && 
            <div style={{marginTop: `30px`}}>
                <div style={{marginBottom: `20px`}}>What price range do you prefer for monthly rent?</div>
                <div style={{marginBottom: `40px`}}>
                    <RangeSlider 
                        forceUpdate={_update}
                        range={{start: 300, end: 1000}}
                        toStr={(value: number) => `$${value.toFixed(2)}`}
                        onChange={(a: any, b: any) => setPriceRange([a, b])}
                    />
                </div>

            </div>}

            {/* Save Button */}
            <div style={{marginTop: `20px`}} className="form-control-end">
                <div className="btn-area cancel-btn" style={{width: `100px`}}>
                    <Button 
                        text="Cancel"
                        textColor="#1E2019"
                        background="#F6F7F9"
                        onClick={() => history.push('/')}
                    />     
                </div> 
                <div className="confirm-btn btn-area" style={{width: `150px`}}>
                    <Button 
                        text="Save Status"
                        textColor="white"
                        background="#55c98b"
                        onClick={() => saveForm()}
                    />     
                </div>             
            </div>

        </div>
    </Centered>)
}

export default StudentStatus;