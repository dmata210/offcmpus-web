import React, { useEffect } from 'react'
import Logo from '../components/Logo'
import {HiCheck} from 'react-icons/hi'
import Button from '../components/toolbox/form/Button'
import RectMouseManget from '../components/toolbox/misc/RectMouseMagnet'
import API from '../API/API'
import {loadStripe, Stripe} from '@stripe/stripe-js';

const PriorityFeatureCreationVew = () => {

    const stripe = loadStripe(process.env.REACT_APP_STRIPE_TEST_API_TOKEN as string);

    const createCheckoutSession = (tier: string) => {
        
        let price_id: string | null = null;
        if (tier.toLowerCase() == "starters") price_id = process.env.REACT_APP_STRIPE_STARTER_TIER_PRICE_ID as string;
        if (tier.toLowerCase() == "pro") price_id = process.env.REACT_APP_STRIPE_PRO_TIER_PRICE_ID as string;

        console.log(`Price ID: ${price_id}`)
        if (price_id == null) return;

        API.post('/payments/create-checkout-session', {
            priceId: price_id
        }, {
            headers: { "Content-Type": "application/json" }
        })
        .then((result: any) => {
            console.log(`Result: `, result)

            // http://localhost:3000/landlord/property/lease/priority/600af7c25c42c636e02e3a47?lease=600af7e55c42c636e02e3a61
            
            if (stripe == null) {
                console.log(`Stripe obj is null...`)
            }
            else {
                stripe.then((stripe: Stripe | null) => {
                    if (stripe == null) {
                        console.error(`Stripe failed to load...`)
                    }
                    else {
                        stripe.redirectToCheckout({
                            sessionId: result.data.sessionId
                        }).then((result: any) => console.log(`Result, `, result))
                    }
                })
                // (stripe as any).redirectToCheckout({
                //     sessionId: result.data.sessionId
                // }).then((result: any) => {
                //     console.log(`Result `, result)
                // })
            }
        });
    }
    
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
                <TierModal name="Starters" processTier={createCheckoutSession} features={["Placeholder"]} />
            </div>
            
            <div style={{width: `48%`}}>
                <TierModal name="Pro" processTier={createCheckoutSession} features={["Placeholder"]} />
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
                    link_to="/landlord/dashboard"
                    transformDisabled={true}
                />
            </div>
        </div>

    </div>)
}

interface TierProps {
    name: string
    features: string[]
    processTier: (arg: string) => void
}
const TierModal = ({name, processTier, features}: TierProps) => {
    
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
                    onClick={() => {
                        processTier(name)
                    }}
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