import React from 'react';
import './App.css';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            personList: [],
            uniqId: 101
        }
        this.saveDetails = this.saveDetails.bind(this);
        this.delete = this.delete.bind(this);
        this.getHeader = this.getHeader.bind(this);
        this.getRowsData = this.getRowsData.bind(this);
        this.getKeys = this.getKeys.bind(this);
    }
    
    getKeys = function(){
        return Object.keys(this.state.personList[0]);//this.state.personList
    }
    
    getHeader = function(){
        if(this.state.personList[0] !== undefined){
            var keys = this.getKeys();
            return keys.map((key, index)=>{
                return <th key={key}>{key.toUpperCase()}</th>
            })
        }
    }
    
    getRowsData = function(){
        console.log(this.state.personList);
        if(this.state.personList[0] !== undefined){
            var items = this.state.personList;
            var keys = this.getKeys();
            return items.map((row, index)=>{
            return <tr key={row.id}><RenderRow key={row.id} data={row} keys={keys} /> <button onClick={this.delete.bind(this, row)}>Delete</button></tr>
            })
        }
    }

    saveDetails = (e) => {
        e.preventDefault();
        var firstname = this.fname.value;
        var lastName = this.lname.value;
        var emailValue = this.email.value;
        var id = this.state.uniqId;
        let person = {
            id: id,
            fname: firstname,
            lname: lastName,
            email:emailValue            
        }
        let personList = [...this.state.personList];
        personList.push(person);
        this.setState({
            personList: personList,
            uniqId:++this.state.uniqId
        });
    }

    delete(item){
        let personList = this.state.personList.filter(i => i.id !== item.id)
        console.log(personList);
        this.setState({personList})
    }

    
    render() {
         return (
            <div>
                <form>
                    <span className="formtext">Details</span>
             
                    <label>
                            First Name: <input type="text" ref={(c) => this.fname = c} placeholder="Enter first Name"
                            name="fname"  required  />                     
                            Last Name: <input type="text" ref={(c) => this.lname = c}  placeholder="Enter Last Name" 
                            name="lname"  required />
                            
                    </label>     
                    <label>     
                        Email: <input type="text"  placeholder="Enter email" ref={(c) => this.email = c}
                            name="email"  required  />
                    </label>
                    <button onClick={this.saveDetails}>Save</button>
               
                </form>
                <form>
                    <div>
                        <table>
                            <thead>
                                <tr>{this.getHeader()}</tr>
                            </thead>
                            <tbody>
                                {this.getRowsData()}
                            </tbody>
                        </table>
                    </div>
                </form>
            </div>
        );
    }
}

const RenderRow = (props) =>{
    return props.keys.map((key, index)=>{
        return <td key={props.data[key]}>{props.data[key]}</td>
        })
}

export default Form