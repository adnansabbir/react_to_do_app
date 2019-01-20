import React, {Component} from 'react'

class AddNinjas extends Component{
    state = {
        name:null,
        age:null,
        belt:null
    }

    handleChanges=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        });
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addNinja(this.state)
    }

    render(){
        return(
            <div className="AddNinjas">
                <h3>Add more Ninjas</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name" >Name: </label>
                    <input type="text" id="name" onChange={this.handleChanges}/>

                    <label htmlFor="age">Age: </label>
                    <input type="text" onChange={this.handleChanges} id="age"/>
                    
                    <label htmlFor="belt" >Belt: </label>
                    <input type="text" onChange={this.handleChanges} id="belt"/>

                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default AddNinjas

