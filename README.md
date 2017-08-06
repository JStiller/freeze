# freeze
Freezes the body node, triggered by the delivered node

This is useful if you want to scroll in an popup which is layered on the body.
This should prevent that the user is able to scroll both contents.

```js
jstiller.modules.freeze.element(dom.find('input[type="checkbox"]'));
```