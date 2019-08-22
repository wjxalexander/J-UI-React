import React from 'react';
import Highlight, {defaultProps} from "prism-react-renderer";
import theme from 'prism-react-renderer/themes/github'
import cls from "classnames"

interface Props extends React.HTMLAttributes<HTMLElement> {
  code: string;
  preClassName?:string;
}

const Demo: React.FunctionComponent<Props> = (props) => {
  return (
    <div>
      {props.children}
      <Highlight {...defaultProps} code={props.code} language="jsx" theme={theme}>
        {({className, style, tokens, getLineProps, getTokenProps}) => (
          <pre className={cls(className,props.preClassName)} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({line, key: i})}>
            {line.map((token, key) => (
              <span {...getTokenProps({token, key})} />
            ))}
          </div>
        ))}
      </pre>
        )}
      </Highlight>
    </div>
  );
};

export default Demo;