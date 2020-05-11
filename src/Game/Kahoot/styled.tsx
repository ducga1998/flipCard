import styled from 'styled-components'

export const WrapperAnswer = styled.div`
     display: flex;
     flex-wrap: wrap;
     height: 100%;
     align-content: flex-start;
     width: 100%;
     flex: 4 1 0%;
     vertical-align: baseline;
     background: rgb(242, 242, 242);
`
export const WrapperLevel = styled.div`
 
`
export const WrapperKahoot = styled.div`
      display: flex;
      height : 1000px;`
export const ItemLevel = styled.div`
   display: flex;
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
     padding : 10px;
`
export    const WrapperContent = styled.div`
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
  }
  input:checked:before{
    font-size: 24px;
    top: -1px;
    left: 3px;
  }
`
