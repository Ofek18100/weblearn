FROM my_ubuntu:latests

COPY page1.html:/home/page1.html
COPY pyserver.py:/home/pyserver.py
COPY script.js:/home/script.js

CMD ["python3", "pyserver.py"]
