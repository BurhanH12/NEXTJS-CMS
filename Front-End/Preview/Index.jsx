import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {Typography, Paper, Grid} from '@material-ui/core';

import Button from 'components/User/Button';
import Container from 'components/User/Container';
import  Card from 'components/User/Card';
import { Editor, Element, Frame, NodeElement, useEditor } from '@craftjs/core';
import Text from 'components/User/Text';
import { CardBottom, CardTop } from 'components/User/Card';
import LZUTF8 from 'lzutf8';
import Navbar from 'components/Navbar';
import Navbutton from 'components/User/NavButton';
import { renderToStaticMarkup } from "react-dom/server";
import Sidebar from "components/Sidebar";

const Preview =  () => {
    

    const router = useRouter();
    const { id } = router.query;
    console.log(router,'id?.replace')

    const [blogData, setBlogData] = useState(null);
    const [blogState, setBlogState] = useState("");
    const [homeState, setHomeState] = useState("");
    const [homeNew, setHomeNew] = useState(null);

const fetchData = async () => {
    await fetch(`http://localhost:5000/getOne/Home`, {
     method: "GET",
   })
      .then((res) => res.json())
      .then((data) => {
       console.log(data, "BlogSearch");
      if (data?.data && data?.data?.state) {
          setBlogData(data.data);
          setBlogState(data.data.state);
          try {
            // actions.clearEvents();
            const json = LZUTF8.decompress(LZUTF8.decodeBase64(data?.data?.state));
            JSON.stringify(json);
            const html = renderToStaticMarkup(json)
            console.log(html, "outerhtml");
            // console.log(json);
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


    const fetchHome = async () => {
        console.log(id?.replace('/', ''), 'id?.replace')
        await fetch(`http://localhost:5000/getOne/Home`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "BlogSearch");
                setHomeState(data?.data?.state);
                console.log( homeState, "homestate");
                const homeDeco = LZUTF8.decompress(LZUTF8.decodeBase64(homeState));
                JSON.stringify(homeDeco);
                console.log(homeDeco, "BlogHome");
                setHomeNew(homeDeco); // update homeNew state here
            });
    };
  
  useEffect(() => {
    fetchData();
    fetchHome();
  },[]);
  
  



  return (
    <div className="ml-4 mr-12">
        <Editor resolver={{ Card, Button, Text, Container, CardTop, CardBottom, Navbar, Navbutton }}

enabled={false}
>

<div className='p-2 ml-5 mr-6'>
</div>
<Grid container spacing={3} className="pt-x ml-1 mr-1">
    <Grid item xs>
        <Frame json={homeNew}>
            <div>
                <Element is={Container} flexDirection="row" padding={5}  canvas droppable disableDelete={true}>
                    <Navbutton text="Home"/>
                    <Navbutton text="About"/>
                    <Navbutton text="Contact Us"/>
                </Element>
            </div>
        </Frame>
    </Grid>


</Grid>
</Editor>
    </div>
  );
};

export default Preview;
