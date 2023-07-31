FROM ubuntu:latest

RUN apt-get update && apt-get install -y python3

COPY page1.html /home/page1.html
COPY pyserver.py /home/pyserver.py
COPY script.js /home/script.js

WORKDIR /home/
ENTRYPOINT ["python3", "pyserver.py"]
