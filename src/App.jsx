
import { useState } from 'react';
import './App.css'
import { TextField,Button,Stack } from '@mui/material';

function App() {

    const [height , setHeight]=useState(0)
    const [weight , setWeight]=useState(0)
    const [status , setStatus]=useState(0)
    const [validHeight , setValidHeight]= useState(true)
    const [validWeight , setValidWeight]= useState(true)

    const validateInputs=(e)=>{
      const {name,value} = e.target

      if(!!value.match(/^[0-9]*.?[0-9]+$/)){
        if(name==='height'){
          setHeight(value)
          setValidHeight(true)
        }else{
          setWeight(value)
          setValidWeight(true)
        }
      }else{
        if(name==='height'){
          setHeight(value)
          setValidHeight(false)
        }else{
          setWeight(value)
          setValidWeight(false)
        }
      }
    }

    const handleReset = ()=>{
      setHeight(0)
      setWeight(0)
      setStatus(0)
      setValidWeight(true)
      setValidHeight(true)
    }

    const handleCalculate = (e)=>{
      e.preventDefault()
      if(!height || !weight){
        alert('Please Fill The Form Completely')
      }else{
        var value = parseInt(weight / (height / 100) ** 2);
        setStatus(value);
      }
    }

  return (
  <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
    <div style={{width:'600px'}} className='bg-light p-5 rounded '>
    <h3 style={{height:'30px'}}>BMI CALCULATOR</h3>
    <p>Calculate Your BMI</p>

    <div style={{width:'100%',height:'150px'}} className='d-flex justify-content-center align-items-center bg-success text-light shadow rounded flex-column'>
      <h1 style={{height:'60px'}}>{status}</h1>
      <p className="fw-bolder"></p>
    </div>
    <form className='mt-5' onSubmit={handleCalculate}>
      <div className="mb-3">
    <TextField style={{width:'100%'}} id="outlined-basic-height" label="Height" name='height' variant="outlined" value={height || ""} onChange={(e)=>validateInputs(e)}/>
    </div>
    { !validHeight && <div className="mb-3 text-danger fw-bold">
      <p>Invalid Height</p>
    </div>}
    <div className="mb-3">
    <TextField style={{width:'100%'}} id="outlined-basic-weigth" label="Weight" name='weight' variant="outlined" value={weight || ""} onChange={(e)=>validateInputs(e)} />
    </div>
    { !validWeight && <div className="mb-3 text-danger fw-bold">
      <p>Invalid Weight</p>
    </div>}
    <Stack direction={"row"} spacing={2}>
    <Button disabled={validHeight && validWeight?false:true} type='submit' style={{height:'50px',width:'50%'}} className='bg-success' variant="contained">CALCULATE</Button>
    <Button onClick={handleReset} style={{height:'50px',width:'50%'}} className='text-success' variant="outlined">RESET</Button>
    </Stack>
    </form>

    
    </div>
      
    </div>
  )
}

export default App
