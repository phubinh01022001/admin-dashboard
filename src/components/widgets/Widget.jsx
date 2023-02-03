import React from 'react';
import './widget.scss';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const Widget = ({ type }) => {
    let data;
    const amount = 100;
    const diff = 20;

    switch (type) {
        case 'user':
            data = {
                title: 'USERS',
                isMoney: false,
                link: 'See all users',
                icon: (
                    <PeopleOutlineIcon
                        className="icon"
                        style={{
                            color: 'crimson',
                            backgroundColor: 'yellow',
                        }}
                    />
                ),
            };
            break;
        case 'order':
            data = {
                title: 'ORDERS',
                isMoney: false,
                link: 'View all orders',
                icon: (
                    <ShoppingCartIcon
                        className="icon"
                        style={{
                            color: 'white',
                            backgroundColor: 'rgb(4, 110, 160)',
                        }}
                    />
                ),
            };
            break;
        case 'earning':
            data = {
                title: 'EARNINGS',
                isMoney: false,
                link: 'View net earnings',
                icon: (
                    <MonetizationOnIcon
                        className="icon"
                        style={{
                            color: 'blue',
                            backgroundColor: 'rgb(163, 199, 163)',
                        }}
                    />
                ),
            };
            break;
        case 'balance':
            data = {
                title: 'BALANCE',
                isMoney: true,
                link: 'See details',
                icon: (
                    <AccountBalanceIcon
                        className="icon"
                        style={{
                            color: 'black',
                            backgroundColor: 'orange',
                        }}
                    />
                ),
            };
            break;
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">
                    {data.isMoney && '$'} {amount}
                </span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardDoubleArrowUpIcon />
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    );
};

export default Widget;
