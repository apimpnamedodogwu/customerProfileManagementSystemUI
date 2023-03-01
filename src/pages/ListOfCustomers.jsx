
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
const firstLetter = (string = '') => string.charAt(0) + string.substring(1, string.length).toLowerCase()
const remove_ = (string = '') => string.includes('_') ? firstLetter(string.replace('_', ' ')) : firstLetter(string)
function ListOfCustomers(props) {

    useEffect(() => {
        if (!localStorage.getItem('token')) window.location.assign('/')
    }, [])
    const [customers, setCustomers] = useState([])
    useEffect(() => {
        const fetchusers = async () => {
            const { data } = await axios.get('https://customerprofilemanagementsystem.up.railway.app/api/v1/customer?pageNumber=1&pageSize=100', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            setCustomers(data)
        }
        fetchusers()
    }, [])
    return (
        <Layout header={'List of Customers'}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left">First name </StyledTableCell>
                            <StyledTableCell align="left">Last name</StyledTableCell>
                            <StyledTableCell align="left">Product plan</StyledTableCell>
                            <StyledTableCell align="left">Feature</StyledTableCell>
                            <StyledTableCell align="left">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {customers.map((row) => (
                            <StyledTableRow key={row.firstName}>
                                <StyledTableCell align="left">{firstLetter(row.firstName)}</StyledTableCell>
                                <StyledTableCell align="left">{firstLetter(row.lastName)}</StyledTableCell>
                                <StyledTableCell align="left">{firstLetter(row.productPlan)}</StyledTableCell>
                                <StyledTableCell align="left">{row.productFeature?.map(x => <div>{remove_(x)}</div>)}</StyledTableCell>
                                <StyledTableCell align="left"><Button sx={{ textTransform: 'inherit' }} variant='contained' component='a' href={`/update/${row.id}`} >Update</Button></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Layout>
    )
}
export default ListOfCustomers
