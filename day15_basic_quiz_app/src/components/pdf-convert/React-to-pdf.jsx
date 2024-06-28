import { Document, Line, Page, StyleSheet, Svg, Text } from '@react-pdf/renderer';
import React from 'react'
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from 'react-icons/io';

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
        paddingTop: 20,
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
        backgroundColor: "#46F365",
        color: "black",
        borderRadius: 10,
        paddingLeft: 10
    },
    header: {
        fontSize: 20,
        marginBottom: 10,
        textAlign: "center",
        color: "black",
    },
    userData: {
        fontSize: 12,
        marginBottom: 2,
        textAlign: "start",
        color: "black",
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

const Pdf_Convert = ({ category, items, result, score }) => {

    const TempData = [
        {

            category: "Science: Computers",
            question: "The programming language &#039;Swift&#039; was created to replace what other programming language?",
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
                "Local Area Network", "Land Address Navigation"
            ]
        }]


    return (
        <Document>
            <Page style={styles.body} size="A4" >
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
                    Total: {result.correctAnswer}/{items.length}
                </Text>
                <Text style={styles.userData}>
                    Question of {category}
                </Text>

                <Text style={styles.userData}>
                    Name: {score?.name}
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
                {items?.map((quiz, index) =>
                    <section key={index} className='mb-10'>
                        <Text style={styles.question}>
                            {index + 1}.&nbsp;{quiz.question}
                        </Text>
                        {quiz.incorrect_answers.map((answer, ansIndex) =>
                            <Text style={answer === quiz.correct_answer ? styles.correctAnswer : styles.answer}
                                key={ansIndex}>
                                {answer === quiz.correct_answer ?
                                    <div className='w-5 h-5 text-white'>
                                        <IoIosRadioButtonOn className='w-full h-full' />
                                    </div> :
                                    <div className='w-5 h-5 text-black'>
                                        <IoIosRadioButtonOff className='w-full h-full'/>
                                    </div>
                                } {answer}
                            </Text>
                        )}
                    </section>
                )}
                <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                    `${pageNumber} / ${totalPages}`
                )} fixed />
            </Page>
        </Document >
    )
}

export default Pdf_Convert