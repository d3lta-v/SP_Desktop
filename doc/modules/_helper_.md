[sp_desktop](../README.md) > ["helper"](../modules/_helper_.md)

# External module: "helper"

## Index

### Functions

* [authenticatedRequest](_helper_.md#authenticatedrequest)
* [getUserToken](_helper_.md#getusertoken)
* [rekeyUser](_helper_.md#rekeyuser)
* [showLoginUIAndPurgeToken](_helper_.md#showloginuiandpurgetoken)
* [userIsAuthenticated](_helper_.md#userisauthenticated)
* [userLogin](_helper_.md#userlogin)
* [userLogout](_helper_.md#userlogout)

---

## Functions

<a id="authenticatedrequest"></a>

###  authenticatedRequest

▸ **authenticatedRequest**(method: *`string`*, url: *`string`*, async: *`boolean`*, token: *`string`*): `XMLHttpRequest`

*Defined in [helper.ts:10](https://github.com/d3lta-v/SP_Desktop/blob/31a6874/src/helper.ts#L10)*

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

*Defined in [helper.ts:53](https://github.com/d3lta-v/SP_Desktop/blob/31a6874/src/helper.ts#L53)*

Retrieves the user's login token only and does not perform further validation

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | `function` |  A lambda that returns the user's token |

**Returns:** `void`

___
<a id="rekeyuser"></a>

###  rekeyUser

▸ **rekeyUser**(completed: *`function`*): `void`

*Defined in [helper.ts:134](https://github.com/d3lta-v/SP_Desktop/blob/31a6874/src/helper.ts#L134)*

Rekey the user, or in other words, retrieve a fresh session token from the server using the user's original credentials. **WARNING**: This function will delete the user from local storage if the server returns an authentication failure message.

**Parameters:**

| Param | Type |
| ------ | ------ |
| completed | `function` |

**Returns:** `void`

___
<a id="showloginuiandpurgetoken"></a>

###  showLoginUIAndPurgeToken

▸ **showLoginUIAndPurgeToken**(): `void`

*Defined in [helper.ts:161](https://github.com/d3lta-v/SP_Desktop/blob/31a6874/src/helper.ts#L161)*

Shows the login UI and purges the old user info. Meant to called when the program detects that user is unauthorised due to various reasons

**Returns:** `void`

___
<a id="userisauthenticated"></a>

###  userIsAuthenticated

▸ **userIsAuthenticated**(callback: *`function`*): `void`

*Defined in [helper.ts:23](https://github.com/d3lta-v/SP_Desktop/blob/31a6874/src/helper.ts#L23)*

Checks if the current token stored in Chrome's storage is a valid token (i.e. the user is already authenticated).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | `function` |  A lambda that returns the authenticated state through a parameter |

**Returns:** `void`

___
<a id="userlogin"></a>

###  userLogin

▸ **userLogin**(username: *`string`*, password: *`string`*, successCallback: *`function`*, errorCallback: *`function`*): `void`

*Defined in [helper.ts:70](https://github.com/d3lta-v/SP_Desktop/blob/31a6874/src/helper.ts#L70)*

Performs user login with a username and password

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| username | `string` |  The username to log in with |
| password | `string` |  The corresponding password to the username |
| successCallback | `function` |  A lambda that should be called upon successful login |
| errorCallback | `function` |  A lambda that should be called upon a failed login, and supplies error details as a \`string\` |

**Returns:** `void`

___
<a id="userlogout"></a>

###  userLogout

▸ **userLogout**(): `void`

*Defined in [helper.ts:124](https://github.com/d3lta-v/SP_Desktop/blob/31a6874/src/helper.ts#L124)*

Logs the user out of this extension by deleting `user`, `username` and `password`

**Returns:** `void`

___

