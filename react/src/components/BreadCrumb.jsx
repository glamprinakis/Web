import React from "react";
import { Link } from "react-router-dom";

import { styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';

import '../assets/styles/BreadCrumb.css'

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  return {
    height: theme.spacing(3.5)
  };
});

export default function CustomizedBreadcrumbs(props) {
    let nodes = ""
    if(props.items){
        nodes = props.items.map(item => 
            <StyledBreadcrumb key={item.path}
                component={Link}
                to={item.path}
                label={item.label}
            />)
    }
    return (
    <div className="mt-3 w-100 d-flex justify-content-center">
        <div role="presentation">
            <Breadcrumbs separator={<i className="fs-3 bi bi-arrow-right-short"></i>} aria-label="breadcrumb">
                <Chip className="home-chip"
                    component={Link}
                    to="/"
                    icon={<HomeIcon fontSize="medium" />}
                    label="Αρχική"
                />
                {nodes}
            </Breadcrumbs>
        </div>
    </div>
    );
}