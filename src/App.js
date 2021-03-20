// import React, {Component} from 'react';
// import Counter from "./Counter/Counter";
//
// class App extends Component {
//     state = {
//         counters: ['a']
//     }
//
//     render() {
//         return (
//             <div>
//                 {
//                     this.state.counters.map(counter => <Counter/>)
//                 }
//                 <button onClick={() => {
//                     let {counters} = this.state;
//                     counters.pop();
//                     this.setState({counter: counters})
//                 }}>Delete counter
//                 </button>
//
//             </div>
//         )
//
//     }
// }
// export default App;

import React, {Component} from 'react';
import Characters from "./Characters/Characters";

class App extends Component {
    render() {
        return (
            <div>
              <Characters/>
            </div>
        );
    }
}

export default App;