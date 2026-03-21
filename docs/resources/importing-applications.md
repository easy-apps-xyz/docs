---
sidebar_position: 3
sidebar_label: Importing Applications
---

# Importing Applications

To import an application, prepare a JSON file with the following format:

```json
{
    "appName": "",
    "logChannel": 0,
    "opened": "False",

    "questions": ["Question1", "Question2"],

    "passedRoleId": 0,
    "failedRoleId": 0,
    "appliedRoleId": 0
}
```

Fill in the data, while ensuring the format stays the same:

- Strings are in between quotes.
- IDs are numbers.
- There are commas after everything except the last line.
- `opened` can be either: `"True"` or `"False"`.

To add more questions, add a comma after the last pair of quotes, insert a new pair of quotes and add the question name in between.

The last 3 IDs do not need to be filled.
