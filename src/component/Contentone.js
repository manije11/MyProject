import React, {useState,useEffect} from "react";
import axios from 'axios';

export default function Contentone (){
    const [employees,setEmployees]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").
            then(res=>{
                setEmployees(res.data.slice(0, 6))
        }).catch(e=>console.log(e))
    },[])
        const val= {
            width:"100%",
            height:"100%",
            allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            title:"YouTube video player"
        }
        return(
            <div className="contentone d-flex flex-column m-auto">
                <div className="contentonetitle m-auto align-content-center ">
                    <h3 className="fw-bold">Was ist Arico B2B?</h3>
                    <p>Einfach finden und gefunden werden.</p>
                </div>
                <div className="d-flex justify-content-around p-5">
                    <ul className="w-50 contentoneul">
                        {
                            employees.map(employee=>{
                               return(
                                   <li><img src="pic/img.svg" /> {employee.title} </li>
                               )
                            })
                        }

                    </ul>
                    <div className="d-flex flex-row-reverse contentoneimg w-50" >
                        <img src="pic/bee-leaning.png"/>
                        <iframe width={val.width} height={val.height} className="tw-rounded-2xl"
                                src="https://www.youtube.com/embed/GIk0pQIzXDw?si=eH6ixRhoZEIAMGtt"
                                title={val.title}
                                allow={val.allow}
                                allowFullScreen=""/>
                    </div>
                </div>
            </div>
        )
}