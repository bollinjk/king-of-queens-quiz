// King of Queens Ultimate Fan Trivia - Quiz Data and Logic

// Quiz data organized by sections
const quizData = {
    sections: [
        {
            name: "DOUG'S FOOD ADVENTURES",
            questions: [
                {
                    question: "What was Doug's favorite sandwich?",
                    options: ["Pastrami on rye", "Turkey club", "Meatball sub", "BLT"],
                    correct: 0
                },
                // ... [Previous questions remain the same]
            ]
        },
        // ... [Previous sections remain the same]
    ]
};

// Game state
let currentSection = 0;
let currentQuestion = 0;
let userAnswers = [];
let timeLeft = 1800; // 30 minutes in seconds
let timerInterval;
let quizStarted = false;

// DOM elements
const screens = {
    welcome: document.getElementById('welcome-screen'),
    sectionIntro: document.getElementById('section-intro-screen'),
    quiz: document.getElementById('quiz-screen'),
    results: document.getElementById('results-screen')
};

const elements = {
    startQuiz: document.getElementById('start-quiz'),
    sectionName: document.getElementById('section-name'),
    sectionCount: document.getElementById('section-count'),
    startSection: document.getElementById('start-section'),
    currentSection: document.getElementById('current-section'),
    questionCounter: document.getElementById('question-counter'),
    timeLeft: document.getElementById('time-left'),
    progressFill: document.getElementById('progress-fill'),
    questionText: document.getElementById('question-text'),
    answerOptions: document.getElementById('answer-options'),
    nextQuestion: document.getElementById('next-question'),
    finalScore: document.getElementById('final-score'),
    scoreLevel: document.getElementById('score-level'),
    sectionBreakdown: document.getElementById('section-breakdown'),
    detailedAnswers: document.getElementById('detailed-answers'),
    restartQuiz: document.getElementById('restart-quiz'),
    shareResults: document.getElementById('share-results')
};

// Initialize the quiz
function initializeQuiz() {
    // Initialize user answers array
    userAnswers = [];
    for (let i = 0; i < quizData.sections.length; i++) {
        userAnswers[i] = [];
        for (let j = 0; j < quizData.sections[i].questions.length; j++) {
            userAnswers[i][j] = null;
        }
    }
    
    // Add event listeners
    elements.startQuiz.addEventListener('click', startQuiz);
    elements.startSection.addEventListener('click', startCurrentSection);
    elements.nextQuestion.addEventListener('click', nextQuestion);
    elements.restartQuiz.addEventListener('click', restartQuiz);
    elements.shareResults.addEventListener('click', shareResults);
}

// Start the quiz
function startQuiz() {
    quizStarted = true;
    currentSection = 0;
    currentQuestion = 0;
    startTimer();
    showSectionIntro();
}

// Show section introduction
function showSectionIntro() {
    hideAllScreens();
    screens.sectionIntro.classList.add('active');
    
    const section = quizData.sections[currentSection];
    elements.sectionName.textContent = section.name;
    elements.sectionCount.textContent = `${section.questions.length} questions`;
}

// Start current section
function startCurrentSection() {
    hideAllScreens();
    screens.quiz.classList.add('active');
    updateQuizHeader();
    displayQuestion();
}

// Update quiz header information
function updateQuizHeader() {
    const totalSections = quizData.sections.length;
    const currentSectionQuestions = quizData.sections[currentSection].questions.length;
    
    elements.currentSection.textContent = `Section ${currentSection + 1} of ${totalSections}`;
    elements.questionCounter.textContent = `Question ${currentQuestion + 1} of ${currentSectionQuestions}`;
    
    // Update progress bar
    const totalQuestions = quizData.sections.reduce((total, section) => total + section.questions.length, 0);
    const completedQuestions = calculateCompletedQuestions();
    const progress = (completedQuestions / totalQuestions) * 100;
    elements.progressFill.style.width = `${progress}%`;
}

// Calculate total completed questions
function calculateCompletedQuestions() {
    let completed = 0;
    
    // Add all questions from completed sections
    for (let i = 0; i < currentSection; i++) {
        completed += quizData.sections[i].questions.length;
    }
    
    // Add current question number from current section
    completed += currentQuestion;
    
    return completed;
}

// Display current question
function displayQuestion() {
    const section = quizData.sections[currentSection];
    const question = section.questions[currentQuestion];
    
    elements.questionText.textContent = question.question;
    elements.answerOptions.innerHTML = '';
    
    // Create answer options
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'answer-option';
        optionElement.setAttribute('data-letter', String.fromCharCode(65 + index)); // A, B, C, D
        optionElement.textContent = option;
        
        // Check if this option was previously selected
        if (userAnswers[currentSection][currentQuestion] === index) {
            optionElement.classList.add('selected');
            elements.nextQuestion.disabled = false;
        }
        
        optionElement.addEventListener('click', () => selectAnswer(index, optionElement));
        elements.answerOptions.appendChild(optionElement);
    });
}

// Select an answer
function selectAnswer(answerIndex, optionElement) {
    // Remove selection from all options
    document.querySelectorAll('.answer-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Add selection to clicked option
    optionElement.classList.add('selected');
    
    // Store the answer
    userAnswers[currentSection][currentQuestion] = answerIndex;
    
    // Enable next button
    elements.nextQuestion.disabled = false;
}

// Move to next question
function nextQuestion() {
    const section = quizData.sections[currentSection];
    
    if (currentQuestion < section.questions.length - 1) {
        // Move to next question in current section
        currentQuestion++;
        updateQuizHeader();
        displayQuestion();
        elements.nextQuestion.disabled = true;
    } else {
        // Move to next section or finish quiz
        if (currentSection < quizData.sections.length - 1) {
            currentSection++;
            currentQuestion = 0;
            showSectionIntro();
        } else {
            // Quiz completed
            finishQuiz();
        }
    }
}

// Start the timer
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            finishQuiz();
        } else if (timeLeft <= 60) {
            // Warning when 1 minute left
            elements.timeLeft.parentElement.classList.add('warning');
        }
    }, 1000);
}

// Update timer display
function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    elements.timeLeft.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Finish the quiz
function finishQuiz() {
    clearInterval(timerInterval);
    calculateResults();
    showResults();
}

// Calculate quiz results
function calculateResults() {
    let totalCorrect = 0;
    let sectionResults = [];
    
    for (let i = 0; i < quizData.sections.length; i++) {
        const section = quizData.sections[i];
        let sectionCorrect = 0;
        
        for (let j = 0; j < section.questions.length; j++) {
            if (userAnswers[i][j] === section.questions[j].correct) {
                sectionCorrect++;
                totalCorrect++;
            }
        }
        
        sectionResults.push({
            name: section.name,
            correct: sectionCorrect,
            total: section.questions.length
        });
    }
    
    return {
        totalCorrect,
        totalQuestions: quizData.sections.reduce((total, section) => total + section.questions.length, 0),
        sectionResults
    };
}

// Show results screen
function showResults() {
    hideAllScreens();
    screens.results.classList.add('active');
    
    const results = calculateResults();
    
    // Display final score
    elements.finalScore.textContent = `${results.totalCorrect}/${results.totalQuestions}`;
    elements.scoreLevel.textContent = getScoreLevel(results.totalCorrect);
    
    // Display section breakdown
    elements.sectionBreakdown.innerHTML = '';
    results.sectionResults.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'section-score';
        sectionDiv.innerHTML = `
            <span class="section-name">${section.name}</span>
            <span class="section-result">${section.correct}/${section.total}</span>
        `;
        elements.sectionBreakdown.appendChild(sectionDiv);
    });
    
    // Display detailed answers
    elements.detailedAnswers.innerHTML = '';
    let questionNumber = 1;
    
    for (let i = 0; i < quizData.sections.length; i++) {
        const section = quizData.sections[i];
        
        for (let j = 0; j < section.questions.length; j++) {
            const question = section.questions[j];
            const userAnswer = userAnswers[i][j];
            const isCorrect = userAnswer === question.correct;
            
            const questionDiv = document.createElement('div');
            questionDiv.className = `question-result ${isCorrect ? 'correct' : 'incorrect'}`;
            
            const userAnswerText = userAnswer !== null ? question.options[userAnswer] : 'No answer';
            const correctAnswerText = question.options[question.correct];
            
            questionDiv.innerHTML = `
                <div class="question">${questionNumber}. ${question.question}</div>
                <div class="answer-comparison">
                    <div>Your answer: <span class="${isCorrect ? 'correct' : 'incorrect'}-answer">${userAnswerText}</span></div>
                    <div>Correct answer: <span class="correct-answer">${correctAnswerText}</span></div>
                </div>
            `;
            
            elements.detailedAnswers.appendChild(questionDiv);
            questionNumber++;
        }
    }
}

// Get score level based on correct answers
function getScoreLevel(score) {
    if (score >= 90) return 'Ultimate King of Queens Expert 👑';
    if (score >= 75) return 'Super Fan ⭐';
    if (score >= 60) return 'Dedicated Viewer 🏆';
    if (score >= 45) return 'Regular Watcher 📺';
    if (score >= 30) return 'Casual Fan 🎬';
    return 'Novice 🆕';
}

// Restart the quiz
function restartQuiz() {
    // Reset all variables
    currentSection = 0;
    currentQuestion = 0;
    timeLeft = 1800;
    quizStarted = false;
    
    // Clear timer
    clearInterval(timerInterval);
    
    // Reset timer display
    elements.timeLeft.textContent = '30:00';
    elements.timeLeft.parentElement.classList.remove('warning');
    
    // Reset progress bar
    elements.progressFill.style.width = '0%';
    
    // Reset user answers
    initializeQuiz();
    
    // Show welcome screen
    hideAllScreens();
    screens.welcome.classList.add('active');
}

// Share results
function shareResults() {
    const results = calculateResults();
    const scoreLevel = getScoreLevel(results.totalCorrect);
    
    const shareText = `I just took the King of Queens Ultimate Fan Trivia and scored ${results.totalCorrect}/${results.totalQuestions}! I'm a ${scoreLevel}! 👑`;
    
    if (navigator.share) {
        navigator.share({
            title: 'King of Queens Ultimate Fan Trivia Results',
            text: shareText,
            url: window.location.href
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Results copied to clipboard!');
        }).catch(() => {
            alert(`Your result: ${shareText}`);
        });
    }
}

// Hide all screens
function hideAllScreens() {
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', initializeQuiz);
