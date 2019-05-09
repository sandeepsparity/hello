import React, {Component} from 'react';
import DashboardRouter from './dashboard.route';
import {NavLink} from 'react-router-dom';
import Tree from './Tree';

const routes = [
    {
     className: 'main-anchor',
     routeTo: 'orders',
     routeName: 'Orders'  
    },
    {
     className: 'main-anchor',
     routeTo: 'transactions',
     routeName: 'Transactions'   
    }
]

const data = [
    {
    name: 'Staff Management',
    toggled: true,
    children: [
        {
            name: 'Staff Accounts by Group'
        },
        {
            name: 'Staff Accounts by Manager',
            loading: true
        },
        {
            name: 'Staff accounts by Profile'
        }
    ]
},{
    name: 'Staff Management1',
    toggled: true,
    children: [
        {
            name: 'Staff Accounts by Group1'
        },
        {
            name: 'Staff Accounts by Manager1',
            loading: true
        },
        {
            name: 'Staff accounts by Profile1'
        }
    ]
}
];
class Dashboard extends Component {
    renderRoutes(){
    return(
        <nav>          
            {
                routes.map((route)=>
                (<NavLink 
                        className="main-anchor"    
                        to={route.routeTo}>
                        {route.routeName}
                </NavLink>)
                )   
            }
        </nav>
    )
    }
    render() {
        let createRoute = this.renderRoutes()
        return (
            <div className="main" style={{ display: 'flex' }}>

              <div className="left-panel" style={{ flex: 0.5, backgroundColor: "blue" }}>
                <Tree data={data}/>
              </div>
              <div className="right-panel" style={{ flex: 2, backgroundColor: "gray", paddingLeft: 20 }}>
              <div>
                 <DashboardRouter/>
                </div>
              </div>        
            </div>
        );
    }
}

export default Dashboard;