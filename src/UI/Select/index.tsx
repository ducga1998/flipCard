import groupBy from 'lodash/groupBy'
import isArray from 'lodash/isArray'
import isEmpty from 'lodash/isEmpty'
import mapValues from 'lodash/mapValues'
import omit from 'lodash/omit'
import React, {RefObject} from 'react'
import UIButton from 'UI/Button'
import UIIcon from 'UI/Icon'
import UIInput from 'UI/Input'
import UILayout from 'UI/Layout'
import UIList from 'UI/List'
import UIPopover from 'UI/Popover'
import {$CustomItem, $WrapItem} from './styled'
import {SelectProps} from './types'

interface SelectState {
    searchTerm: string
    searchList: any
    openPopup: boolean
    resetList: boolean
}

class UISelect extends React.Component<SelectProps, SelectState> {
    state = {
        searchTerm: '',
        searchList: [],
        openPopup: false,
        resetList: false
    }
    typing = false
    handleChange = async (val) => {
        await this.setState({searchTerm: val})
        const searchResult = this.getSearchList(this.state.searchTerm)
        this.setState({searchList: searchResult, openPopup: !isEmpty(searchResult), resetList: false})
        this.props.onChange && this.props.onChange(this.state.searchTerm)
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.openPopup !== prevState.openPopup && this.state.openPopup) {
            if (document.querySelectorAll('.selected-item')[0]) {
                document.querySelectorAll('.selected-item')[0].scrollIntoView(true)
            }
        }
    }

    getSearchList = (searchText: string) => {
        const {options} = this.props
        let resultAfterFilter
        let title
        if (searchText && !this.state.resetList) {
            resultAfterFilter = options.filter(
                item => {
                    if (item.group) {
                        title = item.group
                    } else {
                        title = ''
                    }
                    const search = new RegExp(this.state.searchTerm, 'i')
                    return search.test(item.label) || search.test(item.value)
                }
            )
            return title ? mapValues(groupBy(resultAfterFilter, 'group'), list => list.map(el => omit(el, 'group'))) : resultAfterFilter
        } else {
            title = options.filter(item => {
                if (item.group) {
                    return item.group
                } else {
                    return null
                }
            })
            return title.length > 0 ? mapValues(groupBy(options, 'group'), list => list.map(el => omit(el, 'group'))) : options
        }
    }
    renderContent = (listData) => {
        if (isEmpty(listData)) {
            return null
        } else {
            const mapItem = (item, index) => {
                const isSelected = item.value === this.props.value
                // console.log(isSelected, item, this.props.value)
                return <$WrapItem
                    className={isSelected && 'selected-item'}
                    key={index}
                    onClick={async () => {
                        await this.setState({
                            searchTerm: item.label,
                            openPopup: false,
                            resetList: true
                        })
                        this.props.onChange && this.props.onChange(item.value)
                    }}>
                    {this.props.customItemView ? this.props.customItemView(item) :
                        <UIList.Item interactive active={isSelected}>{item.label}</UIList.Item>}
                </$WrapItem>
            }
            if (isArray(listData)) {
                return <UILayout.Pane style={{...this.props.styleContent}}>
                    <UIList.Group>
                        {listData.map(mapItem)}
                    </UIList.Group>
                </UILayout.Pane>
            } else {
                return <UILayout.Pane style={{...this.props.styleContent}}>
                    {Object.keys(listData).map(mapItem)}
                </UILayout.Pane>
            }
        }
    }

    closePopup = () => {
        this.setState({openPopup: false})
    }

    inputRef: RefObject<HTMLElement> = React.createRef()

    render() {
        const {placeholder, options, style} = this.props
        const {searchTerm, openPopup} = this.state
        const listData = this.getSearchList(searchTerm)

        const selectedItem = options.filter(item => typeof (item) === 'object' ? item[this.props.valueKey ? this.props.valueKey : 'value'] === (typeof (this.props.value) === 'string' ? this.props.value.replace(/['"]+/g, '') : this.props.value) : item)[0] || ''

        const suffixOfSelect = <UIButton iconBefore={openPopup ? 'angleUp' : 'angleDown'}
                                         disabled={this.props.disabled}
                                         variant='transparent'
                                         style={{marginRight: 0}}
                                         onClick={async () => {
                                             await this.setState({openPopup: true, resetList: true})
                                             this.inputRef.current && this.inputRef.current.querySelector('input').focus()
                                         }}/>
        const label = selectedItem[this.props.searchKey ? this.props.searchKey : 'label']
        const selectLabel = label && label.length > 26 ? `${label.slice(0, 26)}...` : label

        const button = (
            <$CustomItem
                style={style}
                disabled={this.props.disabled}
                onMouseDownCapture={(e) => {
                    e.preventDefault()
                    !this.props.disabled && this.setState(state => ({openPopup: !state.openPopup}))
                }}
                active={this.state.openPopup}>
                {this.props.customItemView ? this.props.customItemView(selectedItem) : selectLabel}
                {this.state.openPopup ? <UIIcon icon='angleUp'/> : <UIIcon icon='angleDown'/>}
            </$CustomItem>
        )

        const input = (
            <UIInput
                ref={this.inputRef}
                placeholder={placeholder}
                value={(this.typing || isEmpty(selectedItem)) ? this.state.searchTerm : (typeof (selectedItem) === 'object' ? selectedItem[this.props.searchKey ? this.props.searchKey : 'label'] : selectedItem)}
                suffix={suffixOfSelect}
                onChange={this.handleChange}
                style={style}
                disabled={this.props.disabled}
                onClick={() => {
                    this.setState({resetList: true})
                }}
                onBlur={() => {
                    this.typing = false
                }}
                onFocus={() => {
                    this.typing = true
                    this.setState({openPopup: true})
                }}
            />
        )

        return (
            <UIPopover
                placement="bottom"
                fullWidth
                flip
                onFocusOut={this.closePopup}
                open={openPopup}
                autoFocus={!this.props.searchable}
                target={this.props.searchable ? input : button}
            >
                {this.renderContent(this.props.searchable ? listData : options)}
            </UIPopover>
        )
    }
}

export default UISelect