import { useState } from "react";


export function DynamicForm (){

    const [allValue, setValue] =  useState ([{
        username : '', age:'', gender:'', job:''
    }])
    
    const handleUpdateValues = (element:any, index:number) => {
        const updateValues:any = [...allValue]
        updateValues[index][element.target.name] = element.target.value
        setValue(updateValues)
    }

    const handleSubmit = (e:any) =>{
       e.preventDefault()
       console.log(allValue);
    }


    const handlePage = () =>{
        const values = [...allValue]
        values.push({
            username:'',
            age : '',
            gender:'',
            job: ''
        })
        setValue(values)
    }

    return(
        <div>
            {allValue.length>0 && 
             allValue.map((value,index)=>{
                return(
                <form  key={index} onSubmit={handleSubmit} >                    
                        <input 
                        name="username"
                        placeholder="username"
                        value={value.username}
                        onChange={ (element)=> handleUpdateValues(element,index) }
                        />
                        <input
                        name="age"
                        placeholder="age"
                        value={value.age}
                        onChange={ (element)=> handleUpdateValues(element,index) }
                        />
                        <input 
                        name="gender"
                        placeholder="gender"
                        value={value.gender}
                        onChange={ (element)=> handleUpdateValues(element,index) }
                        />
                        <input 
                        name="job"
                        placeholder="job"
                        value={value.job}
                        onChange={ (element)=> handleUpdateValues(element,index) }
                        />
                    
                    <button >save</button>
                </form>
                )}
                )}
            <button onClick={()=>handlePage()}>Next</button>
        </div>
    )
}