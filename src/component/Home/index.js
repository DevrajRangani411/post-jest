import React, { Component } from "react";
import { connect } from "react-redux";
import {getData} from "../../actions/index" 


class Home extends Component {

   state= {
     data:null,
    email:"",
    name:"",
    id:""
   }
    
    componentWillMount(){
      this.props.getData(); 
    }

    componentDidUpdate(){
   
      if(this.state.data == null){
        this.setState({
          data:this.props.data
        })
      }
    }



  handleDelete = (res) =>{
    var data_filter = this.state.data.filter( element => element.id != res.id)
    this.setState({
      data:data_filter
    })
  }

  handleEdit = (res) =>{
    console.log("Edit",res)
    this.setState({
      email: res.email,
      name:res.name,
      id:res.id
    })
    
  }

  handleName = (e) =>{
    this.setState({
      name:e.target.value
    })
   
  }

  handleEmail = (e) =>{   
      
    
    this.setState({
      email:e.target.value
    })
    
    
  }

  handleSave = (e) =>{
    e.preventDefault();
    
    this.setState(prevState => ({

      data: prevState.data.map(
        el => el.id === this.state.id? { ...el, email: this.state.email, name:this.state.name}: el
      )
    
    }))

  }

  
    
  render() {

    const data = this.state.data;
    console.log("HOME",data);
    return (
    
      <div >
        <br></br>
        <div className="container" data-test="home">
          <div className="row">
              <h2 data-test='heading'>{this.props.heading}</h2>
            <div className="col-6">
              <form data-test='form'>
              
                <div className="form-group">
                  <label >Name</label>
                  <input
                    type="text"
                    value={this.state.name}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={(e)=>this.handleName(e)}
                  />
                 
                </div>
                <div className="form-group">
                  <label >Email address</label>
                  <input
                    type="email"
                    value={this.state.email}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={(e)=>this.handleEmail(e)}
                  />
                   
                 
                </div>
                
      
                <button type="submit" className="btn btn-primary" onClick={(e)=>this.handleSave(e)}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>

        <div className="row">
            <div className="col-9">
            <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    { data ? (data.map(res=>{
      return(
        <tr key={res.id}>
      <th scope="row">{res.id}</th>
      <td>{res.name}</td>
      <td>{res.email}</td>
      <td><button className="btn btn-success" onClick={()=>{this.handleEdit(res)}}>Edit</button></td>
      <td><button className="btn btn-danger" onClick={()=>{this.handleDelete(res)}}>Delete</button></td>
    </tr>
      )
    })) : null }
  </tbody>
</table>
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    data: state.getDataReducer.data
})




const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(getData())
})
   

export default connect(mapStateToProps, mapDispatchToProps)(Home);
