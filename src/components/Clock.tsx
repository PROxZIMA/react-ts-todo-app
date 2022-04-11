import React, { useEffect, useState } from 'react';

// class Clock extends React.Component<any, { date: Date}> {
//   timerID: number;

//   constructor(props: any) {
//     super(props);
//     this.state = {
//       date: new Date()
//     };
//     this.timerID = 0;
//   }

//   componentDidMount() {
//     this.timerID = window.setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   render() {
//     return (
//       <p>
//         Current time is {this.state.date.toLocaleTimeString()}
//       </p>
//     );
//   }
// }

const Clock = () => {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  }

  useEffect(() => {
    console.log('useEffect called');
    const timerId = window.setInterval(tick, 1000);
    return () => {
      window.clearInterval(timerId);
    }
  }, []);

  return (
    <p className='clock'>{date.toLocaleTimeString()}</p>
  );
}

export default Clock;