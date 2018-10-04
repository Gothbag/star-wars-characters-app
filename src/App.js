import React from "react";

import "./App.css";
import Home from "./containers/Home";

class App extends React.PureComponent {
    render() {
        return (<section className='container' style={{height: '100%'}}>
            <section className='row center' style={{height: '100%'}}>
                <Home/>
            </section>
        </section>);
    }
}

export default App;
