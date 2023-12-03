import { useContext } from 'react';
import './List.css';
import { ProductContext } from '../context/product-context';
const List = ({products, isMarking})=>{
    const context = useContext(ProductContext);
    //console.log('Products ', products);
    return(
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                    <th>AMOUNT</th>
                    <th>OPERATIONS</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index)=><tr className={product.isMarked?'table-danger':''} key={index}>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>{product.price * product.quantity}</td>
                    <td><i onClick={()=>{
                        context.getProduct(product);
                    }} className="fa-solid fa-edit fa-beat-fade hand"></i>
                        <i onClick={()=>{
                        product.isMarked = !product.isMarked;
                        isMarking();
                    }} className="fa-solid fa-trash fa-beat-fade hand"></i></td>
                </tr>)}
            </tbody>
        </table>
    )
}
export default List;