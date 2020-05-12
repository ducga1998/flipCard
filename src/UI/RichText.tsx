// @ts-ignore
import * as  React from 'react';
import RichTextEditorIntance from 'react-rte';

const toolbarConfig = {
    // Optionally specify the groups to display (displayed in the order listed).
    display: ['INLINE_STYLE_BUTTONS'],
    INLINE_STYLE_BUTTONS: [
        {label: 'Bold', style: 'BOLD', className: 'custom-css-class'},
        {label: 'Italic', style: 'ITALIC'},
        {label: 'Underline', style: 'UNDERLINE'}
    ],
};

class RichText extends React.Component<any> {
    state = {
        value: RichTextEditorIntance.createEmptyValue()
    }

    onChange = (value) => {
        this.setState({value});
        if (this.props.onChange) {
            // Send the changes up to the parent component as an HTML string.
            // This is here to demonstrate using `.toString()` but in a real app it
            // would be better to avoid generating a string on each change.
            this.props.onChange(
                value.toString('html')
            );
        }
    };

    render() {
        return (
            <RichTextEditorIntance
                value={this.state.value}
                onChange={this.onChange}
                toolbarConfig={toolbarConfig}
            />
        );
    }
}

export default RichText;