import React, {useState,useEffect} from "react";
import axios from 'axios';

export default function Profitiert (){
    const [employees,setEmployees]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").
        then(res=>{
            setEmployees(res.data.slice(0, 7))
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
                <h3 className="fw-bold">Wer profitiert von Arico B2B?</h3>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <div className="d-flex flex-column">
                  <div className="onetitle">
                      <span className="bigone">1</span>
                      <span className="ms-5 z-3">
                        <p className="m-0">Herr Smart,</p>
                        <p className="m-0 custometitle">Produzent</p>
                        <p className="m-0">Von Holzmöbeln</p>
                    </span>
                  </div>
                  <ul className="w-60 contentoneul">
                      {
                          employees.map(employee=>{
                              return(
                                  <li><img src="pic/redimg.svg" /> {employee.title} </li>
                              )
                          })
                      }

                  </ul>
              </div>
                <div className="d-flex flex-row-reverse Profitiertimg w-40" >
                    <img src="pic/1.webp"/>
                </div>
            </div>

            <p className="text-center mt-5">Arico B2B - Lieferketten digital optimieren</p>
            <iframe width="100%" height="100%" className="tw-rounded-2xl Profitiertiframe"
                    src="https://www.youtube.com/embed/7_U5LqeDr2w?si=rmJtY9dzCml3qur6" title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen=""/>

            <div className="d-flex justify-content-center align-items-center mt-5">
                <div className="d-flex flex-row-reverse Profitiertimg w-40" >
                <img src="pic/2.webp"/>
                  </div>
                <div className="contentonetitle align-content-center ">
                    <h3 className="fw-bold">Wie Arico B2B Herrn Smart geholfen hat.</h3>
                    <ul className="w-60 contentoneul p-0">
                        {
                            employees.map(employee=>{
                                return(
                                    <li className="lh-lg"><img src="pic/img.svg" /> {employee.title} </li>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>

        </div>
    )
}