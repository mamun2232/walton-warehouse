import Loading from "../Utilitis/Loading/Loading"

const { useState, useEffect } = require("react")

const useProduct = () =>{
      const [products , setProduct] = useState([])
      useEffect(()=>{
            fetch('https://secret-hamlet-95232.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(error =>{
                  return <Loading></Loading>
            })
      },[])

      return [products , setProduct]
}
export default useProduct