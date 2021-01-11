import React, { useState } from 'react'

import Centered from '../components/toolbox/layout/Centered'
import RatioInput from '../components/toolbox/form/RadioInput'
import DatePicker from '../components/toolbox/form/DatePicker'

const StudentStatus = () => {

    const [searching, setSearching] = useState<boolean | undefined>(true);

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
                    }}
                    question="Are you currently looking for a lease?"
                    options={["Yes", "No"]}
                />
            </div>

            {/* Date Picker */}
            {searching == true && <div style={{marginTop: `20px`}}>
                <div style={{marginBottom: `10px`}}>What time frame are you looking to lease for?</div>
                <DatePicker type="range" />
            </div>}

        </div>
    </Centered>)
}

export default StudentStatus;