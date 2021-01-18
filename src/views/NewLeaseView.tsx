import React, { useEffect } from 'react'

import Centered from '../components/toolbox/layout/Centered'
import {useFormControl, Filetype, noSpace, $and, alphaNumeric} from '../components/hooks/useFormControl'


/*
 * View for landlords to create new leases for their properties.
 */
const NewLeaseView = () => {

  const [leaseFormCtrl, leaseFormView] = useFormControl({
    formTitle: `New Lease`,
    config: {
      username: {
        type: 'input',
        inputType: 'text',
        label: {
          placeholder: true,
          text: "Username"
        },
        validator: $and(noSpace, alphaNumeric)
      },
      password: {
        type: 'input',
        inputType: 'password',
        label: {
          text: "Enter your password below."
        }
      },
      fileUploadTest: {
        type: 'fileupload',
        text: "Upload your parcel document here",
        fileInputType: 'multiple',
        allowed_filetypes: [Filetype.image.png, Filetype.application.json],
        max_filesize: 10000 /* bytes */
      },
      radioTest: {
        type: 'radio',
        text: "What is your favorite fruit?",
        options: ["Apple", "Banana", "Cookies"]
      },
      checkboxTest: {
        type: 'checkbox',
        text: 'Select up to 3 options',
        limit: 3,
        options: ["Opt 1", "Opt 2", "Opt 3", "Opt 4", "Opt 5"]
      },
      textareaTest: {
        type: 'textarea',
        text: 'Describe yourself in a few words'
      },
      selectTest: {
        type: 'select',
        text: 'What is your favorite type of food?',
        options: ['Pizza', 'Chocolate', 'Fries', 'Chicken']
      }
    }
  })

  useEffect(() => {
    console.log(`Form Control Changed! `, leaseFormCtrl)
  }, [leaseFormCtrl])

  return (<Centered width="400" height="100%">
    <div style={{
      marginTop: `40px`
    }}>
      
      {leaseFormView}

    </div>
  </Centered>)
};

export default NewLeaseView;
