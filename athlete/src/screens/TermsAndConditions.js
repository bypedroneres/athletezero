// TermsAndConditionsScreen.js
import React from 'react';
import "../screens/Info.css";
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function TermsAndConditionsScreen() {
  return (
    <div className='info'>
      <Nav />
      <div className='info_Content'>
      <h2>TERMS OF USE</h2>
        <p>Last updated April 11, 2024</p>

        <h3>AGREEMENT TO OUR LEGAL TERMS</h3>
        <p>We are Athlete Zero LLC (“Company,” “we,” “our”).</p>

        <p>We operate, as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").</p>

        <p>You can contact us by email at <a href="mailto:contact@athletezero.us">contact@athletezero.us</a>.</p>

        <p>These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</p>

        <p>Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised Legal Terms are posted.</p>

        <p>We recommend that you print a copy of these Legal Terms for your records.</p>

        <h3>TABLE OF CONTENTS</h3>
        <ol>
          <li>OUR SERVICES</li>
          <li>INTELLECTUAL PROPERTY RIGHTS</li>
          <li>USER REPRESENTATIONS</li>
          <li>PROHIBITED ACTIVITIES</li>
          <li>USER GENERATED CONTRIBUTIONS</li>
          <li>CONTRIBUTION LICENSE</li>
          <li>SERVICES MANAGEMENT</li>
          <li>TERM AND TERMINATION</li>
          <li>MODIFICATIONS AND INTERRUPTIONS</li>
          <li>GOVERNING LAW</li>
          <li>DISPUTE RESOLUTION</li>
          <li>CORRECTIONS</li>
          <li>DISCLAIMER</li>
          <li>LIMITATIONS OF LIABILITY</li>
          <li>INDEMNIFICATION</li>
          <li>USER DATA</li>
          <li>ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</li>
          <li>MISCELLANEOUS</li>
          <li>CONTACT US</li>
        </ol>

        <h3>1. OUR SERVICES</h3>

        <p>The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.</p>
        <h3>2. INTELLECTUAL PROPERTY RIGHTS</h3>

        <p><strong>Our intellectual property</strong></p>

        <p>We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").</p>

        <p>Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.</p>

        <p>The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use or internal business purpose only.</p>

        <p><strong>Your use of our Services</strong></p>

        <p>Subject to your compliance with these Legal Terms, including the "PROHIBITED ACTIVITIES" section below, we grant you a non-exclusive, non-transferable, revocable license to:</p>
        <ul>
          <li>access the Services; and</li>
          <li>download or print a copy of any portion of the Content to which you have properly gained access.</li>
        </ul>

        <p>solely for your personal, non-commercial use or internal business purpose.</p>

        <p>Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.</p>

        <p>If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: <a href="mailto:contact@athletezero.us">contact@athletezero.us</a>. If we ever grant you permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.</p>

        <p>We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.</p>

        <p>Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.</p>
        <h3>Your submissions</h3>

        <p>Please review this section and the "PROHIBITED ACTIVITIES" section carefully prior to using our Services to understand the (a) rights you give us and (b) obligations you have when you post or upload any content through the Services.</p>

        <p><strong>Submissions:</strong> By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services ("Submissions"), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.</p>

        <p>You are responsible for what you post or upload: By sending us Submissions through any part of the Services you:</p>
        <ul>
          <li>confirm that you have read and agree with our "PROHIBITED ACTIVITIES" and will not post, send, publish, upload, or transmit through the Services any Submission that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading;</li>
          <li>to the extent permissible by applicable law, waive any and all moral rights to any such Submission;</li>
          <li>warrant that any such Submission are original to you or that you have the necessary rights and licenses to submit such Submissions and that you have full authority to grant us the above-mentioned rights in relation to your Submissions; and</li>
          <li>warrant and represent that your Submissions do not constitute confidential information.</li>
        </ul>

        <p>You are solely responsible for your Submissions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of (a) this section, (b) any third party's intellectual property rights, or (c) applicable law.</p>

      </div>
      <Footer />
    </div>
  );
}

export default TermsAndConditionsScreen;
