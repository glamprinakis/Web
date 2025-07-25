import React, { useState } from "react";
import Breadcrumb from "../components/BreadCrumb";

import '../assets/styles/Product.css';

function Product(){

    const [num, setNum] = useState(0);
    const CounterI = () => {
        setNum (num+1);   
    }
    const CounterD = () => {
        if(num > 0)
            setNum (num-1);
    }
    return(
        <div className="product">
            <Breadcrumb items={[{"path":"/categories", "label":"Κατηγορίες"}, {"path":"/categories/laptops", "label":"Laptops"}, {"path":"#","label":"Macbook Air M2"}]}></Breadcrumb>
            <div className="mt-4 d-flex ms-auto me-auto product-container">
                <div className="left h-100 d-flex justify-content-end">
                    <div className="product-card d-flex justify-content-center align-items-center border border-3">
                        <img alt="" src="https://static0.xdaimages.com/wordpress/wp-content/uploads/2023/02/macbook-air-m2-1.png"></img>
                    </div>
                </div>
                <div className="right h-100">
                    <div className="fs-3 fw-bold ms-5 product-title">
                        Apple MacBook Air 15" (2023) 15.3" Retina Display (M2-8‑core/8GB/512GB SSD) Midnight (International English Keyboard)
                    </div>
                    <div className="ms-5 mt-3 product-rating fs-5 d-flex border border-2 justify-content-center">
                        <div className="fw-bold">Βαθμολογία</div>
                        <i className="text-warning ms-2 bi bi-star-fill me-2"></i>
                        <div className="fw-bold me-2">: </div>5
                    </div>
                    <div className="ms-5 mt-2 fs-2 text-success product-price fw-bold">
                        1.788,02€
                    </div>
                    <div className="ms-5 mt-2 product-description">
                    Σχεδίαση
Ακόμη πιο ελαφρύ.
Ανασχεδιασμένο με βάση το πιο σύγχρονο M2 chip, το MacBook Air είναι εντυπωσιακά λεπτό, έχει ανθεκτικό περίβλημα αποκλειστικά από αλουμίνιο και προσφέρει εξαιρετική ταχύτητα και ενεργειακή αποδοτικότητα. Είναι ένα ταχύτατο laptop με εξαιρετικές δυνατότητες, που σου επιτρέπει να εργάζεσαι, να παίζεις και να δημιουργείς οτιδήποτε θέλεις, όπου κι αν βρίσκεσαι.
                    </div>
                    <div className="mt-3 fs-5 ms-5 product-stock d-flex align-items-center justify-content-center border border-2">
                        <div className="fw-bold">Απόθεμα</div>
                        <i className="ms-2 bi bi-box-seam-fill me-2" style={{color : '#CD9F61'}}></i><div className="fw-bold me-3">:</div>2
                    </div>
                    <div className="fw-bold ms-5 mt-3 fs-5">
                        Ποσότητα
                    </div>
                    <div className="mt-1 ms-5 product-amount d-flex">
                        <button onClick={CounterD} className="btn fs-3 bg-light text-dark me-2 d-flex align-items-center justify-content-center">
                            -
                        </button>
                        <div className="value bg-light text-dark d-flex align-items-center justify-content-center fw-bold">{num}</div>
                        <button onClick={CounterI} className="btn fs-3 bg-light text-dark ms-2 d-flex align-items-center justify-content-center">
                            +
                        </button>
                    </div>
                    <div className="product-buttons ms-5 mt-3 d-flex">
                        <button className="product-buy btn btn-success fw-bold d-flex align-items-center justify-content-center">
                            <i className="bi bi-cash me-2 fs-4"></i> Αγορά
                        </button>
                        <button className="ms-3 product-add-to-cart btn btn-secondary fw-bold d-flex align-items-center justify-content-center">
                            <i className="bi bi-cart-plus-fill fs-4 me-2"></i> Προσθήκη στο καλάθι
                        </button>
                    </div>
                    <div className="ms-5 fst-italic mt-4 product-utils d-flex flex-column">
                        <span>Κωδικός προιόντος: 1223</span>
                        <span>κατηγορία: Ρολόι, Οθόνη Αφής</span>
                    </div>
                </div>
            </div>
            <div className="mt-5 product-options ms-auto me-auto d-flex justify-content-center align-items-center">
                <div className="me-5 text-success fw-bold">ΠΕΡΙΓΡΑΦΗ</div>
                <div className="me-5">ΕΠΙΠΛΕΟΝ ΠΛΗΡΟΦΟΡΙΕΣ</div>
                <div className="">ΑΞΙΟΛΟΓΗΣΕΙΣ (2)</div>
            </div>
            <div className="product-separator mt-3 ms-auto me-auto border-bottom border-2"></div>
            <div className="product-options ms-auto me-auto mt-3 mb-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. In ipsam ex commodi cum voluptates eveniet hic a sed perspiciatis sit labore error culpa nostrum autem, facere rem dolores, eius fugit?
            </div>
            <div className="mt-2 product-separator ms-auto me-auto border-bottom border-2"></div>    

            <div className="mt-5 similar-products-container ms-auto me-auto" style={{marginBottom:'6rem'}}>
                <div className="fs-5">ΣΧΕΤΙΚΑ ΠΡΟΪΟΝΤΑ</div>
                <div className="similar-products-grid d-flex flex-row justify-content-between align-items-center">
                    <div className="similar-products-card d-flex align-items-center justify-content-center flex-column">
                        <img alt="" src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9530/media-gallery/touch-black/notebook-xps-15-9530-t-black-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=654&qlt=100,1&resMode=sharp2&size=654,402&chrss=full"></img>
                        <span>Dell XPS 15</span>
                    </div>
                    <div className="similar-products-card d-flex align-items-center justify-content-center flex-column">
                        <img alt="" src="https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8ODQ4NDd8aW1hZ2UvcG5nfGgyMi9oOGYvMTA2NzQ1ODc3Mjk5NTAucG5nfDQzODYxOTc5ODA0MWJhZTQyYThjOTAzZjE0NDI2NWVjYjY5MjE3MGFiMWEzODhlN2UyMGUwNGZhMWRmOTJmNzg/lenovo-laptop-thinkpad-x1-carbon-gen8-subseries-hero.png"></img>
                        <span>Lenovo Thinkpad X1 Carbon</span>
                    </div>
                    <div className="similar-products-card d-flex align-items-center justify-content-center flex-column">
                        <img alt="" src="https://custombeastbuilder.com/wp-content/uploads/2023/06/My-project-19.png"></img>
                        <span>Asus ROG Zephyrus G14</span>
                    </div>
                    <div className="similar-products-card d-flex align-items-center justify-content-center flex-column">
                        <img alt="" src="https://www.omen.com/content/dam/sites/omen/worldwide/laptops/omen-15-laptop/2-0/starmade-15-50-w-numpad-4-zone-oled-shadow-black-nt-h-dcam-non-odd-non-fpr-freedos-core-set-front-right-copy.png"></img>
                        <span>HP Omen 15</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;