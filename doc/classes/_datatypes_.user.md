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

*Defined in [datatypes.ts:70](https://github.com/d3lta-v/SP_Desktop/blob/31a6874/src/datatypes.ts#L70)*

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

*Defined in [datatypes.ts:73](https://github.com/d3lta-v/SP_Desktop/blob/31a6874/src/datatypes.ts#L73)*

___
<a id="name"></a>

### `<Private>` name

**● name**: *`string`*

*Defined in [datatypes.ts:74](https://github.com/d3lta-v/SP_Desktop/blob/31a6874/src/datatypes.ts#L74)*

___

## Methods

<a id="getaccesstoken"></a>

###  getAccessToken

▸ **getAccessToken**(): `string`

*Defined in [datatypes.ts:80](https://github.com/d3lta-v/SP_Desktop/blob/31a6874/src/datatypes.ts#L80)*

Retrieves the access token for this `User`

**Returns:** `string`

___
<a id="getname"></a>

###  getName

▸ **getName**(): `string`

*Defined in [datatypes.ts:84](https://github.com/d3lta-v/SP_Desktop/blob/31a6874/src/datatypes.ts#L84)*

**Returns:** `string`

___
<a id="fromjson"></a>

### `<Static>` fromJSON

▸ **fromJSON**(json: *`string`*): [User](_datatypes_.user.md)

*Defined in [datatypes.ts:53](https://github.com/d3lta-v/SP_Desktop/blob/31a6874/src/datatypes.ts#L53)*

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

*Defined in [datatypes.ts:62](https://github.com/d3lta-v/SP_Desktop/blob/31a6874/src/datatypes.ts#L62)*

Validates a JSON string to be a User object

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| json | `string` |  The JSON string to validate |

**Returns:** `boolean`

___

