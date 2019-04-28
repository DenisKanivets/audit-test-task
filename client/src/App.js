import React, {Component} from 'react';
import './App.scss';
import axios from "axios";
import Header from "./components";

class App extends Component {
    state = {
        info: []
    };

    async componentDidMount() {
        await axios.get("/get-info")
            .then(res => this.setState({info: res.data}))
            .catch(err => console.log(err));
    }

    render() {
        if (this.state.info.length === 0) {
            return (
                <div className='loading'>
                    <div id="cube-loader">
                        <div className="caption">
                            <div className="cube-loader">
                                <div className="cube loader-1"/>
                                <div className="cube loader-2"/>
                                <div className="cube loader-4"/>
                                <div className="cube loader-3"/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else if (this.state.info !== 0) {
            let rows = this.state.info.map((item, i) => {
                i++;
                return (
                    <tr key={i}>
                        <td>{i}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.title}</td>
                        <td className='right-col'>{item.displayValue}</td>
                    </tr>
                )
            });
            return (
                <>
                    <Header/>
                    <table>
                        <thead>
                        <tr>
                            <td>Opportunity</td>
                            <td>Estimated Savings</td>
                        </tr>
                        </thead>
                        <tbody>{rows}</tbody>
                    </table>
                </>
            )
        }
    }
}

export default App;
