
import axios from 'axios';
import React from 'react';
//import './App.css';

class App extends React.Component {
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
  componentDidMount() {
    axios.get("http://localhost:8080/orderapi/list-orders")
      .then((res) => {
        this.setState({
          orders: res.body,
          orderId: 0,
          orderName: '',
          customerName: '',
          price: ''

        })

      })
  }
  submit(event, orderId) {
    event.preventDefault();
    if (orderId === 0) {
      axios.post("http://localhost:8080/orderapi/create-order", {
        orderName: this.state.orderName,
        customerName: this.state.customerName,
        price: this.state.price

      }).then(() => {
        this.componentDidMount();
      })
    } else {
      axios.put("http://localhost:8080/orderapi/update-order", {
        orderId: this.state.orderId,
        orderName: this.state.orderName,
        customerName: this.state.customerName,
        price: this.state.price

      }).then(() => {
        this.componentDidMount();
      })
    }
  }
  delete(orderId) {
    axios.delete("http://localhost:8080/orderapi/delete-order" + orderId)
      .then(() => {
        this.componentDidMount();
      })
  }



  render() {
    return (
      <div className="conatiner">
        <div className="row">
          <div className="col s6">
            <form onSubmit={(e) => this.submit(e, this.state.orderId)}>

              <div className="input-field col s12">
                <i className="material-icons prefix">textsms</i>
                <input type="text" value={this.state.orderName} onChange={(e) => this.setState({ orderName: e.target.value })} />
                <label htmlFor="autocomplete-input">orderName</label>
              </div>
              <div className="input-field col s12">
                <input type="text" value={this.state.customerName} onChange={(e) => this.setState({ customerName: e.target.value })} />
                <label >customerName</label>
              </div>
              <div className="input-field col s12">
                <input type="text" value={this.state.price} onChange={(e) => this.setState({ price: e.target.value })} />
                <label >price</label>
              </div>
              <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                <i className="material-icons right">submit</i>
              </button>

            </form>

          </div>
          <div className="col s6">
            <table>
              <thead>
                <tr>
                  <th>Order Name</th>
                  <th>customer Name</th>
                  <th> Price</th>
                </tr>
              </thead>

              <tbody>
                {
                  
                }
              </tbody>
            </table>




          </div>
        </div>

      </div>
    );
  }
}

export default App;
