// King of Queens Ultimate Fan Trivia - Quiz Data and Logic

// Quiz data organized by sections
const quizData = {
    sections: [
        {
            name: "DOUG & CARRIE'S RELATIONSHIP",
            questions: [
                {
                    question: "Where did Doug and Carrie first meet?",
                    options: ["At Cooper's Bar", "At IPS", "At the DMV", "At a bowling alley"],
                    correct: 0
                },
                {
                    question: "What did Doug famously give up for Lent?",
                    options: ["Pizza", "TV", "Beer", "Meat"],
                    correct: 0
                },
                {
                    question: "What hobby did Carrie try to get Doug to take up?",
                    options: ["Reading", "Walking", "Photography", "Painting"],
                    correct: 0
                },
                {
                    question: "What was Doug and Carrie's typical Chinese food order?",
                    options: ["General Tso's chicken", "Moo shu pork", "Beef and broccoli", "Sweet and sour chicken"],
                    correct: 2
                },
                {
                    question: "Where did Doug hide his emergency food stash?",
                    options: ["In the garage", "In his truck", "Behind the water heater", "In his toolbox"],
                    correct: 2
                },
                {
                    question: "What was the name of Doug and Carrie's favorite pizza place?",
                    options: ["Gino's", "Tony's", "Mario's", "Luigi's"],
                    correct: 0
                },
                {
                    question: "What gift did Doug buy instead of an anniversary present for Carrie?",
                    options: ["A big screen TV", "A pool table", "A gaming system", "A massage chair"],
                    correct: 1
                },
                {
                    question: "What did Doug name his sandwich at Cooper's?",
                    options: ["The King", "The Douglas", "The Heffernan Special", "The Queens Delight"],
                    correct: 0
                },
                {
                    question: "What kind of car did Doug and Carrie typically drive?",
                    options: ["Jeep Cherokee", "Ford Explorer", "Honda Civic", "Toyota Camry"],
                    correct: 0
                },
                {
                    question: "What was Doug's favorite TV show that Carrie hated?",
                    options: ["Flashdance", "Star Trek", "Battlestar Galactica", "The A-Team"],
                    correct: 1
                }
            ]
        },
        {
            name: "SUPPORTING CHARACTERS",
            questions: [
                {
                    question: "Who was Doug's best friend?",
                    options: ["Deacon", "Spence", "Danny", "Richie"],
                    correct: 0
                },
                {
                    question: "What famous actor lived next door to Doug and Carrie?",
                    options: ["Lou Ferrigno", "Adam Sandler", "Ray Romano", "Jerry Stiller"],
                    correct: 0
                },
                {
                    question: "What was Spence's occupation?",
                    options: ["Subway token clerk", "Teacher", "Doctor", "Accountant"],
                    correct: 0
                },
                {
                    question: "What was Holly's main job throughout the series?",
                    options: ["Dog walker", "Waitress", "Secretary", "Hairdresser"],
                    correct: 0
                },
                {
                    question: "What was Deacon's wife's name?",
                    options: ["Kelly", "Kim", "Karen", "Katie"],
                    correct: 0
                },
                {
                    question: "What was Danny's previous job before IPS?",
                    options: ["Firefighter", "Police officer", "Construction worker", "Mail carrier"],
                    correct: 0
                },
                {
                    question: "Where did Arthur originally live before moving in with Doug and Carrie?",
                    options: ["Queens apartment", "Brooklyn house", "Manhattan condo", "Long Island home"],
                    correct: 0
                },
                {
                    question: "What was Carrie's occupation?",
                    options: ["Legal secretary", "Real estate agent", "Bank teller", "Insurance agent"],
                    correct: 0
                },
                {
                    question: "What sport was Spence particularly bad at?",
                    options: ["Bowling", "Basketball", "Baseball", "Football"],
                    correct: 1
                },
                {
                    question: "What was the name of the bar where the gang usually hung out?",
                    options: ["Cooper's", "Murphy's", "O'Malley's", "Patrick's"],
                    correct: 0
                },
                {
                    question: "Who was Doug's supervisor at IPS?",
                    options: ["O'Boyle", "Sullivan", "O'Brien", "Murphy"],
                    correct: 0
                },
                {
                    question: "What was Ray Barone's connection to Doug?",
                    options: ["Friend from Cooper's", "Delivery route customer", "High school friend", "Cousin"],
                    correct: 1
                },
                {
                    question: "Who lived in Doug and Carrie's basement temporarily?",
                    options: ["Danny", "Spence", "Richie", "Deacon"],
                    correct: 0
                },
                {
                    question: "What was Holly's boyfriend's occupation?",
                    options: ["Dog groomer", "Mechanic", "Teacher", "Bartender"],
                    correct: 0
                },
                {
                    question: "What was Arthur's typical outfit?",
                    options: ["Suit and tie", "Sweater vest", "Track suit", "Hawaiian shirt"],
                    correct: 2
                }
            ]
        },
        {
            name: "DOUG'S WORK LIFE",
            questions: [
                {
                    question: "What company did Doug drive for?",
                    options: ["UPS", "IPS", "FedEx", "DHL"],
                    correct: 1
                },
                {
                    question: "What was Doug's favorite lunch spot on his route?",
                    options: ["Subway", "White Castle", "McDonald's", "Burger King"],
                    correct: 1
                },
                {
                    question: "What did Doug's work friends call him?",
                    options: ["Moose", "Big Guy", "Heffernan", "Chief"],
                    correct: 2
                },
                {
                    question: "What happened when Doug tried to become a supervisor?",
                    options: ["Failed the test", "Got nervous and quit", "Passed but declined", "Lost to another driver"],
                    correct: 0
                },
                {
                    question: "What was Doug's typical uniform color?",
                    options: ["Brown", "Blue", "Grey", "Green"],
                    correct: 1
                },
                {
                    question: "Which coworker constantly borrowed money from Doug?",
                    options: ["Deacon", "Danny", "Richie", "Spence"],
                    correct: 2
                },
                {
                    question: "What did Doug often do in his truck between deliveries?",
                    options: ["Nap", "Eat", "Read comics", "Listen to music"],
                    correct: 1
                },
                {
                    question: "What was Doug's usual delivery area?",
                    options: ["Queens", "Brooklyn", "Manhattan", "Long Island"],
                    correct: 0
                },
                {
                    question: "What vehicle did Doug drive before becoming a delivery driver?",
                    options: ["Ice cream truck", "Taxi", "Pizza delivery car", "Moving van"],
                    correct: 0
                },
                {
                    question: "What was Doug's typical excuse for being late to work?",
                    options: ["Traffic", "Train delays", "Overslept", "Car trouble"],
                    correct: 2
                }
            ]
        },
        {
            name: "MEMORABLE EPISODES & MOMENTS",
            questions: [
                {
                    question: "What did Doug join to lose weight?",
                    options: ["Weight Watchers", "Food Addicts", "Jenny Craig", "Gym membership"],
                    correct: 1
                },
                {
                    question: "What instrument did Arthur try to learn?",
                    options: ["Piano", "Violin", "Drums", "Guitar"],
                    correct: 0
                },
                {
                    question: "What sport did Doug play in the company league?",
                    options: ["Softball", "Basketball", "Bowling", "Football"],
                    correct: 0
                },
                {
                    question: "What was Doug's favorite holiday?",
                    options: ["Christmas", "Thanksgiving", "Halloween", "Fourth of July"],
                    correct: 1
                },
                {
                    question: "What was the name of Doug and Carrie's dog?",
                    options: ["Stanley", "Rocky", "Max", "Bailey"],
                    correct: 0
                },
                {
                    question: "What did Arthur sell door-to-door?",
                    options: ["Vacuum cleaners", "Encyclopedia sets", "Kitchen knives", "Beauty products"],
                    correct: 2
                },
                {
                    question: "What did Doug name his basement apartment?",
                    options: ["The Cave", "The Den", "The Fortress", "The Hideout"],
                    correct: 0
                },
                {
                    question: "What game show did Doug appear on?",
                    options: ["Family Feud", "The Price is Right", "Wheel of Fortune", "Jeopardy"],
                    correct: 1
                },
                {
                    question: "What did Doug collect?",
                    options: ["Baseball cards", "Comic books", "Hot Wheels", "Stamps"],
                    correct: 1
                },
                {
                    question: "What was Doug's favorite food at the Chinese restaurant?",
                    options: ["Orange chicken", "Kung pao chicken", "Lo mein", "Egg rolls"],
                    correct: 0
                },
                {
                    question: "What activity did Doug and Carrie take classes in?",
                    options: ["Dancing", "Cooking", "Swimming", "Tennis"],
                    correct: 1
                },
                {
                    question: "What was Arthur's biggest fear?",
                    options: ["Heights", "Dogs", "Flying", "Water"],
                    correct: 2
                },
                {
                    question: "What was Doug's childhood nickname?",
                    options: ["Dougie", "The Train", "Big D", "Heff"],
                    correct: 0
                },
                {
                    question: "What was Doug's favorite arcade game?",
                    options: ["Pac-Man", "Street Fighter", "Frogger", "Space Invaders"],
                    correct: 2
                },
                {
                    question: "What was the name of the retirement home Arthur briefly stayed in?",
                    options: ["Sunset Village", "Pine Valley", "Queens Manor", "Golden Years"],
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
    if (score >= 45) return 'King/Queen of Queens Expert';
    if (score >= 35) return 'Super Fan';
    if (score >= 25) return 'Devoted Viewer';
    if (score >= 15) return 'Casual Fan';
    return 'Time to start watching!';
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
