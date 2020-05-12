import React, {Component} from 'react';
import styled from 'styled-components'
import UIButton from "./Button";
// import UILayout from 'UI/Layout'
import UIGroup from 'UI/Group'
import {SpanText} from "../Game/Kahoot/styled";

function generateRichTextEditorCss(target) {
    const cssObj = {
        backgroundColor: '',
        bold: false,
        italic: false,
        underline: false,
        color: '',
        verticalAlign: ''
    }

    if (target) {

        let css: any = {}
        let node = target
        let parentNode = node
        const sel = window.getSelection()
        const range = sel.rangeCount && sel.getRangeAt(0)
        const focusNode = sel.focusNode
        if (range && !(range && range.startContainer === range.endContainer && range.startOffset === range.endOffset)) {
            if (focusNode) {
                node = focusNode.parentElement
                parentNode = node
                while (
                    parentNode.nodeName !== 'SPAN' &&
                    ((parentNode.parentElement && parentNode.parentElement.nodeName !== 'SPAN') ||
                        parentNode.nodeName === 'A')
                    ) {
                    parentNode = parentNode.parentElement
                }
                css = parentNode.style
                cssObj.backgroundColor = css.backgroundColor === '' ? 'rgb(240, 242, 243)' : css.backgroundColor
                cssObj.color = css.color === '' ? 'rgb(240, 242, 243)' : css.color
                cssObj.bold = css.fontWeight === 'bold'
                cssObj.underline = css.textDecorationLine === 'underline'
                cssObj.italic = css.fontStyle === 'italic'
            }
        }
        cssObj.verticalAlign = css.verticalAlign
    }
    // console.log('cssObj', cssObj)
    return cssObj
}


export default class ContentEditable extends Component<any, any> {
    content: any
    lastHtml: string = ''
    state = {
        idAnswerFocus: ''
    }
    formatDoc = (sCmd, sValue = null) => {
        document.execCommand('styleWithCSS', true)
        if (sValue) {
            document.execCommand(sCmd, false, sValue)
        } else {
            document.execCommand(sCmd, false)
        }
        console.log("this.elem", this.content)
        this.content && this.content.focus()

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


    componentDidMount() {
        this.content.innerHTML = this.props.value
    }

    // check when data change then value in text the same change
    componentDidUpdate(prevProps: {
        value: string
    }) {
        if (this.props.value !== prevProps.value && !this.content.matches(':focus')) {
            this.content.innerHTML = this.props.value
        }
    }

    handleOnBlur = (e) => {
        const target: HTMLElement = e.currentTarget
        const html = target.innerHTML
        if (html !== this.lastHtml) {
            this.props.onChange(e, html)
        }
        this.lastHtml = html
    }
    emitChange = (e: any) => {
        const target: HTMLElement = e.currentTarget
        const html = target.innerHTML
        if (html !== this.lastHtml) {
            this.props.onChange(e, html)
        }
        this.lastHtml = html
    }

    renderToolbar = () => {
        const cssObj: any = generateRichTextEditorCss(this.content)
        return <Toolbar>

            <UIGroup.Button>
                <UIButton
                    compact
                    iconBefore="superscript"
                    style={{border: '1px solid #172B4D'}}
                    onClick={e => {
                        this.formatDoc('superscript')
                    }}
                    active={cssObj.verticalAlign === 'super'}
                    variant="dark"
                />


                <UIButton
                    compact
                    iconBefore="subscript"
                    style={{border: '1px solid #172B4D'}}
                    active={cssObj.verticalAlign === 'sub'}
                    onClick={e => {
                        this.formatDoc('subscript')
                    }}
                    variant="dark"
                />


                <UIButton
                    compact
                    variant="dark"
                    iconBefore="formatBold"
                    style={{border: '1px solid #172B4D'}}
                    active={cssObj.bold}
                    // this.formatDoc('bold')
                    onClick={e => {
                        this.formatDoc('bold', null)
                    }}
                />


                <UIButton
                    compact
                    variant="dark"
                    iconBefore="formatItalic"
                    style={{border: '1px solid #172B4D'}}
                    active={cssObj.italic}
                    onClick={e => {
                        this.formatDoc('italic')
                    }}
                />


                <UIButton
                    compact
                    variant="dark"
                    style={{border: '1px solid #172B4D'}}
                    iconBefore="formatUnderline"
                    active={cssObj.underline}
                    onClick={e => {
                        this.formatDoc('underline')
                    }}
                />


                <UIButton
                    compact
                    iconBefore="eraser"
                    variant="dark"
                    onClick={e => {
                        this.formatDoc('removeFormat')
                    }}
                />
            </UIGroup.Button>
        </Toolbar>
    }

    render() {
        const {idAnswer, idAnswerFocus, style} = this.props;
        // const {idAnswerFocus} = this.state
        console.log("{idAnswer, idAnswerFocus }", {idAnswer, idAnswerFocus})
        return (
            <>
                {(idAnswerFocus === idAnswer) && this.renderToolbar()}
                <SpanText
                    style={style}
                    ref={(elem) => {
                        this.content = elem
                    }}
                    onInput={this.emitChange}
                    contentEditable={true}
                    onPaste={this._onPaste}
                    onBlur={this.handleOnBlur}
                    onFocus={this.props.onFocus}
                />

            </>

        );
    }
}
const Toolbar = styled.div`
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translate(-50%, -100%);
`
const WrapperContentRichText = styled.div``


