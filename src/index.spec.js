const context = require.context('./app', true, /\.(js|ts|tsx|scss)$/);
context.keys().forEach(context);
