
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import CustomButton from '../components/button'
import Input from '../components/input'
import Layout from '../components/layout'
import { Box } from '@mui/material'

function UpdateCustomers(props) {

    const [state, setState] = useState({})
    const onChange = (e) => { setState({ ...state, [e.target.name]: e.target.value }) }
    const submit = () => {
        let x = { firstName: state.firstName, lastName: state?.lastName, productPlan: state?.productPlan }
        try {
            axios.put(`https://customerprofilemanagementsystem.up.railway.app/api/v1/customer?id=${state?.id}&productPlan=${state?.productPlan}`, x,
                {
                    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` }
                })
                alert('Product plan updated successfully')
        } catch (error) {
            console.log(error)
        }
    }
    const { id } = useParams()
    useEffect(() => {
        const fetchusers = async () => {
            if (id) {
                const { data } = await axios.get('https://customerprofilemanagementsystem.up.railway.app/api/v1/customer?pageNumber=1&pageSize=100', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                })
                setState(data?.find(x => x?.id === parseInt(id)))
            } else {
                window.location.assign('/add')
            }
        }
        fetchusers()
    }, [id])
    return (
        <Layout header={'Update Customer'} submit={submit}>
            <Input onChange={onChange} required name={'firstName'} disabled value={state?.firstName} />
            <Input onChange={onChange} required name={'lastName'} disabled value={state?.lastName} />
            <Input onChange={onChange} required name={'email'} type='email' disabled value={state?.email}   />
            {/* <Input onChange={onChange} required name={'phone'} label={'Phone'} value={state?.phoneNumber} type='tel' disabled /> */}
            <Box name='productPlan' onChange={onChange} component='select' value={state?.productPlan} sx={{ width: '100%', my: 1, py: 2, px: 2, borderRadius: '5px' }}>
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

            <CustomButton />
        </Layout>
    )
}
export default UpdateCustomers
