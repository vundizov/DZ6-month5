
import {useDispatch, useSelector} from "react-redux";
import {addProduct} from "../store/productsInBasketSlice.js";

const Products = () => {
    const dispatch = useDispatch()
    const product = useSelector(state => state.product.products)
    const {productsAmount} = useSelector(state => state.productsInBasketReducer)


    console.log(productsAmount)

    const buyClick = (item) => {
        dispatch(addProduct(item))
    }
    return (
        <div>
            {product.map((i)=> (
                <div key={i._id}>
                    {i.name}
                    <br/>
                    <button onClick={()=>buyClick(i)}>BUY</button>
                </div>
            ))}
        </div>
    );
};

export default Products;