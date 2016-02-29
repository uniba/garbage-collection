# garbage-collection

弊社のごみ当番

## Usage

```javascript
const gc = require('@uniba/garbage-collection');
gc(new Date()); // => 'burnable' | 'nonburnable' | 'recyclable' | null
gc(new Date(), { week: true }); // => [null, null, 'burnable', 'recyclable', null, 'burnable', null]
```
