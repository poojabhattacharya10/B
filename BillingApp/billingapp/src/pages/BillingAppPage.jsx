import { useState } from "react"
import { Form } from "../components/Form"
import List from "../components/List"
import { Text } from "../widgets/Text"
import { ProductContext } from "../context/product-context"

export const BillingAppPage = ()=>{
    const [products, setProducts] =  useState([]);
    const [product, setProduct] = useState(null);
    const isMarking = ()=>{
        setProducts([...products]); // old state, new state
    }
    const getMarkedCount =()=>
        products.filter(product=>product.isMarked).length;
    
    const collectData = (product)=>{
        const clone = [...products];
        clone.push(product);
        setProducts(clone);
        //console.log('Product data ', product);
    }
    const deleteForever = ()=>{
        setProducts(products.filter(product=>!product.isMarked))
    }
    const getProduct = (product)=>{
        setProduct(product);
        console.log('Current Product for Edit ', product);
    }
    const compute = ()=>
        products.reduce((sum, currentProduct)=>sum + (currentProduct.price * currentProduct.quantity),0);
    
    return(
        <div className="container">
            <ProductContext.Provider value={{products:products, changeProducts:deleteForever, total:0, mark:0, getProduct:getProduct, currentProduct:product}}>
            <Form deleteRecords = {deleteForever} collectdata = {collectData} markCount={getMarkedCount()}/>
            <br/>
            <Text msg="Total Records" val={products.length}/>
            <Text msg="Mark Records" val={getMarkedCount()}/>
            <List products={products} isMarking={isMarking}/>
            <Text msg="Grand Total" val={compute()}/>
            </ProductContext.Provider>
        </div>
    )
}