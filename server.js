const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static frontend files
app.use(express.static('public'));

// Endpoint to fetch raw Hysteria v2 JSON config
app.get('/api/config', (req, res) => {
  const config = [
    {
      "remarks": "Xreg-8D79",
      "outbounds": [
        {
          "tag": "proxy",
          "protocol": "hysteria",
          "settings": {
            "address": "wraith-bom.xreg.site",
            "port": 443,
            "version": 2
          },
          "streamSettings": {
            "network": "hysteria",
            "security": "tls",
            "tlsSettings": {
              "serverName": "wraith-bom.xreg.site",
              "alpn": ["h3"]
            },
            "hysteriaSettings": {
              "version": 2,
              "auth": "XREG-E472-1EF2-8D79.1792907117.3f42b5c809eb5c1b68dad8c1a878b98d"
            }
          }
        }
      ]
    }
  ];
  res.json(config);
});

app.listen(PORT, () => {
  console.log(`Frontend running on port ${PORT}`);
});
