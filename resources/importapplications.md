# Importing Applications

To import an application, prepare a JSON file with the following format:

{
    "appName": "",
    "logChannel": 0,
    "opened": "False",

    "questions": ["Question1", "Question2"],

    "passedRoleId": 0,
    "failedRoleId": 0,
    "appliedRoleId": 0
}

Fill in the data, while ensuring the format stays the same so:
- Strings are in between quotes.
- ID's are numbers.
- There are comas after everything except last line.
To add more questions, add a coma after the last pair of quotes, insert new pair of quotes and in between those add the question name.
