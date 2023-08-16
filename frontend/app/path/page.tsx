'use client'

import React, { useState, useEffect } from 'react';
import { useAuth } from "@/app/AuthContext";

const Questionnaire: React.FC = () => {
    const { jwt } = useAuth();
    console.log("this is jwt from questionnaire " + jwt);
    const [questions, setQuestions] = useState<string[]>([]);
    const [answers, setAnswers] = useState<string[]>([]);

    useEffect(() => {
        async function fetchQuestions() {
            try {
                const options = {
                    method: 'GET',
                    headers: {
                        Authorization: 'Bearer ' + jwt,
                    }
                };
                const response = await fetch('http://localhost:8080/api/path', options);
                const data = await response.json();
                setQuestions(data);
                console.log(data);
                setAnswers(new Array(data.length).fill(''));
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        }

        fetchQuestions();
    }, [jwt]);

    const handleAnswerChange = (index: number, answer: string) => {
        setAnswers((prevAnswers) => {
            const newAnswers = [...prevAnswers];
            newAnswers[index] = answer;
            return newAnswers;
        });
    };

    const handleSubmit = () => {
        // You can implement the logic to submit answers here
        console.log('Answers:', answers);
    };

    return (
        <div>
            <h1>Questionnaire</h1>
            <form>
                {questions.map((question, index) => (
                    <div key={index}>
                        <p>{question}</p>
                        <input
                            type="text"
                            value={answers[index]}
                            onChange={(e) => handleAnswerChange(index, e.target.value)}
                        />
                    </div>
                ))}
                <button type="button" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Questionnaire;
