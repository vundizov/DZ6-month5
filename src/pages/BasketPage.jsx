import {useSelector} from "react-redux";

const BasketPage = () => {
     const basket = useSelector(state => state.productsInBasketReducer.products)
    return (
        <div>
            {basket.map((i)=>(
                <div key={i._id}>
                    <img src={i.picture} alt="img"/>
                    {i.name}
                </div>
            ))}

        </div>
    );
};

export default BasketPage;