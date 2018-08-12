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

*Defined in [datatypes.ts:66](https://github.com/sammy0025/SP_Desktop/blob/95cf60f/src/datatypes.ts#L66)*

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

*Defined in [datatypes.ts:69](https://github.com/sammy0025/SP_Desktop/blob/95cf60f/src/datatypes.ts#L69)*

___
<a id="name"></a>

### `<Private>` name

**● name**: *`string`*

*Defined in [datatypes.ts:70](https://github.com/sammy0025/SP_Desktop/blob/95cf60f/src/datatypes.ts#L70)*

___

## Methods

<a id="getaccesstoken"></a>

###  getAccessToken

▸ **getAccessToken**(): `string`

*Defined in [datatypes.ts:76](https://github.com/sammy0025/SP_Desktop/blob/95cf60f/src/datatypes.ts#L76)*

Retrieves the access token for this `User`

**Returns:** `string`

___
<a id="getname"></a>

###  getName

▸ **getName**(): `string`

*Defined in [datatypes.ts:80](https://github.com/sammy0025/SP_Desktop/blob/95cf60f/src/datatypes.ts#L80)*

**Returns:** `string`

___
<a id="fromjson"></a>

### `<Static>` fromJSON

▸ **fromJSON**(json: *`string`*): [User](_datatypes_.user.md)

*Defined in [datatypes.ts:49](https://github.com/sammy0025/SP_Desktop/blob/95cf60f/src/datatypes.ts#L49)*

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

*Defined in [datatypes.ts:58](https://github.com/sammy0025/SP_Desktop/blob/95cf60f/src/datatypes.ts#L58)*

Validates a JSON string to be a User object

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| json | `string` |  The JSON string to validate |

**Returns:** `boolean`

___

