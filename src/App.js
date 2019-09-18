import React from 'react';
import Form from './Form'

class App extends React.Component {
  // constructor() {
  //    super();
  //    this.state = {
  //       data: 
  //       [
  //          {
  //             "id":1,
  //             "name":"veena",
  //             "age":"50"
  //          },
  //          {
  //             "id":2,
  //             "name":"Vani",
  //             "age":"51"
  //          },
  //          {
  //             "id":3,
  //             "name":"Mamtha",
  //             "age":"53"
  //          }
  //       ]
  //    }
  // }
  render() {
     return (
        <div>
           {/* <Header/>
           <table>
              <tbody>
                 {this.state.data.map((person, i) => <Content key = {i} 
                    data = {person} />)}
              </tbody>
           </table> */
               <Form />
           }
         </div>
     );
  }
}
export default App;