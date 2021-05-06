```node server.js```

```npx webpack serve ./index.js```

browser open ```http://localhost:8080```

creates EventSource connection to server.js by webpack-dev-server proxy

on EventSource close, fix in ```webpack.config.js``` required to close proxy connection to server.js aswell



