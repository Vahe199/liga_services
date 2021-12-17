import { IconButton } from "@mui/material";
import * as React from "react";
import InstaSvg from "./InstaSvg";
import OkSvg from "./OkSvg";
import VkSvg from "./VkSvg";
import YoutubeSvg from "./YoutubeSvg";


const FooterIconsBar = () => {
    return (
           <div style={{display: 'flex', flexWrap: 'nowrap'}}>
               <IconButton>
                   <VkSvg/>
               </IconButton>
               <IconButton>
                    <OkSvg/>
               </IconButton>
               <IconButton>
                    <InstaSvg/>
               </IconButton>
               <IconButton>
                    <YoutubeSvg/>
               </IconButton>
               
           </div>
      )
      
  };
  export default FooterIconsBar;