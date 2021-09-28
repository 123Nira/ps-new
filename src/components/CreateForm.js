import React, { Component } from 'react'
import "./CreateForm.css"

export default class CreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          orders: [],
          orderId: 0,
          orderName: '',
          customerName: '',
          price: ''
    
        }
      }
handleSubmit=()=>{
  alert("Order has successfully placed")
}


    render() {
        return (
            <div className="conatiner">
                <form onSubmit={(e) => this.submit(e, this.state.orderId)} className="forms">
                  <div className="ordername">
                     <label>orderName</label>
                     <input type="text" value={this.state.orderName} 
                       onChange={(e) => this.setState({ orderName: e.target.value })} />
                  </div>
                  <div className="customername">
                      <label >customerName</label>
                      <input type="text" value={this.state.customerName} 
                       onChange={(e) => this.setState({ customerName: e.target.value })} />
                  </div>
                  <div className="price">
                    <label >price</label>
                    <input type="number" value={this.state.price}
                     onChange={(e) => this.setState({ price: e.target.value })} />
                  </div>
                     <button type="submit" name="action" className="submitbutton"
                     onClick={this.handleSubmit}>Submit</button>
                </form>
              </div>
        )
    }
}
