import * as React from 'react';
import Icon from "@/Icon/icon";
import style from "./iconExp.example.scss";
import {createFromIconFont} from "@/Icon/icon"

/* Enable USEMsFabricIcon means you can use the Fabric-UI(MicroSoft) icons,
For a list of icons, visit Fabric-UI icon documentation.*/

const MyIcon = () => createFromIconFont(
  '//at.alicdn.com/t/font_1173951_xgxm2ia4ip.js' // generated from iconfont.cn
);
const IconExample: React.FunctionComponent = () => {
  MyIcon();
  return (
    <div className={style.container}>
      <Icon className={style.icon} USEMsFabricIcon iconName={'CompassNW'}/>
      <Icon className={style.icon} USEMsFabricIcon iconName={'Dictionary'}/>
      <Icon className={style.icon} USEMsFabricIcon iconName={'TrainSolid'}/>
      <Icon className={style.icon} iconName={"icon-rencai"}/>
      <Icon className={style.icon} iconName={"icon-folder"}/>
      <Icon className={style.icon} iconName={"icon-calendar"}/>
      <Icon className={style.icon} iconName={"icon-test"}/>
    </div>
  )
};
export default IconExample;
