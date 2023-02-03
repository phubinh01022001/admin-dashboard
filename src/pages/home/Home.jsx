import React from 'react';
import Sidebar from '~/components/slidebar/Slidebar';
import Chart from '../../components/charts/Chart';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import List from '../../components/table/Table';
import Widget from '../../components/widgets/Widget';
import './home.scss';

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                </div>
                <div className="charts">
                    <Featured />
                    <Chart aspect={2 / 1} title="Last 7 months" />
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Transactions</div>
                    <List />
                </div>
            </div>
        </div>
    );
};

export default Home;
