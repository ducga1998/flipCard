import React from 'react'
import {InputWrapper} from './styled'
import {InputProps} from './types'
import UIButton from '../Button'

const UIInput = React.forwardRef<any, InputProps>((props, ref) => {
    const {
        size,
        variant,
        style,
        type,
        prefix,
        suffix,
        placeholder,
        value,
        parse,
        onChange,
        small,
        disabled,
        defaultValue,
        onClearInput,
        className,
        forceUpdate,
        ...passProps
    } = props

    const inputRef = React.useRef(null)
    React.useEffect(() => {
        if (forceUpdate || (inputRef.current && !inputRef.current.matches(':focus'))) {
            inputRef.current.value = typeof value !== 'undefined' ? value : ''
        }
    })

    return <InputWrapper
        size={size}
        ref={ref}
        variant={variant}
        style={style}
        disabled={disabled}
        className={className}
    >
        {prefix}
        <input
            ref={inputRef}
            defaultValue={defaultValue}
            type={type || 'text'}
            disabled={!!disabled}
            placeholder={placeholder}
            onChange={onChange ? (e => onChange(e.target.value)) : undefined}
            {...passProps}
        />
        {
            (typeof value !== undefined && value !== '')
            &&
            onClearInput
            &&
            (
                <UIButton
                    style={{margin: 0}}
                    variant='transparent'
                    iconBefore='times'
                    onMouseDown={e => {
                        e.preventDefault()
                    }}
                    onClick={() => {
                        inputRef.current.value = ''
                        inputRef.current.focus()
                        onChange('')
                        onClearInput()
                    }}
                />
            )
        }
        {suffix}
    </InputWrapper>
})

export default UIInput