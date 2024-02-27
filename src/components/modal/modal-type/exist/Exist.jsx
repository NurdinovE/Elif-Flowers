import React, {useEffect, useState} from 'react';
import cls from './exist.module.scss'
import ExistProduct from "./ExistProduct.jsx";

const Exist = ({product}) => {
    const [value, setValue] = useState('')
    const [items, setItems] = useState([])
    const [total, setTotal] = useState(0)
    const [quantities, setQuantities] = useState([]);
    console.log(quantities)
    // eslint-disable-next-line react-hooks/exhaustive-deps

    const updateTotal = () => {
        let newTotal = 0;
        product?.forEach((item, index) => {
            const quantity = quantities[index] || 1;
            newTotal += item.price * quantity;
        });
        setTotal(newTotal)
    };
    useEffect(() => {
        updateTotal();
    }, [quantities,product]);


    const createOrder = async (orderData) => {
        try {
            const headers = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            };

            const response = await fetch('http://159.89.29.185/api_order/v1/order/', headers);
            return await response.json()
        } catch (err) {
            console.error('Error creating order:', err);
            throw err; // Rethrow the error to handle it at a higher level
        }
    };

    const createOrderLines = async (orderId, cart) => {
        try {
            const orderLinesPromises = cart.map(async (item, index) => {
                const quantity = quantities[index] || 1;
                const orderLineData = {
                    order_id: orderId,
                    product_id: item.product_id,
                    quantity: quantity,
                };

                const headers = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(orderLineData),
                };

                const response = await fetch('http://159.89.29.185/api_order/v1/orderline/', headers);
                return await response.json()
            });

            return await Promise.all(orderLinesPromises);
        } catch (error) {
            console.error('Error creating order lines:', error);
            throw error; // Rethrow the error to handle it at a higher level
        }
    };

    const placeOrder = async (cart, phoneNumber) => {
        try {
            // Step 1: Create the order
            const orderData = {
                phone_number: phoneNumber,
                status: 'unpaid',
            };

            const order = await createOrder(orderData);
            console.log(order)

            // Step 2: Create order lines for each product in the cart
            const orderLines = await createOrderLines(order?.order_id, cart);

            console.log('Order:', order);
            console.log('Order Lines:', orderLines);

            // Optionally, you can update your component state or perform any other actions based on the response.
        } catch (error) {
            console.error('Error placing order:', error);
            // Handle the error at a higher level in your component.
        }
    };

    return (
        <div className={cls.exist}>
            <div className={cls.exist_head}>
                <div className={cls.row}>
                    <div className={cls.col}>Название</div>
                    <div className={cls.col}>Стоимость</div>
                    <div className={cls.col}>Количество</div>
                    <div className={cls.col}>Итого</div>
                </div>
            </div>
            <div className={cls.exist_body}>
                {product?.map((item, index) => (
                    <ExistProduct item={item} key={item.product_id || index} quantity={quantities[index] || 1}
                                  setQuantity={(newQuantity) => {
                                      const newQuantities = [...quantities];
                                      newQuantities[index] = newQuantity;
                                      setQuantities(newQuantities);
                                  }}/>
                ))}
            </div>

            <hr/>

            <div className={cls.exist_foot}>
                <div className={cls.row}>
                    <div>Сумма</div>
                    <div>{total} c</div>
                </div>
                {/*<div className={cls.row}>*/}
                {/*    <div style={{color: 'red'}}>SALE</div>*/}
                {/*    <div style={{color: 'red'}}>- 6000 c</div>*/}
                {/*</div>*/}
                <div className={cls.row}>
                    <div>Итого</div>
                    <div>{total} c</div>
                </div>
                <div className={cls.row}>
                    <input type="text"
                           defaultValue={'+996'}
                           onChange={(e) => {
                               setValue(e.target.value)
                           }}
                    />

                    <button onClick={() => placeOrder(product, value)} className={cls.modal_btn}>
                        Оформить заказ
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Exist;