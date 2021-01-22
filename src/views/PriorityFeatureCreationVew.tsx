import React from 'react'
import Logo from '../components/Logo'
import {HiCheck} from 'react-icons/hi'
import Button from '../components/toolbox/form/Button'
import RectMouseManget from '../components/toolbox/misc/RectMouseMagnet'

const PriorityFeatureCreationVew = () => {
    
    return (<div style={{
        width: `600px`,
        margin: `0 auto`,
        marginTop: `50px`,
        paddingBottom: `50px`
    }}>
        {/* Logo */}
        <div style={{marginBottom: `20px`}}>
            <Logo withText={true} />
        </div>

        {/* Body Text */}
        <div style={{
            marginBottom: `30px`,
            height: `340px`,
            paddingTop: `100px`
        }}>
            
            <div style={{
                width: `400px`, 
                margin: `0 auto`,
                fontWeight: 600, 
                fontSize: `2rem`, 
                fontFamily: `khumbh-sans`,
                color: `#3B4353`,
                textAlign: `center`,
                lineHeight: `35px`
            }}>
                <div>Let your property</div> 
                <div>reach more students!</div>
            </div>

            <div style={{
                width: `500px`,
                margin: `0 auto`,
                textAlign: `center`,
                color: `#3B4353`,
                marginTop: `10px`
            }}>
            With the Finder's Premium feature, we will show your property to more students, allowing you to close the deal sooner!
            </div>

        </div>

        {/* Tier Area */}
        <div style={{display: `flex`, justifyContent: `space-between`}}>
            <div style={{width: `48%`}}>
                <TierModal name="Starters" features={["Placeholder"]} />
            </div>
            
            <div style={{width: `48%`}}>
                <TierModal name="Pro" features={["Placeholder"]} />
            </div>
        </div>

        {/* Default */}
        <div className="standard-holder" style={{marginTop: `40px`}}>
            <div>Standard Plan</div>
            <div style={{width: `200px`}}>
                <Button 
                    textColor="black"
                    bold={false}
                    text="Continue for Free"
                    background="#F6F9FB"
                    border="#c9c9c9"
                    transformDisabled={true}
                />
            </div>
        </div>

    </div>)
}

interface TierProps {
    name: string
    features: string[]
}
const TierModal = ({name, features}: TierProps) => {
    
    return (<RectMouseManget
            rotateXStrength={1}
            rotateYStrength={1}
        >

        <div className="tier-modal">
            <div className="tier-name">{name}</div>
            <div className="tier-features">
                {features.map((feature: string, key: number) => 
                    (<div className="tier-feat" key={key}>
                    <div className="check_"><HiCheck /></div>
                    <div>{feature}</div>
                </div>))}
            </div>

            {/* Advance Button */}
            <div style={{marginTop: `20px`}}> 
                <Button 
                    text={`Continue with ${name}`}
                    bold={true}
                    background={`#E0777D`}
                    textColor="white"
                    transformDisabled={true}
                />
            </div>
        </div>

    </RectMouseManget>)
}

export default PriorityFeatureCreationVew;