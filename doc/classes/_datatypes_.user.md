[sp_desktop](../README.md) > ["datatypes"](../modules/_datatypes_.md) > [User](../classes/_datatypes_.user.md)

# Class: User

A class that encapsulates user information, such as the user's access token and name, and provides common functionality such as JSON validation and conversion.

## Hierarchy

**User**

## Index

### Constructors

* [constructor](_datatypes_.user.md#constructor)

### Properties

* [accessToken](_datatypes_.user.md#accesstoken)
* [name](_datatypes_.user.md#name)

### Methods

* [getAccessToken](_datatypes_.user.md#getaccesstoken)
* [getName](_datatypes_.user.md#getname)
* [fromJSON](_datatypes_.user.md#fromjson)
* [isValid](_datatypes_.user.md#isvalid)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new User**(accessToken: *`string`*, name: *`string`*): [User](_datatypes_.user.md)

*Defined in [datatypes.ts:69](https://github.com/sammy0025/SP_Desktop/blob/e05e746/src/datatypes.ts#L69)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| accessToken | `string` |
| name | `string` |

**Returns:** [User](_datatypes_.user.md)

___

## Properties

<a id="accesstoken"></a>

### `<Private>` accessToken

**● accessToken**: *`string`*

*Defined in [datatypes.ts:72](https://github.com/sammy0025/SP_Desktop/blob/e05e746/src/datatypes.ts#L72)*

___
<a id="name"></a>

### `<Private>` name

**● name**: *`string`*

*Defined in [datatypes.ts:73](https://github.com/sammy0025/SP_Desktop/blob/e05e746/src/datatypes.ts#L73)*

___

## Methods

<a id="getaccesstoken"></a>

###  getAccessToken

▸ **getAccessToken**(): `string`

*Defined in [datatypes.ts:79](https://github.com/sammy0025/SP_Desktop/blob/e05e746/src/datatypes.ts#L79)*

Retrieves the access token for this `User`

**Returns:** `string`

___
<a id="getname"></a>

###  getName

▸ **getName**(): `string`

*Defined in [datatypes.ts:83](https://github.com/sammy0025/SP_Desktop/blob/e05e746/src/datatypes.ts#L83)*

**Returns:** `string`

___
<a id="fromjson"></a>

### `<Static>` fromJSON

▸ **fromJSON**(json: *`string`*): [User](_datatypes_.user.md)

*Defined in [datatypes.ts:52](https://github.com/sammy0025/SP_Desktop/blob/e05e746/src/datatypes.ts#L52)*

Converts a piece of JSON into an `User` object

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| json | `string` |  The JSON to convert to an \`User\` object |

**Returns:** [User](_datatypes_.user.md)

___
<a id="isvalid"></a>

### `<Static>` isValid

▸ **isValid**(json: *`string`*): `boolean`

*Defined in [datatypes.ts:61](https://github.com/sammy0025/SP_Desktop/blob/e05e746/src/datatypes.ts#L61)*

Validates a JSON string to be a User object

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| json | `string` |  The JSON string to validate |

**Returns:** `boolean`

___

