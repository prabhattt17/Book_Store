import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Tab, Tabs, Input } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

const Header = (props) => {
  const [value, setVal] = useState();
  const navigate = useNavigate();
  
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Typography onClick={() => navigate("/")} sx={{ cursor: "pointer" }}>
            Book Store
          </Typography>
          <input className="input-box" placeholder="Search..."
            onChange={(e) => props.setQuerry(e.target.value)}
          ></input>
          <Tabs
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setVal(val)}
            sx={{ ml: "auto" }}
          >
            <Tab LinkComponent={NavLink} to="/Add" label="Add Product" />
            <Tab LinkComponent={NavLink} to="/books" label="Books" />
            <Tab LinkComponent={NavLink} to="/aboutUs" label="About Us" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
