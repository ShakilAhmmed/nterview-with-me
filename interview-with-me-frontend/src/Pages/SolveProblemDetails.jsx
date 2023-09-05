import React, {useEffect, useState} from 'react'
import AceEditor from "react-ace";
import "../../node_modules/ace-builds/src-min-noconflict/theme-monokai"
import "../../node_modules/ace-builds/src-min-noconflict/theme-twilight"
import "../../node_modules/ace-builds/src-min-noconflict/theme-github"
import "../../node_modules/ace-builds/src-min-noconflict/mode-python"
import "../../node_modules/ace-builds/src-noconflict/ext-language_tools";
import "../fontawesome-free-6.2.1-web/css/fontawesome.css"
import "../fontawesome-free-6.2.1-web/css/brands.css"
import "../fontawesome-free-6.2.1-web/css/solid.css"
import ClockLoader from "react-spinners/ClockLoader";
import {useParams} from 'react-router-dom';
import Header from "../Shared/Header";
import Offcanvas from "../Shared/Offcanvas";
import PageBannerStart from "../Component/Course/PageBannerStart";
import axios from "axios";
import {API} from "../constants/app";
import {login} from "../slices/authSlice";
import {toast} from "react-toastify";
import http from "../interceptors/http";

const ace = require("ace-builds/src-noconflict/ace");
ace.config.set(
    "basePath",
    "https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/"
);
ace.config.setModuleUrl(
    "ace/mode/javascript_worker",
    "https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/worker-javascript.js"
);

const SolveProblemDetails = () => {

    const defaultCode = "class Solution:\n    def twoSum(self, nums, target):";
    const [code, setCode] = useState(defaultCode);
    const [mode, setMode] = useState('python')
    const [data, setData] = useState('')
    const [lang, setLang] = useState('python')
    const [error, setError] = useState('')
    const [main, setMain] = useState(false)
    const [placeholder, setPlaceholder] = useState('')
    const [loading, setLoading] = useState(true)
    const [accepted, setAccepted] = useState(false)

    const [input, setInput] = useState('')
    const [output, setOut] = useState('')
    const [expected, setExpected] = useState('');
    const [m, setm] = useState("")

    const [Q, setQ] = useState()

    function onChange(newValue) {
        setCode(newValue);
    }

    let {question_id} = useParams();

    const getProblemDetails = async () => {
        try {
            const {data: data} = await http.get(`frontend/fetch-problems/${question_id}`);
            // console.log(data.data)
            setQ(data.data);
            setCode(data.data.template);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProblemDetails();
    }, []);
    const run = () => {
        setMain(true)
        setLoading(true)
        setError('')
        setData('')
        setAccepted(false)
        const userEmail = localStorage.getItem('userEmail');
        const data = {
            user_email: userEmail,
            slug: Q.slug,
            question_id: Q.id,
            language: lang,
            solution: code
        }

        axios.post(`${API}/submission`, data)
            .then((res) => {
                console.log(res.data)
                setMain(true)
                if (res.data.status == "fail") {
                    setAccepted(false)
                    let o = res.data.message.split(';');
                    setInput(o[0])
                    setOut(o[1])
                    setExpected('[' + o[2] + ']');

                } else if (res.data.status == "pass") {
                    setm(res.data.message)
                    setAccepted(true)
                } else if (res.data.status == "err_exe" || res.data.status == "err_cmp") {
                    setAccepted(false)
                    setError(res.data.message)
                }
                setLoading(false)

            }).catch((err) => {
                console.log("H", err)
                setAccepted(false)
                setMain(true)
                setError("Error")
                setLoading(false)
            }
        )
    }

    const clear = () => {
        setError('')
        setData('')
    }
    return (
        <>
            <Header/>
            <Offcanvas/>
            <PageBannerStart name="Problem Statement" minHeight="280"/>

            <div className="row">
                <div className="col-sm-6">
                    <div style={{margin: '2%'}}>
                        <span className="p-2"
                              dangerouslySetInnerHTML={{__html: Q?.problem_statement}}></span>
                    </div>
                </div>
                <div className="col-sm-6">

                    {AceEditor && (
                        <AceEditor
                            placeholder={"Enter your code here"}
                            mode={"python"}
                            height={500}
                            width='95%'
                            theme="github"
                            name="blah2"
                            onChange={onChange}
                            fontSize={20}
                            showPrintMargin={true}
                            showGutter={true}
                            highlightActiveLine={true}
                            value={code}
                            setOptions={{
                                enableBasicAutocompletion: true,
                                enableLiveAutocompletion: true,
                                enableSnippets: true,
                                showLineNumbers: true,
                                tabSize: 4,
                            }}></AceEditor>
                    )}
                    <br/>
                    <button onClick={run} type="button" className="btn btn-primary btn-sm">Submit</button>
                    {main ? <>

                        {error ? <>
                            <div className="p-3 result grey rounded overflow-auto">
                                <div className="d-flex justify-content-between">
                                    <p className='text-danger'>{error}</p>
                                </div>
                            </div>

                        </> : <>

                            {loading ?
                                <div
                                    className="d-flex flex-column justify-content-center align-items-center p-3 result grey rounded overflow-hidden">
                                    <ClockLoader
                                        color="#f6fef9"
                                        size={70}
                                        speedMultiplier={3}
                                    /></div> : <>
                                    {accepted ? <div
                                            className='d-flex flex-column justify-content-center align-items-center p-3 result grey rounded overflow-hidden'>
                                            <img style={{
                                                height : '150px',
                                                marginLeft : '3%'
                                            }} src="/assets/images/wired-flat-1103-confetti.gif"/>
                                            <i style={{
                                                fontSize: '30px',
                                                color: '#2fb92fb8',
                                            }} className="fa-regular fa-square-check fs-1 mb-1"/>
                                            <h5 className="text-success">Accepted</h5>
                                            <p>{m}</p>
                                        </div> :
                                        <div className="d-flex flex-column justify-content-center align-items-center p-3 result grey rounded overflow-hidden">
                                            <img style={{
                                                height : '150px',
                                                marginLeft : '0%'
                                            }} src="/assets/images/wired-outline-1122-thumb-down.gif"/>
                                        <div className="p-3 result grey rounded overflow-hidden">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="text-danger">Wrong Answer</h6>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="formGroupExampleInput" className="form-label">
                                                    <b>INPUTS</b>
                                                </label>
                                                <input
                                                    value={input}
                                                    type="text"
                                                    className="form-control grey2 border-0"
                                                    id="formGroupExampleInput"
                                                    placeholder="Example input placeholder"
                                                    disabled=""
                                                    defaultValue={12}
                                                />
                                            </div>
                                            <div className="row">
                                                <div className="mb-3 col">
                                                    <label htmlFor="formGroupExampleInput2" className="form-label">
                                                        <b>OUTPUT</b>
                                                    </label>
                                                    <input
                                                        value={output}
                                                        type="text"
                                                        className="form-control grey2 border-0"
                                                        id="formGroupExampleInput2"
                                                        placeholder="Another input placeholder"
                                                        disabled=""
                                                        defaultValue={12}
                                                    />
                                                </div>
                                                <div className="mb-3 col">
                                                    <label htmlFor="formGroupExampleInput2" className="form-label">
                                                        <b>EXPECTED</b>
                                                    </label>
                                                    <input
                                                        value={expected}
                                                        type="text"
                                                        className="form-control grey2 border-0"
                                                        id="formGroupExampleInput2"
                                                        placeholder="Another input placeholder"
                                                        disabled=""
                                                        defaultValue={12}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        </div>

                                    }
                                </>}
                        </>}
                    </> : <>
                        <div
                            className="d-flex flex-column justify-content-center align-items-center p-3 result grey rounded overflow-hidden">
                            <p>You must run your code first</p>
                        </div>

                    </>}
                    <div className="d-flex justify-content-end">
                        <button onClick={run} style={{marginRight : '1%'}} type="button" className="btn btn-info btn-sm">
                            SUBMIT &nbsp;<i className="fa fa-caret-right"></i>
                        </button>
                    </div>
                    <div className="row p-4">
                        <div className="col-md-12 d-flex gap-3">
                            <div className="col-sm-6 card" style={{
                                marginTop: '3%',
                                // marginLeft : '5%'
                            }}>
                                <div style={{margin: '2%'}}>
                        <span className="p-2"
                              dangerouslySetInnerHTML={{__html: Q?.problem_statement}}></span>
                                </div>
                            </div>

                            <div className="col-sm-6 card" style={{
                                marginTop: '3%',
                            }}>

                                {AceEditor && (
                                    <AceEditor
                                        placeholder={"Enter your code here"}
                                        mode={"python"}
                                        height={620}
                                        width='95%'
                                        theme="github"
                                        name="blah2"
                                        onChange={onChange}
                                        fontSize={20}
                                        showPrintMargin={true}
                                        showGutter={true}
                                        highlightActiveLine={true}
                                        value={code}
                                        setOptions={{
                                            enableBasicAutocompletion: true,
                                            enableLiveAutocompletion: true,
                                            enableSnippets: true,
                                            showLineNumbers: true,
                                            tabSize: 4,
                                        }}></AceEditor>
                                )}
                                <br/>
                            </div>
                        </div>
                    </div>
        </>
            </div>
            </>
    )
}

export default SolveProblemDetails;