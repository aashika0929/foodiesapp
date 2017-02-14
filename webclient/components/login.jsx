var React = require('react');
var {browserHistory} = require('react-router');
import { Card, Icon, Image, Input, Button } from 'semantic-ui-react';

var style1 = {
 marginLeft: '38%',
 marginTop: '10%'

};
var style2 = {
 marginTop:'8%',
 marginLeft:'4%',
 color:'white'
};

class Login extends React.Component {
   constructor() {
       super();
       this.state={username:'',password:'', isLoggedIn:''};
   }

handleUserName(e)
{
this.setState({username:e.target.value});
}
handlePassword(e)
{
this.setState({password:e.target.value});
}
LoginUser(){

$.ajax({
  url:"/users/login",
  type: 'POST',
  datatype: 'JSON',
  data:{
    'username':this.state.username,
    'password':this.state.password
  },

  success: function(res){
    console.log(res.responseText);
    browserHistory.push('/home');
  }.bind(this),
  error: function(err){

    alert("Invalid username or password");
    console.log(err.responseText);
  }.bind(this)
});

}
render(){
  return(<div>

    <Card style={style1}>

       <Card.Content style={style2} >
              <Input  onChange={this.handleUserName.bind(this)}  placeholder="Enter User Name"  type="text" autoFocus  />
       </Card.Content>
       <Card.Content style={style2}>
              <Input onChange={this.handlePassword.bind(this)}  placeholder="Enter Password"  type="password" />
       </Card.Content>
       <Card.Content style={style2}>
         <Button size='large' color='teal' onClick={this.LoginUser.bind(this)} >Login</Button>
       </Card.Content>

   </Card>
 </div>);
}
}

module.exports=Login;
