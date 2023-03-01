import axios from 'axios'
import React, { useState } from 'react'
// import { toast } from 'react-toastify'
// import { toast } from 'react-toastify'
import CustomButton from '../components/button'
import Input from '../components/input'
import Layout from '../components/layout'
import { baseUrl } from '../util'

function Login(props) {
    const [state, setState] = useState({})
    const onChange = (e) => { setState({ ...state, [e.target.name]: e.target.value }) }
    const submit = async () => {
        try {
            const { data } = await axios.post(baseUrl + '/user/login', state, { headers: { 'Content-Type': 'application/json' } })
            localStorage.setItem('token', data?.token)
            window.location.assign('/add')
        } catch (error) {
            error?.response?.status === 401 ? alert('unauthorized user') : alert('Network error')
        }
    }
    return (
        <Layout header={'Admin Login'} submit={submit} >
            <Input label={'Email'} name="email" onChange={onChange} required type='email' />
            <Input label={'Password'} name='password' onChange={onChange} required type='password' />
            <CustomButton text='Login' />
        </Layout>
    )
}
export default Login

