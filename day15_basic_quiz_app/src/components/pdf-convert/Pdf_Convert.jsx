import { Document, Page, StyleSheet, Text } from '@react-pdf/renderer';
import React, { useState } from 'react'


const styles = StyleSheet.create({
    body: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal: 20,
    },
    question: {
        fontSize: 24,
        padding: 5,
        color:"#000819"
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
        marginBottom: 20,
        textAlign: "center",
        color: "grey",
    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
    },
});

const Pdf_Convert = () => {


    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    function onDocumentLoadSuccess(numPages) {
        setNumPages(numPages);
    }


    return (
        <Document onLoadSuccess={onDocumentLoadSuccess}>

            <Page style={styles.body}>
                <Text style={styles.header}>
                    QuizData
                </Text>
                <Text style={styles.question}>
                    1. What does the &quot;MP&quot; stand for in MP3?
                </Text>
                <Text style={styles.correctAnswer}>
                    1. Moving Picture
                </Text>
                <Text style={styles.answer}>
                    2. Music Player
                </Text>
                <Text style={styles.answer}>
                    3. Multi Pass
                </Text>
                <Text style={styles.answer}>
                    4. Micro Point
                </Text>
                <Text style={styles.pageNumber}>
                    {pageNumber} of {numPages}
                </Text>
                {/* render={({ pageNumber, totalPage }) => `${pageNumber} / ${totalPage}`} /> */}
            </Page>
        </Document >

    )
}

export default Pdf_Convert