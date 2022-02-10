import React from 'react';
import Header from '../Header/Header';
import ResultsContainer from '../ResultContainer/ResultContainer';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';
const name = require('@rstacruz/startup-name-generator');
class App extends React.Component {
    state = {
        headerText: 'Name it!',
        headerExpanded: true,
        suggestedNames: [],
    };
    handleInputChange = (inputText) => {
        // console.log('Input text - ', inputText);
        this.setState({
            headerExpanded: !inputText,
            suggestedNames: inputText ? name(inputText) : [],
        });
    };
    render() {
        // console.log(name('cloud'));
        return (
            <div>
                <Header
                    headerExpanded={this.state.headerExpanded}
                    headTitle={this.state.headerText} />
                <SearchBox handleInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
                {/* <button onClick={
                    () => {
                        this.setState({
                            headerText: "Woaaah, It's the new headertext"
                        })
                    }}>Magic happens here</button> */}
            </div>
        )
    }
}
// function App() {
//     return (
//         <div>
//             <h1>This is functional COmponent. </h1>
//         </div>
//     )
// }


export default App;