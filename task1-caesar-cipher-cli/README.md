# Task 1. Caesar cipher CLI tool

Simple CLI tool for encrypting text data (only Latin characters will be affected).

## Install

To work with tool clone this repo on your machine with `git clone` command.
Then enter `task1-caesar-cipher-cli` directory:

`cd task1-caesar-cipher-cli`

Install dependencies:

`npm install`

## Usage

This Caesar cipher CLI tool accepts 4 main options (short alias or full name):

-s, --shift: a shift (required)
-i, --input: an input file
-o, --output: an output file
-a, --action: an action encode/decode (required)

**Example of usage:**

node index.js -a encode -s 7 -i "./input.txt" -o "./output.txt"

node index.js --action encode --shift 7 --input input.txt --output output.txt

**Example output:**

input.txt - `This is secret. Message about "_" symbol!`

output.txt - `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`
