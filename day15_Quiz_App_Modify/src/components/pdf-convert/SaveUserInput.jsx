import React, { useState } from 'react';
import { Document, Page, Text, StyleSheet, Svg, Line } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    body: {
        paddingTop: 20,
        paddingBottom: 40,
        paddingHorizontal: 20,
    },
    question: {
        fontSize: 24,
        color: "#000819",
        paddingBottom: 5,
        paddingTop: 10,
    },
    answer: {
        marginTop: 4,
        fontSize: 20,
        padding: 5,
        backgroundColor: "#5C6476",
        color: "white",
        borderRadius: 10,
        paddingLeft: 10
    },
    correctAnswer: {
        marginTop: 4,
        fontSize: 20,
        padding: 5,
        backgroundColor: "#021C56",
        color: "white",
        borderRadius: 10,
        paddingLeft: 10
    },
    header: {
        fontSize: 12,
        marginBottom: 10,
        textAlign: "center",
        color: "grey",
    },
    userData: {
        fontSize: 12,
        marginBottom: 2,
        textAlign: "start",
        color: "grey",
    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 15,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
    },
});

const Pdf_Convert = ({ category }) => {
    const [userAnswers, setUserAnswers] = useState({}); // State to store user answers
    const QuizData = [
        {
            category: "Science: Computers",
            question: "The programming language 'Swift' was created to replace what other programming language?",
            correct_answer: "Objective-C",
            incorrect_answers: [
                "Objective-C",
                "C#",
                "Ruby",
                "C++"
            ]
        },
        {
            category: "Science: Computers",
            question: "In computing, what does LAN stand for?",
            correct_answer: "Local Area Network",
            incorrect_answers: [
                "Long Antenna Node",
                "Light Access Node",
                "Local Area Network",
                "Land Address Navigation"
            ]
        }
    ];

    // Function to update user answer for a question
    const handleUserAnswer = (questionIndex, answer) => {
        setUserAnswers({
            ...userAnswers,
            [questionIndex]: answer
        });
    };

    // Function to determine if an answer is correct
    const isCorrectAnswer = (questionIndex, answer) => {
        return answer === QuizData[questionIndex].correct_answer;
    };

    return (
        <Document>
            <Page style={styles.body} size="A4">
                <Text style={styles.header}>
                    QuizData
                </Text>
                <Svg height="8" style={{ paddingTop: 10, paddingBottom: 10 }}>
                    <Line
                        x1="0"
                        y1="0"
                        x2="600"
                        y2="0"
                        strokeWidth={2}
                        stroke="rgb(14,40,40)"
                    />
                </Svg>
                <Text style={styles.userData}>
                    Question of {category}
                </Text>

                <Svg height="8" style={{ paddingTop: 5 }}>
                    <Line
                        x1="0"
                        y1="0"
                        x2="600"
                        y2="0"
                        strokeWidth={2}
                        stroke="rgb(14,40,40)"
                    />
                </Svg>
                {QuizData.map((quiz, index) => (
                    <section key={index} className='mb-10'>
                        <Text style={styles.question}>
                            {index + 1}.&nbsp;{quiz.question}
                        </Text>
                        {quiz.incorrect_answers.map((answer, ansIndex) => (
                            <Text
                                key={ansIndex}
                                style={[
                                    styles.answer,
                                    userAnswers[index] === answer && isCorrectAnswer(index, answer) ? styles.correctAnswer : {}
                                ]}
                                onClick={() => handleUserAnswer(index, answer)}
                            >
                                {answer}
                            </Text>
                        ))}
                    </section>
                ))}
                <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                    `${pageNumber} / ${totalPages}`
                )} fixed />
            </Page>
        </Document>
    );
};

export default Pdf_Convert;