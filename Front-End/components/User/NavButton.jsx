import React, { useState } from 'react';
import {
  Button as MaterialButton,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@material-ui/core';
import { useNode } from '@craftjs/core';
import { useEditor } from "@craftjs/core";
import LZUTF8 from "lzutf8";
import { useRouter } from 'next/router';


const Navbutton = ({ size, variant, color, text, ...props }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }))

  const [blogData, setBlogData] = useState(null);
  const [blogState, setBlogState] = useState("");

  const router =  useRouter()

  const handleClick = (event) => {
    event.preventDefault();
    if(router.pathname.includes('preview')){
      router.replace(`/preview/${text}`);
    }
    // router.replace(`/preview/${text}`)
    fetch(`http://localhost:5000/getOne/${text}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "BlogSearch");
        if (data?.data && data?.data?.state) {
          setBlogData(data.data);
          setBlogState(data.data.state);
          try {
            actions.clearEvents();
            const json = LZUTF8.decompress(LZUTF8.decodeBase64(data?.data?.state));
            actions.deserialize(json);
            console.log(json);
          } catch (error) {
            console.error('Error decompressing or deserializing:', error);
            // Handle the error and provide appropriate feedback or retry the process
          }
        } else {
          console.error('Incomplete or corrupted data received:', data);
          // Handle the case when the data is incomplete or corrupted
        }
      });
  };

  return (
    <MaterialButton ref={(ref) => connect(drag(ref))} size="large" variant={variant} color={color} {...props} onClick={handleClick} className="m-5">
      {text}
    </MaterialButton>
  );
};

const NavbuttonSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

//   const [blogData, setBlogData] = useState(null);
//   const [blogState, setBlogState] = useState("");

//   const handleGet = (event, pageName) => {

  
//     fetch(`http://localhost:5000/getOne/${pageName}`, {
//       method: "GET",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data, "BlogSearch");
//         setBlogData(data?.data);
//         setBlogState(data?.data?.state);
//       });
//     };
    
//     console.log(blogState,'blogState');
//     const handleClick = (event, name) => {
//       event.preventDefault();
//     handleGet(event, name);
//   };
  
//   const handleHeaderTextChange = (e) => {
//     props.setHeaderText(e.target.value);
//   }

  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Color</FormLabel>
        <RadioGroup defaultValue={props.color} onChange={(e) => setProp((props) => (props.color = e.target.value))}>
          <FormControlLabel label="Default" value="default" control={<Radio size="small" color="default" />} />
          <FormControlLabel label="Primary" value="primary" control={<Radio size="small" color="primary" />} />
          <FormControlLabel label="Secondary" value="secondary" control={<Radio size="small" color="primary" />} />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">Text</FormLabel>
        <TextField
          defaultValue={props.text}
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
          onChange={(e) => setProp((props) => (props.text = e.target.value))}
        />
      </FormControl>
    </div>
  );
};

Navbutton.craft = {
  props: {
    size: 'Large',
    variant: 'text',
    color: 'default',
    text: 'Click Me',
  },
  related: {
    settings: NavbuttonSettings,
  },
};

export { NavbuttonSettings }

export default Navbutton;
