

// Another Example of callback
function printStr(str, cb) {
    setTimeout(() => {
   
    cb();
    console.log(str);
    }, Math.floor(Math.random() * 1000) + 1);
    }
    function printAll() {
    printStr("A", () => {
    printStr("B", () => {
    printStr("C", () => {});
    });
    });
    }
    printAll(); 