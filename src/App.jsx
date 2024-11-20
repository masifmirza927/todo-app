import './App.css'
import { useState } from 'react';
import Listitem from './components/Listitem';

function App() {
  const [items, setItems] = useState(["apple", "cherry"]);
  const [name, setName] = useState("");
  const [editing, setEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  // remove/delete
  const deleteItem = (index) => {
    const newItems = items.filter((el, i) => i != index);
    setItems(newItems);
  }

  // add new item
  const addItem = () => {
    const newItemsAr = [...items, name];
    setItems(newItemsAr);
    setName("");
  }

  // edit item
  const editItem = (index) => {
    setName(items[index]);
    setEditing(true);
    setCurrentIndex(index);
  }

  // save editing item
  const updateItem = () => {
    const updatedItems = items.map((el, i) => (i == currentIndex) ? name : el);
    setItems(updatedItems);
    setName("");
    setEditing(false);
    setCurrentIndex(null);
  }

  //todo detech if editing mode is ON then updateItem will run otherwsie addItem will run
  const handleEntrePress =  (e) => {
      if(e.key == "Enter") {
        addItem();
      }
  }

  return (
    <div>
      <div className='d-flex gap-2 mb-3'>
        <input className='form-control' onKeyUp={handleEntrePress}  onChange={(e) => { setName(e.target.value) }} value={name} type='text' placeholder='New' />
        <button className='btn btn-sm btn-warning' onClick={(editing == true) ? updateItem : addItem}>
          {
            (editing == true) ? "Update" : "Add"
          }
        </button>
      </div>
      <table className="table table-bordered" style={{ width: "500px" }}>

        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map((item, i) => {
              return (
                <Listitem deleteItem={deleteItem} editItem={editItem} item={item} index={i} key={i} />
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default App
