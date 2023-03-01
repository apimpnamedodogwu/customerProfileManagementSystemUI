import { Box, Typography } from '@mui/material'
import React from 'react'

function Layout({ children, header, isForm = true, submit = () => null }) {
    return (
        <>
            <Box sx={{ height: '70px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid grey' }}>
                <Typography sx={{ width: "25%", pl: 4, fontSize: { xs: '20px', lg: '30px' }, fontWeight: '700' }}>Eden's Project</Typography>
                <Box sx={{ display: 'flex', width: '30%', justifyContent: 'space-between', }}>
                    <Box component={'a'} sx={{ color: 'black', textDecoration: 'none' }} href='/add'>Add </Box>
                    <Box component={'a'} sx={{ color: 'black', textDecoration: 'none' }} href='/update'>Update </Box>
                    <Box component={'a'} sx={{ color: 'black', textDecoration: 'none' }} href='/list'>List </Box>
                </Box>
                <Box sx={{ width: '25%' }}>

                </Box>
            </Box>
            <Box sx={{ wdith: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', my: 5, minHeight: '75vh', }}>
                <Box component={isForm ? 'form' : 'div'} onSubmit={(e) => { e.preventDefault(); submit() }} sx={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: { xs: '95%', md: '50%', lg: '35%' }, }}>
                    <Typography sx={{ fontSize: { xs: '20px', lg: '30px' }, fontWeight: '700' }}> {header}</Typography>

                    {children}

                </Box>
            </Box></>
    )
}
export default Layout
