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
                <h2>Q&A</h2>
                <div className='faq_Questions'>
                    {[1 ].map((_, index) => (
                        <div className='faq_Question' key={index}>
                            {/* Add onClick event to toggle question */}
                            <div className="faq_QuestionHeader" onClick={() => toggleQuestion(index)}>
                                <h2>
                                    How does the mental coaching work?
                                </h2>
                                <svg fill="#FEFEFE" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"/>
                                </svg>
                            </div>
                            {/* Render answer below question if question is open */}
                            {openQuestion === index && (
                                <div className="faq_Answer">
                                    <p>Mental coaching involves setting goals, developing strategies, and receiving support from a trained coach to improve mindset and behaviors, leading to personal or professional growth.</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                {/* Add two more questions */}
                <div className='faq_Question' key={3}>
                    <div className="faq_QuestionHeader" onClick={() => toggleQuestion(3)}>
                        <h2>
                            What are the benefits of mindfulness meditation?
                        </h2>
                        <svg fill="#FEFEFE" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"/>
                        </svg>
                    </div>
                    {openQuestion === 3 && (
                        <div className="faq_Answer">
                            <p>Mindfulness meditation has numerous benefits including stress reduction, improved focus and concentration, enhanced emotional regulation, and increased self-awareness and overall well-being.</p>
                        </div>
                    )}
                </div>
                <div className='faq_Question' key={4}>
                    <div className="faq_QuestionHeader" onClick={() => toggleQuestion(4)}>
                        <h2>
                            How can I improve my time management skills?
                        </h2>
                        <svg fill="#FEFEFE" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"/>
                        </svg>
                    </div>
                    {openQuestion === 4 && (
                        <div className="faq_Answer">
                            <p>Improving time management skills involves setting priorities, breaking tasks into manageable chunks, using tools like calendars and to-do lists, minimizing distractions, and learning to delegate effectively.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FAQ;
