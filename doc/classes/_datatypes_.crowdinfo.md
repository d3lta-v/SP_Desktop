[sp_desktop](../README.md) > ["datatypes"](../modules/_datatypes_.md) > [CrowdInfo](../classes/_datatypes_.crowdinfo.md)

# Class: CrowdInfo

A class that encapsulates information for a crowd at a certain location

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

*Defined in [datatypes.ts:282](https://github.com/d3lta-v/SP_Desktop/blob/31a6874/src/datatypes.ts#L282)*

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

*Defined in [datatypes.ts:286](https://github.com/d3lta-v/SP_Desktop/blob/31a6874/src/datatypes.ts#L286)*

Name of the location of the potentially crowded area

___
<a id="status"></a>

### `<Private>` status

**● status**: *[CrowdLevel](../enums/_datatypes_.crowdlevel.md)*

*Defined in [datatypes.ts:288](https://github.com/d3lta-v/SP_Desktop/blob/31a6874/src/datatypes.ts#L288)*

Crowd level of the potentially crowded area

___

## Methods

<a id="getname"></a>

###  getName

▸ **getName**(): `string`

*Defined in [datatypes.ts:291](https://github.com/d3lta-v/SP_Desktop/blob/31a6874/src/datatypes.ts#L291)*

**Returns:** `string`

___
<a id="getstatus"></a>

###  getStatus

▸ **getStatus**(): [CrowdLevel](../enums/_datatypes_.crowdlevel.md)

*Defined in [datatypes.ts:295](https://github.com/d3lta-v/SP_Desktop/blob/31a6874/src/datatypes.ts#L295)*

**Returns:** [CrowdLevel](../enums/_datatypes_.crowdlevel.md)

___
<a id="fromjson"></a>

### `<Static>` fromJSON

▸ **fromJSON**(json: *`string`*): [CrowdInfo](_datatypes_.crowdinfo.md)

*Defined in [datatypes.ts:253](https://github.com/d3lta-v/SP_Desktop/blob/31a6874/src/datatypes.ts#L253)*

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

*Defined in [datatypes.ts:262](https://github.com/d3lta-v/SP_Desktop/blob/31a6874/src/datatypes.ts#L262)*

Validates a JSON string to be a CrowdInfo object

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| json | `string` |  The JSON string to validate |

**Returns:** `boolean`

___

