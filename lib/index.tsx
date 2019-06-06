import React from 'react';
import ReactDOM from "react-dom";
import Icon from "./Icon/icon";

const fn: React.MouseEventHandler<HTMLOrSVGElement> = (e) => {
    console.log(e.target);
}


ReactDOM.render((<div>
    <Icon iconName="wechat" onClick={fn}/>
    <Icon iconName="Accept" USEMsFabicIcon onClick={fn}/>
    <Icon iconName="AdminALogo32" USEMsFabicIcon onClick={fn}/>

</div>), document.querySelector("#root"));

