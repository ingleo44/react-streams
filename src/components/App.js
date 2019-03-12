import React from 'react';
import {Route,BrowserRouter} from 'react-router-dom';

const PageOne = () =>{
    return <div>PageOne</div>
    };
    
    const PageTwo = () =>{
        return <div>PageTwo</div>
        };
    
const App = () => {
    return <div>
        <BrowserRouter>
        <div>
        <Route path="/" exact component={PageOne} />
        <Route path="/pagetwo" exact component={PageTwo} />
        </div>
        
        </BrowserRouter>

    </div>
};

export default App;