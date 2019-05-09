import React,{Component} from 'react';
import {Route} from 'react-router';
import Orders from './orders.component';
import Transactions from './transactions.component';

class DashboardRouter extends Component {
    render(){
        return (
            <div>
                <Route path="/Staff Accounts by Group" component={Orders}/>
                <Route path="/transactions" 
                    component={Transactions}/>
            </div>
        );
    }
}

export default DashboardRouter;