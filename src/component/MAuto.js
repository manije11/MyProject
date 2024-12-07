import React, {Component} from "react";

export default class MAuto extends Component{

    render() {
        return (
            <table className="m-auto w-75">
                <thead
                    className="tw-relative tw-flex tw-w-full tw-flex-row tw-text-white tw-justify-between tw-items-center tw-space-x-0.5 rtl:tw-space-x-reverse">
                <th className="tw-flex-[1.92]">
                    <div className="tw-w-32 tw-self-center tw-mx-auto">
                        <div className="text-center"><a className="logo" href="/">
                            <img src="pic/ARICO-B2B-EPS.svg" style={{width: "9rem"}}/>
                        </a></div>
                    </div>
                </th>
                <th className="tw-flex-1 tw-bg-green-500 tw-p-4 tw-flex tw-flex-row tw-justify-center tw-items-center tw-h-full tw-rounded-t-xl">
                    FREE
                </th>
                <th className="tw-flex-1 tw-bg-blue-600 tw-p-4 tw-flex tw-flex-row tw-justify-center tw-items-center tw-h-full tw-rounded-t-xl">
                    BUSINESS
                </th>
                <th className="tw-flex-1 tw-bg-yellow-600 tw-p-4 tw-flex tw-flex-row tw-justify-center tw-items-center tw-h-full tw-rounded-t-xl">
                    PREMIUM
                </th>
                <th className="tw-flex-1 tw-bg-black tw-p-4 tw-flex tw-flex-row tw-justify-center tw-items-center tw-h-full tw-rounded-t-xl">
                    VIP
                </th>
                </thead>
                <tbody className="tw-flex tw-flex-col">
                <tr className="tw-w-full tw-flex tw-flex-row tw-h-14 tw-items-center">
                    <td className="tw-p-4 tw-bg-gray-100 tw-flex-[1.75] tw-font-bold tw-whitespace-nowrap tw-border tw-border-white">
                        Anzeigenrelevante Funktionen
                    </td>
                    <td className="tw-flex-1 tw-text-gray-100 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-100 tw-border-x tw-border-white">
                        -
                    </td>
                    <td className="tw-flex-1 tw-text-gray-100 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-100 tw-border-x tw-border-white">
                        -
                    </td>
                    <td className="tw-flex-1 tw-text-gray-100 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-100 tw-border-x tw-border-white">
                        -
                    </td>
                    <td className="tw-flex-1 tw-text-gray-100 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-100 tw-border-x tw-border-white">
                        -
                    </td>
                </tr>
                <tr className="tw-w-full tw-flex tw-flex-row tw-h-14 tw-items-center">
                    <td className=" tw-p-4 tw-text-start tw-underline tw-bg-gray-50 tw-flex-[1.75] tw-font-semibold tw-border tw-border-white">
                        <div className="tw-relative tw-flex tw-flex-col tw-items-start tw-group"><span
                            className="tw-flex tw-justify-center">Gesuch-Anzeigen</span>
                        </div>
                    </td>
                    <td className="tw-flex-1 tw-text-green-500 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                             className="tw-text-2xl"
                             height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"/>
                        </svg>
                    </td>
                    <td className="tw-flex-1 tw-text-green-500 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                             className="tw-text-2xl"
                             height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"/>
                        </svg>
                    </td>
                    <td className="tw-flex-1 tw-text-green-500 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                             className="tw-text-2xl"
                             height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"/>
                        </svg>
                    </td>
                    <td className="tw-flex-1 tw-text-green-500 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                             className="tw-text-2xl"
                             height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"/>
                        </svg>
                    </td>
                </tr>
                <tr className="tw-w-full tw-flex tw-flex-row tw-h-14 tw-items-center">
                    <td className="tw-p-4 tw-bg-gray-50 tw-flex-[1.75] tw-font-semibold tw-text-start tw-underline tw-border tw-border-white">
                        <div className="tw-relative tw-flex tw-flex-col tw-items-start tw-group"><span
                            className="tw-flex tw-justify-center">Angebot-Anzeigen</span>
                        </div>
                    </td>
                    <td className="tw-flex-1 tw-text-green-500 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                             className="tw-text-2xl"
                             height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"/>
                        </svg>
                    </td>
                    <td className="tw-flex-1 tw-text-green-500 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                             className="tw-text-2xl"
                             height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"/>
                        </svg>
                    </td>
                    <td className="tw-flex-1 tw-text-green-500 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                             className="tw-text-2xl"
                             height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"/>
                        </svg>
                    </td>
                    <td className="tw-flex-1 tw-text-green-500 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                             className="tw-text-2xl"
                             height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"/>
                        </svg>
                    </td>
                </tr>
                <tr className="tw-w-full tw-flex tw-flex-row tw-h-14 tw-items-center">
                    <td className=" tw-text-start tw-underline tw-p-4 tw-flex tw-bg-gray-50 tw-flex-[1.75] tw-font-semibold  tw-border tw-border-white">
                        <div className="tw-relative tw-flex tw-flex-col tw-items-start tw-group"><span
                            className="tw-flex tw-justify-center">Anzahl der beinhalteten Ads/Monat</span>
                        </div>
                    </td>
                    <td className="tw-flex-1 tw-flex tw-flex-row tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        <strong className="tw-mr-1">2 Ads</strong></td>
                    <td className="tw-flex-1 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        <strong>7 Ads</strong></td>
                    <td className="tw-flex-1 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        <strong> 20 Ads</strong></td>
                    <td className="tw-flex-1 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        <strong> 50 Ads</strong></td>
                </tr>
                <tr className="tw-w-full tw-flex tw-flex-row tw-h-14 tw-items-center">
                    <td className="tw-p-4 tw-underline tw-text-start tw-flex tw-bg-gray-50 tw-flex-[1.75] tw-font-semibold  tw-border tw-border-white">
                        <div className="tw-relative tw-flex tw-flex-col tw-items-start tw-group"><span
                            className="tw-flex tw-justify-center">Preis pro extra ad/Monat</span>
                        </div>
                    </td>
                    <td className="tw-flex-1 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        -
                    </td>
                    <td className="tw-flex-1 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        2,99€
                    </td>
                    <td className="tw-flex-1 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        0,99€
                    </td>
                    <td className="tw-flex-1 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        0,50€
                    </td>
                </tr>
                <tr className="tw-w-full tw-flex tw-flex-row tw-h-14 tw-items-center">
                    <td className="tw-p-4 tw-bg-gray-100 tw-flex-[1.75] tw-font-bold tw-whitespace-nowrap tw-border tw-border-white">
                        Messerelevante Funktionen
                    </td>
                    <td className="tw-flex-1 tw-text-gray-100 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-100 tw-border-x tw-border-white">
                        -
                    </td>
                    <td className="tw-flex-1 tw-text-gray-100 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-100 tw-border-x tw-border-white">
                        -
                    </td>
                    <td className="tw-flex-1 tw-text-gray-100 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-100 tw-border-x tw-border-white">
                        -
                    </td>
                    <td className="tw-flex-1 tw-text-gray-100 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-100 tw-border-x tw-border-white">
                        -
                    </td>
                </tr>
                <tr className="tw-w-full tw-flex tw-flex-row tw-h-14 tw-items-center">
                    <td className=" tw-underline tw-text-start tw-p-4 tw-bg-gray-50 tw-flex-[1.75] tw-font-semibold tw-border tw-border-white">
                        <div className="tw-relative tw-flex tw-flex-col tw-items-start tw-group"><span
                            className="tw-flex tw-justify-center">Aussteller der Messe</span>
                        </div>
                    </td>
                    <td className="tw-flex-1 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        -
                    </td>
                    <td className="tw-flex-1 tw-text-green-500 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                             className="tw-text-2xl"
                             height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"/>
                        </svg>
                    </td>
                    <td className="tw-flex-1 tw-text-green-500 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                             className="tw-text-2xl"
                             height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"/>
                        </svg>
                    </td>
                    <td className="tw-flex-1 tw-text-green-500 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                             className="tw-text-2xl"
                             height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"/>
                        </svg>
                    </td>
                </tr>
                <tr className="tw-w-full tw-flex tw-flex-row tw-h-14 tw-items-center">
                    <td className=" tw-underline tw-text-start tw-p-4 tw-bg-gray-50 tw-flex-[1.75] tw-font-semibold tw-border tw-border-white">
                        <div className="tw-relative tw-flex tw-flex-col tw-items-start tw-group"><span
                            className="tw-flex tw-justify-center">Besucher der Messe</span>
                        </div>
                    </td>
                    <td className="tw-flex-1 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        -
                    </td>
                    <td className="tw-flex-1 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        -
                    </td>
                    <td className="tw-flex-1 tw-text-green-500 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                             className="tw-text-2xl"
                             height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"/>
                        </svg>
                    </td>
                    <td className="tw-flex-1 tw-text-green-500 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                             className="tw-text-2xl"
                             height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"/>
                        </svg>
                    </td>
                </tr>
                <tr className="tw-w-full tw-flex tw-flex-row tw-h-20 tw-items-center">
                    <td className=" tw-h-20 tw-underline tw-text-start tw-p-4 tw-bg-gray-50 tw-flex-[1.75] tw-font-semibold tw-border tw-border-white">
                        <div className="tw-relative tw-flex tw-flex-col tw-items-start tw-group"><span
                            className="tw-flex tw-justify-center">Kategorie-Benachrichtigungen über Angebote</span>
                        </div>
                    </td>
                    <td className="tw-h-20 tw-flex-1 tw-text-green-500 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                             className="tw-text-2xl"
                             height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"/>
                        </svg>
                    </td>
                    <td className="tw-h-20 tw-flex-1 tw-text-green-500 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                             className="tw-text-2xl"
                             height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"/>
                        </svg>
                    </td>
                    <td className="tw-h-20 tw-flex-1 tw-text-green-500 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                             className="tw-text-2xl"
                             height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"/>
                        </svg>
                    </td>
                    <td className="tw-h-20 tw-flex-1 tw-text-green-500 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                             className="tw-text-2xl"
                             height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"/>
                        </svg>
                    </td>
                </tr>
                <tr className="tw-w-full tw-flex tw-flex-row tw-h-20 tw-items-center">
                    <td className=" tw-h-20 tw-underline tw-text-start tw-p-4 tw-bg-gray-50 tw-flex-[1.75] tw-font-semibold tw-border tw-border-white">
                        <div className="tw-relative tw-flex tw-flex-col tw-items-start tw-group"><span
                            className="tw-flex tw-justify-center">Kategorie-Benachrichtigungen über Gesuche</span>
                        </div>
                    </td>
                    <td className="tw-flex-1 tw-h-20 tw-text-green-500 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                             className="tw-text-2xl"
                             height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"/>
                        </svg>
                    </td>
                    <td className="tw-flex-1 tw-h-20 tw-text-green-500 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                             className="tw-text-2xl"
                             height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"/>
                        </svg>
                    </td>
                    <td className="tw-flex-1 tw-h-20 tw-text-green-500 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                             className="tw-text-2xl"
                             height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"/>
                        </svg>
                    </td>
                    <td className="tw-flex-1 tw-h-20 tw-text-green-500 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                             className="tw-text-2xl"
                             height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"/>
                        </svg>
                    </td>
                </tr>
                <tr className="tw-w-full tw-flex tw-flex-row tw-h-14 tw-items-center">
                    <td className=" tw-underline tw-text-start tw-p-4 tw-bg-gray-50 tw-flex-[1.75] tw-font-semibold tw-border tw-border-white">
                        <div className="tw-relative tw-flex tw-flex-col tw-items-start tw-group"><span
                            className="tw-flex tw-justify-center">Teilnahme an Arico Deals</span>
                        </div>
                    </td>
                    <td className="tw-flex-1 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        -
                    </td>
                    <td className="tw-flex-1 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        -
                    </td>
                    <td className="tw-flex-1 tw-text-green-500 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                             className="tw-text-2xl"
                             height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"/>
                        </svg>
                    </td>
                    <td className="tw-flex-1 tw-text-green-500 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                             className="tw-text-2xl"
                             height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"/>
                        </svg>
                    </td>
                </tr>
                <tr className="tw-w-full tw-flex tw-flex-row tw-h-14 tw-items-center">
                    <td className=" tw-p-4 tw-bg-gray-100 tw-flex-[1.75] tw-font-bold tw-whitespace-nowrap tw-border tw-border-white">
                        Benutzerprofilfunktionen
                    </td>
                    <td className="tw-flex-1 tw-h-14 tw-text-gray-100 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-100 tw-border-x tw-border-white">
                        -
                    </td>
                    <td className="tw-flex-1 tw-h-14 tw-text-gray-100 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-100 tw-border-x tw-border-white">
                        -
                    </td>
                    <td className="tw-flex-1 tw-h-14 tw-text-gray-100 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-100 tw-border-x tw-border-white">
                        -
                    </td>
                    <td className="tw-flex-1 tw-h-14 tw-text-gray-100 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-100 tw-border-x tw-border-white">
                        -
                    </td>
                </tr>
                <tr className="tw-w-full tw-flex tw-flex-row tw-h-20 tw-items-center">
                    <td className=" tw-h-20 tw-underline tw-text-start tw-p-4 tw-bg-gray-50 tw-flex-[1.75] tw-font-semibold tw-border tw-border-white">
                        <div className="tw-relative tw-flex tw-flex-col tw-items-start tw-group"><span
                            className="tw-flex tw-justify-center">Übersicht aller Anzeigen Ihres Unternehmens</span>
                        </div>
                    </td>
                    <td className="tw-flex-1 tw-flex tw-flex-col tw-h-20 tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        -
                    </td>
                    <td className="tw-flex-1 tw-text-green-500 tw-h-20 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                             className="tw-text-2xl"
                             height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"/>
                        </svg>
                    </td>
                    <td className="tw-flex-1 tw-text-green-500 tw-h-20 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                             className="tw-text-2xl"
                             height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"/>
                        </svg>
                    </td>
                    <td className="tw-flex-1 tw-text-green-500 tw-h-20 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                             className="tw-text-2xl"
                             height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"/>
                        </svg>
                    </td>
                </tr>
                <tr className="tw-w-full tw-flex tw-flex-row tw-h-14 tw-items-center">
                    <td className=" tw-underline tw-text-start tw-p-4 tw-bg-gray-50 tw-flex-[1.75] tw-font-semibold tw-border tw-border-white">
                        <div className="tw-relative tw-flex tw-flex-col tw-items-start tw-group"><span
                            className="tw-flex tw-justify-center">Ansprechpartner</span>
                        </div>
                    </td>
                    <td className="tw-flex-1 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        1
                    </td>
                    <td className="tw-flex-1 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        2
                    </td>
                    <td className="tw-flex-1 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        10
                    </td>
                    <td className="tw-flex-1 tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        20
                    </td>
                </tr>
                <tr className="tw-w-full tw-flex tw-flex-row tw-h-14 tw-items-center">
                    <td className=" tw-underline tw-text-start tw-h-20 tw-p-4 items-center justify-center tw-bg-gray-50 tw-flex-[1.75] tw-font-semibold tw-border tw-border-white">
                        <div className="tw-relative tw-flex tw-flex-col tw-items-start tw-group"><span
                            className="tw-flex tw-justify-center">Benutzerdefinierte Domain für Benutzerprofil</span>
                        </div>
                    </td>
                    <td className="tw-flex-1 tw-flex tw-flex-col tw-h-20 tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        -
                    </td>
                    <td className="tw-flex-1 tw-flex tw-flex-col tw-h-20 tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        Auf Anfrage
                    </td>
                    <td className="tw-flex-1 tw-flex tw-flex-col tw-h-20 tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        Auf Anfrage
                    </td>
                    <td className="tw-flex-1 tw-flex tw-flex-col tw-h-20 tw-justify-center tw-items-center tw-p-4 tw-bg-gray-50 tw-border tw-border-white">
                        Auf Anfrage
                    </td>
                </tr>

                </tbody>
            </table>
        );
    }
}