import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import Header from '../components/Header';
import ExpenseDashboard from '../components/ExpenseDashboard';


export const PublicRoute = ({isAuthenticated = true, component:Component, ...restProps} ) => ( 
    <Route {...restProps} 
        component = {(props) => (
            
            !isAuthenticated ? 
                (
                    <div>
                        
                        <Component {...props} />
                    </div>
                    
                ) : 
                (
                    <div>
                        
                        <Redirect to = "/dashboard" />
                    </div>
                    
                )
        )} 
    />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
    
});

export default connect(mapStateToProps)(PublicRoute);