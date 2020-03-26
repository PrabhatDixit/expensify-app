import React from 'react';
import ReactDOM from 'react-dom'


const Info = (props) => (
    <div>
        <h2>This is info component.</h2>
        <p>THe info is : {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {

    return (props) => (
        <div>
            {props.isAdmin && <p>This is admin info. Please do not share !</p>}
            <WrappedComponent {...props}></WrappedComponent>
        </div>
    )

}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {!props.isAuthenticated ? <p>Please login !!</p>: <WrappedComponent {...props}></WrappedComponent>}
            
        </div>

    )
}

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

ReactDOM.render (<AuthInfo isAdmin={true} isAuthenticated={false} info="AuthInfo - Learning 'higher order component' in React for reusability." />, document.getElementById('app'));