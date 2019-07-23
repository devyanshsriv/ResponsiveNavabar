import React from 'react'
import './Sidedrawer.css'

const SiderDrawer = props => {
    let drawerClasses = 'sidedrawer';
    if(props.show) {
        drawerClasses = 'sidedrawer open';
    }
    return (
    <nav className={drawerClasses}>
        <ul>
            <li><a href="/">Products</a></li>
            <li><a href="/">Users</a></li>
        </ul>
    </nav>
    );
};

export default SiderDrawer;