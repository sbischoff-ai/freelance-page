import os
import smtplib

from email.message import EmailMessage

from flask import Flask
from flask import request
from flask_cors import CORS
from flask_yoloapi import endpoint, parameter

app = Flask("freelance-page backend")
CORS(app)

MAILJET_URL = "in-v3.mailjet.com"
MAILJET_PORT = 25
MAILJET_USERNAME = os.environ["MAILJET_USERNAME"] if MAILJET_USERNAME is os.environ else ""
MAILJET_SECRET = os.environ["MAILJET_SECRET"] if MAILJET_SECRET is os.environ else ""
PORT = os.environ["APP_PORT"] if "APP_PORT" in os.environ else 8081
HOST = os.environ["APP_HOST"] if "APP_HOST" in os.environ else "127.0.0.1"


@app.route("/test", methods=["GET"])
@endpoint.api()
def test():
    return {
        "text": "Hello, Client!"
    }

@app.route("/submitContactForm", methods=["POST"])
@endpoint.api(
    parameter("name", type=str, required=True),
    parameter("email", type=str, required=True),
    parameter("message", type=str, required=True)
)
def submit_contact_form(name, email, message):
    msg = EmailMessage()
    msg.set_content(bytes(message, "utf-8"), maintype="application", subtype="octet-stream")
    msg["Subject"] = name + " - " + email
    msg["From"] = "website@sbischoff.dev"
    msg["To"] = "contact@sbischoff.dev"
    if MAILJET_SECRET != "":
        with smtplib.SMTP(MAILJET_URL, MAILJET_PORT) as smtp:
            smtp.starttls()
            smtp.login(MAILJET_USERNAME, MAILJET_SECRET)
            smtp.send_message(msg)

if __name__ == "__main__":
    app.run(HOST, PORT)
