    "use strict";
    const { openBrowser, closeBrowser, goto, click, setConfig, write,below,textBox,button,dragAndDrop,text,checkBox,toLeftOf,toRightOf,into } = require('taiko');

    describe('Testing AG-Grid with Mocha and Taiko', () => {
        before(async () => {
            await setConfig({navigationTimeout:30000})
            await openBrowser({ headless: false});
        });

        describe('Sort a column on the grid', () => {
            it('Goto ag-grid example page', async () => {
                await goto('https://www.ag-grid.com/example.php');
            });

            it('Click on columns to close the side tab', async () => {
                await click("Columns");//Close the side tab
            });

            it('Sorting the column Name"', async () => {
                await click("Name");//Sorts it
                await click("Name");//Clicking again changes the sort order
                await click("Name");//Clicking again removes sorting
            });
        });

        describe('Filter on a column on the grid', () => {
            it('Goto ag-grid example page', async () => {
                await goto('https://www.ag-grid.com/example.php');
            });
            it('Click on columns to close the side tab', async () => {
                await click("Columns");//Close the side tab
            });

            it('Filter on the column Name"', async () => {
                await click(button({"aria-label": "Open Filter Menu"}),below("Language"),toRightOf("Language"))
                await click(checkBox(toLeftOf(text("Select All",below("Language")))));
                await click(checkBox(toLeftOf(text("English",below("Language")))));
                await click(checkBox(toLeftOf(text("Greek",below("Language")))));
            });
        });

        describe('Group by column Language', () => {
            it('Goto ag-grid example page', async () => {
                await goto('https://www.ag-grid.com/example.php');
            });
            it('Click on columns to close the side tab', async () => {
                await click("Columns");//Close the side tab
            });

            it('Drag column languages to the grouping section"', async () => {
            await dragAndDrop("Language",into('Drag here to set row groups'))
            });
        });

        after(async () => {
            await closeBrowser();
        });

    });
