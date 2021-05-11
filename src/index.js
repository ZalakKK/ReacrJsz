import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// const mycotent1= <h1>My first Content</h1>;
// ReactDOM.render(mycotent1,document.getElementById('root'));
// const mycotent2= <h1>My second Content</h1>;
// ReactDOM.render(mycotent2,document.getElementById('root2'));

// const mycotent = <div class="myclass">
//   <h1>My third content</h1>
//   <h2>My fourth content</h2>
// </div>

// ReactDOM.render(mycotent, document.getElementById('root'))

// const mycon = React.createElement("h1",null,"My actual content without using jsx")
// ReactDOM.render(mycon, document.getElementById('root'))

// const mycont= React.createElement('div',{className : "myclass"},
// React.createElement('h1',null,'My final content 1 witouth jsx'),
// React.createElement('h2',null, 'My second final content')
// )

// ReactDOM.render(mycont,document.getElementById('root'))

class Employee extends React.Component{

  constructor(props){
    super(props);
    this.state = {sale : 0}
  }
  onUpdateSalary= (sal) => {
    this.setState({sale: sal});
  }

  render(){
    return <div>
    <p>
      <label>Employee Name: <b>{this.props.name}</b></label>
    </p>
    <p>
      <label>Employee Id: <b>{this.props.id}</b></label>
    </p>
    <p>
      <label>Employee Location: <b>{this.props.location}</b></label>
    </p>
    <p>
      <label>Employee Salary: <b>{this.props.salary}</b></label>
    </p>
     <p>
      <label>Employee Total Salary: <b>{this.state.sale}</b></label>
    </p>
    <Salary HRA={this.props.HRA} DA={this.props.DA} LTA={this.props.LTA} updatedSalary={this.onUpdateSalary}></Salary>
    </div>;
  }
}

class Salary extends React.Component{
  
    state={
      HRA : this.props.HRA,
      DA : this.props.DA,
      LTA : this.props.LTA
    };
  
    onBtnClk=()=>{
      var sal = parseInt(this.refs.hra.value)+ parseInt(this.refs.da.value)+parseInt(this.refs.lta.value);
      this.props.updatedSalary(sal);
    }

  render(){
    return <div>
  <p>
    <label>HRA: <input type="text" ref="hra" defaultValue={this.state.HRA}/></label>
  </p>
  <p>
    <label>DA: <input type="text"  ref="da" defaultValue={this.state.DA}/></label>
  </p>
  <p>
    <label>LTA: <input type="text" ref="lta" defaultValue={this.state.LTA}/></label>
  </p>
  <button onClick={this.onBtnClk}>Click</button>
  </div>;

  }
}

const content= <Employee name="Zalak" id='1' location="paris" salary="1 crore" HRA="50000" DA="10000" LTA="10000"></Employee>;



ReactDOM.render(content, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
