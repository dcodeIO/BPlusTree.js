var Tree = require(__dirname+"/../BPlusTree.js");

var root = new Tree({
    order: 6,
    mergeThreshold: 4
});

for (var i=0; i<100; i++) {
    root.insert(i, "item "+i);
}

console.log(root.toString());
