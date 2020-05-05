/**
 * Creates a Google Doc and sends an email to the current user with a link to the doc.
 */
function createAndSendDocument() {
  const email = Session.getActiveUser().getEmail();

  // Get the name of the document to use as an email subject line.
  const subject = 'This is a GAS Test';

  // Append a new string to the "url" variable to use as an email body.
  const body = `Test Test Test`;

  // Send yourself an email with a link to the document.
  GmailApp.sendEmail(email, subject, body);
}

global.createAndSendDocument = createAndSendDocument;
