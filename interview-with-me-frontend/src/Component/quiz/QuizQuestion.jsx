import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Header from "../../Shared/Header";
import http from "../../interceptors/http";
import {useFormik} from "formik";
// import '../../../public/assets/css/quiz.css'


export default function QuizQuestion() {
    const {quiz_id} = useParams();
    const [quizQuestions, setQuizQuestions] = useState([]);
    const [questionsIds, setQuestionIds] = useState([]);
    const [quizTitle, setQuizTitle] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isMultiple, setIsMultiple] = useState(null);
    const [questionId, setQuestionId] = useState(null);
    const [question, setQuestions] = useState(null);
    const [answer, setAnswer] = useState(null);
    const [quizOptions, setQuizOptions] = useState([]);
    const fetchSearchQuestion = async () => {
        try {
            const {data: data} = await http.get(`/frontend/search-quiz-question/${quiz_id}`);
            let questionId = [];
            setQuizTitle(data.data[1]);
            data.data[0].forEach((question) => {
                questionId.push(question.question_id);
                setQuestionIds(questionId)
            });
            setQuestions(data.data[0][currentQuestion].question);
            setQuestionId(data.data[0][currentQuestion].question_id);
            setIsMultiple(data.data[0][currentQuestion].is_multi);
            setAnswer(data.data[0][currentQuestion].correct_choice.value);
            setQuizOptions(data.data[0][currentQuestion].choices);
        } catch (error) {
            console.log(error)
        }
    }

    const fetchQuestion  = async (question_Id) => {
        try {
            const {data:data} = await http.get(`/frontend/fetch-question/${question_Id}`)
        } catch (error) {

        }
    }

    const quizQuestionForm = useFormik({
        initialValues: {
            'correct_choice': '',
            'question_id': '',
            'quiz_id': ''
        },
        onSubmit: (values, {resetForm}) => {
            values.quiz_id = quizTitle.id;
            values.question_id = questionId;
            let question_Id = questionsIds.shift();
            fetchQuestion(question_Id)
        },

    })

    useEffect(() => {
        fetchSearchQuestion();
    }, []);
    useEffect(() => {
        let question_Id = questionsIds.shift();
        console.log(question_Id,'question_Id 2')
        fetchQuestion(question_Id);
    })
    return (
        <>
            <Header/>
            <div className="section section-padding">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-1'></div>
                        <div className='col-md-9'>
                            <form onSubmit={quizQuestionForm.handleSubmit}>
                                <div className="card">
                                    <div className="card-header">
                                        {/*<h4>{quizTitle?.QuizTitle}</h4>*/}
                                        <button className='btn btn-outline-dark' style={{float: "right"}}
                                                type='submit'>Next
                                        </button>
                                    </div>
                                    {parseInt(isMultiple) === 0 ?
                                        <div className="card-body" style={{padding: '1rem 2rem'}}>
                                            <div style={{marginTop: '28px'}}>
                                                <h4 style={{marginBottom: '4px'}}>{question}</h4>
                                                <div className="form-check" style={{paddingLeft: '2em'}}>
                                                    <input className="form-check-input" type="radio"
                                                           name="correct_choice"
                                                           onChange={quizQuestionForm.handleChange}
                                                           onBlur={quizQuestionForm.handleBlur}
                                                           value={quizOptions.choice_one}
                                                           id={quizOptions.choice_one}/>
                                                    <label className="form-check-label"
                                                           htmlFor={quizOptions.choice_one}>
                                                        {quizOptions.choice_one}
                                                    </label>
                                                </div>
                                                <div className="form-check" style={{paddingLeft: '2em'}}>
                                                    <input className="form-check-input" type="radio"
                                                           name="correct_choice"
                                                           onChange={quizQuestionForm.handleChange}
                                                           onBlur={quizQuestionForm.handleBlur}
                                                           value={quizOptions.choice_two}
                                                           id={quizOptions.choice_two}/>
                                                    <label className="form-check-label"
                                                           htmlFor={quizOptions.choice_two}>
                                                        {quizOptions.choice_two}
                                                    </label>
                                                </div>
                                                <div className="form-check" style={{paddingLeft: '2em'}}>
                                                    <input className="form-check-input" type="radio"
                                                           name="correct_choice"
                                                           onChange={quizQuestionForm.handleChange}
                                                           onBlur={quizQuestionForm.handleBlur}
                                                           value={quizOptions.choice_three}
                                                           id={quizOptions.choice_three}/>
                                                    <label className="form-check-label"
                                                           htmlFor={quizOptions.choice_three}>
                                                        {quizOptions.choice_three}
                                                    </label>
                                                </div>
                                                <div className="form-check" style={{paddingLeft: '2em'}}>
                                                    <input className="form-check-input" type="radio"
                                                           name="correct_choice"
                                                           onChange={quizQuestionForm.handleChange}
                                                           onBlur={quizQuestionForm.handleBlur}
                                                           value={quizOptions.choice_four}
                                                           id={quizOptions.choice_four}/>
                                                    <label className="form-check-label"
                                                           htmlFor={quizOptions.choice_four}>
                                                        {quizOptions.choice_four}
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <></>
                                    }
                                </div>
                            </form>
                        </div>
                        {/*<div className='col-md-2'></div>*/}
                    </div>
                </div>
            </div>
        </>
    )
}