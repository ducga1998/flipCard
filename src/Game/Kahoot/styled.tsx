import styled from 'styled-components'

export const WrapperAnswer = styled.div`
     display: flex;
     flex-wrap: wrap;
     //height: 100%;
     align-content: flex-start;
     width: 100%;
     flex: 4 1 0%;
     vertical-align: baseline;
     background: rgb(242, 242, 242);
`
export const WrapperLevel = styled.div`
 position:  fixed;
 width: 100%;
 overflow: hidden;
`
export const WrapperKahoot = styled.div`
      display: flex;
      //height : 1000px;`
export const ItemLevel = styled.div`
   display: flex;
   padding : 0.125rem;
   flex-direction: column;
   justify-content: center;
   align-content: center;
   img {
      width: 100px;
      pointer-events: none;
   }
`
export const WrapperCreateQuestion = styled.div`
     flex : 10;
     background: #f2f2f2;
     //padding : 10px;
     margin:0 0 0 19rem;
     padding :0px 10px;
`
export const WrapperContent = styled.div`
     display: flex;
     position: relative;
     margin: 0 0.25rem 0.25rem 0;
     justify-content: flex-start;
     align-items: center;
     //height: calc(50% - 0.125rem);
     width: calc(50% - 1.5rem);
     box-shadow: rgba(0, 0, 0, 0.25) 0px -4px inset;
     box-sizing: border-box;
     cursor: auto;
     overflow: visible;
     //padding: 0px 0.25rem;
     background: ${props => props.backgroundColor ? props.backgroundColor : ''};
     //padding: 50px;
     border-radius: 4px;
     text-decoration: none;
`
export const ImageBackground = styled.div`
display: block;
    background-image: url(${props => props.backgroundSrc ? props.backgroundSrc : ''});
    background-size: contain;
    height: 100%;
    width: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    margin: 0px auto;
`
export const WrapperCheckBox = styled.div`
  input {
    border-radius: 50%;
    height: 30px;
    width: 30px;
    margin-right: 10px;
    appearance : none;
  }
  input:checked:before{
    font-size: 24px;
    top: -1px;
    left: 3px;
  }
`
export const PlaceHolder = styled.div`
    position: relative;
    width: calc(50% - 0.5rem);
    height: 10px;
    margin : 0.125rem;
 
    border-width: 1px;
    border-style: solid;
    border-color: ${props => props.borderColor ? props.borderColor : ''};
    border-image: initial;
    border-radius: 0.125rem;
  &:before{
  content: "";
     position: absolute;
     right: 3px;
    ${props => props.active ? `  height: 5px;
    width: 5px;` : ''};
    top: 50%;
    transform: translateY(-50%);
    opacity: 1;
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: white;
    border-image: initial;
    background: rgb(102, 191, 57);
}

`
export const SpanText = styled.span`
    flex : 1;
    cursor: pointer;
    vertical-align: bottom;
    background: ${props => props.active ? '#0e0e0e3b' : ''};
    font-family: Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    position: relative;
    line-height: 0.875rem;
    margin: 0px;
    padding : 50px;
    //background: #0e0e0e3b;
    color: ${props => props.color ? props.color : 'white'};
   &:before{
       content: attr(data-placeholder);
        position: absolute;
        width: 100%;
        left: 0px;
        color: rgb(110, 110, 110);
        pointer-events: none;
        font-weight: 400;
        text-shadow: none;
        opacity: ${props => props.hidePlaceholder ? 0 : 1};
        outline: none;
   }
`
