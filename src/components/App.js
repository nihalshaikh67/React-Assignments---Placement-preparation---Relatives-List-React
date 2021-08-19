import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <div id="main">
                <ol key="relativeList">
                    <li key={`relativeListItem1`}>Relative1</li>
                    <li key={`relativeListItem2`}>Relative2</li>
                    <li key={`relativeListItem3`}>Relative3</li>
                    <li key={`relativeListItem4`}>Relative4</li>
                    <li key={`relativeListItem5`}>Relative5</li>
                </ol>
            </div>
        );
    }
}


export default App;
