import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from 'react';
import PageHeader from './PageHeader.js';
import PageFooter from './PageFooter.js';
import '../css/feedback.css'

export default function Feedback() {

    const navigate = useNavigate()
    const [render, setRender] =  useState(true)
    const [loading, setLoading] = useState(false)
    const [errorState, setErrorState] =  useState(false)
    const [messageState, setMessageState] = useState('')
    const [isCompleted, setIsCompleted] = useState(false)
    const [feedback, setFeedback] = useState({
        name: '',
        email: '',
        comment: ''
    })

    // const axiosPost = async (url, data, controller) =>{
    //     setLoading(true)
    //     const dataJSON = JSON.stringify(data)
    //     const config = {
    //     headers: { "Content-type": "application/json" },
    //     signal: controller};
    //     const response = await axios.post(url, dataJSON, config);
    //     return response
    // };

    useEffect( ()=>{
        const controller = new AbortController();
        if (!render){
            (async()=>{
                setLoading(true)
                const feedbackJson = JSON.stringify({...feedback})
                const config = {
                headers: { "Content-type": "application/json" },
                signal: controller.signal};
                const response = await axios.post('feedbacks', feedbackJson, config);
                return response
            })()
            .then( response =>{
                if(response){
                    if(response.hasOwnProperty('status'))
                        if(response.status === 201){
                            setMessageState('Thank your for you feedback')
                            setRender(true)
                            setIsCompleted(true)
            }}})
            .catch(error =>{
                if(error.response.data.hasOwnProperty('error')){
                        //backend error
                        const xx = error.response.data.error
                        setMessageState(xx)
                        setErrorState(true)
                        setMessageState(error.response.data.error)
                    }else{
                        //server error
                        setErrorState(true)
                        setMessageState(error.message)
                    }
            })
            .finally(()=>{
                setLoading(false)
                setErrorState(false)
                setRender(true)
                controller.abort()
            })
        }

    },[render] )
    

    const handleChange = e =>{
        setFeedback({...feedback, [e.currentTarget.name]: e.currentTarget.value});
    }
    const handleForm = e =>{
        e.preventDefault();
        setRender(false)
    }

    const prova = e =>{
        e.preventDefault()
        if (isCompleted){
            navigate('/home')
        } else
        {
            handleForm(e)
        }
    }

    return render ? (
        <div className='mb-6'>

            <PageHeader subTitle="Feedback" />

            <div className="container mt-4" style={{width: '500px', height: '600px'}}>
                
                <div className="col-12 mx-auto">
                    <div className="card feedback-area">
                        {/* <div className="card-title text-center fs-4">
                            Feedback
                        </div> */}
                        <div className="row justify-content-center mx-0">
                            <div className="col-auto">

                                <div className="py-3" >
                                    <img className='' src={require("../../images/logo2.png")} alt="trappola" style={{height: '100px', margin: 'auto'}}/>
                                </div>
                            </div>

                        </div>
                        {/* style={{height: '100px', width: '400px', margin: 'auto'}} */}
                        

                        <div className="card-body p-1">
                            <div className="container my-2">
                                <input 
                                    value={feedback.name} 
                                    onChange={handleChange} 
                                    type="text" 
                                    name='name' 
                                    className="form-control inputs" 
                                    aria-describedby="name" 
                                    placeholder='Name'
                                    disabled={isCompleted}
                                />
                            </div>
                            <div className="container my-2">
                                <input 
                                    value={feedback.email} 
                                    onChange={handleChange} 
                                    type="text" 
                                    name='email' 
                                    className="form-control inputs" 
                                    aria-describedby="Email" 
                                    placeholder='Email'
                                    disabled={isCompleted}
                                />
                            </div>
                            <div className="container my-2">
                                <textarea 
                                    value={feedback.comment} 
                                    onChange={handleChange} 
                                    rows="10" 
                                    name='comment' 
                                    className="form-control inputs" 
                                    aria-describedby="comment" 
                                    placeholder='Comment'
                                    disabled={isCompleted}                            />
                            </div>
                            <div className="container my-2">
                                <p name='message' className="text-center border-0 form-control" aria-describedby="comment">{messageState}</p>
                            </div>
                        </div>
                    </div>

                    {/* Buttons Container Start */}
                    <div className="container my-3 buttons-container" >
                        <div className="row g-12">
                            <div className="col-3 mx-auto">
                                <button
                                    type="submit"
                                    id='button-orange'
                                    className="btn w-100"
                                    onClick={prova}
                                    disabled={loading || errorState || !render || false}
                                >
                                    {isCompleted ? "Home" : "Submit"}
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            {/* --------------------------- */}
            </div>
            

            <PageFooter></PageFooter>
        </div>

    )
    : <></>
}
