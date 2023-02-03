import React from 'react';
import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
    {
        id: 1,
        product: 'Iphone 11',
        img: 'https://cdn.tgdd.vn/Products/Images/42/153856/TimerThumb/iphone-11-(88).jpg',
        customer: 'Phu Binh',
        date: '2 May',
        amount: 300,
        method: 'Cash on Delivery',
        status: 'Approved',
    },
    {
        id: 2,
        product: 'Iphone 13 pro max',
        img: 'https://cdn.tgdd.vn/Products/Images/42/250728/TimerThumb/iphone-13-pro-max-1tb-(38).jpg',
        customer: 'Cam Giang',
        date: '15 January',
        amount: 1000,
        method: 'Online Payment',
        status: 'Pending',
    },
    {
        id: 3,
        product: 'Iphone 14 pro max',
        img: 'https://cdn.tgdd.vn/Products/Images/42/251192/TimerThumb/iphone-14-pro-max-(40).jpg',
        customer: 'Cam Linh',
        date: '9 February',
        amount: 1200,
        method: 'Online Payment',
        status: 'Pending',
    },
    {
        id: 4,
        product: 'Iphone 14 pro',
        img: 'https://cdn.tgdd.vn/Products/Images/42/247508/TimerThumb/iphone-14-pro-(52).jpg',
        customer: 'Gia Phuoc',
        date: '19 July',
        amount: 1100,
        method: 'Cash on Delivery',
        status: 'Approved',
    },
    {
        id: 5,
        product: 'Iphone 12',
        img: 'https://cdn.tgdd.vn/Products/Images/42/213031/TimerThumb/iphone-12-(52).jpg',
        customer: 'Huy Binh',
        date: '1 January',
        amount: 500,
        method: 'Online Payment',
        status: 'Pending',
    },
];

const List = () => {
    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">Tracking ID</TableCell>
                        <TableCell className="tableCell">Product</TableCell>
                        <TableCell className="tableCell">Customer</TableCell>
                        <TableCell className="tableCell">Date</TableCell>
                        <TableCell className="tableCell">Amount</TableCell>
                        <TableCell className="tableCell">Payment Method</TableCell>
                        <TableCell className="tableCell">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className="tableCell">{row.id}</TableCell>
                            <TableCell className="tableCell">
                                <div className="cellWrapper">
                                    <img src={row.img} alt="" className="image" />
                                    {row.product}
                                </div>
                            </TableCell>
                            <TableCell className="tableCell">{row.customer}</TableCell>
                            <TableCell className="tableCell">{row.date}</TableCell>
                            <TableCell className="tableCell">{row.amount}</TableCell>
                            <TableCell className="tableCell">{row.method}</TableCell>
                            <TableCell className="tableCell">
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default List;
