# Api \| dbots.gg

### Hierarchy

*  EventEmitter
  *  Api

## Index

### Constructors

* [constructor](Api.html#constructor)

### Methods

* [get](Api.html#get)
* [post](Api.html#post)
* [search](Api.html#search)

## Constructors

### constructor

* newApi\(client: Client&lt;boolean&gt;, token: string\): [Api](Api.html)
* **Parameters**

  * **client: Client&lt;boolean&gt;**
  * **token: string**

  **Returns** [**Api**](Api.html)\*\*\*\*

## Methods

### get

* get\(id: BotStats\): Promise&lt;BotStats&gt;
* **Parameters**

  * **id: BotStats**

  **Returns Promise&lt;BotStats&gt;**

  Stats of bot requested

### post

* post\(stats: BotStats, log: Boolean\): Promise&lt;BotStats&gt;
* **Parameters**

  * **stats: BotStats**
  * **log: Boolean**

  **Returns Promise&lt;BotStats&gt;**

  Passed object

### search

* search\(results: BotStats\): Promise&lt;BotStats&gt;
* **Parameters**

  * **results: BotStats**

  **Returns Promise&lt;BotStats&gt;**

  Stats of bot requested

