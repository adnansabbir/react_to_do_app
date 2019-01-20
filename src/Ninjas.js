import React from 'react';

const Ninjas = ({ninjas}) =>{
        const ninjalist = ninjas.map(ninja=>{
            
            // By if condition
            // if(ninja.age>20){
            //     return(
            //         <div className='ninja' key={ninja.id}>
            //             <div>Name: {ninja.name}</div>
            //             <div>Age: {ninja.age}</div>
            //             <div>Belt: {ninja.belt}</div>
            //             <br/>
            //         </div>
            //     )
            // }else
            //     return null

            // Using ternary operator
            return ninja.age>20 ? (
                <div className='ninja' key={ninja.id}>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Belt: {ninja.belt}</div>
                    <br/>
                </div>
            ) : null;
        })
        return(
            <div className="ninja">
                {ninjalist}
            </div> 
        )
}

export default Ninjas