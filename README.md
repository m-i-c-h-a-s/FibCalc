# CZĘŚĆ OBOWIĄZKOWA

## Krok 1

W celu utworzenia repozytorium git'a wykorzystano następujące polecenia:

```
git init -b main

git add .
git commit -m "Initial commit"
```

Następnie utworzono publiczne repozytorium na platformie GitHub i skopiowano tam zainicjalizowane repo. W tym celu skorzystano z polecenia:

```
gh repo create FibCalc --public --source=. --remote=FibCalc --push
```

## Krok 2

### **A:**

Treść pliku Dockerfile:

```
FROM redis:alpine

WORKDIR '/'

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","start"]
```

### **B:**

Zbudowanie obrazu:

```
docker build -t fib_calc:v1 .
```

### **C:**

Uruchomienie kontenera:

```
docker run -d -p 3000:3000 --name FibCalc fib_calc:v1
```

\
Działająca aplikacja:

![App preview](https://i.ibb.co/WDzPybV/Screenshot-8.png)
