import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Header from "../../Shared/Header";
// import '../../../public/assets/css/quiz.css'

const customStyles = {
    li: {
        textDecoration: 'none',
        listStyle:'none',
        color: '#2d264b',
        fontSize: '16px',
        background: '#ffffff',
        border: '1px solid #eaeaea',
        borderRadius: '16px',
        padding: '11px',
        marginTop: '15px',
        cursor: 'pointer',
        marginLeft: '10%'
    },
    selectedAnswer: {
        background: '#ffd6ff',
        border: '1px solid #800080',
    },
    button: {
        borderRadius: '9px',
        fontSize: '18px',
        color: 'rgb(0 0 0)',
        padding: '10px 42px',
        outline: 'none',
        border: 'none',
        cursor: 'pointer',
        marginTop: '15px',
    },
    buttonDisabled : {
        background: '#e7e8e9',
        color: '#9fa3a9',
        cursor: 'not-allowed',
    },
    flexRight : {
        display: 'flex',
        justifyContent: 'flex-end',
    }
};

export default function QuizQuestion(){
    const { questionParams } = useParams();
    const [quizQuestions, setQuizQuestions] = useState([]);
    const [activeQuestion, setActiveQuestion] = useState([])
    const fetchSearchQuestion = async ()  => {
        try {
            const {data:data} =  await axios.get(`http://localhost:8000/api/v1/frontend/search-quiz-question`,{
                params: questionParams
            });
            setQuizQuestions(data.data);
            setActiveQuestion(data.data[0] ?? []);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchSearchQuestion();
    }, []);
    console.log(activeQuestion)
    return (
        <>
            <Header/>
            <div className="section section-padding" style={{ background:'darkgray'}}>
                <div className="container">
                        <div style={{ maxWidth: '500px',
                            minWidth: '250px',
                            borderRadius: '4px',
                            marginTop: '100px',
                            padding:' 30px 60px',
                            background: 'lightslategrey',
                            color: '#11052c',
                            marginLeft: '30%',
                        }}>
                            <div>
                            <span style={{ fontSize: '32px',
                                fontWeight: '500',
                                color: '#800080', }}>01</span>
                                <span style={{ fontSize: '16px',
                                    fontWeight: '500',
                                    color: '#e0dee3' }}>{ quizQuestions.length }</span>
                            </div>
                            <h2 style={{ fontSize: '20px',fontWeight: '500',margin: '0', }}>{activeQuestion?.question}</h2>
                            <ul style={{ marginTop: '20px',marginLeft: '-40px' }}>
                                {<li style={customStyles.li}>{activeQuestion?.choices?.choice_one}</li>}
                                {<li style={customStyles.li}>{activeQuestion?.choices?.choice_two}</li>}
                                {<li style={customStyles.li}>{activeQuestion?.choices?.choice_three}</li>}
                                {<li style={customStyles.li}>{activeQuestion?.choices?.choice_four}</li>}
                            </ul>
                            <div style={customStyles.flexRight}>
                                <button style={customStyles.button}>Finish</button>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}