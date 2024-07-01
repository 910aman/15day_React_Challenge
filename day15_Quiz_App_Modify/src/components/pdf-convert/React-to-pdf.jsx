/* eslint-disable react/prop-types */
import { Document, Page, Text, StyleSheet, Svg, Line, Defs, RadialGradient, Circle, Stop } from '@react-pdf/renderer';
import { IoMdCheckmark } from 'react-icons/io';
import pngCheckMark from '../../assets/checkmark.png'

const styles = StyleSheet.create({
    body: {
        paddingTop: 20,
        paddingBottom: 45,
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
        paddingLeft: 10,
        display: 'flex',
        alignItems: "center",
        flexDirection: 'row',
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
        fontSize: 20,
        marginBottom: 5,
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
    userAnswer: {
        backgroundColor: "#E99393",
    },
    icon: {
        marginRight: 10,
        backgroundColor: "#E99393",

    }
});

const Pdf_Convert = ({ category, items, score, result }) => {
    const selectedAnswers = JSON.parse(localStorage.getItem("userInput"));
    console.log("Selected Category", selectedAnswers, score);


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
                        stroke="rgb(14,40,40)" />
                </Svg>
                <Text style={styles.userData}>
                    Total: {result.correctAnswer}/{items.length}
                </Text>
                <Text style={styles.userData}>
                    Category: {category}
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
                {items.map((quiz, index) => (
                    <section key={index} className='mb-10'>
                        <Text style={styles.question}>
                            {index + 1}.&nbsp;{quiz.question}
                        </Text>
                        {quiz.incorrect_answers.map((answer, ansIndex) => (
                            <Text
                                key={ansIndex}
                                style={[
                                    styles.answer,
                                    answer === selectedAnswers[index.toString()] ? { pngCheckMark } : {},
                                    answer === quiz.correct_answer ? styles.correctAnswer : {},
                                ]}>
                                {answer}&nbsp;
                                {pngCheckMark}
                                <div>
                                    <Svg viewBox="0 0 10 20" width="170">
                                        <Defs>
                                            <RadialGradient id="myRadialGradient">
                                                <Stop offset="10%" stopColor="gold" />
                                                <Stop offset="95%" stopColor="red" />
                                            </RadialGradient>
                                        </Defs>
                                        <Circle cx="5" cy="14" r="4" fill="url('#myRadialGradient')" />
                                    </Svg>
                                </div>
                            </Text>
                        ))}
                    </section>
                ))}
                <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                    `${pageNumber} / ${totalPages}`
                )} fixed />
            </Page>
        </Document >
    );
};

export default Pdf_Convert;
