# Testing ag-grid with Taiko and mocha

This is an example project to test ag-grid with Taiko. It mainly uses the example hosted on [ag-grid/example.php](https://www.ag-grid.com/example.php) for its test cases.

This example covers
- Sorting an ag-grid column
- Filtering an ag-grid
- Grouping elements on ag-grid
- Verifying a text on the grid
- Selecting an element from the combobox inside the cell of the ag-grid
- Select a date inside a cell of the ag-grid

## Pre-requisites

* `npm install` 

This will install all the pre-requisites for this project. Mocha,Taiko and ag-grid. Taiko can easily be run with other javascript test runners like Gauge or Jest instead of Mocha. Mocha is listed as the dependency here as this project uses taiko with Mocha.

## Running the tests
* `npm test`