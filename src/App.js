
import axios from 'axios';
import React from 'react';
import { Route, Switch } from 'react-router';
import Header from './components/Header';
import Home from './components/Home';
import CreateForm from './components/CreateForm';
import CreateList from './components/CreateList'
//import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      orderId: 0,
      orderName: '',
      customerName: '',
      price: '',
      desktop: 1200,
      tablet: 768,
      phone: 576,

    }
    this.state = {
      windowWidth: null
    };
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
     <div>
       <Header />
       <Switch>
         <Route exact path='/'><Home /></Route>
         <Route  path='/createorder'><CreateForm /></Route>
         <Route  path='/orderlist'><CreateList /></Route>
       </Switch>
     </div>
    );
  }
}

export default App;
