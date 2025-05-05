import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
function Registration() {
const [input, setInput] = useState("");
const [image, setImages] = useState("");

  const handelInput = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInput(values=>({...values, [name]:value}))
    console.log(input);
  } 

  const HandelImage = (e)=>{
    setImages(e.target.files);
    console.log(image)
  }


   const HandeSubmit =async (e)=>{
    e.preventDefault();
    const formData = new FormData;
    for(let key in input){
        formData.append(key, input[key]);
    }
    for(let i = 0;i<=image.length; i++){
        formData.append("image", image[i]);

    }
  const api = "http://localhost:8000/data/insert";
    try {
        const response = await axios.post(api, formData);
        console.log(response.data);
        alert(response.data.msg);
    } catch (error) {
        console.log(error);
        
    }
    
   }

  return (
    <>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter name</Form.Label>
        <Form.Control type="text" name='name' value={input.name} onChange={handelInput}  />
      </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter brand</Form.Label>
        <Form.Control type="text" name='brand' value={input.brand} onChange={handelInput}  />
      </Form.Group>
        

     <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Price</Form.Label>
        <Form.Control type="text" name='price' value={input.price} onChange={handelInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Images</Form.Label>
        <Form.Control type="file"  multiple onChange={HandelImage}  />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={HandeSubmit}>
        Submit
      </Button>
    </Form>

    </>
  )
}

export default Registration