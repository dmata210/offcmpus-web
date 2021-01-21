import { useExternalRef } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import queryString from 'query-string' 
import {useHistory} from 'react-router'
import {useSelector} from 'react-redux'

import {
  useGetLeasesAndOccupantsLazyQuery,
  useGetOwnershipForPropertyLazyQuery,
  useGetPropertyOwnedByLandlordLazyQuery,
  Ownership,
  Property,
  Lease
} from '../API/queries/types/graphqlFragmentTypes'
import {useFormControl, Filetype, noSpace, numbersOnly, $and, alphaNumeric} from '../components/hooks/useFormControl'
import Button from '../components/toolbox/form/Button'
import {ReduxState} from '../redux/reducers/all_reducers'

/*
 * View for landlords to create new leases for their properties.
 */
const NewLeaseView = ({property_id}: {property_id: string}) => {

  const history = useHistory();
  const user = useSelector((state: ReduxState) => state.user);

  // graph-ql react query hooks
  const [GetProperty, {data: propertyResponse}] = useGetPropertyOwnedByLandlordLazyQuery();
  const [GetOwnership, {data: getOwnershipResponse}] = useGetOwnershipForPropertyLazyQuery();
  const [GetLeases, {data: getLeasesResponse}] = useGetLeasesAndOccupantsLazyQuery();

  // document state
  const [property, setProperty] = useState<Property | undefined>(undefined)
  const [ownership, setOwnership] = useState<Ownership | undefined>(undefined)
  const [leases, setLeases] = useState<Lease[] | undefined>(undefined)
  const [targetLeaseId, setTargetLeaseId] = useState<string | undefined>(undefined)

  useEffect(() => {
    // get the lease id from the url that we want to create the lease for
    const parsed = queryString.parse(window.location.search);
    
    // if the lease is not provided in the url of the page, redirect to dashboard
    if (!Object.prototype.hasOwnProperty.call(parsed, 'lease')) {
      history.push('/')
    }

    // othewise, set the targetLeaseId state variable as this value
    else {
      setTargetLeaseId(parsed.lease as string);
    }

  }, [])

  useEffect(() => {
    if (user && user.user) {
      // 1. Get the property document
      GetProperty({
        variables: {
          property_id,
          landlord_id: user.type == 'landlord' ? user.user._id : 'null'
        }
      })
    }
  }, [user])

  useEffect(() => {
    
    // check if the landlord owns the property
    if (propertyResponse && propertyResponse.getPropertyOwnedByLandlord) {

      // if there was an error, return them to the dashbnoard
      if (propertyResponse.getPropertyOwnedByLandlord.error != undefined 
        || !propertyResponse.getPropertyOwnedByLandlord.success
        || propertyResponse.getPropertyOwnedByLandlord.data == undefined) {

        history.push('/');
      }
      
      // otherwise, save the property and fetch the ownership information
      else {

        setProperty(propertyResponse.getPropertyOwnedByLandlord.data);

        GetOwnership({
          variables: {
            landlord_id: user && user.user && user.type == 'landlord' ? user?.user._id : 'null',
            property_id: propertyResponse.getPropertyOwnedByLandlord.data._id
          }
        })

      }
      
    }

  }, [propertyResponse])

  useEffect(() => {

    if (getOwnershipResponse && getOwnershipResponse.getOwnershipForProperty) {

      // if there was an error getting the ownership, return the user to the dashboard
      if (getOwnershipResponse.getOwnershipForProperty.data == undefined
        || !getOwnershipResponse.getOwnershipForProperty.success
        || getOwnershipResponse.getOwnershipForProperty.error != undefined) {

        history.push('/');
      }
      
      // otherwise, save the ownership and fetch the lease information
      else {

        setOwnership(getOwnershipResponse.getOwnershipForProperty.data);

        GetLeases({
          variables: {
            ownership_id: getOwnershipResponse.getOwnershipForProperty.data._id
          }
        })
      }

    }

  }, [getOwnershipResponse])

  useEffect(() => {

    // check if the lease query returned
    if (getLeasesResponse && getLeasesResponse.getLeasesAndOccupants) {

      if (getLeasesResponse.getLeasesAndOccupants.error != undefined 
        || !getLeasesResponse.getLeasesAndOccupants.success
        || getLeasesResponse.getLeasesAndOccupants.data == undefined) {
        
          history.push('/');
      }

      else {
        setLeases(getLeasesResponse.getLeasesAndOccupants.data.leases);
      }
    }

  }, [getLeasesResponse])


  /**
   * Form Control Setup
  */
  const [leaseFormCtrl, leaseFormView] = useFormControl({
    formTitle: "New Lease",
    config: {

      leasePrice: {
        type: 'input',
        inputType: 'text',
        label: {
          placeholder: false,
          text: 'What is the monthly price for this lease? (USD)'
        },
        validator: numbersOnly
      },

      dateAvailable: {
        type: 'date-range',
        text: "Pick the start and end time that this lease is available for (the date that students can move in)."
      },

      newOrOldLease: {
        type: 'radio',
        text: 'Do you want to upload a new lease document or reuse a previous lease document?',
        options: ["New Lease", "Saved Lease"]
      }
    }
  });

  const [savedLeaseDropdown, savedLeaseDropdownView] = useFormControl({
    config: {
      savedLeaseOptions: {
        type: 'select',
        text: 'Select which previous lease document you would like to use',
        options: ["Lease #1", "Lease #2", "Lease #3", "Lease #4"]
      }
    }
  })

  const [newLeaseUpload, newLeaseUploadView] = useFormControl({
    config: {
      newLeaseUpload: {
        type: 'fileupload',
        fileInputType: 'multiple',
        text: "Upload the lease document from your computer",
        allowed_filetypes: [Filetype.application.pdf, Filetype.application.doc, Filetype.application.docx],
        max_filesize: 10000
      },

      leaseDocumentName: {
        type: 'input',
        inputType: 'text',
        label: {
          placeholder: false,
          text: "Save this lease under a name to easily reuse for later"
        }
      }
    }
  })

  return (<div style={{
    width: `400px`, height: `900px`, borderBottom: `1px solid red`, margin: `0 auto`, paddingTop: `30px`
  }}>

     {property != undefined && leases != undefined && ownership != undefined && targetLeaseId != undefined &&
     <div>
       {/* Property & Room Area */}
       <div style={{fontWeight: 600}}>{propertyAddr(property)}</div>
       <div>Room #{leases.map((lease: Lease, i: number) => ({_id: lease._id, roomNum: i+1 }) )
                         .filter((info: {_id: string, roomNum: number}) => info._id == targetLeaseId )[0].roomNum}</div>

     </div>
     }

     {/* Lease Form Control Area */}
     <div style={{marginTop: `30px`}}>
        {leaseFormView}
      </div>

      {/* Old Lease Dropdown */}
      {Object.prototype.hasOwnProperty.call(leaseFormCtrl, 'newOrOldLease') && 
        leaseFormCtrl.newOrOldLease == "Saved Lease"  && savedLeaseDropdownView}

      {/* New Lease Dropdown */}
      {Object.prototype.hasOwnProperty.call(leaseFormCtrl, 'newOrOldLease') && 
        leaseFormCtrl.newOrOldLease == "New Lease"  && newLeaseUploadView}

      {/* Submit Button */}
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}>
        <Button 
          text="Next"
          background="#E0777D"
          textColor="white"
          bold={true}
          transformDisabled={true}
        />
      </div>
    
  </div>)
};

const propertyAddr = (prop: Property): string => {
  return `${prop.address_line}, ${prop.address_line_2 == undefined || prop.address_line_2 == "" ? ' ' : prop.address_line_2 + ', '}${prop.city} ${prop.state}, ${prop.zip}`
}

export default NewLeaseView;
