import React, { useEffect, useRef, useState } from 'react'
import {useHistory} from 'react-router'

import Centered from '../components/toolbox/layout/Centered'
import RatioInput from '../components/toolbox/form/RadioInput'
import DatePicker from '../components/toolbox/form/DatePicker'
import RangeSlider from '../components/toolbox/form/RangeSlider'
import Button from '../components/toolbox/form/Button'
import {useUpdateStudentSearchStatusMutation} from '../API/queries/types/graphqlFragmentTypes'

const StudentStatus = () => {

    const [searching, setSearching] = useState<boolean | undefined>(false);
    const [dateInfo, setDateInfo] = useState<(Date | null)[]>([null, null]);
    const [priceRange, setPriceRange] = useState<(number | null)[]>([null, null]);
    const history = useHistory();

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

    const saveForm = () => {
        if (searching == undefined) {
            
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