import React from 'react';
import ReactDOM from "react-dom";
import Icon, {createFromIconFont} from "./Icon/icon";
import "./style.scss"

createFromIconFont("http://at.alicdn.com/t/font_944669_yny5xllmics.js");

const fn: React.MouseEventHandler<HTMLOrSVGElement> = (e) => {
    console.log(e.target);
};

ReactDOM.render((<div>
    <Icon iconName="wechat" onClick={fn}
          onMouseEnter={(e) => console.log(e.target, "mouseEnter")}
          onMouseLeave={(e) => console.log(e.target, "mouseLeave")}
    />
    <Icon iconName="Accept" USEMsFabricIcon onClick={fn}
          onMouseEnter={(e) => console.log(e.target, "mouseEnter")}
          onMouseLeave={(e) => console.log(e.target, "mouseLeave")}
    />
    <Icon iconName="AdminALogo32" USEMsFabricIcon className="custom" onClick={fn}/>
    <Icon iconName="i-loading" onClick={fn} className="custom"/>
    <Icon iconName="i-movie" onClick={fn} onMouseLeave={(e) => console.log(e.target, "mouseLeave")}
    />


</div>), document.querySelector("#root"));

