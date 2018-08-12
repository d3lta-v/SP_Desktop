[sp_desktop](../README.md) > ["datatypes"](../modules/_datatypes_.md) > [CrowdInfo](../classes/_datatypes_.crowdinfo.md)

# Class: CrowdInfo

## Hierarchy

**CrowdInfo**

## Index

### Constructors

* [constructor](_datatypes_.crowdinfo.md#constructor)

### Properties

* [name](_datatypes_.crowdinfo.md#name)
* [status](_datatypes_.crowdinfo.md#status)

### Methods

* [getName](_datatypes_.crowdinfo.md#getname)
* [getStatus](_datatypes_.crowdinfo.md#getstatus)
* [fromJSON](_datatypes_.crowdinfo.md#fromjson)
* [isValid](_datatypes_.crowdinfo.md#isvalid)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CrowdInfo**(name: *`string`*, status: *[CrowdLevel](../enums/_datatypes_.crowdlevel.md)*): [CrowdInfo](_datatypes_.crowdinfo.md)

*Defined in [datatypes.ts:270](https://github.com/sammy0025/SP_Desktop/blob/95cf60f/src/datatypes.ts#L270)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |
| status | [CrowdLevel](../enums/_datatypes_.crowdlevel.md) |

**Returns:** [CrowdInfo](_datatypes_.crowdinfo.md)

___

## Properties

<a id="name"></a>

### `<Private>` name

**● name**: *`string`*

*Defined in [datatypes.ts:274](https://github.com/sammy0025/SP_Desktop/blob/95cf60f/src/datatypes.ts#L274)*

Name of the location of the potentially crowded area

___
<a id="status"></a>

### `<Private>` status

**● status**: *[CrowdLevel](../enums/_datatypes_.crowdlevel.md)*

*Defined in [datatypes.ts:276](https://github.com/sammy0025/SP_Desktop/blob/95cf60f/src/datatypes.ts#L276)*

Crowd level of the potentially crowded area

___

## Methods

<a id="getname"></a>

###  getName

▸ **getName**(): `string`

*Defined in [datatypes.ts:279](https://github.com/sammy0025/SP_Desktop/blob/95cf60f/src/datatypes.ts#L279)*

**Returns:** `string`

___
<a id="getstatus"></a>

###  getStatus

▸ **getStatus**(): [CrowdLevel](../enums/_datatypes_.crowdlevel.md)

*Defined in [datatypes.ts:283](https://github.com/sammy0025/SP_Desktop/blob/95cf60f/src/datatypes.ts#L283)*

**Returns:** [CrowdLevel](../enums/_datatypes_.crowdlevel.md)

___
<a id="fromjson"></a>

### `<Static>` fromJSON

▸ **fromJSON**(json: *`string`*): [CrowdInfo](_datatypes_.crowdinfo.md)

*Defined in [datatypes.ts:241](https://github.com/sammy0025/SP_Desktop/blob/95cf60f/src/datatypes.ts#L241)*

Converts a piece of JSON into an `CrowdInfo` object

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| json | `string` |  The JSON to convert to an \`CrowdInfo\` object |

**Returns:** [CrowdInfo](_datatypes_.crowdinfo.md)

___
<a id="isvalid"></a>

### `<Static>` isValid

▸ **isValid**(json: *`string`*): `boolean`

*Defined in [datatypes.ts:250](https://github.com/sammy0025/SP_Desktop/blob/95cf60f/src/datatypes.ts#L250)*

Validates a JSON string to be a CrowdInfo object

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| json | `string` |  The JSON string to validate |

**Returns:** `boolean`

___

