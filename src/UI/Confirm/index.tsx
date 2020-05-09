import React, {useState} from "react";
import styled from 'styled-components'
import UIButton from "UI/Button";
import UIIcon from 'UI/Icon'
import IUIConfirmProps from "./types";
import UIModal from "UI/Modal";
import UICheckbox from "UI/Checkbox";
import {ContentModal} from "./styled"

export function UIConfirm(props: IUIConfirmProps) {
    const {width, height, title, displayCloseButton, close, defaultOnClose, showDontAsk, dontAskContent, dontAskDefault, onCancel, onConfirm, content, confirmButton, cancelButton, pending} = props
    const [dontAsk, setDontAsk] = useState(dontAskDefault)

    function cancel() {
        close && close();
        onCancel && onCancel();
    }

    function confirm() {
        close && close();
        onConfirm && onConfirm();
    }

    return <UIModal
        open
        custom
        onClose={displayCloseButton ? () => {
            defaultOnClose ? confirm() : cancel();
        } : undefined}
        width={width}
        height={height}
        actions={(
            <>
                {showDontAsk && (
                    <UICheckbox
                        disabled={pending}
                        defaultValue={dontAsk}
                        onChange={(v) => setDontAsk(v)}
                    >{dontAskContent || `Do not show this again.`}</UICheckbox>
                )}
                {<UIButton
                    disabled={pending}
                    onClick={cancel}
                >{cancelButton || "Cancel"}</UIButton>}
                {<UIButton
                    loading={pending}
                    disabled={showDontAsk && dontAsk === false}
                    variant="primary"
                    onClick={confirm}>{confirmButton || "Confirm"}</UIButton>}
            </>
        )}
    >
        <Header>
            {title}
            <UIButton compact variant="transparent" disabled={pending} onClick={() => {
                close && close();
            }}><UIIcon icon="times" size="medium"/></UIButton>
        </Header>
        {typeof content === "string" ? (
            <ContentModal
                dangerouslySetInnerHTML={{
                    __html: content
                }}
            />
        ) : (
            content
        )}
    </UIModal>
}

UIConfirm.defaultProps = {
    cancelButton: "Cancel",
    confirmButton: "OK",
    content: "Are you sure?",
    header: "",
    width: 640,
    displayCloseButton: false,
    dontAskDefault: false,
    cfButtonDisabled: false
};

class ConfirmInstance extends React.Component<{ defaultClickOutside: boolean }> {
    static defaultProps = {
        defaultClickOutside: false
    };
    state: {
        dialogs: IUIConfirmProps[]
    } = {
        dialogs: []
    };
    removeDialog = (index) => {
        const dialogs = [...this.state.dialogs];
        dialogs.splice(index, 1);
        this.setState({dialogs});
    };

    addDialog(options) {
        return new Promise(resolve => {
            this.setState({
                dialogs: [
                    ...this.state.dialogs,
                    options
                ]
            }, resolve);
        });
    }

    render() {
        const {dialogs} = this.state;
        return dialogs.map((options, i) => <UIConfirm
            {...options}
            displayCloseButton
            key={i}
            close={() => {
                document.body.style.overflow = "scroll";
                this.removeDialog(i);
            }}
        />);
    }
}

let confirmInstance: ConfirmInstance;
export const ConfirmWrapper = () => <ConfirmInstance ref={r => confirmInstance = r}/>;

export function confirm(options: IUIConfirmProps) {
    if (!confirmInstance) {
        console.warn("<ConfirmWrapper /> is not rendered!");
        return null;
    }
    return confirmInstance.addDialog(options);
}

export const pageflyConfirm = confirm;
window['pfConfirm'] = confirm;
const Header = styled(UIModal.Header)`
	span:first-child {
		vertical-align: middle;
	}
`

export default confirm