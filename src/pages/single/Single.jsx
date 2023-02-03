import React from 'react';
import './single.scss';
import Sidebar from '~/components/slidebar/Slidebar';
import Navbar from '~/components/navbar/Navbar';
import Chart from '~/components/charts/Chart';
import List from '~/components/table/Table';

const Single = () => {
    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img
                                src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-6/327998638_1323200561870140_3302435434892892694_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=NNfhMlcg9F4AX8C5vfp&tn=LFBQwRp_mRsk0Yoy&_nc_ht=scontent.fsgn8-1.fna&oh=00_AfANjBugb36HObYvOO8SvN7Q6qFLo33XVLtD1ollXAyCZQ&oe=63DEB61D"
                                alt=""
                                className="itemImg"
                            />
                            <div className="details">
                                <h1 className="itemTitle">Phu Binh</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">phubinh0001@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">+84 374123411</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">Ho Chi Minh city</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemValue">Viet Nam</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3 / 1} title="User spending" />
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Transactions</h1>
                    <List />
                </div>
            </div>
        </div>
    );
};

export default Single;
