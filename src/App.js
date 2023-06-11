import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'
import Task from './components/task';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  let [toDos, setToDos] = useState([])
  let [addTask, updateAddTask] = useState("")
  let [text,settext] = useState("")
  const [showInputEle, setShowInputEle] = useState(false);
  function getAllToDos(){
    axios.get('http://localhost:4000/api/v1/tasks/all').then(function (response) {
      // console.log(response.data.tasks)
    setToDos(response.data.tasks)
  });
  }


  function createToDo(addTask){
    if(addTask){
    axios.post('http://localhost:4000/api/v1/tasks/new',{
      name:addTask,
      status:false
    }).then(function (response) {
    updateAddTask("")
    getAllToDos();
  })
  .catch(function (error) {
    console.log(error);
  });
  }}

  function deleteToDo(id){
    console.log(id)
    axios.delete('http://localhost:4000/api/v1/tasks/delete/' + id).then(function (response) {
    // console.log(response);
    getAllToDos();
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  function updateToDo(id,updated){
    if(updated.name !== ""){
    console.log(updated)
    axios.put('http://localhost:4000/api/v1/tasks/update/' + id,updated).then(function (response) {
    getAllToDos();})
  .catch(function (error) {
    console.log(error);
  });}
  }

  useEffect(() => {getAllToDos()},[])

  return (
    <div className="App">
       
      <div className='Todos col-lg-4 p-5 border rounded ms-5'>
        <h2 className='Todoheading text-center'>トゥードゥーリスト</h2>
        <div className='mx-auto text-center mt-4'>
          <input className='addToDo' onfocus="this.value=''" type="text" value={addTask} name="" placeholder='Add ToDo' onChange={(e)=>{updateAddTask(e.target.value)}}></input>
          <button className='addToDo' type= "button" onClick={()=>createToDo(addTask)}>Add</button>
        </div>
        <div className='list text-center'>
        {toDos.map((item) => <Task key = {item._id} data = {item} delete = {deleteToDo} update = {updateToDo} />)}  
           
      </div>
      </div>
    </div>
  );
}

export default App;
