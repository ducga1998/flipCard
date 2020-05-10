import React from "react";
import UIModal from "../../UI/Modal";
import {Subscribe} from "unstated-x";

const ModelPreview = ({isOpen  ,setOpen , selectContainer}) => {
    if(!selectContainer)  return null
        console.log("selectContainer",selectContainer)
  return   <Subscribe to={[selectContainer]}>
      {() => {
          return <UIModal
              open={isOpen}
              title="Modal 1"
              onClose={() => setOpen(false)}
              size="large"

              onDismiss={() => setOpen(false)}>
>
              sacasc
          </UIModal>
      }}
  </Subscribe>

}

export default ModelPreview