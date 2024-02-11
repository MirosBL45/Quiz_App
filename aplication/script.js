const quizData = [
    {
        question: 'How old is Ruby the cat?',
        a: '1 year',
        b: '3 years',
        c: '2 years',
        d: '4 years',
        correctAns: 'b'
    }, {
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'C#',
        d: 'JavaScript',
        correctAns: 'd'
    }, {
        question: 'Who is the selector of Serbia in football?',
        a: 'Miroslav Jovic',
        b: 'Dragan Stojkovic Piksi',
        c: 'Zeljko Obradovic',
        d: 'Mateja Kezman',
        correctAns: 'b'
    }, {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Basketball',
        c: 'Aplication interface',
        d: 'Helicopters',
        correctAns: 'a'
    }, {
        question: 'What year was JavaScript launched?',
        a: '1994',
        b: '1996',
        c: '1995',
        d: 'None above',
        correctAns: 'c'
    }, {
        question: 'How tall is Burj Khalifa?',
        a: '953m',
        b: '724m',
        c: '850m',
        d: '828m',
        correctAns: 'd'
    }
]


//get elements from HTML
const quiz = document.querySelector('#quizMain');
const odgovoriEls = document.querySelectorAll('input[type="radio"]');
const questionEl = document.querySelector("#question")
const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');
const submitBtn = document.querySelector('button');


//set global variables
let trenutnoPitanje = 0;
let rezultat = 0;



//call function for load quiz
ucitajSledecePitanje();


//function for load quiz
function ucitajSledecePitanje() {
    deselectAnswer();
    //current question
    const trenutniPodatakPitanja = quizData[trenutnoPitanje];

    questionEl.innerText = trenutniPodatakPitanja.question;
    a_text.innerText = trenutniPodatakPitanja.a;
    b_text.innerText = trenutniPodatakPitanja.b;
    c_text.innerText = trenutniPodatakPitanja.c;
    d_text.innerText = trenutniPodatakPitanja.d;
}


//function for taking answer
function uzmiObelezen() {
    let odgovor = undefined;

    odgovoriEls.forEach((odgovorEl) => {
        if (odgovorEl.checked) {
            odgovor = odgovorEl.id;
        }
    });

    return odgovor;
}


//deselect next answer
function deselectAnswer() {
    odgovoriEls.forEach((odgovorEl) => {
        odgovorEl.checked = false;
    });
}


//listener for submit button
submitBtn.addEventListener('click', () => {

    const odgovorObelezen = uzmiObelezen();

    if (odgovorObelezen) {
        if (odgovorObelezen === quizData[trenutnoPitanje].correctAns) {
            rezultat++;
        }
        trenutnoPitanje++
        if (trenutnoPitanje < quizData.length) {
            ucitajSledecePitanje();
        } else {
            quiz.innerHTML = `
                <h2 class="finished">You answered correctly at ${rezultat}/${quizData.length} questions!!!</h2>
                
                <button onclick="location.reload()">Do it again!</button>
            `;
        }
    }
})