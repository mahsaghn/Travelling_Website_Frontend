import React from 'react'
import axios from 'axios' 
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class loginForm extends React.Component{
    constructor(){
      super();
      this.state={
        username:"",
        password:""
    };
      this.handleSubmit=this.handleSubmit.bind(this);
      this.updatePassword=this.updatePassword.bind(this);
      this.updateUsername=this.updateUsername.bind(this);
    }
    
    handleSubmit(e) {
      console.log("in handel submit")
      e.preventDefault();
          axios.post('http://localhost:8000/api/token/',{
          username:this.state.username,
          password:this.state.password
          }).then(json => {
        console.log("response")
         console.log(json.data)
         console.log("has token")
         localStorage.setItem("refresh", json.data.refresh);
         localStorage.setItem("access", json.data.access);
         console.log(localStorage.refresh)
         return window.location.replace('/dashboard')
      }).catch(error =>{
        alert("نام کاربری یا گذرواژه نادرست میباشد")
    });
  }


  updatePassword(e){
      this.setState({
          password: e.target.value
      });
  }
  updateUsername(e){
      console.log(e.target.value);
    this.setState({
        username: e.target.value
    });
}
 
    render(){
    return(
        <Form id="loginForm" onSubmit={this.handleSubmit}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label  id="login_label" className="mr-sm-2">نام کاربری</Label>
        <Input value={this.state.username} onChange={this.updateUsername} type="text" id="login_input" placeholder="نام کاربری خود را وارد کنید" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label id="login_label" className="mr-sm-2">گذرواژه</Label>
        <Input  value={this.state.password} onChange={this.updatePassword} type="password" id="login_input"  name="password" placeholder="گذرواژه خود را وارد کنید" />
      </FormGroup>
      <Button id="loginform_submit">ثبت</Button>
    </Form>
  
    );
}
}
export default loginForm;