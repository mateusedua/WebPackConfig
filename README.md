# Configuração do Babel com WebPack

## Sobre o Codigo

Configuração do babel com webpack feito no codigo gerado na criação de um projeto react padrão **npx create-react-app app_name**.

## Pacotes Utilizandos

### Babel

Utilizado para converter codigos EcmaScript em versões compatíveis com versão anteriores do javascript.
Quando você tem um aplicação rodando em node 16 e voce quer rodar ela em node 14 o babel faz esse nivelamento para ser possivel rodar na versão 14.

**Utilizados os seguintes pacotes do babel**.
```bash
 yarn add @babel/core @babel/preset-env @babel/preset-react -D --save
```

### WebPack

Utilizado para fazer o empacotamento dos modulos.

**Utilizados os seguintes pacotes do WebPack**

**Padrão**
```bash
yarn add webpack webpack-cli -D --save
```

**Plugins**
```bash
yarn add html-webpack-plugin clean-webpack-plugin -D --save
```
**Loaders**
```bash
yarn add babel-loader css-loader style-loader svg-url-loader -D --save
```

**Server Dev**
Necessario para não ficar buildando toda que fazer uma atualização no codigo.
```bash
yarn add webpack-dev-server -D --save
```

