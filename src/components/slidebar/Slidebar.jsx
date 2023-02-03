import React, { useContext } from 'react';
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../darkModeContext';

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);

    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <span className="logo">PbAdmin</span>
                </Link>
            </div>
            <hr></hr>
            <div className="center">
                <ul>
                    <p className="titile">MAIN</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="titile">LIST</p>
                    <Link to="/users" style={{ textDecoration: 'none' }}>
                        <li>
                            <SupervisedUserCircleIcon className="icon" />
                            <span>User</span>
                        </li>
                    </Link>
                    <Link to="/products" style={{ textDecoration: 'none' }}>
                        <li>
                            <ProductionQuantityLimitsIcon className="icon" />
                            <span>Products</span>
                        </li>
                    </Link>
                    <li>
                        <ViewStreamIcon className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <DeliveryDiningIcon className="icon" />
                        <span>Deliver</span>
                    </li>
                    <p className="titile">USEFUL</p>
                    <li>
                        <QueryStatsIcon className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsIcon className="icon" />
                        <span>Notification</span>
                    </li>
                    <p className="titile">SERVICE</p>
                    <li>
                        <HealthAndSafetyIcon className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <LibraryBooksIcon className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="titile">USER</p>
                    <li>
                        <AccountBoxIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={() => dispatch({ type: 'LIGHT' })}></div>
                <div className="colorOption" onClick={() => dispatch({ type: 'DARK' })}></div>
            </div>
        </div>
    );
};

export default Sidebar;
