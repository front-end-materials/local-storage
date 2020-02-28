# Checking Local Storage with `StorageManager`

[View this page here](https://front-end-materials.github.io/local-storage/js-storagecheck/).

The StorageManager API is still experimental—[check browser support](https://caniuse.com/#search=StorageManager) before using in production (`Safari === new(IE)`).

This has two functions: one to quickly calculate the percentage used, and the other to who more details (view the console log). The object returned by the promise in the second function has this structure:

```json
{
  quota: 299977904946
  usage: 21325
  usageDetails:
    {indexedDB: 21325}
}
```

## Resources

- [How To Use the StorageManager API](https://dexie.org/docs/StorageManager)
- [StorageManager (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/StorageManager) 
- [StorageManager.estimate() (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/estimate) 
