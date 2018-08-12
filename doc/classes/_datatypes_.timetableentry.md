[sp_desktop](../README.md) > ["datatypes"](../modules/_datatypes_.md) > [TimetableEntry](../classes/_datatypes_.timetableentry.md)

# Class: TimetableEntry

## Hierarchy

**TimetableEntry**

## Index

### Constructors

* [constructor](_datatypes_.timetableentry.md#constructor)

### Properties

* [abbreviation](_datatypes_.timetableentry.md#abbreviation)
* [code](_datatypes_.timetableentry.md#code)
* [endTime](_datatypes_.timetableentry.md#endtime)
* [location](_datatypes_.timetableentry.md#location)
* [startTime](_datatypes_.timetableentry.md#starttime)
* [type](_datatypes_.timetableentry.md#type)

### Methods

* [getAbbreviation](_datatypes_.timetableentry.md#getabbreviation)
* [getEndDateTime](_datatypes_.timetableentry.md#getenddatetime)
* [getLocation](_datatypes_.timetableentry.md#getlocation)
* [getModuleCode](_datatypes_.timetableentry.md#getmodulecode)
* [getStartDateTime](_datatypes_.timetableentry.md#getstartdatetime)
* [getType](_datatypes_.timetableentry.md#gettype)
* [getTypeString](_datatypes_.timetableentry.md#gettypestring)
* [fromJSON](_datatypes_.timetableentry.md#fromjson)
* [isValid](_datatypes_.timetableentry.md#isvalid)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new TimetableEntry**(abbreviation: *`string`*, startTime: *`Date`*, endTime: *`Date`*, type: *[TimetableEntryType](../enums/_datatypes_.timetableentrytype.md)*, code: *`string`*, location: *`string`*): [TimetableEntry](_datatypes_.timetableentry.md)

*Defined in [datatypes.ts:155](https://github.com/sammy0025/SP_Desktop/blob/95cf60f/src/datatypes.ts#L155)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| abbreviation | `string` |
| startTime | `Date` |
| endTime | `Date` |
| type | [TimetableEntryType](../enums/_datatypes_.timetableentrytype.md) |
| code | `string` |
| location | `string` |

**Returns:** [TimetableEntry](_datatypes_.timetableentry.md)

___

## Properties

<a id="abbreviation"></a>

### `<Private>` abbreviation

**● abbreviation**: *`string`*

*Defined in [datatypes.ts:158](https://github.com/sammy0025/SP_Desktop/blob/95cf60f/src/datatypes.ts#L158)*

___
<a id="code"></a>

### `<Private>` code

**● code**: *`string`*

*Defined in [datatypes.ts:162](https://github.com/sammy0025/SP_Desktop/blob/95cf60f/src/datatypes.ts#L162)*

___
<a id="endtime"></a>

### `<Private>` endTime

**● endTime**: *`Date`*

*Defined in [datatypes.ts:160](https://github.com/sammy0025/SP_Desktop/blob/95cf60f/src/datatypes.ts#L160)*

___
<a id="location"></a>

### `<Private>` location

**● location**: *`string`*

*Defined in [datatypes.ts:163](https://github.com/sammy0025/SP_Desktop/blob/95cf60f/src/datatypes.ts#L163)*

___
<a id="starttime"></a>

### `<Private>` startTime

**● startTime**: *`Date`*

*Defined in [datatypes.ts:159](https://github.com/sammy0025/SP_Desktop/blob/95cf60f/src/datatypes.ts#L159)*

___
<a id="type"></a>

### `<Private>` type

**● type**: *[TimetableEntryType](../enums/_datatypes_.timetableentrytype.md)*

*Defined in [datatypes.ts:161](https://github.com/sammy0025/SP_Desktop/blob/95cf60f/src/datatypes.ts#L161)*

___

## Methods

<a id="getabbreviation"></a>

###  getAbbreviation

▸ **getAbbreviation**(): `string`

*Defined in [datatypes.ts:169](https://github.com/sammy0025/SP_Desktop/blob/95cf60f/src/datatypes.ts#L169)*

Retrieves the abbreviation for the module (such as OOP, OPSYS)

**Returns:** `string`

___
<a id="getenddatetime"></a>

###  getEndDateTime

▸ **getEndDateTime**(): `Date`

*Defined in [datatypes.ts:219](https://github.com/sammy0025/SP_Desktop/blob/95cf60f/src/datatypes.ts#L219)*

Gets the ending date and time in a `Date` object of this lesson

**Returns:** `Date`

___
<a id="getlocation"></a>

###  getLocation

▸ **getLocation**(): `string`

*Defined in [datatypes.ts:205](https://github.com/sammy0025/SP_Desktop/blob/95cf60f/src/datatypes.ts#L205)*

Retrieves the location in which this lesson is taking place

**Returns:** `string`

___
<a id="getmodulecode"></a>

###  getModuleCode

▸ **getModuleCode**(): `string`

*Defined in [datatypes.ts:198](https://github.com/sammy0025/SP_Desktop/blob/95cf60f/src/datatypes.ts#L198)*

Retrieves the module code for this timetable entry

**Returns:** `string`

___
<a id="getstartdatetime"></a>

###  getStartDateTime

▸ **getStartDateTime**(): `Date`

*Defined in [datatypes.ts:212](https://github.com/sammy0025/SP_Desktop/blob/95cf60f/src/datatypes.ts#L212)*

Gets the starting date and time in a `Date` object of this lesson

**Returns:** `Date`

___
<a id="gettype"></a>

###  getType

▸ **getType**(): `string`

*Defined in [datatypes.ts:176](https://github.com/sammy0025/SP_Desktop/blob/95cf60f/src/datatypes.ts#L176)*

Retrieves the type of lesson, such as tutorial, lecture, or lab

**Returns:** `string`

___
<a id="gettypestring"></a>

###  getTypeString

▸ **getTypeString**(): `string`

*Defined in [datatypes.ts:184](https://github.com/sammy0025/SP_Desktop/blob/95cf60f/src/datatypes.ts#L184)*

Outputs the full formal version of each type of lesson, converting LEC to Lecture

**Returns:** `string`

___
<a id="fromjson"></a>

### `<Static>` fromJSON

▸ **fromJSON**(json: *`string`*, dateString: *`string`*): [TimetableEntry](_datatypes_.timetableentry.md)

*Defined in [datatypes.ts:114](https://github.com/sammy0025/SP_Desktop/blob/95cf60f/src/datatypes.ts#L114)*

Converts a piece of JSON into a `TimetableEntry`

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| json | `string` |  The JSON to convert to a \`TimetableEntry\` |
| dateString | `string` |  The string of the date, in DDMMYY format |

**Returns:** [TimetableEntry](_datatypes_.timetableentry.md)

___
<a id="isvalid"></a>

### `<Static>` isValid

▸ **isValid**(json: *`string`*): `boolean`

*Defined in [datatypes.ts:143](https://github.com/sammy0025/SP_Desktop/blob/95cf60f/src/datatypes.ts#L143)*

Validates a JSON string to be a `TimetableEntry` object

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| json | `string` |  The JSON string to validate |

**Returns:** `boolean`

___

