import React from 'react'
import axios from 'axios'
import './Items.css'
import{useState , useEffect} from "react"


const Items = () => {
    const url= "https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products"
    let finData=[];
    const [data, setData] = useState([]);
    //     const getData= async()=>{
    //    const datas= await axios.get(`${url}`);
    //    setData(datas)
    //         }
    //         console.log(data)
    
    
    useEffect(() => {
        axios.get(`${url}`).then((res)=>{
            setData(res.data[0]);
        })
    }, []);
      return( <>

     
    <div className='items'>
        {

            data.slice(0,6).map((value)=>{
                return (<div className='item'>
                    <img src={value.image} className='item__img' alt="" />
                    <div className='item__name'>{value.product_name}</div>
                    <div className="item__price">{value.price} £</div>
                </div>)
            })
        }
        </div>
        <div className='item__btn'>
            Load More
        </div> 
</>
)
}

export default Items