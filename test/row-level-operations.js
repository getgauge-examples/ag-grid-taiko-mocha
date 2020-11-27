    "use strict";
    const { openBrowser, $, closeBrowser,within, goto, click, doubleClick,below,textBox,button,text,toRightOf } = require('taiko');
    const assert = require("assert");

    describe('Row level operations on ag-grid', () => {
        before(async () => {
            await openBrowser({ headless: false});
        });

        describe('Verify text on the grid', () => {
            it('Goto ag-grid example page', async () => {
                await goto('https://www.ag-grid.com/example.php');
            });

            it('Click on columns to close the side tab', async () => {
                await click("Columns");                
            });

            it('Verify the language in the first row is English', async () => {
                await assert.equal(await ($('[col-id="language"]', within($('[row-index="0"]'))).text()),"English");
            });

        });

        describe('Select a different value from the comboBox', () => {
            it('Goto ag-grid example page', async () => {
                await goto('https://www.ag-grid.com/example.php');
            });

            it('Select Spanish from the dropdown of Languages', async () => {
                await doubleClick($('[col-id="language"]', within($('[row-index="1"]'))));
                await click("Spanish");
            });
        });

        describe('Select a date from the date component', () => {
            it('Goto ag-grid example page', async () => {
                await goto('file:///'+process.cwd()+'/project/index.html');
            });

            it('Select date as tomorrow', async () => {
                await click(button({"aria-label": "Open Filter Menu"}),below("Date"),toRightOf("Date"))
                await click(textBox(below("Equals")));

                var date = new Date();
                var last = new Date(date.getTime() + (1 * 24 * 60 * 60 * 1000));
                var day =last.getDate();
                const mon = new Intl.DateTimeFormat('en', { month: 'long' }).format(last);    
                
                if(date.getMonth()!=last.getMonth())
                    await click($('.flatpickr-next-month'));
                await click(day.toString(),below(mon),within($('.flatpickr-innerContainer')))            
            });
        });

        after(async () => {
            await closeBrowser();
        });

    });
