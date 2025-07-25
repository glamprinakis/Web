import React, {useState, useEffect, useRef} from "react";
import {useParams, Link} from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb';

import Slider from '@mui/material/Slider';

import '../assets/styles/Category.css';

export default function Category(){
    let {categoryId} = useParams();
    const [value, setValue] = React.useState([0, 8000]);
    function valuetext() {
        return `${value}$`;
    }
    const handleChange = (event, newValue) => {
      setValue(newValue);
      filterPrice(newValue)
    };

    const [data, setData] = useState([]);
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);

    const filterPrice = async (newValue) => {
        let priceFiltered = data.filter(function (e){
            return e.price >= newValue[0] && e.price <= newValue[1]
        })
        setFiltered(priceFiltered)
    }

    const Apple = useRef(null);
    const Dell = useRef(null);
    const Lenovo = useRef(null);


    const filterProducts = async () => {
        let newArray = []
        let clicked = false
        if(Lenovo.current.checked){
            clicked=true
            let lenovos = data.filter(function (e) {
                return e.brand === "Lenovo";
            });
            newArray = [...newArray, ...lenovos]
        }
        if(Apple.current.checked){
            clicked=true
            let apples = data.filter(function (e) {
                return e.brand === "Apple";
            });
            newArray = [...newArray, ...apples]
        }
        if(Dell.current.checked){
            clicked=true
            let apples = data.filter(function (e) {
                return e.brand === "Dell";
            });
            newArray = [...newArray, ...apples]
        }
        if(!clicked){
            fetchData()
        }else{
            setFiltered(newArray)
        }
    }
  
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3005/products/laptops'); 
        const jsonData = await response.json();
        jsonData.sort((a, b) => a.price - b.price);
        setData(jsonData);
        setFiltered(jsonData)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    

    return(
        <div className="category-page w-100">
            <BreadCrumb 
                items={[{"path":"/categories","label":"Κατηγορίες"}, {"path":"/categories/laptops","label":"Laptops"}]}>
            </BreadCrumb>
            <div className="mt-3 w-100 d-flex align-items-center justify-content-center">
                <div className="category-search-bar d-flex border border border-secondary">
                    <input id="category-search" placeholder="Αναζητήστε με βάση όνομα προϊόντος, μάρκα ..." className="search-bar-text text-dark" type="text"></input>
                    <div className="text-light search-bar-btn d-flex align-items-center justify-content-center">
                        <i className="bi bi-search fs-5"></i>
                    </div>
                </div>
            </div>
        
            <div className="mt-5 category-container d-flex ms-auto me-auto">
                <div className="category-left-sidebar d-flex flex-column">
                    <div className="accordion">
                        
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#manufacturers" aria-expanded="true" aria-controls="manufacturers">
                                Κατασκευαστές
                            </button>
                            </h2>
                            <div id="manufacturers" className="accordion-collapse collapse show">
                                <div className="accordion-body">
                                    <div className="mt-1 w-100 d-flex justify-content-center">
                                        <input ref={Lenovo} onChange={filterProducts} id="lenovo" type="checkbox" name="lenovo"/>
                                        <label className="ms-3 fs-6 w-100 d-flex justify-content-between">Lenovo <span className="category-type-amount">100</span></label>
                                    </div>
                                    <div className="mt-1 w-100 d-flex justify-content-center">
                                        <input ref={Apple} onChange={filterProducts} id="apple" type="checkbox" name="apple"/>
                                        <label className="ms-3 fs-6 w-100 d-flex justify-content-between">Apple <span className="category-type-amount">4</span></label>
                                    </div>
                                    <div className="mt-1 w-100 d-flex justify-content-center">
                                        <input ref={Dell} onChange={filterProducts} id="dell" type="checkbox" name="dell"/>
                                        <label className="ms-3 fs-6 w-100 d-flex justify-content-between">Dell <span className="category-type-amount">56</span></label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ram" aria-expanded="true" aria-controls="ram">
                                Μνήμη RAM
                            </button>
                            </h2>
                            <div id="ram" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    <div className="mt-1 w-100 d-flex justify-content-center">
                                        <input id="8gb" type="checkbox" name="8gb"/>
                                        <label className="ms-3 fs-6 w-100 d-flex justify-content-between">8 GB <span className="category-type-amount">123</span></label>
                                    </div>
                                    <div className="mt-1 w-100 d-flex justify-content-center">
                                        <input id="16gb" type="checkbox" name="16gb"/>
                                        <label className="ms-3 fs-6 w-100 d-flex justify-content-between">16 GB <span className="category-type-amount">85</span></label>
                                    </div>
                                    <div className="mt-1 w-100 d-flex justify-content-center">
                                        <input id="32gb" type="checkbox" name="32gb"/>
                                        <label className="ms-3 fs-6 w-100 d-flex justify-content-between">32 GB <span className="category-type-amount">42</span></label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#disk" aria-expanded="true" aria-controls="disk">
                                Σκληρός δίσκος
                            </button>
                            </h2>
                            <div id="disk" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    <div className="mt-1 w-100 d-flex justify-content-center">
                                        <input id="256gb" type="checkbox" name="256gb"/>
                                        <label className="ms-3 fs-6 w-100 d-flex justify-content-between">256 GB <span className="category-type-amount">4</span></label>
                                    </div>
                                    <div className="mt-1 w-100 d-flex justify-content-center">
                                        <input id="512gb" type="checkbox" name="512gb"/>
                                        <label className="ms-3 fs-6 w-100 d-flex justify-content-between">512 GB <span className="category-type-amount">32</span></label>
                                    </div>
                                    <div className="mt-1 w-100 d-flex justify-content-center">
                                        <input id="1tb" type="checkbox" name="1tb"/>
                                        <label className="ms-3 fs-6 w-100 d-flex justify-content-between">1 TB <span className="category-type-amount">121</span></label>
                                    </div> 
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#cpu" aria-expanded="true" aria-controls="cpu">
                                Επεξεργαστής
                            </button>
                            </h2>
                            <div id="cpu" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    <div className="mt-1 w-100 d-flex justify-content-center">
                                        <input id="i3" type="checkbox" name="i3"/>
                                        <label className="ms-3 fs-6 w-100 d-flex justify-content-between">Intel Core i3 <span className="category-type-amount">24</span></label>
                                    </div>
                                    <div className="mt-1 w-100 d-flex justify-content-center">
                                        <input id="i5" type="checkbox" name="i5"/>
                                        <label className="ms-3 fs-6 w-100 d-flex justify-content-between">Intel Core i5 <span className="category-type-amount">163</span></label>
                                    </div>
                                    <div className="mt-1 w-100 d-flex justify-content-center">
                                        <input id="i7" type="checkbox" name="i7"/>
                                        <label className="ms-3 fs-6 w-100 d-flex justify-content-between">Intel Core i7<span className="category-type-amount">92</span></label>
                                    </div>
                                    <div className="mt-1 w-100 d-flex justify-content-center">
                                        <input id="i9" type="checkbox" name="i9"/>
                                        <label className="ms-3 fs-6 w-100 d-flex justify-content-between">Intel Core i9<span className="category-type-amount">29</span></label>
                                    </div>
                                    <div className="mt-1 w-100 d-flex justify-content-center">
                                        <input id="ryzen9" type="checkbox" name="ryzen9"/>
                                        <label className="ms-3 fs-6 w-100 d-flex justify-content-between">AMD Ryzen 9<span className="category-type-amount">200</span></label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#price-range" aria-expanded="true" aria-controls="price-range">
                                Εύρος Τιμών
                            </button>
                            </h2>
                            <div id="price-range" className="accordion-collapse collapse show">
                                <div className="accordion-body d-flex align-items-center justify-content-center">
                                    <Slider style={{width: '80%'}}
                                        getAriaLabel={() => "Price Range"}
                                        value={value}   
                                        max={3000}
                                        onChange={handleChange}
                                        valueLabelDisplay="auto"
                                        getAriaValueText={valuetext}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="right ms-5">
                    <span className="fst-italic">Προβολή 18 από τα 55 αποτελέσματα</span>
                    <div className="grid-container mt-5">
                    {filtered.map((item, index) => (
                        item.stock <= 0 ? 
                            <Link key={index} to="/product" className="semi-visible grid-item d-flex align-items-center flex-column text-dark">
                                <div className="bg-danger text-light product-out-of-stock d-flex border border-2 border-body align-items-center">
                                    Εξαντλήθηκε <div className="ms-2 fs-4">🤷</div>
                                </div> 
                                <img src={item.image} alt="" />
                                <span>{item.name}</span>
                                <div className="d-flex w-100 justify-content-center">
                                    <div className="ms-2 mb-2 fw-bold">{item.price} €</div>
                                </div>
                            </Link>
                            :
                            <Link key={index} to="/product" className="grid-item d-flex align-items-center flex-column text-dark">
                                <button type="button" className="btn add-to-cart bi bi-cart-fill"></button>
                                <img src={item.image} alt="" />
                                <span>{item.name}</span>
                                <div className="d-flex w-100 justify-content-center">
                                    <div className="ms-2 mb-2 fw-bold">{item.price} €</div>
                                </div>
                            </Link>
                    ))}
                    </div>
                    <div className="w-100 fs-3 mt-5 d-flex align-items-center justify-content-center">
                        <i className="text-success bi bi-arrow-left-circle-fill"></i>
                        <Link className="ms-4" to="#">1</Link>
                        <Link className="ms-3" to="#">2</Link>
                        <Link className="ms-3" to="#">3</Link>
                        <i className="text-success ms-4 bi bi-arrow-right-circle-fill"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}