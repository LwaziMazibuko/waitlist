const functions = require("firebase-functions");
const admin = require("firebase-admin");
const sgMail = require("@sendgrid/mail");

admin.initializeApp();

const API_KEY = functions.config().sendgrid.key;
sgMail.setApiKey(API_KEY);

exports.welcomeEmail = functions.auth.user().onCreate((user) => {
  const msg = {
    to: user.email,
    from: "help@laani.io",
    templateId: "d-e89ccc20a7bb4ee89c31ee5139813b25",
    dynamic_template_data: {
      subject: "Welcome to Laani",
      name: user.displayName || "New User",
    },
  };

  return sgMail.send(msg);
});

exports.sendWelcomeEmail = functions.auth.user().onCreate(async (user) => {
  const msg = {
    to: user.email,
    from: "help@laani.io",
    templateId: "d-e89ccc20a7bb4ee89c31ee5139813b25",
    dynamic_template_data: {
      subject: "Welcome to Laani",
      name: user.displayName || "New User",
    },
  };

  try {
    await sgMail.send(msg);
    console.log("Welcome email sent to:", user.email);
  } catch (error) {
    console.error("Error sending welcome email:", error);
  }
});


