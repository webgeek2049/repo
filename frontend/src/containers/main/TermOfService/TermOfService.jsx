import React from "react";
import "../TermOfService/TermOfService.scss";
import image from "../../../ressources/svg/Layer 1.svg";
import etoil from "../../../ressources/svg/Group 73.svg";

const TermOfService = () => {
  return (
    <div className="term-of-service-container">
    <div className="container">
      <div className="image-term">
        <img src={image} alt="" />
        <h1>Terms And Conditions</h1>
      </div>
      <div className="content-wrapper">
        <div className="etoil">
          <h5>Terms</h5>
          <img src={etoil} alt="" />
          <h5>Conditions</h5>
          <h3>Table Of Contents</h3>
          <ul>
            <li>
              <a href="#s1">
                <h5>Eligibility; Accounts</h5>
              </a>
            </li>
            <li>
              <a href="#s2">
                <h5>Privacy Policy:</h5>
              </a>
            </li>
            <li>
              <a href="#s3">
                <h5>Prohibited Conduct:</h5>
              </a>
            </li>
            <li>
              <a href="#s4">
                <h5>Term and Termination:</h5>
              </a>
            </li>
          </ul>
        </div>

        <div className="content">
          <h1>Term Of Service</h1>
          <p>
            By accessing or using our gamified e-learning website{" "}
            <b>"CSGEEKS"</b>, you agree to comply with these Terms of Service.
            If you do not agree with any part of these terms, you may not access
            the Website. To use the Website, you must be at least 18 years old
            or have reached the age of majority in your jurisdiction. The
            Website is intended for use by teachers and students in a school
            setting. If you are accessing the Website on behalf of a company or
            organization, you represent and warrant that you have the authority
            to bind such entity to these Terms of Service.
          </p>

          <div id="s1">
            <h2>Eligibility; Accounts</h2>
            <h5>Eligibility:</h5>
            <p>
              By accessing or using our gamified e-learning website{" "}
              <b>"CSGEEKS"</b>, you agree to comply with these Terms of Service.
              If you do not agree with any part of these terms, you may not
              access the Website. To use the Website, you must be at least{" "}
              <b>18 years old</b> or have reached the age of majority in your
              jurisdiction. The Website is intended for use by <b>teachers</b>{" "}
              and <b>students</b> in a school setting. If you are accessing the
              Website on behalf of a company or organization, you represent and
              warrant that you have the authority to bind such entity to these
              Terms of Service.
            </p>
            <h5>Accounts:</h5>
            <p>
              To access certain features of the Website, you may be required to
              create an account. When creating an account, you agree to provide
              accurate, current, and complete information about yourself as
              prompted by the registration form. You also agree to maintain and
              promptly update this information to keep it accurate, current, and
              complete. You are responsible for maintaining the confidentiality
              of your account credentials, including your username and password.
              You agree to take all necessary precautions to prevent
              unauthorized access to your account and to notify us immediately
              of any unauthorized use or security breach. You may not transfer
              your account to anyone else without our prior written consent. If
              you provide any information that is untrue, inaccurate, not
              current, or incomplete, or if we have reasonable grounds to
              suspect that such information is untrue, inaccurate, not current,
              or incomplete, we reserve the right to suspend or terminate your
              account and refuse any and all current or future use of the
              Website.
            </p>
          </div>

          <div id="s2">
            <h2>Privacy Policy:</h2>
            <p>
              Your privacy is important to us. Our Privacy Policy explains how
              we collect, use, disclose, and protect your personal information
              when you use our services. By accessing or using the Website, you
              agree to the collection and use of information in accordance with
              our Privacy Policy. Our Privacy Policy covers topics such as the
              types of information we collect, how we use and share this
              information, your choices regarding your personal information, and
              how we protect your information. We encourage you to review our
              Privacy Policy carefully to understand our practices regarding
              your personal information. For more information, please read our
              full Privacy Policy here.
            </p>
          </div>
          <div id="s3">
            <h2>Prohibited Conduct:</h2>
            <p>
              Users of our gamified e-learning website <b>"CSGEEKS"</b> are
              expected to conduct themselves in a respectful and responsible
              manner. Prohibited conduct includes, but is not limited to:
              <h5>Unauthorized Access:</h5> Attempting to access or use the
              Website without proper authorization, including accessing areas or
              features of the Website that are restricted or not intended for
              your use.
              <br />
              <h5>Misuse of Accounts:</h5> Sharing, selling, or otherwise
              transferring your account credentials to others, or using another
              person's account without permission.
              <br />
              <h5>Infringement:</h5> Violating the intellectual property rights
              of others, including but not limited to copyright infringement,
              trademark infringement, or misappropriation of trade secrets.
              <br />
              <h5>Harassment:</h5> Engaging in harassment, bullying, or any form
              of abusive, offensive, or discriminatory behavior towards other
              users or individuals.
              <br />
              <h5>Impersonation:</h5> Impersonating any person or entity, or
              falsely representing your affiliation with any person or entity.
              <br />
              <h5>Disruption:</h5> Intentionally interfering with the normal
              operation of the Website, including transmitting viruses, malware,
              or other harmful code, or engaging in activities that could
              disrupt, damage, or impair the functionality of the Website.
              <br />
              <h5>Fraud:</h5> Engaging in fraudulent activities, including but
              not limited to identity theft, phishing, or deceptive practices.
              <br />
              <h5>Illegal Activities:</h5> Engaging in any unlawful activities,
              including but not limited to the distribution of illegal content,
              or using the Website for illegal purposes.
              <br />
              <h5>Violation of Terms:</h5> Violating any of the terms and
              conditions set forth in these Terms of Service or any other
              policies or guidelines provided by us. Users who engage in
              prohibited conduct may be subject to account suspension or
              termination, and may be reported to appropriate authorities as
              necessary. We reserve the right to take appropriate action against
              any user who violates these terms, including but not limited to
              removing content, disabling accounts, or pursuing legal action. If
              you become aware of any prohibited conduct or violations of these
              terms, please report them to us immediately at{" "}
              <b>[contact-email]</b>. We appreciate your cooperation in helping
              to maintain a safe and respectful environment for all users of the
              Website.
            </p>
          </div>
          <div id="s4">
            <h2>Term and Termination:</h2>
            <p>
              <h5> Term:</h5>
              These Terms of Service shall remain in effect until terminated by
              either party. You may terminate these terms by discontinuing your
              use of the gamified e-learning website <b>"CSGEEKS"</b>. We may
              terminate these terms at any time without prior notice, including
              if you fail to comply with any provision of these terms.
              <br />
              <h5>Termination:</h5>
              Upon termination of these terms, your right to access and use the
              Website will cease immediately. You must cease all use of the
              Website and any associated services. Any provisions of these terms
              that by their nature should survive termination shall survive
              termination, including but not limited to provisions regarding
              intellectual property rights, disclaimer of warranties, limitation
              of liability, and indemnification.
              <br />
              <h5> Effect of Termination:</h5>
              Upon termination of these terms, you will no longer have access to
              your account or any content or information associated with your
              account. We may delete or remove any content or information
              associated with your account, and we are not obligated to retain
              or provide you with copies of such content or information.
              <h5>Survival:</h5>
              Sections such as "Prohibited Conduct," "Intellectual Property
              Rights," "Disclaimer of Warranties," "Limitation of Liability,"
              "Indemnification," and "Miscellaneous" shall survive termination
              of these terms.
              <h5> Changes to Terms:</h5>
              We reserve the right to modify, update, or revise these Terms of
              Service at any time without prior notice. Any changes to these
              terms will be effective immediately upon posting on this page. It
              is your responsibility to review these terms periodically for
              updates. Your continued use of the Website after any changes to
              these terms constitutes your acceptance of the revised terms.
              Termination of School Personnel, Teacher, and Student Accounts
              <h5> Termination by School Personnel:</h5>
              School personnel, including administrators or other authorized
              individuals, may terminate accounts of teachers and students
              affiliated with their institution. Termination may occur for
              reasons such as the end of the school year, graduation, withdrawal
              from the institution, or violation of school policies.
              <h5>Termination of Teacher Accounts:</h5>
              If a teacher's employment with the school is terminated or if they
              are no longer affiliated with the institution for any reason,
              their account may be terminated by school administrators.
              Termination of a teacher account may result in the removal of
              access to teaching materials, student records, and other
              associated resources.
              <h5>Termination of Student Accounts:</h5>
              Student accounts may be terminated upon graduation, withdrawal, or
              expulsion from the school. School administrators may also
              terminate student accounts if the student violates school policies
              or engages in prohibited conduct on the platform. Termination of a
              student account may result in the loss of access to course
              materials, grades, and other educational resources.
              <h5>Effect of Termination:</h5>
              Upon termination of school personnel, teacher, or student
              accounts, access to the gamified e-learning platform will be
              revoked. Users will no longer be able to log in or access any
              content associated with their accounts. Any data or information
              stored within the terminated accounts may be permanently deleted
              at the discretion of the school administrators.
              <h5>Notification of Termination:</h5>
              School administrators are responsible for notifying affected
              individuals of the termination of their accounts. Notifications
              may be sent via email, written communication, or through the
              platform's messaging system. It is important for school personnel,
              teachers, and students to be aware of the conditions under which
              their accounts may be terminated and the implications of such
              termination.
              <h5>Appeals Process:</h5>
              In the event of account termination, affected individuals may have
              the opportunity to appeal the decision to school administrators.
              The appeals process may involve providing additional information
              or evidence to support the case for account reinstatement. School
              administrators will review appeals on a case-by-case basis and
              make a final determination regarding account status.
              <h5>Changes to Termination Policies:</h5>
              Schools reserve the right to modify or update their termination
              policies for school personnel, teachers, and student accounts as
              necessary. Any changes to these policies will be communicated to
              affected individuals in a timely manner. If you have any questions
              or concerns about the termination of accounts for school
              personnel, teachers, or students, please contact the school
              administration for further assistance.
            </p>
          </div>
        </div>

        {/*<div  className="table-of-contents">
                <h2>Table Of Contents</h2>
                <ul>
                    <li><a href="#s1"><h3>Eligibility; Accounts</h3></a></li>
                    <li><a href="#s2"><h3>Privacy Policy:</h3></a></li>
                    <li><a href="#s3"><h3>Prohibited Conduct:</h3></a></li>
                    <li><a href="#s4"><h3>Term and Termination:</h3></a></li>
                </ul>
            </div>*/}
      </div>
    </div>
    </div>
  );
};
export default TermOfService;
