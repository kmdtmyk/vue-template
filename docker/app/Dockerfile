FROM node:8.9.4

RUN apt-get update && apt-get install -y sudo && \
    gpasswd -a node sudo

RUN echo 'node:node' | chpasswd

USER node
