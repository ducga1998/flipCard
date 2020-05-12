import React, {useState} from 'react'
import UIList from 'UI/List'
import UIButton from 'UI/Button'
import UIText from 'UI/Text'
import UILayout from 'UI/Layout'
import styled from 'styled-components'

import {staticItemList as listData} from './listdata'
import SortableList from "UI/List/SortableList";


export const UIPane = styled(UILayout.Pane)`
    width: 100%;
    border-radius: 2px;
    margin-bottom: 8px;
    height: 100%;
    ul {
        height: 100%;
        width: 93%;
    }
    li {
        padding-left: 0;
        //> div {
        //    flex: 1
        //}
    }
    && button {
        border: none;
        margin-left: 0;
    }

    .empty-search {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        text-align: center;
    }

    + button {
        width: 100%
    }
`


const SortableItemList = props => {
    const [list, setList] = useState(listData)
    return <div style={{ width: 240 }}>
        <UIPane>
            {
                listData.length !== 0
                    ?
                    <SortableList
                        items={list}
                        wrapper={UIList.Group}
                        wrapperProps={{ relaxed: true, padded: true }}
                        dragHandlerSelector={".drag"}
                        onChange={setList}
                        options={{ delay: 100  }}
                        render={(items) => items.map(item => (
                            <UIList.Item key={item.id} interactive bordered>
                                <UIButton className={'drag'} size="small" iconBefore="grab" />
                                <UIText>{item.title}</UIText>
                                <UIButton size="small" iconBefore="copy" />
                                <UIButton size="small" iconBefore="bin" />
                            </UIList.Item>
                        ))}
                    />
                    :
                    <UIText className='empty-search'>
                        Your list is empty! <br /> Click "Add Item" to add new item
                    </UIText>
            }

        </UIPane>
        <UIButton>Add Item</UIButton>
    </div>
}

export default SortableItemList