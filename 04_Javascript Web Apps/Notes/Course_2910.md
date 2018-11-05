# Repetition of Promises

## Promises

Schlechtes beispiel, da verschachtelt
```
getQuote()
    .then((quote) => toMorse(quote)
        .then((quoteMorse) =>(quoteMorse)).catch((err) => error(err))
    ).catch((err) => error(err));
```

Gutes Beispiel
```

  let promise = getQuote()
    .then((quote) => toMorse(quote))
    .then((quoteMorse) =>(quoteMorse))
    .catch((err) => error(err));

```
Vierfacher aufruf:
```
let promises = [];
for(let i = 0; i < 4; i++) {
getQuote()
    .then((quote) => toMorse(quote))
    .then((quoteMorse) =>(quoteMorse))
    .catch((err) => error(err)); 
  promises.push(promise;
}

Promise.all(promises)
    .then(() => state('DONE'));
    //an error catching here is not usefull!
```

And recursive:

```
function myFunction(){
  return getQuote()
    .then((quote) => toMorse(quote))
    .then((quoteMorse) =>(quoteMorse))
    .catch((err) => {
      error(err);
      return myFunction();
    }); 

}
```

## Typescript

Install:
npm install -g typescript
transpile:
tsc hello-world.ts