stamp
=====

Series of functions to nicely format your timestamp.

# Usage

**Include stamp.js**

```HTML
<script src="stamp.js"></script>
```

**Use `stamp` with a `Date()` object to return nice formats

```JS
var date = new Date();

stamp.weekday(date);    // Friday
stamp.weekday_a(date);  // Fri
stamp.month(date);      // November
stamp.month_a(date);    // Nov
stamp.ordinal(date);    // 7th
stamp.time(date);       // 2:47pm
stamp.time_sec(date);   // 2:47:38
stamp.date(date);       // 10/7/2014
```