FROM python:3.6

ARG MAILJET_USERNAME
ARG MAILJET_SECRET

WORKDIR /app

# Install poetry + dependencies.
COPY ./pyproject.toml poetry.lock ./
RUN pip install --no-cache-dir poetry
ENV POETRY_VIRTUALENVS_CREATE=false
RUN poetry install --no-dev --no-interaction 

# Get service source files.
COPY ./src/ ./src/
COPY ./resources ./resources

ENV APP_HOST="0.0.0.0"
ENV APP_PORT=8081
ENV MAILJET_USERNAME=${MAILJET_USERNAME}
ENV MAILJET_SECRET=${MAILJET_SECRET}

EXPOSE 8081

CMD [ "python", "-u", "./src/server.py" ]
