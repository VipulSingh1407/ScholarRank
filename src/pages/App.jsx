import React from 'react';
import { motion } from 'framer-motion';
import './App.css';
import ButtonGradient from '../assets/svg/ButtonGradient';

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.5,
    },
  }),
};

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="App-heading"
        >
          Welcome to ScholarRank
        </motion.h1>
        <nav>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => document.getElementById('privacy-policy').scrollIntoView({ behavior: 'smooth' })}
          >
            Privacy Policy
          </motion.button>
        </nav>
      </header> */}
      <main>
        <section id="privacy-policy" className="privacy-policy">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.5 } } }}
          >
            {/* <h2 className="App-subheading">Our Privacy Policy</h2> */}
            <h3 className="App-subheading">ScholarRank Privacy Guidelines</h3>

            <div className="content-section left-align">
              <motion.p custom={0} variants={paragraphVariants}>
                A Privacy Policy is a statement or a legal document that states how a company or website collects, handles and processes data of its customers and visitors. It explicitly describes whether that information is kept confidential, or is shared with or sold to third parties.
              </motion.p>
            </div>

            <div className="content-section right-align">
              <motion.p custom={1} variants={paragraphVariants}>
                ScholarRank cares about our customers and is committed to protecting their privacy. This Privacy Policy (referred to herein as “Privacy Policy” or “Policy”) is intended to inform you of the type of personal information ScholarRank collects from you, how it is used and what steps are taken to ensure that your personal information is kept confidential and safe. This Policy also outlines how customers can make their preferences known regarding when and how ScholarRank may send marketing communications to you.
              </motion.p>
            </div>

            <div className="content-section left-align">
              <motion.p custom={2} variants={paragraphVariants}>
                We hope you will take the time to read this Notice, the ScholarRank Privacy Policy, which apply to ScholarRank for Education Services.
              </motion.p>
            </div>

            <h3 className="App-subheading">What Information We Collect</h3>

            <div className="content-section right-align">
              <motion.p custom={3} variants={paragraphVariants}>
                ScholarRank Account created and managed by a school for use by students and educators. When creating this account, the school may provide certain personal information about its students and educators, which includes a user’s name, email address, and password in most cases, but could also include secondary email, phone, and address if the school chooses to provide that information. ScholarRank may also collect personal information directly from users of Google account for Education accounts, such as telephone number, profile photo or other information they add to a ScholarRank for Education account.
              </motion.p>
            </div>

            <h3 className="App-subheading">How we use information we collect</h3>

            <div className="content-section left-align">
              <motion.p custom={4} variants={paragraphVariants}>
                When user signed in, we collect information that we store with your ScholarRank Data Base, which we treat as personal information. In ScholarRank for Core (Subscription) Services. The ScholarRank for Education Core Services (“Core Services”) are listed in the Services Summary and include mail, Calendar, Classroom, Contacts, Forms, Groups, Sheets, Chat, Video Conference and etc. These services are provided to the user. User personal information collected in the Core Services is used only to provide the Core Services. ScholarRank does not serve ads in the Core Services or use personal information collected in the Core Services for advertising purposes. Sometimes ScholarRank may send offers to customers on behalf of other businesses. When this happens, customer information is not shared with the other business and ScholarRank controls the information as well as the communication. Aggregated and statistical data from our web site and phone systems may be shared with our partners. For example, we may let a business partner know the total number of visitors to a site on a given day or total number of customers calling at a given time. ScholarRank may release personal data, including account information, when we believe release is appropriate to comply with laws, regulations or judicial orders; or to protect the rights, property, or safety of ScholarRank , our customers, or others. This includes exchanging information with other companies and organizations for fraud protection and credit risk reduction.
              </motion.p>
            </div>

            <h3 className="App-subheading">Transparency and choice</h3>

            <div className="content-section right-align">
              <motion.p custom={5} variants={paragraphVariants}>
                We provide a variety of user controls that enable ScholarRank for Education users to make meaningful choices about how information is used. Depending on the settings enabled by the school, users can use the various controls described in the Privacy Policy.
              </motion.p>
            </div>

            <h3 className="App-subheading">Children's Privacy</h3>

            <div className="content-section left-align">
              <motion.p custom={6} variants={paragraphVariants}>
                ScholarRank believes that it is especially important to protect children's privacy online. The ScholarRank web sites are directed at an adult audience and we therefore do not knowingly collect personal information from children.
              </motion.p>
            </div>

            <h3 className="App-subheading">Data Security</h3>

            <div className="content-section right-align">
              <motion.p custom={7} variants={paragraphVariants}>
                ScholarRank is committed to keeping our customers personal data private and secure. ScholarRank works hard to take reasonable precautions to protect our customer’s personal information from loss, misuse or alteration. These precautions include limiting access to such information to authorized individuals only. Personal information is destroyed once it is determined it is of no use or outdated. Agents, contractors, or partners of ScholarRank who have access to personal information are required to keep the Updated information confidential and are not permitted to use this information for any other purpose than to carry out the services they are performing for ScholarRank.
              </motion.p>
            </div>

            <h3 className="App-subheading">Complaints</h3>

            <div className="content-section left-align">
              <motion.p custom={8} variants={paragraphVariants}>
                Champion is committed to working with consumers to obtain a fair and rapid resolution of any complaints or disputes about privacy. Please send us your questions or comments regarding our privacy practices by either sending us an email at "sales@scholarrank.com" or contact on(+91 8918758851).
              </motion.p>
            </div>

            <h3 className="App-subheading">Policy Changes</h3>

            <div className="content-section right-align">
              <motion.p custom={9} variants={paragraphVariants}>
                We reserve the right to make changes to this Privacy Policy at any time so please check back periodically so you are familiar with our current Policy. If in the future we wish to use your information in a manner not previously disclosed, we will post the policy changes here and if significant, we will provide a more prominent notice to customers of these changes and provide the ability to opt-out. Continued use of our web sites after receiving notice of a change in our Policy indicates your consent to the use of newly submitted information in accordance with the amended ScholarRank Privacy Policy.
              </motion.p>
            </div>

            <h3 className="App-subheading">Acceptance of Our Privacy Practices</h3>

            <div className="content-section left-align">
              <motion.p custom={10} variants={paragraphVariants}>
                Acceptance of this Privacy Policy is signaled by either subscribing for service from ScholarRank or by using the company’s web site or interactive banner ads. By accepting this Policy the customer agrees to adhere to the terms and conditions posted on the web site and contained herein. Visitors, callers, customers or potential customers that do not agree with any of these terms, should not use the web site or submit any personal information to ScholarRank.
              </motion.p>
            </div>
          </motion.div>
        </section>
      </main>
      <ButtonGradient/>
    </div>
    
  );
}

export default App;
