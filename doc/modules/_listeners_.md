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

*Defined in [listeners.ts:64](https://github.com/sammy0025/SP_Desktop/blob/fa6190c/src/listeners.ts#L64)*

A listener to attach to a button to trigger the ATS interface

**Returns:** `void`

___
<a id="loginlistener"></a>

###  loginListener

▸ **loginListener**(startPollers: *`function`*): `void`

*Defined in [listeners.ts:8](https://github.com/sammy0025/SP_Desktop/blob/fa6190c/src/listeners.ts#L8)*

Hooks up to a .click() listener for the login event

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| startPollers | `function` |  A callback for the main popup.ts to initialise recurring events (i.e. pollers) |

**Returns:** `void`

___

