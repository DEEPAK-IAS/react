import Content from './Content';
import Button from './Button';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  const API_URL = "https://jsonplaceholder.typicode.com";

  const [reqState, setReqState] = useState("users")
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const reqUrl = `${API_URL}/${reqState}`
        const res = await fetch(reqUrl);
        if(!res.ok) throw Error("Data not received")
        const listItems = await res.json();
        setItems(listItems);
      } catch(err) {
        console.log(err)
      } finally { }
    }
    fetchItems()
  }, [reqState])



  return (
    <div className="App">
      <Button 
        buttonText = "users"
        reqState = {reqState}
        setReqState = {setReqState}

      />
      <Button 
        buttonText = "posts"
        reqState = {reqState}
        setReqState = {setReqState}
      />
      <Button 
        buttonText = "comments"
        reqState = {reqState}
        setReqState = {setReqState}
      />
      <Content 
        items = {items}
      />
    </div>
  );
}

export default App;
