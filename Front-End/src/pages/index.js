import React, { Component, useEffect, useState } from 'react';
import {Typography, Paper, Grid} from '@material-ui/core';

import { SettingsPanel } from 'components/SettingsPanel';
import { Toolbox } from 'components/Toolbox';

import Button from 'components/User/Button';
import Container from 'components/User/Container';
import  Card from 'components/User/Card';
import Topbar from 'components/TopBar';
import { Editor, Element, Frame, NodeElement } from '@craftjs/core';
import { Layers } from '@craftjs/layers';
import Text from 'components/User/Text';
import { CardBottom, CardTop } from 'components/User/Card';
import LZUTF8 from 'lzutf8';
import Navbar from 'components/Navbar';
import Navbutton from 'components/User/NavButton';

const orders = () => {
    const [enabled, setEnabled] = useState(true)
    const [json, setJson] = useState(null)
    const [header, setheader] = useState('Header')


    // const myFunction = async () => {

    //     const stateToLoad = await fetch("localhost:5000/getOne?name=Home");
    //     const base64String =  await  stateToLoad?.text();
    //     const compressedJson = base64String && LZUTF8.decodeBase64(base64String?.trim());
    //     const json =compressedJson && LZUTF8.decompress(compressedJson);
    //     setJson(json);
    // };

    //load save state from server on page
    // useEffect(() => {
    //     myFunction();
        
    // }, []);

    const [bgColor, setBgColor] = useState('#F5F3F3');

  const handleColorChange = (newColor) => {
    setBgColor(newColor);
  };

    return (
        <div className='bg-gray-100 min-h-screen'>
            <div className='p-4 justify-between flex px-4'>
                <h2>CraftJS</h2>
                <h2>Welcome, Burhan</h2>
            </div>
            <div className='p-6'>
                <div className='mx-auto '>
                    <Typography variant='h6' align='center'> A Not So Simple Page Editor </Typography>
                    <Editor resolver={{ Card, Button, Text, Container, CardTop, CardBottom, Navbar, Navbutton }}

                        enabled={enabled}
                    >

                        <div className='p-2'>
                            <Topbar className="relative" />
                        </div>
                        <Grid container spacing={3} className="pt-1">
                            <Grid item xs>
                                <Frame json={json}>
                                    <div>
                                        <Element is={Container} flexDirection="row" padding={5}  canvas droppable disableDelete={true}>
                                            <Navbutton text="Home"/>
                                            <Navbutton text="About"/>
                                            <Navbutton text="Contact Us"/>
                                        </Element>
                                        {/* <Navbar /> */}
                                        <Element is={Container} id="444" padding={5} background={bgColor} canvas droppable>
                                            <Text fontSize={20} text="HEADER"/>
                                            <Element is={Container} padding={25} background="#DEDEDE" canvas droppable>
                                                <Text fontSize={15} text="Write your body in here" />
                                            </Element>
                                            <Element is={Container} padding={10} background="#DEDEDE" canvas droppable>
                                                <Text fontSize={15} text="Drag a component here" />
                                            </Element>
                                            <footer bgColor={bgColor} className="bg-gray-100 text-black py-8 px-4" text="Footer" onChange={handleColorChange}>
                                                <div className="max-w-screen-xl mx-auto">
                                                    <div className="flex flex-wrap justify-between items-center">
                                                        <div className="text-sm">
                                                            &copy; 2023 Craft Js
                                                        </div>
                                                        <div className="text-sm">
                                                            <a href="#" className="mx-4 hover:text-gray-700">Privacy Policy</a>
                                                            <a href="#" className="mx-4 hover:text-gray-700">Terms of Service</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </footer>
                                        </Element>
                                    </div>
                                </Frame>
                            </Grid>

                            <Grid item xs={3} className="">
                                <Paper className="relative">
                                    <Toolbox className="sticky top-0" />
                                    <SettingsPanel className="sticky top-0" />
                                    <Layers className="sticky top-0"
                                        expandRootOnLoad={true} />
                                </Paper>
                            </Grid>
                        </Grid>
                    </Editor>
                </div>


            </div>
        </div>
    )
    
}


export default orders