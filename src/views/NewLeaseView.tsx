import { useExternalRef } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import queryString from 'query-string' 
import {useHistory} from 'react-router'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

// @ts-ignore
import { Breadcrumb, BreadcrumbItem } from "shards-react";
import {
  useGetLeasesAndOccupantsLazyQuery,
  useGetOwnershipForPropertyLazyQuery,
  useGetPropertyOwnedByLandlordLazyQuery,
  useAddNewLeaseDocumentMutation,
  useGetLeaseDocumentsForLandlordLazyQuery,
  useActivateLeaseMutation,
  Ownership,
  Property,
  Lease,
  LeaseDocument
} from '../API/queries/types/graphqlFragmentTypes'
import {useFormControl, Filetype, noSpace, numbersOnly, $and, alphaNumeric} from '../components/hooks/useFormControl'
import Button from '../components/toolbox/form/Button'
import {ReduxState} from '../redux/reducers/all_reducers'
import {uploadObjects} from '../API/S3API'
import Error from '../components/toolbox/form/Error'
import Logo from '../components/Logo'

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
  const [GetLeaseDocuments, {data: getLeaseDocumentsResponse}] = useGetLeaseDocumentsForLandlordLazyQuery();

  // graph-ql react mutation hooks
  const [AddLeaseDocument, {data: leaseDcoumentResponse}] = useAddNewLeaseDocumentMutation();
  const [ActivateLease, {data: activateLeaseResponse}] = useActivateLeaseMutation();

  // document state
  const [property, setProperty] = useState<Property | undefined>(undefined)
  const [ownership, setOwnership] = useState<Ownership | undefined>(undefined)
  const [leases, setLeases] = useState<Lease[] | undefined>(undefined)
  const [leaseDocuments, setLeaseDocuments] = useState<LeaseDocument[] | undefined>(undefined)
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

      // Get the lease documents for this account
      GetLeaseDocuments({
        variables: {
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

  useEffect(() => {

    if (getLeaseDocumentsResponse && getLeaseDocumentsResponse.getLeaseDocumentsForLandlord
      && getLeaseDocumentsResponse.getLeaseDocumentsForLandlord.success
      && getLeaseDocumentsResponse.getLeaseDocumentsForLandlord.data) {
        
        setLeaseDocuments(getLeaseDocumentsResponse.getLeaseDocumentsForLandlord.data.lease_documents);
      }
  }, [getLeaseDocumentsResponse])

  /**
   * Form Control Setup
  */
  const [formError, setFormError] = useState<string | null>(null)
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

  const [savedLeaseSelectCtrl, savedLeaseSelectorView] = useFormControl({
    config: {
      savedLeaseOptions: {
        type: 'select',
        text: 'Select which previous lease document you would like to use',
        options: leaseDocuments == undefined ? [] : leaseDocuments.map((doc: LeaseDocument) => doc.lease_name)
      }
    }
  })

  const [newLeaseUploadCtrl, newLeaseUploadView] = useFormControl({
    config: {
      newLeaseUpload: {
        type: 'fileupload',
        fileInputType: 'multiple',
        text: "Upload the lease document from your computer",
        allowed_filetypes: [Filetype.application.pdf, Filetype.application.doc, Filetype.application.docx],
        max_filesize: 50000
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

  const handleLeaseCreation = () => {
    // Ensure that the form fields are valid, first

    // Lease Price Validation
      // check if the lease we are targeting is not already active
    let target_lease_obj = getLeasesResponse!.getLeasesAndOccupants!.data!.leases
    .filter((lease: Lease) => lease._id == targetLeaseId)
    if (target_lease_obj.length != 1
    || target_lease_obj[0].active == true) {
      setFormError("A lease for this room already exists. Cannot create a new lease for this room.");
    }
    
    if (!Object.prototype.hasOwnProperty.call(leaseFormCtrl, 'leasePrice')
    || leaseFormCtrl.leasePrice == null
    || leaseFormCtrl.leasePrice.length == 0
    || !numbersOnly(leaseFormCtrl.leasePrice)) {
      setFormError("You must provide a monthly lease value.");
      return;
    }

    // Lease Date Validation
    if (!Object.prototype.hasOwnProperty.call(leaseFormCtrl, 'dateAvailable')
    || leaseFormCtrl.dateAvailable == null
    || leaseFormCtrl.dateAvailable.length != 2
    || leaseFormCtrl.dateAvailable[0] == null
    || leaseFormCtrl.dateAvailable[1] == null
    || new Date().getTime() > leaseFormCtrl.dateAvailable[0].getTime() ) {
      setFormError("Invalid lease date provided.");
      return;
    }

    // If they uploaded a new lease, make sure there are documents
    // uploaded and a lease name is provided
    if(!Object.prototype.hasOwnProperty.call(leaseFormCtrl, 'newOrOldLease')
    || leaseFormCtrl.newOrOldLease == null) {
      setFormError ("You must select whether you are uploading a new lease or using a saved lease.");
      return;
    }

    if (leaseFormCtrl.newOrOldLease == "New Lease") {

      if (!Object.prototype.hasOwnProperty.call(newLeaseUploadCtrl, 'newLeaseUpload')
        || newLeaseUploadCtrl.newLeaseUpload == null
        || newLeaseUploadCtrl.newLeaseUpload.length == 0) {
          setFormError("At least one lease document must be uploaded.");
          return;
      }

      if (!Object.prototype.hasOwnProperty.call(newLeaseUploadCtrl, 'leaseDocumentName')
      || newLeaseUploadCtrl.leaseDocumentName == null
      || newLeaseUploadCtrl.leaseDocumentName.length == 0) {
        setFormError("A name for the lease must be provided");
        return;
      }

      if (leaseDocuments 
        && leaseDocuments.filter( (leaseDoc: LeaseDocument) => leaseDoc.lease_name == newLeaseUploadCtrl.leaseDocumentName ).length != 0) {
          setFormError("A lease with that name already exists");
          return;
        }
    }

    // If they are using a previous lease, make sure a lease value
    // is selected
    else if (leaseFormCtrl.newOrOldLease == "Saved Lease") {
      if (!Object.prototype.hasOwnProperty.call(savedLeaseSelectCtrl, 'savedLeaseOptions')
      || savedLeaseSelectCtrl.savedLeaseOptions == null) {
        setFormError("You must select a saved lease from the dropdown");
        return;
      }
    }

    // if all of the fields are valid, proceed to the creation of the lease
    proceedLeaseCreation ();

    setFormError(null);
  }

  const proceedLeaseCreation = () => {
    if (!user || !user.user) {
      return;
    }

    if (leaseFormCtrl.newOrOldLease == "New Lease") {
      // upload the files
      uploadObjects({
        restricted: true,
        files: newLeaseUploadCtrl.newLeaseUpload,
        landlords_access: [user.user._id],
        elevated_privileges_access: ['ownership_reviewer']
      })
      .then((response: any) => {
        console.log("Response: ", response)

        AddLeaseDocument({
          variables: {
            landlord_id: user && user.user ? user.user._id : '',
            lease_name: newLeaseUploadCtrl.leaseDocumentName,
            document_keys: response.data.files_uploaded.map((file_: any) => file_.key),
            document_mimes: newLeaseUploadCtrl.newLeaseUpload.map((file: any) => file.type)
          }
        });
      })
      .catch(err => {
        console.log(`An error occurred uploading documents...`)
        console.log(err);
      })
    }
    else if (leaseFormCtrl.newOrOldLease == "Saved Lease") {
      ActivateLease({
        variables: {
          lease_id: targetLeaseId as string,
          lease_document_id: leaseDocuments!.filter((leaseDoc: LeaseDocument) => leaseDoc.lease_name == savedLeaseSelectCtrl.savedLeaseOptions)[0]._id,
          price_per_month: parseInt(leaseFormCtrl.leasePrice),
          lease_start_date: leaseFormCtrl.dateAvailable[0].toISOString(),
          lease_end_date: leaseFormCtrl.dateAvailable[1].toISOString()
        }
      })
    }
  }

  useEffect(() => {
    if (leaseDcoumentResponse && leaseDcoumentResponse.addNewLeaseDocument) {
      if (leaseDcoumentResponse.addNewLeaseDocument.error != undefined) {
        setFormError(leaseDcoumentResponse.addNewLeaseDocument.error);
      }
      else if (leaseDcoumentResponse.addNewLeaseDocument.data) {
        // activate the lease
        ActivateLease({
          variables: {
            lease_id: targetLeaseId as string,
            lease_document_id: leaseDcoumentResponse.addNewLeaseDocument.data._id,
            price_per_month: parseInt(leaseFormCtrl.leasePrice),
            lease_start_date: leaseFormCtrl.dateAvailable[0].toISOString(),
            lease_end_date: leaseFormCtrl.dateAvailable[1].toISOString()
          }
        })
      }
    }
  }, [leaseDcoumentResponse])

  useEffect(() => {
    if (activateLeaseResponse && activateLeaseResponse.activateLease) {
      if (activateLeaseResponse.activateLease.success && activateLeaseResponse.activateLease.data) {
        history.push(`/landlord/property/lease/priority/${property_id}?lease=${targetLeaseId}`);
      }
        
      else {
        history.push(`/landlord/property/${property_id}`);
      }
      }
  }, [activateLeaseResponse])

  return (<div style={{
    width: `400px`, height: `900px`, margin: `0 auto`, paddingTop: `30px`
  }}>

    <div style={{marginBottom: `20px`}}>
      <Logo withText={true} />
    </div>

    <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/landlord/dashboard">Dashboard</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to={`/landlord/property/${property_id}`}>Property Details</Link>
        </BreadcrumbItem>
      <BreadcrumbItem active>New Lease</BreadcrumbItem>
    </Breadcrumb>

     {property != undefined && leases != undefined && ownership != undefined && targetLeaseId != undefined &&
     <div>
       {/* Property & Room Area */}
       <div style={{fontWeight: 600}}>{propertyAddr(property)}</div>
       <div>Room #{leases.map((lease: Lease, i: number) => ({_id: lease._id, roomNum: i+1 }) )
                         .filter((info: {_id: string, roomNum: number}) => info._id == targetLeaseId )[0].roomNum}</div>

     </div>
     }

     <div style={{marginTop: `20px`}} />
     {/* Error area */}
     {formError != null && <Error 
        message={formError}
        type='error'
     />}

     {/* Lease Form Control Area */}
     <div>
        {leaseFormView}
      </div>

      {/* Old Lease Dropdown */}
      {Object.prototype.hasOwnProperty.call(leaseFormCtrl, 'newOrOldLease') && 
        leaseFormCtrl.newOrOldLease == "Saved Lease"  && savedLeaseSelectorView}

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
          onClick={handleLeaseCreation}
        />
      </div>
    
  </div>)
};

const propertyAddr = (prop: Property): string => {
  return `${prop.address_line}, ${prop.address_line_2 == undefined || prop.address_line_2 == "" ? ' ' : prop.address_line_2 + ', '}${prop.city} ${prop.state}, ${prop.zip}`
}

export default NewLeaseView;
