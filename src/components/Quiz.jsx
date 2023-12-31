import React, { useContext } from 'react';
import DataContext from '../context/dataContext';

const Quiz = () => {
    const { showQuiz, question, quizs, checkAnswer, correctAnswer,
            selectedAnswer,questionIndex, nextQuestion, showTheResult }  = useContext(DataContext);

    return (
        <section className="text-white " style={{ display: `${showQuiz ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-8">
                        <div className="card p-4 bg-black  " style={{ background: '#3d3d3d', borderColor: 'red' }}>
                            <div className="d-flex justify-content-between gap-md-3">
                                <h5 className='mb-2 fs-normal lh-base'>{question?.question}</h5>
                               <div> <h5 style={{ color: 'red', width: '100px', textAlign: 'right' }}>{quizs.indexOf(question) + 1} / {quizs?.length}</h5></div>
                            </div>
                            <div>
                                {
                                    question?.options?.map((item, index) => <button
                                        key={index}
                                        className={`option w-100 text-start btn text-black fw-bold  py-2 px-3 mt-3 rounded-pill btn-secondary ${correctAnswer === item && 'bg-success'}`}
                                        onClick={(event) => checkAnswer(event, item)}
                                    >
                                        {item}
                                    </button>)
                                }
                            </div>

                            {
                                (questionIndex + 1) !== quizs.length ?
                                    <div className='text-center'><button className='btn py-2  w-50 mt-3 bg-warning text-black fw-bold' onClick={nextQuestion} disabled={!selectedAnswer}>Next Question</button></div>
                                    :
                                    <div className='text-center'><button className='btn py-2 w-50 mt-3 bg-warning  text-black fw-bold' onClick={showTheResult} disabled={!selectedAnswer}>Show Result</button></div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quiz;