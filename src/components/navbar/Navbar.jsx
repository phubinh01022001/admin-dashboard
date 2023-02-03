import React, { useContext } from 'react';
import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import ViewListIcon from '@mui/icons-material/ViewList';
import { DarkModeContext } from '../../darkModeContext';

const Navbar = () => {
    const { dispatch } = useContext(DarkModeContext);
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search ..." />
                    <SearchIcon />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageIcon className="icon" />
                        <span>English</span>
                    </div>
                    <div className="item">
                        <DarkModeIcon
                            className="icon"
                            onClick={() => dispatch({ type: 'TOGGLE' })}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                    <div className="item">
                        <FullscreenIcon className="icon" />
                    </div>
                    <div className="item">
                        <NotificationsIcon className="icon" />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatIcon className="icon" />
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <ViewListIcon className="icon" />
                    </div>
                    <div className="item">
                        <img
                            src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/306651709_1668485206888194_3081817641366790149_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_ohc=jTU0vq33aUYAX_ts_c7&_nc_ht=scontent.fsgn8-1.fna&oh=00_AfCtgOmF5ix6OxiA6a4J6-DeN65IkRy08CtBut9p6_twiA&oe=63DDB32A"
                            alt=""
                            className="avatar"
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
