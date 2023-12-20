const questionArr = [
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        options:["var","let","Both A and B","None of the above"],
        correctAns:"Both A and B"
    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        options:["getElementById()","getElementByClassName()","Both A and B","None of the above"],
        correctAns:"Both A and B"
    },
    {
        question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
        options:["Throws an error","Ignore the statements","Give a warning","None of the above"],
        correctAns:"Ignore the statements"
    },
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        options:["document.write()","console.log()","window.alert()","All of the above"],
        correctAns:"All of the above"
    },
    {
        question: "How can a datatype be declared to be a constant type?",
        options:["const","var","let","constant"],
        correctAns:"const"
    },
    {
        question: "What keyword is used to check whether a given property is valid or not?",
        options:["in","is in","exist","lies"],
        correctAns:"in"
    },
    {
        question: "When an operator’s value is NULL, the typeof returned by the unary operator is:",
        options:["Boolean","Undefined","Object","Integer"],
        correctAns:"Object"
    },
    {
        question: "What does the Javascript “debugger” statement do?",
        options:["It will debug all the errors in the program at runtime.","It acts as a breakpoint in a program.","It will debug error in the current statement if any.","All of the above."],
        correctAns:"It acts as a breakpoint in a program."
    },
    {
        question:"What does the ‘toLocateString()’ method do in JS?",
        options:["Returns a localised object representation.","Returns a parsed string.","Returns a localized string representation of an object.","None of the above."],
        correctAns:"Returns a localized string representation of an object."
    },
    {
        question:"Which function is used to serialize an object into a JSON string in Javascript?",
        options:["stringify()","parse()","convert()","None of the above."],
        correctAns:"stringify()"
    }
]

const optionElements = document.querySelectorAll(".option")
let  questionNo = 0
let attemptQuestion  = 0
let  score = 0
let currentQuestion = questionArr[questionNo]

//Start the quiz when Start button is clicked
document.querySelector("#start-btn").addEventListener("click",()=>{
    document.getElementById("start-content").classList.toggle("hidden")
    document.getElementById("question-content").classList.toggle("hidden")
    document.getElementById("next-content").classList.toggle("hidden")
    document.getElementById("question-no").innerHTML = ++questionNo
    currentQuestion = questionArr[questionNo-1]
    updateQuestion()
})
//Reset the quiz when Reset button is clicked
document.querySelector("#reset-btn").addEventListener("click",()=>{
    document.getElementById("reset-content").classList.toggle("hidden")
    document.getElementById("start-content").classList.toggle("hidden")
    questionNo = score = attemptQuestion = 0
    document.getElementById("question-no").innerHTML = questionNo
    document.getElementById("score-no").innerHTML = score
    currentQuestion = questionArr[0]
})

//Check Next button is clicked and update question & options
document.querySelector("#next-btn").addEventListener("click",()=>{
    if(questionNo>=10){
        document.getElementById("reset-content").classList.toggle("hidden")
        document.getElementById("question-content").classList.toggle("hidden")
        document.getElementById("next-content").classList.toggle("hidden")
        document.getElementById("score").textContent = score
    }
    else if(attemptQuestion==questionNo){
        document.getElementById("question-no").innerHTML = ++questionNo
        currentQuestion = questionArr[questionNo-1]
        updateQuestion()
    }else{
        alert(`Please first attempt question no. ${questionNo}`)
    }
})

//Check if the any given options is clicked:And update Score
optionElements.forEach((option)=>option.addEventListener("click",()=>{
    if(checkAnswer(option)==true){
        //update score: for correct answer
        document.querySelector("#score-no").innerHTML = ++score
    }
    //disabled all options element
    attemptQuestion++
    optionElements.forEach((element)=> element.disabled = true)
}))


//fn:update question and its options
function updateQuestion(){
    document.querySelector("#question").innerText = currentQuestion.question
    optionElements.forEach((option,index)=>{
        option.textContent = currentQuestion.options[index]
        //Remove styling of previous question 
        option.disabled = false
        option.classList.remove("bg-green-500","text-white","border-0","hover:border-green-500")
        option.classList.remove("bg-red-500","text-white","border-0","hover:border-red-500")
    })
}
//fn:Check if clicked option is correct or not: And highlight it
function checkAnswer(optionClicked){
    const optionValue = optionClicked.innerText
    if(optionValue==currentQuestion.correctAns){
        optionClicked.classList.add("bg-green-500","text-white","border-0","hover:border-green-500")
        return true
    }else{
        optionClicked.classList.add("bg-red-500","text-white","border-0","hover:border-red-500")
        correctOption()
    }
    return false
}
//fn:Highlight correct answer from given options
function correctOption(){
    optionElements.forEach((option)=>{
        if(option.innerText==currentQuestion.correctAns){
            option.classList.add("bg-green-500","text-white","border-0","hover:border-green-500")
        }
    })
}