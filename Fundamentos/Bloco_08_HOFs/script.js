


const newEmployees = (func) => {
    const employees = {
      id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  const newRegister = (completeName) => { 
    const email = `${completeName.split(' ').join('_')}@trybe.com`  
    const newCandidate = {
    nomeCompleto: `${completeName}`,
    email: email
}
    return newCandidate;
}


  console.log(newEmployees(newRegister));


  const lottery = (number) => (number === Math.floor(Math.random() * 5+ 1)) ?  true :  false;

  const didGetPrize = (func, number) => func(number) ? 'Parabéns!' : 'Haha, tente novamente';

  console.log(didGetPrize(lottery,2));


  const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];



const calcGrade = (gabarito,studentAnswers) => {
    let grade = 0;
    for (let i = 0; i < gabarito.length; i += 1){
        if(studentAnswers[i] === gabarito[i]){
            grade += 0.5
        }
    }
    return grade
}

const finalGrade = (gabarito, studentAnswers, func) => func(gabarito,studentAnswers);


console.log(finalGrade(RIGHT_ANSWERS,STUDENT_ANSWERS,calcGrade));