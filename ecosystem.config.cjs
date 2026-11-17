module.exports = {
  apps: [
    {
      name: "datlht-bot",
      script: "src/index.js",
      autorestart: true,
      max_memory_restart: "300M",
    },
  ],
};
