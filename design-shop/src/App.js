import React, {useState} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import config from "./config/config"
import Items from "./components/Items";

const App = () => {
  const [orders, setOrders] = useState([])

  const addToOrder = (item) => {
    let isInOrders = false
    orders.forEach( el => {
      if(el.id === item.id) {
        isInOrders = true
      }
    })
    if(!isInOrders) {
      setOrders([...orders, item])
    }
  }

  const deleteOrder = (id) => {
    const filteredOrders = orders.filter(el => el.id !== id)
    setOrders([...filteredOrders])
  }

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder}/>
      <Items items={config} onAdd={addToOrder}/>
      <Footer />
    </div>
  );
};

export default App;