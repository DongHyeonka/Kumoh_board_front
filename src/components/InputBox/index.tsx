import { ChangeEvent, KeyboardEvent, forwardRef } from "react";
import "./style.css";

//             interface: Input Box 컴포넌트 Properties              //
interface Props {
  
}

//             component: Input Box 컴포넌트              //
const InputBox = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
  //            properties           //

  const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {

  };

  //           render: Input Box 렌더링            //
  return (
    <div>
      
    </div>
  );
});

export default InputBox;
