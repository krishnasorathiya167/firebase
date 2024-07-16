import { useEffect, useRef, useState } from "react";
import { addItems, getAllData } from "./component/Function";

function App() {
  
  const [product, setproduct] = useState([])
  useEffect(() => {

    let fatchData = async () => {
      let res = await getAllData();
      setproduct(res)
      console.log(res);
    }
    fatchData()


  }, [])
  let name = useRef();
  let price = useRef();

  let submit = async () => {
    let data = {
      name: name.current.value,
      price: price.current.value,
    }

    let res = await addItems(data)
    
    let postProduct= await getAllData()
    setproduct(postProduct)
  }

let remove=(product)=>{
console.log(product);
}

  return (
    <>

      <input type="text" name="name" ref={name} />
      <input type="text" name="price" ref={price} />
      <button onClick={submit} >submit</button>

      <table border="1px" cellPadding="10px" >
        <thead>
          <tr>
            <th>name</th>
            <th>price</th>
            <th>remove</th>
          </tr>
        </thead>
        <tbody>
          {
            product?.map((val, index) => (
              <tr key={index}>
                <td>{val.name}</td>
                <td>{val.price}</td>
                <td><button  onClick={()=>remove(val)}>remove</button> </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
}

export default App;