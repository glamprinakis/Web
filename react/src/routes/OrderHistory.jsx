import React, { useState } from "react";
import Navbar from "../components/Navbar";
import BreadCrumb from '../components/BreadCrumb';
import Footer from '../components/Footer';
import TableRow from '../laz/components/Cart/TableRow'
import '../laz/laz.css'
import '../laz/pages/Cart.css'
import { products_cart } from '../laz/dummys/cart'

import '../assets/styles/OrderHistory.css';

const styles = {
    checkoutSection: {
        boxShadow: '3px 3px 3px 0px rgba(0, 0, 0, 0.05)', borderRadius: '10px', background: '#F8F8F8',
        padding: '20px', margin: '2rem'
    },
    inputDefault: {
        height: '49px', padding: '20px 10px', flexWrap: 'wrap',
        border: '1px solid #D9D9D9'
    },
    inputLabel: { display: 'flex', flexDirection: 'row', gap: '1rem', flexWrap: 'wrap', justifyContent: 'space-evenly', paddingBottom: '0.8rem' },
    classLabel: { paddingBottom: '0.4rem' },
    textStyle: { color: '#3A3A3A', fontSize: '16px', fontStyle: 'normal', lineHeight: '22.08px', letterSpacing: '0.48px' },
    productsLayout: {
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', alignContent: 'flex-start',
        rowGap: '10px', flexWrap: 'wrap'
    }
}

function OrderHistory() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    const handleChangeName = (event) => {
        setFirstName(event.target.value);
    };
    const handleChangeSurname = (event) => {
        setLastName(event.target.value);
    };
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleChangePassword2 = (event) => {
        setPassword2(event.target.value);
    };
    const handleRegister = async () => {
        console.log(firstName + lastName + email)
    }

    return (
        <div className="login">
            <BreadCrumb
                items={[{ "path": "/order-history", "label": "Παραγγελίες" }]}>
            </BreadCrumb>

            <br></br><br></br>

            <div className="page-title text-center">
                <h4><b><u>ΙΣΤΟΡΙΚΟ ΠΑΡΑΓΓΕΛΙΩΝ</u></b></h4>
            </div>

            <br></br>

            <div className="pending-order cart-section container">

                <div className="cart-up">

                    <div className="screen">
                        <table>
                            <tbody>
                                <tr className="headers">
                                    <th><b>ΑΡΙΘΜΟΣ ΠΑΡΑΓΓΕΛΙΑΣ</b></th>
                                    <th><b>ΗΜΕΡΟΜΗΝΙΑ</b></th>
                                    <th><b>ΚΑΤΑΣΤΑΣΗ</b></th>
                                    <th><b>ΠΟΣΟ ΠΛΗΡΩΜΗΣ</b></th>
                                </tr>

                                <tr>
                                    <th>456456456</th>
                                    <th>23/10/2023</th>
                                    <th>ΣΤΗ ΜΕΤΑΦΟΡΙΚΗ</th>
                                    <th>2885.00€</th>
                                </tr>
                            </tbody>
                        </table>
                        <br></br>
                        <div className="text-center">
                            <h5><b>ΠΛΗΡΟΦΟΡΙΕΣ ΠΑΡΑΓΓΕΛΙΑΣ</b></h5>
                        </div>
                        <br></br>

                        {
                            products_cart.products.map((product) => {
                                return <TableRow
                                    key={product.id}
                                    name={product.name}
                                    price={product.price}
                                    quantity={product.quantity}
                                    product_image={product.img}
                                />
                            })
                        }
                    </div>
                </div>

            </div>

            <br></br>

            <div className="delivered-order cart-section container">

                <div className="cart-up">

                    <div className="screen">
                        <table>
                            <tbody>
                                <tr className="headers">
                                    <th><b>ΑΡΙΘΜΟΣ ΠΑΡΑΓΓΕΛΙΑΣ</b></th>
                                    <th><b>ΗΜΕΡΟΜΗΝΙΑ</b></th>
                                    <th><b>ΚΑΤΑΣΤΑΣΗ</b></th>
                                    <th><b>ΠΟΣΟ ΠΛΗΡΩΜΗΣ</b></th>
                                </tr>

                                <tr>
                                    <th>456456456</th>
                                    <th>23/10/2023</th>
                                    <th>ΠΑΡΑΔΟΘΗΚΕ</th>
                                    <th>2885.00€</th>
                                </tr>
                            </tbody>
                        </table>
                        <br></br>
                        <div className="text-center">
                            <h5><b>ΠΛΗΡΟΦΟΡΙΕΣ ΠΑΡΑΓΓΕΛΙΑΣ</b></h5>
                        </div>
                        <br></br>

                        {
                            products_cart.products.map((product) => {
                                return <TableRow
                                    key={product.id}
                                    name={product.name}
                                    price={product.price}
                                    quantity={product.quantity}
                                    product_image={product.img}
                                />
                            })
                        }
                    </div>
                </div>


            </div>

            <br></br>

            <div className="cancelled-order cart-section container">

                <div className="cart-up">

                    <div className="screen">
                        <table>
                            <tbody>
                                <tr className="headers">
                                    <th><b>ΑΡΙΘΜΟΣ ΠΑΡΑΓΓΕΛΙΑΣ</b></th>
                                    <th><b>ΗΜΕΡΟΜΗΝΙΑ</b></th>
                                    <th><b>ΚΑΤΑΣΤΑΣΗ</b></th>
                                    <th><b>ΠΟΣΟ ΠΛΗΡΩΜΗΣ</b></th>
                                </tr>

                                <tr>
                                    <th>456456456</th>
                                    <th>23/10/2023</th>
                                    <th>ΑΚΥΡΩΘΗΚΕ</th>
                                    <th>2885.00€</th>
                                </tr>
                            </tbody>
                        </table>
                        <br></br>
                        <div className="text-center">
                            <h5><b>ΠΛΗΡΟΦΟΡΙΕΣ ΠΑΡΑΓΓΕΛΙΑΣ</b></h5>
                        </div>
                        <br></br>

                        <tr>
                            {
                                products_cart.products.map((product) => {
                                    return <TableRow
                                        key={product.id}
                                        name={product.name}
                                        price={product.price}
                                        quantity={product.quantity}
                                        product_image={product.img}
                                    />
                                })
                            }
                        </tr>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default OrderHistory;