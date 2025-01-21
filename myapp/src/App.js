import Header from './Header';
import Content from './Content';
import Footer from "./Footer"
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import { useState } from 'react';

function App() {


  const [items, setItems] = useState(JSON.parse(localStorage.getItem("todo_list")))
  
  
  const handleCheck = (id) => {
    const listItem = items.map((item) => item.id === id ? {...item,checked: !item.checked} : item)
    setItems(listItem)
    localStorage.setItem("todo_list", JSON.stringify(listItem))
  }
  
  const handleDelete = (id) => {
    const updatedItem = items.filter((item) => item.id !== id);
    setItems(updatedItem)
    localStorage.setItem("todo_list", JSON.stringify(updatedItem))
  }


  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');


  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = {id, checked: false, item};
    const listItems = [...items, addNewItem]
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems))
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return
    addItem(newItem);
    setNewItem('')

  }
  

  return (
    <div className="App">
      <Header title = "To Do List"/>
      <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <SearchItem
        search = {search}
        setSearch = {setSearch}

      />
      <Content 
        items = {items.filter(item => ((item.item).toLowerCase().includes(search)))}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      />
      <Footer length = {items.length}/>
    </div>
  );
}

export default App;
