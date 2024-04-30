import { Container } from 'react-bootstrap';
import "../styles/termsofservice.css"
function TermsOfService() {
  return (
    <Container>
      <h1>Terms of Service</h1>
      <p>Welcome to our school project. If you continue to browse and use this project, you are agreeing to comply with and be bound by the following terms and conditions of use.</p>
      
      <h2>Use of Project</h2>
      <p>The use of this project is subject to the following terms of use:</p>
      <ul>
        <li>The content of the pages of this project is for your general information and use only. It is subject to change without notice.</li>
        <li>This project uses React and Bootstrap libraries for front-end development, and the code is provided for educational purposes.</li>
        <li>Your use of any information or materials on this project is entirely at your own risk, for which we shall not be liable.</li>
        <li>This project contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics.</li>
        <li>Unauthorized use of this project may give rise to a claim for damages and/or be a criminal offense.</li>
        <li>From time to time, this project may also include links to other projects. These links are provided for your convenience to provide further information. They do not signify that we endorse the project(s). We have no responsibility for the content of the linked project(s).</li>
      </ul>
      
      <h2>Changes to Terms of Service</h2>
      <p>We reserve the right, at our sole discretion, to modify or replace these terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.</p>
      
      <p>For any questions about these terms, please contact us at [Your Contact Email Address].</p>
    </Container>
  );
}

export default TermsOfService;
