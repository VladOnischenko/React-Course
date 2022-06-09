import React, {useEffect, useState} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import config from "./config/config"
import Items from "./components/Items";
import Categories from "./components/Categories";
import categories from "./config/categories";
import ShowFullItem from "./components/ShowFullItem";

const App = () => {
  const [orders, setOrders] = useState([])
  const [currentItems, setCurrentItems] = useState([])
  const [showFullItem, setShowFullItem] = useState(false)
  const [fullItem, setFullItem] = useState({})

  useEffect(() => {
    setCurrentItems([...config])
  },[])

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
  const chooseCategory = (category) => {
    if(category === "all"){
     return setCurrentItems([...config])
    }
    const filteredItems = config.filter( el => el.category === category)
    setCurrentItems([...filteredItems])
  }
  const onShowItem = (item) => {
    setFullItem({...item})
    setShowFullItem(!showFullItem)

  }

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder}/>
      <Categories categories={categories} chooseCategory={chooseCategory}/>
      <Items onShowItem={onShowItem} items={currentItems} onAdd={addToOrder}/>

      {showFullItem && <ShowFullItem onShowItem={onShowItem} item={fullItem} onAdd={addToOrder}/>}
      <Footer />
    </div>
  );
};

export default App;