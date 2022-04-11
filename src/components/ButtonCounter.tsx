import React, { useState } from 'react';

// class Button extends React.Component<any, { counter: number }> {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       counter: 5
//     };
//     this.incrCounter = this.incrCounter.bind(this);
//   }

//   incrCounter() {
//     this.setState(prevState => ({
//       counter: prevState.counter + 1
//     }));
//   }

//   render() {
//     return (
//       <p>
//         Counter is {this.state.counter}
//         <button className="Button" onClick={this.incrCounter}>
//           Increment
//         </button>
//       </p>
//     );
//   }
// }

const Button = () => {
  const [counter, setCounter] = useState(5);

  const incrCounter = () => {
    setCounter(counter + 1);
  }

  return (
      <p>
        Counter is {counter}
        <button className="Button" onClick={incrCounter}>
          Increment
        </button>
      </p>
  )
}

export default Button;