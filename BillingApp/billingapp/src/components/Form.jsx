import { useContext, useRef } from "react"
import { Button } from "../widgets/Button"
import { Text } from "../widgets/Text"
import { TextField } from "../widgets/TextField"
import { ProductContext } from "../context/product-context"



export const Form =({collectdata, markCount, deleteRecords})=>{
    const name = useRef();
    const price = useRef();
    const quantity = useRef();
    const pcontext = useContext(ProductContext);
    const add = ()=>{
        const product = {
            "name":name.current.value,
            "price":price.current.value,
            "quantity":quantity.current.value,
            "isMarked":false
        }
        collectdata(product);
        console.log('Add Call ', product);
    }
    return (
        <div>
        <Text msg="Billing App"/>
        <TextField val={pcontext.currentProduct?.name} inputref={name} lbl="Name"/>
        <TextField val={pcontext.currentProduct?.price} inputref={price} lbl="Price"/>
        <TextField val={pcontext.currentProduct?.quantity} inputref={quantity} lbl="Quantity"/>
        <br/>
        <Button fn={add} val="Add"/>
        <Button fn={pcontext.changeProducts} val="Delete" disable={markCount === 0}/>
        {/* <ProductContext.Consumer>
            {(value)=>{
                return (<Button fn={value.changeProducts} val="Delete" disable={markCount === 0}/>)
            }}
        </ProductContext.Consumer> */}
        </div>
    )
    
}