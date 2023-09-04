import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Header from "../../Shared/Header";
import Offcanvas from "../../Shared/Offcanvas";
import http from '../../interceptors/http';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PageBannerStart from "../Course/PageBannerStart";
import "../../css/style.css"
import "../../css/responsive.css"
import "../../css/animation.css"
import "../../css/result_style.css"
export default function QuizQuestion() {

    const { quiz_id } = useParams();
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [totalQuestion, setTotalQuestion] = useState(0);
    const [quizInfo, setQuizInfo] = useState({});
    const [answerQuestions, setAnswerQuestions] = useState([]);
    const fetchSearchQuestion = async () => {
        try {
            const {
                data: { data }
            } = await http.get(`/frontend/fetch-quiz-question/${quiz_id}`);

            if (data) {
                setQuestions(data.questions);
                setCurrentQuestion(data.questions[0]);
                setTotalQuestion(data.questions.length);
                setQuizInfo(data.quiz);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const quizForm = useFormik({
        initialValues: {
            question_id: '',
            question: '',
            choices: {},
            choice_answer: '',
            is_multi: ''
        },
        validationSchema: Yup.object({
            choice_answer: Yup.mixed().required('Required')
        }),
        onSubmit: (values, { resetForm }) => {
            if(totalQuestion === currentQuestionNumber) {
                console.log('Submit Here');

            } else  {
                nextQuestion();
                resetForm({ values: '' });
            }


        }
    });

    const isChecked = (key) => {
        if(Array.isArray(quizForm.values.choice_answer)) {
            return quizForm.values.choice_answer.includes(key);
        }
       return  quizForm.values.choice_answer === key;
    };

    const handleQuestion = value => {
        console.log(value);
    };

    const nextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCurrentQuestionNumber(currentQuestionNumber + 1);
        setCurrentQuestion(questions[currentQuestionIndex + 1]);
    };

    useEffect(() => {
        fetchSearchQuestion();
        console.log(currentQuestion);
    }, []);


    return (
        <>
            <Header/>
            <Offcanvas/>
            <PageBannerStart name="Quiz" title={quizInfo.QuizTitle}/>
            <div className="section section-padding">
                <div className="container">
                    <div className='step-number pull-right'>
                        <div className='step-number-inner'>
                            Question <span id='activeStep'>{currentQuestionNumber}</span>/
                            {totalQuestion}
                        </div>
                    </div>
                    <main>

                        <div className='container'>
                            <div className='row'>
                                <div className='tab-100 order-c col-md-5 p-relative'>
                                    <div className='side-img'>
                                        <img src='/assets/images/side.png' alt='side-img' />
                                    </div>
                                </div>
                                <div className='tab-100 col-md-7'>
                                    <div className='show-section wrapper'>
                                        <section className='steps' style={{}}>
                                            <form
                                                className='needs-validation'
                                                noValidate
                                                onSubmit={quizForm.handleSubmit}>
                                                <h2 className='q-heading'>{currentQuestion?.question}</h2>
                                                <div className='form-inner'>
                                                    {Object.keys(currentQuestion?.choices ?? {}).map(
                                                        (key, index) => {
                                                            return (
                                                                <div className='bounce-left radio-field'>
                                                                    <input
                                                                        className='checkmark'
                                                                        type={
                                                                            !!currentQuestion.is_multi
                                                                                ? 'checkbox'
                                                                                : 'radio'
                                                                        }
                                                                        id='choice_answer'
                                                                        name='choice_answer'
                                                                        onChange={quizForm.handleChange}
                                                                        onBlur={quizForm.handleBlur}
                                                                        checked={isChecked(key)}
                                                                        value={key}
                                                                    />
                                                                    <label>
                                                                        {currentQuestion?.choices[key]}
                                                                    </label>
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                    <div className='text-danger'>
                                                        {quizForm.touched.choice_answer &&
                                                            quizForm.errors.choice_answer && (
                                                                <div>{quizForm.errors.choice_answer}</div>
                                                            )}
                                                    </div>
                                                </div>
                                                <div className='next-prev'>
                                                    {totalQuestion === currentQuestionNumber ? (
                                                        <>
                                                            <button
                                                                type='submit'
                                                                className='apply'
                                                                id='sub'>
                                                                Submit
                                                                <i className='fa-solid fa-arrow-right'></i>
                                                            </button>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <button
                                                                type='submit'
                                                                className='next'
                                                                id='step1btn'>
                                                                next question
                                                                <i className='fa-solid fa-arrow-right' />
                                                            </button>
                                                        </>
                                                    )}
                                                </div>
                                            </form>
                                        </section>
                                        <div className='question overflow-hidden'>
                                            <img src='/assets/images/question-sign.png' alt='question' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='loadingresult'>
                            <img src='/assets/images/loading.gif' alt='loading' />
                        </div>
                        <div className='result_page'>
                            <div className='result_inner'>
                                <div className='result_inner2'>
                                    <h2>Knowledge Check</h2>
                                    <div className='u_result'>
                                        <div className='u_score'>Your Score:</div>
                                        <div className='u_prcnt'>20%</div>
                                        <span>20 Points</span>
                                    </div>
                                    <div className='p_result'>
                                        <div className='p_score'>Passing Score:</div>
                                        <div className='p_prcnt'>80%</div>
                                        <span>80 Points</span>
                                    </div>
                                    <div className='line' />
                                    <div className='result_show'>
                                        <h2>Result</h2>
                                        <div className='pass_check'>
                                            <i className='fa-solid fa-xmark' />
                                            You did not Pass
                                        </div>
                                        <div className='result_msg'>Better Luck Next Time!</div>
                                    </div>
                                </div>
                                <img
                                    className='behind_bg'
                                    src='/assets/images/bh-clip.png'
                                    alt='rectangle'
                                />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}