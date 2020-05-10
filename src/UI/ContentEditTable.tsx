import React, {Component} from 'react';
import styled from 'styled-components'
// import UILayout from 'UI/Layout'
export default class ContentEditable extends Component<any, any> {
    elem: any
    _onChange = (ev) => {
        const method = this.getInnerMethod();
        const value = this.elem[method];

        this.props.onChange(ev, value);
    }

    _onPaste = (ev) => {
        const {onPaste, contentEditable} = this.props;

        if (contentEditable === 'plaintext-only') {
            ev.preventDefault();
            var text = ev.clipboardData.getData("text");
            document.execCommand('insertText', false, text);
        }

        if (onPaste) {
            onPaste(ev);
        }
    }

    _onKeyPress = (ev) => {
        const method = this.getInnerMethod();
        const value = this.elem[method];
        this.props.onKeyPress(ev, value);
    }

    getInnerMethod() {
        return this.props.contentEditable === 'plaintext-only' ? 'innerText' : 'innerHTML';
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
        console.log("change hmtl",this.props.html)
        if(prevProps.html != this.props.html) {
            console.log("change hmtl",this.props.html)
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        const method = this.getInnerMethod();
        return nextProps.html !== this.elem[method];
    }

    renderToolbar = () => {

    }

    render() {
        const {tagName, html, contentEditable, ...props} = this.props;

        const Element = tagName || Div;

        return (

             // <UILayout>
                 <Element
                     {...props}
                     ref={(elem) => {
                         this.elem = elem
                     }}
                     dangerouslySetInnerHTML={{__html: html}}
                     contentEditable={contentEditable === 'false' ? false : true}
                     onInput={this._onChange}
                     onPaste={this._onPaste}
                     onKeyPress={this._onKeyPress}
                 />
             // </UILayout>

        )
    }
}
const Div = styled.div`
   
    cursor: pointer;
 
    vertical-align: bottom;
 background: ${props => props.backgroundColor ? props.backgroundColor : ''};
    font-family: Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    position: relative;
    line-height: 0.875rem;
    margin: 0px;
    padding : 50px;
     color: ${props => props.color ? props.color : 'white'};
   
`