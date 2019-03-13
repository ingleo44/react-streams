import React from 'react';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '846507596308-qnfkjbve5ob8sidq5q4qh665j1so15un.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }

    render() {
        return (
            <div> Google Auth </div>
        );
    }

}

export default GoogleAuth;