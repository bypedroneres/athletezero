import React from 'react';
import "../screens/Info.css";
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function PrivacyPolicyScreen() {
  return (
    <div className='info'>
      <Nav />
      <div className='info_Content'>
        <h2>Privacy Policy:</h2>
        <p>Last updated April 11, 2024</p>
        
        <p>This privacy notice for Athlete Zero LLC ("we," "us," or "our"), describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:</p>

        <ul>
          <li>Visit our website at athletezero.us, or any website of ours that links to this privacy notice</li>
          <li>Engage with us in other related ways, including any sales, marketing, or event</li>
        </ul>

        <p>Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:contact@athletezero.us">contact@athletezero.us</a>.</p>

        <h3>SUMMARY OF KEY POINTS</h3>

        <p>This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.</p>
        
        <h3>1. WHAT INFORMATION DO WE COLLECT?</h3>

        <p><strong>Personal information you disclose to us</strong></p>

        <p><em>In Short:</em> We collect personal information that you provide to us.</p>

        <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>

        <p><strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>

        <ul>
          <li>Names</li>
          <li>Phone numbers</li>
          <li>Email addresses</li>
          <li>Schools you attend</li>
          <li>Year of birth</li>
        </ul>

        <p><strong>Sensitive Information.</strong> We do not process sensitive information.</p>

        <p>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>


        
        <h3>2. HOW DO WE PROCESS YOUR INFORMATION?</h3>

        <p><em>In Short:</em> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>


        <h3>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h3>

        <p><em>In Short:</em> We may share information in specific situations described in this section and/or with the following third parties.</p>

        
        <h3>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h3>

        <p><em>In Short:</em> We may use cookies and other tracking technologies to collect and store your information.</p>
        
        <h3>5. HOW LONG DO WE KEEP YOUR INFORMATION?</h3>

        <p><em>In Short:</em> We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</p>

        <h3>6. HOW DO WE KEEP YOUR INFORMATION SAFE?</h3>

        <p><em>In Short:</em> We aim to protect your personal information through a system of organizational and technical security measures.</p>

        <h3>7. WHAT ARE YOUR PRIVACY RIGHTS?</h3>

        <p><em>In Short:</em> You may review, change, or terminate your account at any time.</p>

        <h3>8. CONTROLS FOR DO-NOT-TRACK FEATURES</h3>

        <p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.</p>

        <h3>9. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h3>

        <p><em>In Short:</em> If you are a resident of California, Colorado, Connecticut, Utah, or Virginia, you are granted specific rights regarding access to your personal information.</p>

        {/* Other sections omitted for brevity */}

        <h3>10. DO WE MAKE UPDATES TO THIS NOTICE?</h3>

        <p><em>In Short:</em> Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>

        {/* Other sections omitted for brevity */}

        <h3>11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h3>

        <p>If you have questions or comments about this notice, you may email us at <a href="mailto:contact@athletezero.us">contact@athletezero.us</a> or contact us by post at:</p>

        <p>Athlete Zero LLC<br />
        21 Babson College Drive<br />
        Unit 2951<br />
        Wellesley Hills, MA 02481<br />
        United States</p>

      </div>
      <Footer />
    </div>
  );
}

export default PrivacyPolicyScreen;
