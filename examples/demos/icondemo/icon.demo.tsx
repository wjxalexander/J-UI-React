import Demo from "../../../demo";
import React, {useState} from "react"
import IconExample from "../../iconexample/icon.example";
import style from "./icon.example.scss"
import Card from "@/Card/card";
import Icon from "@/Icon/icon";
import cls from "classnames"

const sourceCode = require("!!raw-loader!../../iconexample/icon.example");

const IconDemo: React.FunctionComponent = (props) => {
  const [show, setShow] = useState(false)
  return (
    <div className={style.container}>
      <header>
        <h1>Icon</h1>
      </header>
      <main>
        <Card title="Overview" className={style.card}>
          <p>In a user interface, an icon is an image that represents an application, a capability, or some other
            concept or specific entity with meaning for the user. An icon is usually selectable but can also be a
            non-selectable image, such as a company's logo.</p>
          <p>For a list of icons, visit our icon documentation.</p>
        </Card>
        <Card title="Best Practices" className={style.card}>
          <div className={style.bestPractice}>
            <div className={style.right}>
              <h3>Do</h3>
              <ul>
                <li>
                  <Icon USEMsFabricIcon iconName="Accept" className={style.icon}/>
                  <p>Adjust to proper size to highlight importance but not occupying too much space.</p>
                </li>
                <li>
                  <Icon USEMsFabricIcon iconName="Accept" className={style.icon}/>
                  <p>Be simple and concise.</p>
                </li>
              </ul>
            </div>
            <div className={style.wrong}>
              <h3>Don’t</h3>
              <ul>
                <li>
                  <Icon USEMsFabricIcon iconName="Clear" className={style.icon}/>
                  <p>Use Icons to show pictures.</p>
                </li>
                <li>
                  <Icon USEMsFabricIcon iconName="Clear" className={style.icon}/>
                  <p>Use photos or long sentences as icons.</p>
                </li>
              </ul>
            </div>
          </div>
        </Card>
        <Card title="High Lights">
          <p>You can use the Fabric-UI Icons just enable the "USEMsFabricIcon" property. </p>
          <p>You can import third-parts's Icon, Iconfont for example, just import and use the "createFromIconFont"
            function. </p>
          <p> More detail can be found in the following examples.</p>
        </Card>
        <Card title="Usage">
          <div>
            <div className={style.title}>
              <h1>Icon</h1>
              <div onClick={() => setShow(!show)}><Icon USEMsFabricIcon iconName={"Embed"}/>Show code</div>
            </div>
            <Demo preClassName={cls(style.iconDemo, show && style.demoHide)} code={sourceCode.default}>
              <IconExample/>
            </Demo>
          </div>
        </Card>
        <Card title="Implementation" className={style.implementation}>
            <h3>IconProps interface</h3>
            <p>{`Extends React.SVGAttributes<HTMLOrSVGElement>, React.HTMLAttributes<HTMLOrSVGElement>`}</p>
            <table>
              <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Required</th>
                <th>Default value</th>
                <th>Description</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>iconName</td>
                <td>string</td>
                <td>Yes</td>
                <td> </td>
                <td>The name of the icon to use from the icon font.</td>
              </tr>
              <tr>
                <td>className</td>
                <td>string</td>
                <td>No</td>
                <td> </td>
                <td>Modify the icon style with css </td>
              </tr>
              <tr>
                <td>USEMsFabricIcon</td>
                <td>boolean</td>
                <td>No</td>
                <td> false </td>
                <td>You can use the Fabric-UI Icons. To find more Icons and details, check: <a href="https://developer.microsoft.com/en-us/fabric#/styles/web/icons#fabric-react">Microsoft fabric icons</a> </td>
              </tr>
              </tbody>
            </table>
          <div>
            <h3>About Custom Icon</h3>
            <p>You use the createFromIconFont function to use your own icons deployed at iconfont.cn in a convenient way. See the example above</p>
          </div>
        </Card>

      </main>
    </div>


  )
};
export default IconDemo
