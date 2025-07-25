import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import '../assets/styles/SearchOverlay.css'
import {Link} from "react-router-dom"

export default function SimpleBackdrop() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
      <div>
          <Button className="search-overlay border border-1" onClick={handleOpen}><i className="bi bi-search fs-5"></i></Button>
          <Backdrop
              sx={{zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
          >
            
              <div className="container search-container">
                <div className="row d-flex justify-content-center mt-5 ">
                  <div className="col-md-8">
                    <div className="card">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-row w-100">
                          <button type="button" className="btn btn-danger fw-bold me-1 ms-auto search-close" onClick={handleClose}>Κλείσιμο</button>
                        </div>
                      </div>
                      <div className="mt-3 inputs">
                        <i className="fa fa-search"></i>
                        <input type="text" className="form-control border border-1" placeholder="Αναζήτηση προϊόντων (π.χ. Apple)" />
                      </div>
                      <Link to={"/product"} className="mt-3 product-card" type="button" onClick={handleClose}>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex flex-row align-items-center">
                            <span className="star">
                              <img src="https://pc.net/img/db/2022_apple_macbook_air_review.png"></img>
                            </span>
                            <div className="d-flex flex-column">
                              <span className="product-title">Apple Macbook Air M2</span>
                              <div className="d-flex flex-row align-items-center time-text">
                                <span className="product-stock d-flex align-items-center justify-content-center">Σε απόθεμα <span className="ms-2 dots"></span> </span>
                              </div>
                            </div>
                          </div>
                          <span className="product-price">1800 $</span>
                        </div>
                      </Link>

                      <Link to={"/product"} className="mt-3 product-card" type="button" onClick={handleClose}>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex flex-row align-items-center">
                            <span className="star">
                              <img src="https://media.croma.com/image/upload/v1662703259/Croma%20Assets/Communication/Mobiles/Images/261945_kci7ll.png"></img>
                            </span>
                            <div className="d-flex flex-column">
                              <span className="product-title">Apple iPhone 14 Plus</span>
                              <div className="d-flex flex-row align-items-center time-text">
                                <span className="product-stock d-flex align-items-center justify-content-center">Σε απόθεμα <span className="ms-2 dots"></span> </span>
                              </div>
                            </div>
                          </div>
                          <span className="product-price">1400 $</span>
                        </div>
                      </Link>

                    </div>
                  </div>
                </div>
              </div>
            
          </Backdrop>
      </div>
  );
}