import React from 'react';
import Loading from '../Utils';

import "./summary.css"

const SummaryViewer = (props={layers:{},}) =>{

    let [summary, summaryState] = React.useState({
        data:[],
        fetched:false
    })

    async function getModel(e) {
        window.__TRAINING__ = true;
        await fetch(
          "http://localhost/summary",
          {
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...props.layers })
          }
        )
        .then(response=>response.json())
        .then(data=>{
            summaryState({
                data:data.summary,
                fetched:true
            })
        })
      }

    React.useEffect(()=>{
        if (! summary.fetched){
            getModel()
        }
        clearTimeout(window.__UPDATE_TIMEOUT__)
    })

    return summary.data.length < 1 ?
    (
        <div className="load" style={{ width:"100%", height:"95vh", display:"flex", justifyContent:"center", alignItems:"center" }}>
            <Loading />
        </div>
    )
    :
    (
        <div className="logs">
            {
                summary.data.map((line,i)=>{
                    return (
                        <div key={i} className="log notif sum-col">
                            { 
                                line.map((col,i)=>{
                                    return (
                                        <div className="col" key={i}> 
                                            {col}
                                        </div>
                                    )
                                }) 
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SummaryViewer;