// King of Queens Ultimate Fan Trivia - Quiz Data and Logic

// Quiz data organized by sections
const quizData = {
    sections: [
        {
            name: "DOUG'S WORK LIFE",
            questions: [
                {
                    question: "What was the name of Doug's supervisor at IPS who frequently gave him grief?",
                    options: ["Patrick O'Boyle", "Jack O'Boyle", "Steve O'Boyle", "Mike O'Boyle"],
                    correct: 0
                },
                {
                    question: "What was Doug's employee ID number at IPS?",
                    options: ["D1457", "D1547", "D1574", "D1745"],
                    correct: 2
                },
                {
                    question: "Which of Doug's co-workers lived in his basement briefly?",
                    options: ["Deacon", "Spence", "Danny", "Richie"],
                    correct: 2
                },
                {
                    question: "What was the name of the strip club where Doug accidentally delivered a package meant for IPS headquarters?",
                    options: ["The Jungle", "The Wild Side", "Platinum Peaks", "The Fox Den"],
                    correct: 0
                },
                {
                    question: "What gift did Doug receive for his 10-year anniversary at IPS?",
                    options: ["A watch", "A jacket", "A plaque", "A pen set"],
                    correct: 2
                },
                {
                    question: "What was the name of Doug's delivery route before he got \"Highland Park\"?",
                    options: ["Pine Hills", "Maple Grove", "Oakland Gardens", "Forest Hills"],
                    correct: 3
                },
                {
                    question: "What food item did Doug hide in his truck's sun visor?",
                    options: ["Twinkies", "Ring Dings", "Ho Hos", "Swiss Rolls"],
                    correct: 1
                },
                {
                    question: "What was the name of the driver Doug had to train who ended up being better liked than him?",
                    options: ["Eddie", "Tommy", "Jimmy", "Bobby"],
                    correct: 2
                }
            ]
        },
        {
            name: "DOUG'S MARRIED LIFE",
            questions: [
                {
                    question: "Where did Doug and Carrie first meet?",
                    options: ["At a bar", "At IPS", "At a football game", "At Coopers"],
                    correct: 3
                },
                {
                    question: "What was Doug and Carrie's wedding song?",
                    options: ["\"You Are So Beautiful\"", "\"We've Only Just Begun\"", "\"Cherish\"", "\"Time After Time\""],
                    correct: 1
                },
                {
                    question: "What anniversary gift did Doug accidentally destroy that Carrie was saving?",
                    options: ["Their wedding cake top", "Their wedding video", "Their first photo together", "Their wedding invitation"],
                    correct: 0
                },
                {
                    question: "What was the name of Doug and Carrie's dog that passed away?",
                    options: ["Stanley", "Cooper", "Parker", "Bailey"],
                    correct: 0
                },
                {
                    question: "What is the address of the Heffernan house?",
                    options: ["3121 Aberdeen Street", "2343 Aberdeen Street", "3121 Anderson Street", "2343 Anderson Street"],
                    correct: 0
                },
                {
                    question: "What was the occupation of the couple Doug and Carrie befriended at their cooking class?",
                    options: ["Doctors", "Lawyers", "Teachers", "Accountants"],
                    correct: 1
                },
                {
                    question: "What color did Carrie paint the kitchen without consulting Doug?",
                    options: ["Yellow", "Blue", "Green", "Orange"],
                    correct: 2
                },
                {
                    question: "What item did Doug buy instead of the washing machine they needed?",
                    options: ["A big screen TV", "A pool table", "A motorcycle", "A pinball machine"],
                    correct: 1
                }
            ]
        },
        {
            name: "DOUG'S ATHLETIC LIFE",
            questions: [
                {
                    question: "What position did Doug play on his company softball team?",
                    options: ["Pitcher", "First Base", "Catcher", "Third Base"],
                    correct: 2
                },
                {
                    question: "What was the name of Doug's bowling team?",
                    options: ["The Pinheads", "The Strike Force", "The Gutterballers", "The King Pins"],
                    correct: 1
                },
                {
                    question: "What sport did Doug play that caused him to injure his knee?",
                    options: ["Basketball", "Football", "Racquetball", "Softball"],
                    correct: 2
                },
                {
                    question: "What was Doug's nickname when he played high school football?",
                    options: ["The Beast", "The Wall", "The Train", "The Tank"],
                    correct: 2
                },
                {
                    question: "How many times did Doug claim to have completed the New York City Marathon?",
                    options: ["Once", "Twice", "Three times", "Never actually completed it"],
                    correct: 3
                },
                {
                    question: "What martial art did Doug briefly take up?",
                    options: ["Karate", "Kung Fu", "Tai Chi", "Judo"],
                    correct: 0
                },
                {
                    question: "What was the name of the gym Doug joined but never went to?",
                    options: ["Fitness Empire", "Downtown Fitness", "Power Gym", "Total Health"],
                    correct: 0
                }
            ]
        },
        {
            name: "ARTHUR & SUPPORTING CHARACTERS",
            questions: [
                {
                    question: "What was Arthur's job before retirement?",
                    options: ["Real estate agent", "Insurance salesman", "Restaurant owner", "Janitor"],
                    correct: 0
                },
                {
                    question: "What was the name of Spence's mother?",
                    options: ["Veronica", "Victoria", "Valerie", "Virginia"],
                    correct: 0
                },
                {
                    question: "What medical condition did Holly's boyfriend have that prevented him from dancing?",
                    options: ["Inner ear infection", "Vertigo", "Bad knee", "Flat feet"],
                    correct: 1
                },
                {
                    question: "What was the name of Deacon's first son?",
                    options: ["Major", "Minor", "Junior", "Kirby"],
                    correct: 2
                },
                {
                    question: "What was the name of the retirement home where Arthur briefly lived?",
                    options: ["Sunset Village", "Pine Valley", "Maple Gardens", "Springfield Manor"],
                    correct: 0
                },
                {
                    question: "What was Danny's occupation before becoming an IPS driver?",
                    options: ["Firefighter", "Police officer", "Subway conductor", "Construction worker"],
                    correct: 0
                },
                {
                    question: "What was the name of Carrie's half-sister?",
                    options: ["Sara", "Lisa", "Kelly", "Jenny"],
                    correct: 0
                }
            ]
        }
    ]
};

// Game state
let currentSection = 0;
let currentQuestion = 0;
let userAnswers = [];
let timeLeft = 600; // 10 minutes in seconds
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
    if (score >= 25) return 'King/Queen of Queens Superfan';
    if (score >= 20) return 'IPS Supervisor Level';
    if (score >= 15) return 'Regular Customer';
    if (score >= 10) return 'Occasional Viewer';
    return 'Time to binge-watch the series!';
}

// Restart the quiz
function restartQuiz() {
    // Reset all variables
    currentSection = 0;
    currentQuestion = 0;
    timeLeft = 600;
    quizStarted = false;
    
    // Clear timer
    clearInterval(timerInterval);
    
    // Reset timer display
    elements.timeLeft.textContent = '10:00';
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
