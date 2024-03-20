// Questions.jsx

import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div className="Questions-container">
            <h4>Questions</h4>
            <div className='Quest'>
                {/* Question Set 1 */}
                <div className="question-box">
                    <h2>NEET Biology</h2>
                    <p>Duration: 45 minutes</p>
                    <p>No. of Questions: 50</p>
                    <p>Description: This set contains questions related to Biology for NEET examination. Covering topics like Botany, Zoology, and Human Physiology.</p>
                    <button>Start Quiz</button>
                </div>

                {/* Question Set 2 */}
                <div className="question-box">
                    <h2>NEET Chemistry</h2>
                    <p>Duration: 30 minutes</p>
                    <p>No. of Questions: 40</p>
                    <p>Description: This set includes questions on Organic Chemistry, Inorganic Chemistry, and Physical Chemistry, as per the NEET syllabus.</p>
                    <button>Start Quiz</button>
                </div>

                {/* Question Set 3 */}
                <div className="question-box">
                    <h2>NEET Physics</h2>
                    <p>Duration: 35 minutes</p>
                    <p>No. of Questions: 45</p>
                    <p>Description: Test your Physics knowledge with questions on Mechanics, Thermodynamics, Optics, and more, aligned with NEET standards.</p>
                    <button>Start Quiz</button>
                </div>

                {/* Question Set 4 */}
                <div className="question-box">
                    <h2>NEET Mock Test</h2>
                    <p>Duration: 2 hours</p>
                    <p>No. of Questions: 180</p>
                    <p>Description: Prepare yourself for the NEET examination with this comprehensive mock test covering all three subjects - Biology, Chemistry, and Physics.</p>
                    <button>Start Quiz</button>
                </div>
            </div>
        </div>
    );
}

export default Questions;
