import React, { useState } from 'react';
import "../components/FAQ.css";

function FAQ() {
    // State to keep track of which questions are open
    const [openQuestion, setOpenQuestion] = useState(null);

    // Function to toggle the open/close state of a question
    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    return (
        <div className='faq'>
            <div className='faq_Content'>
                <h2>FAQ</h2>
                <div className='faq_Questions'>
                    {[1 ].map((_, index) => (
                        <div className='faq_Question' key={index}>
                            {/* Add onClick event to toggle question */}
                            <div className="faq_QuestionHeader" onClick={() => toggleQuestion(index)}>
                                <h2>
                                How do I know if Athlete Zero‘s programs are suitable for my specific needs as an athlete?
                                What type of athletes can benefit from your services?
                                </h2>
                                <svg fill="#FEFEFE" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"/>
                                </svg>
                            </div>
                            {/* Render answer below question if question is open */}
                            {openQuestion === index && (
                                <div className="faq_Answer">
                                    <p>At Athlete Zero, we adapt to the unique needs of any athlete, regardless of their level, goals, or sport. Mental coaching and nutrition are essential components of an athlete’s success. If you want to reach the next level as an athlete, our services are for you!</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                {/* Add two more questions */}
                <div className='faq_Question' key={3}>
                    <div className="faq_QuestionHeader" onClick={() => toggleQuestion(3)}>
                        <h2>
                        What qualifications and experience do the professionals at Athlete Zero possess?
                        </h2>
                        <svg fill="#FEFEFE" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"/>
                        </svg>
                    </div>
                    {openQuestion === 3 && (
                        <div className="faq_Answer">
                            <p>Our coaching team has a diverse range of experts across nearly every single sport. They have guided athletes at every level, from amateurs to collegiate and professionals. They also hold advanced degrees in their respective fields and stay up-to-date with the latest certifications. Fill out this form to learn more about them!</p>
                        </div>
                    )}
                </div>
                <div className='faq_Question' key={4}>
                    <div className="faq_QuestionHeader" onClick={() => toggleQuestion(4)}>
                        <h2>
                        What is the duration and frequency of the sessions?
                        </h2>
                        <svg fill="#FEFEFE" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"/>
                        </svg>
                    </div>
                    {openQuestion === 4 && (
                        <div className="faq_Answer">
                            <p>The duration and frequency of sessions vary depending on the chosen plan. Athletes typically have the flexibility to select session lengths of either one hour or 30 minutes and choose between weekly or biweekly sessions.</p>
                        </div>
                    )}
                </div>
                <div className='faq_Question' key={5}>
                    <div className="faq_QuestionHeader" onClick={() => toggleQuestion(5)}>
                        <h2>
                        Where can I find the prices and coaches?
                        </h2>
                        <svg fill="#FEFEFE" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"/>
                        </svg>
                    </div>
                    {openQuestion === 5 && (
                        <div className="faq_Answer">
                            <p>After completing <span className='underline_Black'><a href="https://docs.google.com/forms/d/e/1FAIpQLSchkoH17qTzbaQ-t_rHl6ATJ38C95i9eMBBUNn9pRvGW6FSGw/viewform?usp=sf_link">this form</a></span>, our team will reach out with our different pricing options and match you with the coach who best suits your needs.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FAQ;
