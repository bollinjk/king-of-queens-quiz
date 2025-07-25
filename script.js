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
                {
                    question: "What appetizer did Doug hate?",
                    options: ["Calamari", "Shrimp cocktail", "Bruschetta", "Spinach dip"],
                    correct: 1
                },
                {
                    question: "What was Doug's favorite dessert?",
                    options: ["Carrot cake", "Chocolate cake", "Apple pie", "Ice cream"],
                    correct: 0
                },
                {
                    question: "What fast food place did Doug frequent?",
                    options: ["Wendy's", "McDonald's", "Burger King", "KFC"],
                    correct: 0
                },
                {
                    question: "What was Doug's signature dish called?",
                    options: ["Doug's Delight", "King's Special", "The Heffernan Helper", "Doug's Surprise"],
                    correct: 2
                },
                {
                    question: "What did Doug always steal from Arthur?",
                    options: ["Chips", "Candy", "Cookies", "Crackers"],
                    correct: 2
                },
                {
                    question: "What was Doug's favorite breakfast?",
                    options: ["Western omelet", "Pancakes", "French toast", "Waffles"],
                    correct: 0
                },
                {
                    question: "What food challenge did Doug attempt?",
                    options: ["72 oz steak", "Giant burger", "Hot wings", "Pizza challenge"],
                    correct: 0
                },
                {
                    question: "What was Doug's favorite ice cream flavor?",
                    options: ["Vanilla", "Chocolate", "Mint chocolate chip", "Strawberry"],
                    correct: 2
                },
                {
                    question: "Where did Doug get his favorite takeout?",
                    options: ["Taco truck", "Chinese restaurant", "Pizza place", "Sub shop"],
                    correct: 0
                },
                {
                    question: "What holiday candy did Doug hoard?",
                    options: ["Halloween", "Christmas", "Easter", "Valentine's"],
                    correct: 2
                },
                {
                    question: "What food competition did Doug win?",
                    options: ["Hot dog eating", "Pie eating", "Wing eating", "Pizza eating"],
                    correct: 1
                },
                {
                    question: "What was Doug's pizza topping combo?",
                    options: ["Pepperoni and mushroom", "Sausage and onion", "Ham and pineapple", "Meat lovers"],
                    correct: 0
                },
                {
                    question: "What food did Doug make for the block party?",
                    options: ["Chili", "BBQ ribs", "Burgers", "Hot dogs"],
                    correct: 0
                },
                {
                    question: "What was Doug's midnight snack?",
                    options: ["Chips", "Cookies", "Sandwich", "Cereal"],
                    correct: 3
                }
            ]
        },
        {
            name: "FAMILY DYNAMICS & HOME LIFE",
            questions: [
                {
                    question: "What color did Doug and Carrie paint their living room?",
                    options: ["Sage green", "Beige", "Light blue", "Tan"],
                    correct: 2
                },
                {
                    question: "What was the name of their annoying neighbors?",
                    options: ["The Johnsons", "The Wilsons", "The Sackskys", "The Petersons"],
                    correct: 2
                },
                {
                    question: "What room did Arthur claim as his \"office\"?",
                    options: ["The garage", "The kitchen", "The den", "The basement"],
                    correct: 1
                },
                {
                    question: "What game did Doug and Carrie play on rainy days?",
                    options: ["Monopoly", "Scrabble", "Chess", "Cards"],
                    correct: 0
                },
                {
                    question: "What was Doug's favorite spot in the house?",
                    options: ["His recliner", "The couch", "The bed", "The porch swing"],
                    correct: 0
                },
                {
                    question: "What home improvement project did Doug mess up?",
                    options: ["Building a deck", "Installing a ceiling fan", "Fixing the sink", "Painting the garage"],
                    correct: 1
                },
                {
                    question: "What did Carrie collect that Doug made fun of?",
                    options: ["Snow globes", "Figurines", "Magnets", "Spoons"],
                    correct: 0
                },
                {
                    question: "Where did Doug hide his junk food money?",
                    options: ["In a sock drawer", "Under the mattress", "In a coffee can", "Behind the TV"],
                    correct: 0
                },
                {
                    question: "What appliance constantly broke down?",
                    options: ["Dishwasher", "Washing machine", "Air conditioner", "Water heater"],
                    correct: 2
                },
                {
                    question: "What was Doug's excuse for not mowing the lawn?",
                    options: ["Bad back", "Allergies", "Broken mower", "Too hot"],
                    correct: 1
                },
                {
                    question: "What did Arthur grow in the backyard?",
                    options: ["Tomatoes", "Peppers", "Herbs", "Carrots"],
                    correct: 0
                },
                {
                    question: "What magazine did Doug always keep in the bathroom?",
                    options: ["Sports Illustrated", "Time", "Reader's Digest", "TV Guide"],
                    correct: 0
                },
                {
                    question: "What was Doug's house rule about the thermostat?",
                    options: ["Don't touch it", "Ask first", "Keep it at 72", "Night settings only"],
                    correct: 0
                },
                {
                    question: "Where did Doug and Carrie first live before their house?",
                    options: ["Studio apartment", "Basement apartment", "Condo", "Duplex"],
                    correct: 1
                },
                {
                    question: "What pet did Arthur want to get?",
                    options: ["Parrot", "Cat", "Fish", "Hamster"],
                    correct: 0
                },
                {
                    question: "What was the house's recurring problem?",
                    options: ["Leaky roof", "Creaky floors", "Bad plumbing", "Electrical issues"],
                    correct: 2
                },
                {
                    question: "What did Doug install in the garage?",
                    options: ["Mini fridge", "TV", "Workout equipment", "Tool bench"],
                    correct: 0
                },
                {
                    question: "What was Carrie's organization system?",
                    options: ["Color coding", "Alphabetical", "By date", "Random piles"],
                    correct: 3
                },
                {
                    question: "What room did they never use?",
                    options: ["Dining room", "Guest room", "Study", "Sun room"],
                    correct: 0
                },
                {
                    question: "What was their WiFi password?",
                    options: ["KingOfQueens", "IpsDriver", "Heffernan123", "QueensNY"],
                    correct: 2
                }
            ]
        },
        {
            name: "WORKPLACE STORIES",
            questions: [
                {
                    question: "What was Doug's delivery truck number?",
                    options: ["457", "622", "891", "734"],
                    correct: 1
                },
                {
                    question: "Who was Doug's favorite customer?",
                    options: ["Mrs. Peterson", "Mr. Thompson", "Ms. Rodriguez", "Mr. Chen"],
                    correct: 0
                },
                {
                    question: "What did Doug name his route?",
                    options: ["The Queens Circuit", "The Royal Route", "The Victory Lap", "The Express Run"],
                    correct: 1
                },
                {
                    question: "What was the annual IPS competition?",
                    options: ["Safe driving", "Customer service", "Speed delivery", "Package handling"],
                    correct: 0
                },
                {
                    question: "What did Doug keep in his truck's glove compartment?",
                    options: ["Snacks", "Comics", "Maps", "Magazines"],
                    correct: 0
                },
                {
                    question: "What was the IPS company picnic theme?",
                    options: ["Hawaiian luau", "Western roundup", "Sports day", "Beach party"],
                    correct: 0
                },
                {
                    question: "Who was Doug's temporary replacement driver?",
                    options: ["Tommy", "Steve", "Mike", "Jerry"],
                    correct: 0
                },
                {
                    question: "What gift did customers give Doug during holidays?",
                    options: ["Gift cards", "Cookies", "Cash tips", "Fruitcake"],
                    correct: 1
                },
                {
                    question: "What was Doug's work locker number?",
                    options: ["23", "47", "52", "86"],
                    correct: 2
                },
                {
                    question: "What was the name of the new IPS training program?",
                    options: ["Safety First", "Quality Plus", "Excellence in Motion", "Delivery Pro"],
                    correct: 0
                },
                {
                    question: "What color was Doug's backup uniform?",
                    options: ["Light blue", "Grey", "Dark blue", "Black"],
                    correct: 2
                },
                {
                    question: "What was Doug's workplace nickname?",
                    options: ["The King", "Big D", "Dougie Fresh", "Heff"],
                    correct: 0
                },
                {
                    question: "What award did Doug win at work?",
                    options: ["Perfect attendance", "Safe driver", "Customer service", "Employee of the month"],
                    correct: 1
                },
                {
                    question: "What time did Doug's shift usually start?",
                    options: ["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM"],
                    correct: 1
                },
                {
                    question: "What was the company's annual holiday party venue?",
                    options: ["Hotel ballroom", "Community center", "Italian restaurant", "Golf club"],
                    correct: 0
                }
            ]
        },
        {
            name: "FRIEND GROUP SHENANIGANS",
            questions: [
                {
                    question: "Where did the guys play poker?",
                    options: ["Doug's garage", "Deacon's house", "Cooper's back room", "Spence's apartment"],
                    correct: 0
                },
                {
                    question: "What game did the group play at bowling night?",
                    options: ["Team challenge", "Singles tournament", "King pin", "Strike force"],
                    correct: 1
                },
                {
                    question: "What was their fantasy football league called?",
                    options: ["Queens League", "Cooper's League", "Sunday Warriors", "The Brotherhood"],
                    correct: 1
                },
                {
                    question: "Where did they celebrate Danny's birthday?",
                    options: ["Strip club", "Steakhouse", "Sports bar", "Bowling alley"],
                    correct: 1
                },
                {
                    question: "What caused a fight during their camping trip?",
                    options: ["Food shortage", "Wrong directions", "Bear scare", "Rain storm"],
                    correct: 2
                },
                {
                    question: "What did the group do for Super Bowl Sunday?",
                    options: ["Cooper's party", "Doug's house", "Sports bar", "Rotating hosts"],
                    correct: 1
                },
                {
                    question: "What game console did they play on guys' night?",
                    options: ["PlayStation", "Xbox", "Nintendo", "Sega"],
                    correct: 0
                },
                {
                    question: "What was their softball team name?",
                    options: ["Queens Kings", "IPS Drivers", "Cooper's Crew", "The Underdogs"],
                    correct: 2
                },
                {
                    question: "Where did they go for their annual guys' trip?",
                    options: ["Atlantic City", "Las Vegas", "Fishing cabin", "Beach house"],
                    correct: 0
                },
                {
                    question: "What caused the big friend group fight?",
                    options: ["Money lending", "Fantasy football", "Wedding seating", "Party planning"],
                    correct: 0
                },
                {
                    question: "What activity did they fail at during team building?",
                    options: ["Paintball", "Escape room", "Ropes course", "Scavenger hunt"],
                    correct: 1
                },
                {
                    question: "Where did they watch the big fights?",
                    options: ["Cooper's", "Doug's house", "Sports bar", "Deacon's place"],
                    correct: 0
                },
                {
                    question: "What was their karaoke song?",
                    options: ["Sweet Caroline", "Born to Run", "Paradise City", "Friends in Low Places"],
                    correct: 0
                },
                {
                    question: "What did they collect money for?",
                    options: ["Super Bowl tickets", "Group vacation", "Season tickets", "Gaming system"],
                    correct: 0
                },
                {
                    question: "What caused them to get kicked out of Cooper's?",
                    options: ["Food fight", "Bar brawl", "Unpaid tab", "Loud argument"],
                    correct: 2
                }
            ]
        },
        {
            name: "ARTHUR'S GREATEST HITS",
            questions: [
                {
                    question: "What was Arthur's business idea?",
                    options: ["Hot dog cart", "Walking tour", "Dog sitting", "Handyman service"],
                    correct: 0
                },
                {
                    question: "What was Arthur's talent show act?",
                    options: ["Magic tricks", "Tap dancing", "Singing", "Comedy routine"],
                    correct: 1
                },
                {
                    question: "What did Arthur teach at the community center?",
                    options: ["Dance class", "History", "Chess", "Public speaking"],
                    correct: 1
                },
                {
                    question: "What was Arthur's campaign slogan?",
                    options: ["Time for Change", "Arthur Knows Best", "Vote for Experience", "Your Voice Matters"],
                    correct: 2
                },
                {
                    question: "What did Arthur collect?",
                    options: ["Stamps", "Coins", "War memorabilia", "Baseball cards"],
                    correct: 2
                },
                {
                    question: "What was Arthur's favorite TV show?",
                    options: ["Price is Right", "Jeopardy", "Wheel of Fortune", "Match Game"],
                    correct: 0
                },
                {
                    question: "What was Arthur's part-time job?",
                    options: ["School crossing guard", "Library assistant", "Tour guide", "Bingo caller"],
                    correct: 3
                },
                {
                    question: "What did Arthur name his memoir?",
                    options: ["Life of Arthur", "Queens Legend", "My Story", "Adventures in Queens"],
                    correct: 0
                },
                {
                    question: "What was Arthur's exercise routine?",
                    options: ["Mall walking", "Chair yoga", "Morning stretches", "Swimming"],
                    correct: 0
                },
                {
                    question: "What was Arthur's favorite holiday tradition?",
                    options: ["Telling war stories", "Making special soup", "Singing carols", "Reading poems"],
                    correct: 1
                },
                {
                    question: "What club did Arthur start?",
                    options: ["Book club", "Chess club", "Veterans club", "Debate club"],
                    correct: 2
                },
                {
                    question: "What was Arthur's favorite card game?",
                    options: ["Pinochle", "Bridge", "Poker", "Canasta"],
                    correct: 0
                },
                {
                    question: "What did Arthur wear to formal events?",
                    options: ["Blue suit", "Military uniform", "Tuxedo", "Sports jacket"],
                    correct: 1
                },
                {
                    question: "What was Arthur's favorite restaurant?",
                    options: ["Del's Diner", "Golden Palace", "Joe's Pizza", "Sam's Cafe"],
                    correct: 0
                },
                {
                    question: "What was Arthur's secret recipe?",
                    options: ["Meatloaf", "Soup", "Chili", "Sauce"],
                    correct: 1
                }
            ]
        },
        {
            name: "HOLIDAY & SPECIAL EPISODES",
            questions: [
                {
                    question: "What was Doug's traditional Thanksgiving food?",
                    options: ["Turkey sandwich", "Frozen turkey dinner", "Turkey sub", "Leftover turkey"],
                    correct: 0
                },
                {
                    question: "What did the Heffernans give out on Halloween?",
                    options: ["Full-size candy bars", "Pennies", "Small toys", "Apples"],
                    correct: 0
                },
                {
                    question: "What was their Christmas tree tradition?",
                    options: ["Artificial tree", "Last-minute tree", "Same lot every year", "No tree"],
                    correct: 1
                },
                {
                    question: "What Valentine's Day disaster occurred?",
                    options: ["Lost reservations", "Food poisoning", "Wrong gift", "Power outage"],
                    correct: 0
                },
                {
                    question: "What was their New Year's tradition?",
                    options: ["House party", "Cooper's bash", "Quiet night in", "Times Square"],
                    correct: 2
                },
                {
                    question: "What was Doug's birthday tradition?",
                    options: ["Bowling party", "BBQ", "Chinese food", "Pizza party"],
                    correct: 2
                },
                {
                    question: "What happened at their block party?",
                    options: ["Food fight", "Rain out", "Power failure", "Grill explosion"],
                    correct: 1
                },
                {
                    question: "What was their anniversary tradition?",
                    options: ["Fancy dinner", "Take-out food", "Home cooking", "Weekend getaway"],
                    correct: 1
                },
                {
                    question: "What Easter tradition did Arthur start?",
                    options: ["Egg hunt", "Special breakfast", "Church service", "Family photo"],
                    correct: 1
                },
                {
                    question: "What happened at the Labor Day BBQ?",
                    options: ["Burnt food", "Guest fight", "Weather issues", "Missing food"],
                    correct: 2
                }
            ]
        },
        {
            name: "CARRIE'S WORLD",
            questions: [
                {
                    question: "What was Carrie's work nemesis's name?",
                    options: ["Mary", "Linda", "Barbara", "Susan"],
                    correct: 2
                },
                {
                    question: "What was Carrie's favorite stress relief?",
                    options: ["Shopping", "Wine", "Bubble bath", "Exercise"],
                    correct: 2
                },
                {
                    question: "What was Carrie's dream vacation spot?",
                    options: ["Paris", "Hawaii", "Italy", "Caribbean"],
                    correct: 0
                },
                {
                    question: "What was Carrie's guilty pleasure TV show?",
                    options: ["Soap operas", "Reality TV", "Game shows", "Court shows"],
                    correct: 1
                },
                {
                    question: "What was Carrie's workout routine?",
                    options: ["Yoga", "Running", "Spin class", "Swimming"],
                    correct: 1
                },
                {
                    question: "What was Carrie's favorite lunch spot near work?",
                    options: ["Salad bar", "Sandwich shop", "Sushi place", "Cafe"],
                    correct: 1
                },
                {
                    question: "What was Carrie's office nickname?",
                    options: ["Care Bear", "Queen C", "Heffernan", "C-Money"],
                    correct: 1
                },
                {
                    question: "What was Carrie's favorite cocktail?",
                    options: ["Martini", "Margarita", "Cosmopolitan", "Wine spritzer"],
                    correct: 2
                },
                {
                    question: "What was Carrie's side hustle?",
                    options: ["Real estate", "Online sales", "Tutoring", "Bookkeeping"],
                    correct: 0
                },
                {
                    question: "What was Carrie's dream job?",
                    options: ["Lawyer", "Business owner", "Judge", "Executive"],
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
    userAnswers = [];
    for (let i = 0; i < quizData.sections.length; i++) {
        userAnswers[i] = [];
        for (let j = 0; j < quizData.sections[i].questions.length; j++) {
            userAnswers[i][j] = null;
        }
    }
    
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
    
    const totalQuestions = quizData.sections.reduce((total, section) => total + section.questions.length, 0);
    const completedQuestions = calculateCompletedQuestions();
    const progress = (completedQuestions / totalQuestions) * 100;
    elements.progressFill.style.width = `${progress}%`;
}

// Calculate total completed questions
function calculateCompletedQuestions() {
    let completed = 0;
    for (let i = 0; i < currentSection; i++) {
        completed += quizData.sections[i].questions.length;
    }
    completed += currentQuestion;
    return completed;
}

// Display current question
function displayQuestion() {
    const section = quizData.sections[currentSection];
    const question = section.questions[currentQuestion];
    
    elements.questionText.textContent = question.question;
    elements.answerOptions.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'answer-option';
        optionElement.setAttribute('data-letter', String.fromCharCode(65 + index));
        optionElement.textContent = option;
        
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
    document.querySelectorAll('.answer-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    optionElement.classList.add('selected');
    userAnswers[currentSection][currentQuestion] = answerIndex;
    elements.nextQuestion.disabled = false;
}

// Move to next question
function nextQuestion() {
    const section = quizData.sections[currentSection];
    
    if (currentQuestion < section.questions.length - 1) {
        currentQuestion++;
        updateQuizHeader();
        displayQuestion();
        elements.nextQuestion.disabled = true;
    } else {
        if (currentSection < quizData.sections.length - 1) {
            currentSection++;
            currentQuestion = 0;
            showSectionIntro();
        } else {
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
    
    elements.finalScore.textContent = `${results.totalCorrect}/${results.totalQuestions}`;
    elements.scoreLevel.textContent = getScoreLevel(results.totalCorrect);
    
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
    currentSection = 0;
    currentQuestion = 0;
    timeLeft = 1800;
    quizStarted = false;
    
    clearInterval(timerInterval);
    
    elements.timeLeft.textContent = '30:00';
    elements.timeLeft.parentElement.classList.remove('warning');
    
    elements.progressFill.style.width = '0%';
    
    initializeQuiz();
    
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
