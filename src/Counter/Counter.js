import React, {Component} from 'react';

class Counter extends Component {
    intervalId=0;
    constructor(props) {
        super(props);
        console.log('constructor')
    }
    componentDidMount() {
        console.log('didMount')
        this.intervalId=setInterval(()=>console.log('hello'),1000)
    }
    componentWillUnmount() {
        console.log(this.intervalId)
        clearInterval(this.intervalId)    }

    render() {
        console.log('render')

        return (
            <div>
Counter works
            </div>
        );
    }
}

export default Counter;