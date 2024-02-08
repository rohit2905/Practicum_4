Build the image: 

```docker build -t arithmetic-service --file Dockerfile .```

Run the image:

```docker run -d -p 3000:3000 arithmetic-service ```