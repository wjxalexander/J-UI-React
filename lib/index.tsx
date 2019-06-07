import React from 'react';
import ReactDOM from "react-dom";
import Icon, {createFromIconFont} from "./Icon/icon";

createFromIconFont("./iconfont.js");

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
    <Icon iconName="AdminALogo32" USEMsFabricIcon onClick={fn}/>

</div>), document.querySelector("#root"));

