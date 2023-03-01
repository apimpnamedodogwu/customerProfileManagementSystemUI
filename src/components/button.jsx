import { Button } from '@mui/material'
import React from 'react'

function CustomButton({ text = "Submit", variant = "contained", type = 'submit' }) {
    return (
        <Button type={type} variant={variant} sx={{ borderRadius: '12px', px: 4, py: 1, textTransform: 'inherit', my: 1, fontWeight: '700' }}>{text}</Button>
    )
}

export default CustomButton