[sp_desktop](../README.md) > ["helper"](../modules/_helper_.md)

# External module: "helper"

## Index

### Functions

* [authenticatedRequest](_helper_.md#authenticatedrequest)
* [getUserToken](_helper_.md#getusertoken)
* [hash](_helper_.md#hash)
* [purgeOldToken](_helper_.md#purgeoldtoken)
* [userIsAuthenticated](_helper_.md#userisauthenticated)

---

## Functions

<a id="authenticatedrequest"></a>

###  authenticatedRequest

▸ **authenticatedRequest**(method: *`string`*, url: *`string`*, async: *`boolean`*, token: *`string`*): `XMLHttpRequest`

*Defined in [helper.ts:8](https://github.com/sammy0025/SP_Desktop/blob/95cf60f/src/helper.ts#L8)*

Generates an authenticated request using an existing token

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| method | `string` |  The HTTP method to use for this request |
| url | `string` |  The URL to use for this request |
| async | `boolean` |  Whether the request should be done asynchronously |
| token | `string` |  The token WITHOUT the "Bearer " prefix |

**Returns:** `XMLHttpRequest`

___
<a id="getusertoken"></a>

###  getUserToken

▸ **getUserToken**(callback: *`function`*): `void`

*Defined in [helper.ts:50](https://github.com/sammy0025/SP_Desktop/blob/95cf60f/src/helper.ts#L50)*

Retrieves the user's login token only and does not perform further validation

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | `function` |  A lambda that returns the user's token |

**Returns:** `void`

___
<a id="hash"></a>

###  hash

▸ **hash**(input: *`string`*): `number`

*Defined in [helper.ts:73](https://github.com/sammy0025/SP_Desktop/blob/95cf60f/src/helper.ts#L73)*

Extremely fast and non-cryptographically secure hash function Used to create short and sweet hashes for uniquely ID"ing strings Based roughly on the Java String.hashCode() function

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| input | `string` |  Input string to hash |

**Returns:** `number`

___
<a id="purgeoldtoken"></a>

###  purgeOldToken

▸ **purgeOldToken**(): `void`

*Defined in [helper.ts:63](https://github.com/sammy0025/SP_Desktop/blob/95cf60f/src/helper.ts#L63)*

Purges the old user token from Chrome's internal storage

**Returns:** `void`

___
<a id="userisauthenticated"></a>

###  userIsAuthenticated

▸ **userIsAuthenticated**(callback: *`function`*): `void`

*Defined in [helper.ts:21](https://github.com/sammy0025/SP_Desktop/blob/95cf60f/src/helper.ts#L21)*

Checks if the current token stored in Chrome's storage is a valid token (i.e. the user is already authenticated).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | `function` |  A lambda that returns the authenticated state through a parameter |

**Returns:** `void`

___

