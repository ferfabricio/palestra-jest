# palestra-jest
Palestra sobre Jest - React Maringá Meetup Group

## Exemplos

### Exemplo 1

Teste básico de um módulo JS normal

- [Exemplo 1](./exemplo-01/)

### Exemplo 2

Teste básico de um componente React criado com create-react-app

```
yarn add --dev enzyme enzyme-adapter-react-16
```

- [Exemplo 2](./exemplo-02/)

#### Problema que pode acontecer

Caso ocorra problema ao rodar os testes `/node_modules/browser-resolve/node_modules/resolve/test ENOSPC` rode o seguinte comando:

```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

### Exemplo 3

Teste aplicando os asserts no state

- [Exemplo 3](./exemplo-03/)


## Coverage

Utilizando o `yarn`:

```
yarn test --coverage
```

Utilizando o `npm`:

```
npm test -- --coverage
```

### Arquivos analisados pelo code coverage

Existe a possibilidade de configurar quais pastas ou arquivos que serão analisados pelo code coverage padrão.
Para tal adicione a propriedade `jest` no `package.json`. O parâmetro que define a whitelist é `collectCoverageFrom` como no exemplo a seguir:

```
"jest": {
  "collectCoverageFrom": [
    "src/**/*.{js,jsx}",
    "src/App.js",
    "!src/*.js"
  ]
}
```

## Referências
- [Site do Jest - https://facebook.github.io/jest/](https://facebook.github.io/jest/)
- [Airbnb Enzyme (shallow reference) - http://airbnb.io/enzyme/docs/api/shallow.html](http://airbnb.io/enzyme/docs/api/shallow.html)
- [Artigo do auth0](https://auth0.com/blog/testing-react-applications-with-jest/)
