[sp_desktop](../README.md) > ["listeners"](../modules/_listeners_.md)

# External module: "listeners"

## Index

### Functions

* [atsButtonListener](_listeners_.md#atsbuttonlistener)
* [loginListener](_listeners_.md#loginlistener)

---

## Functions

<a id="atsbuttonlistener"></a>

###  atsButtonListener

▸ **atsButtonListener**(): `void`

*Defined in [listeners.ts:27](https://github.com/d3lta-v/SP_Desktop/blob/a479f72/src/listeners.ts#L27)*

A listener to attach to a button to trigger the ATS interface

**Returns:** `void`

___
<a id="loginlistener"></a>

###  loginListener

▸ **loginListener**(finished: *`function`*): `void`

*Defined in [listeners.ts:8](https://github.com/d3lta-v/SP_Desktop/blob/a479f72/src/listeners.ts#L8)*

Hooks up to a .click() listener for the login event

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| finished | `function` |  A callback for the main popup.ts to initialise recurring events (i.e. pollers) |

**Returns:** `void`

___

