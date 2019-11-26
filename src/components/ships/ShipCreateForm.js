import React, {Component} from 'react';
import Request from '../../helpers/request'

class ShipCreateForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: "",
    }

    this.handleName = this.handleName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleName(event){
    this.setState({name: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    const newShip = {
      name: this.state.name,
    }
    this.props.onFormSubmit(newShip);
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name" name="Name" onChange={this.handleName}/>
          <button type="submit" >Save</button>
        </form>
      </div>
    )
  }

}

export default ShipCreateForm;
