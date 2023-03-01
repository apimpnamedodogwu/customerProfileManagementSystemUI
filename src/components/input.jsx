import { TextField } from '@mui/material'
import React from 'react'

function Input({ required, label , type='text',...props}) {
    return (

        <TextField required={required} label={label} type={type} {...props} sx={{ width: '100%', my: 1, p: '0' }} />
    )
}

export default Input