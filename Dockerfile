FROM alpine:3.7

RUN apk update
RUN apk add curl \
    && apk add --no-cache --update python3 \
    && pip3 install --upgrade pip setuptools \
    && pip3 install awscli --upgrade --user