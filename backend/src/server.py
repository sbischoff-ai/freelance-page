import os
from time import sleep
from smtplib import SMTP

from email.message import EmailMessage

from flask import Flask
from flask import request
from flask_cors import CORS
from flask_yoloapi import endpoint, parameter

app = Flask("freelance-page backend")
CORS(app)

MAILJET_URL = "in-v3.mailjet.com"
MAILJET_PORT = 25
MAILJET_USERNAME = os.environ["MAILJET_USERNAME"] if "MAILJET_USERNAME" in os.environ else ""
MAILJET_SECRET = os.environ["MAILJET_SECRET"] if "MAILJET_SECRET" in os.environ else ""
PORT = os.environ["APP_PORT"] if "APP_PORT" in os.environ else 8081
HOST = os.environ["APP_HOST"] if "APP_HOST" in os.environ else "127.0.0.1"
HERE_PATH = os.path.dirname(os.path.abspath(__file__))

@app.route("/test", methods=["GET"])
@endpoint.api()
def test():
    return {
        "text": "Hello, Client!"
    }

def get_html(name, locale):
    html = ""
    with open(os.path.join(HERE_PATH, '../resources/' + name + '.' + locale + '.html'), 'r', encoding='utf-8') as f:
        html = f.read()
    return html

@app.route("/dataPrivacyStatement/<locale>", methods=["GET"])
@endpoint.api()
def get_data_privacy_statement(locale):
    return get_html('dataprivacystatement', locale)

@app.route("/legalNotice/<locale>", methods=["GET"])
@endpoint.api()
def get_legal_notice(locale):
    return get_html('legalnotice', locale)

@app.route("/submitContactForm", methods=["POST"])
@endpoint.api(
    parameter("name", type=str, required=True),
    parameter("email", type=str, required=True),
    parameter("message", type=str, required=True)
)
def submit_contact_form(name, email, message):
    msg = EmailMessage()
    msg.set_content(message)
    msg["Subject"] = name + " - " + email
    msg["From"] = "website@sbischoff.dev"
    msg["To"] = "contact@sbischoff.dev"
    if MAILJET_SECRET != "":
        with SMTP(MAILJET_URL, MAILJET_PORT) as smtp:
            smtp.starttls()
            smtp.login(MAILJET_USERNAME, MAILJET_SECRET)
            smtp.send_message(msg)
    else:
        sleep(1) # Mock for testing purposes
        if name and name == "error":
            raise Exception()

if __name__ == "__main__":
    app.run(HOST, PORT)
