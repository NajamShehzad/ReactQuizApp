
const QuizData = [{
    name: 'Angular',
    Quiz: [
        {
            totalQuestions: 10,
            time: 45,
            questions: [{
                question: 'What is Your First Name',
                options: ["Najam", 'Ashar', 'Butt'],
                correctAnswer: 0
            },{
                question: 'What is Your Middle Name',
                options: ["mutlib", 'Shehzad', 'Butt'],
                correctAnswer: 0
            },{
                question: 'What is Your Last Name',
                options: ["Najam", 'Butt', 'rehman'],
                correctAnswer: 0
            }]
        },
        {
            totalQuestions: 8,
            time: 35,
            questions: [{
                question: 'What is Your Name',
                options: ["Najam", 'Shehzad', 'Butt'],
                correctAnswer: 0
            }]
        }
    ]
},{
    name: 'React',
    Quiz: [
        {
            totalQuestions: 10,
            time: 45,
            questions: [{
                question: 'What is Your Name',
                options: ["Najam", 'Shehzad', 'Butt'],
                correctAnswer: 0
            }]
        },
        {
            totalQuestions: 8,
            time: 35,
            questions: [{
                question: 'What is Your Fav Language',
                options: ["English", 'Urdu', 'Punjabi'],
                correctAnswer: 0
            }]
        }
    ]
}]

export default QuizData;