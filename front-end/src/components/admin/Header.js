import React,{Component} from 'react';
import {connect} from 'react-redux';
import createHistory from 'history/createBrowserHistory'
import {Link} from 'react-router-dom';
import {removeAuth} from './../../actions/authentication'

import {Redirect} from 'react-router-dom';
export const history = createHistory();

const Header = (props)=>{
    return (
        <header>
          
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/admin">Admin Dashboard</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link to='/logout' className="btn btn-success ml-auto">Logout</Link>    
                </div>
             </nav>
         
        </header>
    )
}
 
// const handleLogout =(e,props)=>{
//     e.preventDefault();
//     const username = props.authentication[0]["username"];
//     props.dispatch(removeAuth({username:username}));
//     props.higherProps.history.push('/login');
    
// }

const mapStateToProps = (state)=>{
    return{
        authentication:state.authentication,
    }
};

export default connect(mapStateToProps)(Header);