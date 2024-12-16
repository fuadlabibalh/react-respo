import React from 'react'
import ReactDOM from 'react-dom/client'
import { useResponsive } from '.'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Apps />
    </React.StrictMode>
)


function Apps (){
    const cssrr = useResponsive()
    return (
        <div style={cssrr(
            () => ({fontSize: "1.6rem", padding: "1rem"}),
            ({event}) => ({condition: event.hover === true, style: {color: "red"}})

        )}>
            test
        </div>
        
    )
}