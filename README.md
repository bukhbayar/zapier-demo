# zapier-demo

## OCR model via curl

```
curl -X POST \
  'http://enod.ddns.net:8079/ocr' \
  -H 'accept: application/json' \
  -H 'Content-Type: multipart/form-data' \
  -F 'file=@/Users/bukhbayar.purevsuren/Downloads/test-image.jpg;type=image/jpg'
```

# Development

```

```

```
docker-compose up --build zapier-test
```