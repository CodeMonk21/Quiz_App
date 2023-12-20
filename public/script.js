const questionArr = [
    {
        question: "What is 2+2?",
        options:["3","4","5","6"],
        correctAns:"4"
    },
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
    }
]


const optionElements = document.querySelectorAll(".option")
const nextBtn = document.querySelector("#next-btn")
let  questionNo = 1
let  score = 0
let currentQuestion = questionArr[questionNo-1]


//Check if the any given options is clicked:And update Score
optionElements.forEach((option)=>option.addEventListener("click",()=>{
    if(checkAnswer(option)==true){
        document.querySelector("#score-no").innerHTML = ++score
    }
    optionElements.forEach((element)=> element.disabled = true)
}))

//fn:Check if clicked option is correct or not: And highlight it
function checkAnswer(optionClicked){
    const optionValue = optionClicked.innerText.toUpperCase()
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