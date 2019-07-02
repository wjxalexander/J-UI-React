import * as React from 'react';
import Button from "../lib/Button/button";

const ButtonExample: React.FunctionComponent = () => {
  return (
    <div style={{display: "flex", width: "100%", justifyContent: "space-around"}}>
      <Button buttonType="default" iconProps={{iconName: "Accept", USEMsFabricIcon: true}}
              onClick={() => console.log(666)}/>
      <Button buttonType="default" onClick={() => console.log('check')}/>
      <Button buttonType="custom" onClick={() => console.log('check')}/>
      <Button buttonType="custom" title="1111111111111111111111" disabled onClick={() => console.log('check')}/>

      {/*<Button buttonType="default" title="Create account" iconProps={{iconName: "Accept", USEMsFabricIcon: true}}*/}
      {/*        secondaryText="You can create a new account here."/>*/}

    </div>
  )
};
export default ButtonExample;
