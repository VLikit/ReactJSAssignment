import React from 'react';
import ReactDOM from 'react-dom';

const myelement = (
    <table>
      <tr>
        <th>Name</th>
      </tr>
      <tr>
        <td>John</td>
      </tr>
      <tr>
        <td>Elsa</td>
      </tr>
    </table>
  );
class Test extends React.Component {
    
  render() {
    return <h1>Hello World {this.props.name}</h1>;
  }
}

export default Test;