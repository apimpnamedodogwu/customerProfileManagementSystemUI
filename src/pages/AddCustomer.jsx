import { Box } from '@mui/material'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import CustomButton from '../components/button'
import Input from '../components/input'
import Layout from '../components/layout'

function AddCustomer(props) {
    const [state, setState] = useState({})
    const onChange = (e) => { setState({ ...state, [e.target.name]: e.target.value }) }
    useEffect(() => {
        if (!localStorage.getItem('token')) window.location.assign('/')
    }, [])
    const submit = () => {
        try {
            axios.post('https://customerprofilemanagementsystem.up.railway.app/api/v1/customer', state,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                })
            alert('User created successfully')
        } catch (error) {
            console.log(error)
            throw error
        }
    }
    return (
        <Layout header={'Add Customer'} submit={submit}>
            <Input onChange={onChange} required name={'firstName'} label={'First name'} />
            <Input onChange={onChange} required name={'lastName'} label={'Last name'} />
            <Input onChange={onChange} required name={'email'} label={'Email'} />
            <Input onChange={onChange} required name={'phoneNumber'} label={'Phone'} />
            {/* <Input onChange={onChange} required name={'productPlan'} label={'Product Plan'} /> */}
            <Box name='productPlan' onChange={onChange} component='select' sx={{ width: '100%', my: 1, py: 2, px: 2, borderRadius: '5px' }}>
                <Box component={'option'} sx={{ width: '100%' }} value='BASIC'>
                    Basic
                </Box>
                <Box component={'option'} sx={{ width: '100%' }} value='DIAMOND'>
                    Diamond
                </Box>
                <Box component={'option'} sx={{ width: '100%' }} value='BRONZE'>
                    Bronze
                </Box>
                <Box component={'option'} sx={{ width: '100%' }} value='GOLD'>
                    Gold
                </Box>
            </Box>
            <CustomButton text='Add' />
        </Layout>
    )
}
export default AddCustomer
