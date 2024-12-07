import React from "react"

export default function Footer(){
    return(
        <footer>
            <ul className="d-flex flex-row justify-content-evenly border-bottom border-top border-light py-3">
                <li><a href="#" className="text-light">AGB</a></li>
                <li><a href="#" className="text-light">Impressum</a></li>
                <li><a href="#" className="text-light">Datenschutzerklärung</a></li>
                <li><a href="#" className="insraimg"><img src="pic/instagram.svg" /></a></li>
            </ul>
            <p className="text-center mt-4">Copyright©2023 Arico GmbH all rights reserved</p>
            <p className="text-center">Powered by Arico IT</p>
        </footer>
    )
}