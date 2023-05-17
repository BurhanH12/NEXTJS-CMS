import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "next/link";
import Button, { ButtonSettings } from "./User/Button";
import { useNode } from "@craftjs/core";


const Navbutton = ({children}) => {
  const { connectors: {connect} } = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  )
}


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
  },
  appBar: {
    backgroundColor: "#DEDEDE",
    color: "#000",
    height: "50px",
    display: 'flex',

  },
  toolbar: {
    display: "flex",
    justifyContent: "justify-evenly",
    alignItems: "center",
    height: "100%",
  },
  button: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    color: "#000",
  },
  MaterialButton: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    color: "#000",
  }
}));


const Navbar = () => {
  const classes = useStyles();
  const [headerText, setHeaderText] = useState('Home');
  const [blogName, setBlogName] = useState("");
  const [blogData, setBlogData] = useState(null);
  const [blogState, setBlogState] = useState("");



  const handleGet = (event, pageName) => {

  
    fetch(`http://localhost:5000/getOne/${pageName}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "BlogSearch");
        setBlogData(data?.data);
        setBlogState(data?.data?.state);
      });
    };
    
    console.log(blogState,'blogState');
    const handleClick = (event, name) => {
      event.preventDefault();
    handleGet(event, name);
  };
  
  const handleHeaderTextChange = (e) => {
    props.setHeaderText(e.target.value);
  }
  return(
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar} >
          <Toolbar className={classes.toolbar}>
            <Link href="/" passHref>
            <Button text="Home" onClick={(event) => handleClick(event, "Home")}>
              Home
              </Button>
            </Link>
            <Link href="" passHref>
              <Button text="About" onClick={(event) => handleClick(event, "About")}>
                About
              </Button>
            </Link>
            <Link href="" passHref>
              <Button text="Contact" onClick={(event) => handleClick(event, "Contact")}>
                Contact
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
}

Navbar.craft = {
  rules: {
    // Only accept NavButtons
    canMoveIn : (incomingNodes) => incomingNodes.every(incomingNode => incomingNode.data.type === Navbutton)
  }
}


Navbutton.craft = {
  name: 'Button',
  related: {
    settings: ButtonSettings
  }
}

export default Navbar