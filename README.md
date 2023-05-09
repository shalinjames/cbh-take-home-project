This project contains two challenges - a "Ticket Breakdown" challenge and a "Refactoring" challenge. The two challenges are unrelated, but you should complete both in the same folder and share the link in Coderbyte. Any written answers should be included in markdown files within this folder.

## [Ticket Breakdown](Ticket_Breakdown.md)

## [Refactoring](Refactoring.md)

If you are a JS novice, here's how to get started:

1. [Install Node.js](https://nodejs.org/en/download/) (we use `^16`, the latest LTS)
2. Run `npm i` in this repo to install dependencies
3. Run `npm test` to run the automated tests
4. Run `npm start` to launch `index.js` for any manual testing

# Solution to the problems are as follows

## [Ticket Breakdown Solution](Tickets_Breakdown_solution.md)

## Solution to Refactoring:

- Included constants ALGORITHM and ENCODING to denote the purpose of magic strings.
- Initialized candidate with TRIVIAL*PARTITION_KEY to avoid a conditional else block, which could be like a \_default output*.
- `getHashForInput` moved the repetitive code for hashing into a function

### Now the Algorithm:

- If event is empty return '0'
- If event exists
  - If it has partitionKey child then processPartitionKey
    - if the processPartitionKey is not string then strigify it.
    - if it has more than 256 length hash it and
    - return the output
  - If it does have partitionKey
    - then stringify, hash and return the value.
