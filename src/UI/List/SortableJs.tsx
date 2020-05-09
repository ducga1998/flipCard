import React, {useEffect} from 'react'
import Sortable from 'sortablejs'

interface IProps {
    wrapper: React.Component | React.FunctionComponent
    options?: any
    onChange?: (oldIndex, newIndex) => void
    children: React.ReactChild
}

const SortableJs = (props) => {
    let sortRef = null
    const {children, wrapper: Component, options, onChange, wrapperProps} = props
    const defaultOptions = {
        onEnd: function (evt) {
            if (options.onEnd) {
                options.onEnd(evt)
            }
            if (onChange) {
                if (evt.oldIndex < evt.newIndex)
                    evt.from.insertBefore(evt.item, evt.from.childNodes[evt.oldIndex])
                else if (evt.oldIndex > evt.newIndex) evt.from.insertBefore(evt.item, evt.from.childNodes[evt.oldIndex + 1])
                onChange(evt)
            }
        }
    }
    useEffect(() => {
        let sortable = Sortable.create(sortRef, {...options, ...defaultOptions})
        return () => sortable.destroy()
    })

    return (
        <Component ref={r => sortRef = r} {...wrapperProps}>
            {
                children
            }
        </Component>
    )
}

export default SortableJs