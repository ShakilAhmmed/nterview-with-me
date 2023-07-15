import Header from "../Shared/Header";
import Offcanvas from "../Shared/Offcanvas";
import React, {useEffect, useState} from "react";
import Modal from 'react-modal';
import { default as ReactSelect } from "react-select";
import Select from "react-select";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        height:'60%',
        width:'60%',
    },
};
Modal.setAppElement('#root');

export default function Quiz() {
    const navigate = useNavigate();
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [quiz, setQuiz] = useState([]);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function handleSelect(data) {
        setSelectedOptions(data);
    }

    async function handleGo() {
        const questionParams = selectedOptions.map(function (item) {
            return {
                'id':item.value
            };
        });
        let path = `/quiz-question/${questionParams}`;
        navigate(path);
        window.location.reload();
    }

    const getQuiz = async () => {
        try {
            const {data:data} = await axios.get(`http://localhost:8000/api/v1/frontend/fetch-quiz`)
            setQuiz(data.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        openModal();
        getQuiz();
    }, []);
    return(
        <>
            <Header />
            <Offcanvas />

            <div className="section section-padding">
                <div className="container">
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <h2>Choose Quiz Topics</h2>
                        <div className="dropdown-container">
                            <Select
                                options={quiz}
                                placeholder="Select Topics"
                                value={selectedOptions}
                                onChange={handleSelect}
                                isSearchable={true}
                                isMulti
                            />

                            <button style={{ marginTop:'5%', marginLeft:'50%'}}
                                    onClick={() => handleGo()}
                                    className='btn-sm btn-primary'>Jump</button>
                        </div>

                    </Modal>
                </div>
            </div>

        </>
    )
}