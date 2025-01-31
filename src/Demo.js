import {   useReducer } from "react"
export default function Demo(){
    const transcationReducer=(balance,action)=>{
            switch(action.type)
            {
                case 'WITHDRAW': 
                    return balance - action.payload
                case 'DEPOSIT': 
                    return balance + action.payload
                default:
                        console.log('Default case');
                     
            }

    }

    const withdraw=(amount)=>{
        dispatch({type:'WITHDRAW',payload:amount})
    }
    const deposit=(amount)=>{
        dispatch({type:'DEPOSIT',payload:amount})
    }
     const[balance,dispatch]= useReducer(transcationReducer,1000)
    return(
        <>
        <h1>the balance val is {balance}</h1>
         
        <button onClick={()=>{withdraw(500)}}>Withdraw</button>
        <button onClick={()=>{deposit(1000)}}>Deposit</button>

      
       
        </>


    )
}