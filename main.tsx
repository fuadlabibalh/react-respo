import React from 'react'
import ReactDOM from 'react-dom/client'
import { useResponsive } from './index'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Apps />
    </React.StrictMode>
)


function Apps (){
    const cssrr = useResponsive()
    return (
        <div style={{display:"flex", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh"}}>
            <button style={cssrr(
            () => ({fontSize: "1.6rem", padding: "1rem", background: "black", display: "flex"}),
            // ({event}) => ({condition: event.hover, style: {color: "red"}})

        )}>
            test
        </button>
        </div>
        
    )
}