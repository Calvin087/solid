### React

The server is pretty much taken out of the equation here. React interacts with the web3 env. The private keys never get sent to the server. They live with the client and go straight to the web3 service.

React is the best way to interact with the web3 service. Vanilla JS is too dificult.

![something](../images/react-web3.png)

#### Set up:

`npx create-react-app my-app`

#### Web3 Gotchas

- Apparently metamask has removed the web3 inject? Will this be a problem?

![something](../images/web3-setup.png)

#### For Basic Apps

**Metamask** automatically **injects web3** into all pages that you're running in browser - or it used to...

The provider within this, points to Rinkeby test network.

We have to force point the web3 version that we're using through our app.

We're trying to hijack the version from Metamask and replace it with our chosen version.

In react src we create a web3 config file `web3.js`

**Updates**

- ADDITION This is needed to allow this application to interact with metamask `window.ethereum.enable();`

- window.web3 coming from metamask

```js
const currProvider = window.web3.currentProvider;

const web3 = new Web3(currProvider);

console.log(currProvider);
```

- Returns our version of web3 with metamask provider irrespective of web3 version injected by metamask

```js
export default web3;
```

---
