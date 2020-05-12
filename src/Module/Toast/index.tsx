import React from 'react'
import {ToastContainer} from 'react-toastify'
import styled from 'styled-components'
import UIIcon from "UI/Icon"

const Notification = styled.div`
	.pf-notification{
	    display: flex;
	    min-height: 30px;
	    border-radius: 2px;
	    align-items: center;
	    justify-content: center;
	    font-size: 14px;
	    line-height: 20px;
	    padding: 15px 10px;
	    svg {
	    	fill: ${props => props.theme.N0};
	    }
	    .pf-notification-body{
	        margin-right: 15px;
	    }
	    &.Toastify__toast--success{
	        color: ${props => props.theme.N0};
            background-color: ${props => props.theme.G100};
	    }
	    &.Toastify__toast--info{
	        color: ${props => props.theme.D100};
	        background-color: ${props => props.theme.B100};
	        svg {
		    	fill: ${props => props.theme.D100};
		    }
	    }
	    &.Toastify__toast--warning{
	    	color: ${props => props.theme.D100};
		    background-color: ${props => props.theme.Y100};
		    svg {
		    	fill: ${props => props.theme.D100};
		    }
	    }
	    &.Toastify__toast--error{
	    	color: ${props => props.theme.N0};
		    background-color: ${props => props.theme.R100};
	    }
	    
	}
`

export default function ToastNotification() {

    return <Notification>
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar
            newestOnTop
            closeOnClick
            closeButton={<UIIcon icon="times" size="small"/>}
            pauseOnFocusLoss={false}
            draggable
            style={{marginTop: 30}}
            toastClassName="pf-notification"
            bodyClassName="pf-notification-body"
        />
    </Notification>
}