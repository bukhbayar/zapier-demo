# zapier-demo

# OCR model via curl

```
curl -X POST \
  'http://enod.ddns.net:8079/ocr' \
  -H 'accept: application/json' \
  -H 'Content-Type: multipart/form-data' \
  -F 'file=@/Users/bukhbayar.purevsuren/Downloads/test-image.jpg;type=image/jpg'
```

This Zapier integration project is generated by the `zapier init` CLI command.

These are what you normally do next:

```bash
# Install dependencies
npm install  # or you can use yarn

# Run tests
zapier test

# Register the integration on Zapier if you haven't
zapier register "App Title"

# Or you can link to an existing integration on Zapier
zapier link

# Push it to Zapier
zapier push
```

Find out more on the latest docs: https://github.com/zapier/zapier-platform/blob/master/packages/cli/README.md.

# The "typescript" Template

This example is mainly a proof-of-concept for using features not yet available
in Node.

In `package.json`, we've define some commonly-used scripts:

```bash
# Watch and compile as you edit code
npm run watch

# There's also a non-watch compile command
npm run build

# To push to Zapier, make sure you compile first
npm run build && zapier push
```
