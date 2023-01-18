function generateNumbers() {
    // function to generate the numbers
    var nums1 = [];
    while (nums1.length < 5) {
        var num = Math.floor(Math.random() * 50) + 1;
        if (!nums1.includes(num)) {
            nums1.push(num);
        }
    }

    nums1.sort(function(a, b) { return a - b });

    var nums2 = [];
    while (nums2.length < 2) {
        var num = Math.floor(Math.random() * 12) + 1;
        if (!nums2.includes(num)) {
            nums2.push(num);
        }
    }

    nums2.sort(function(a, b) { return a - b });

    // display the numbers on the page
    document.getElementById("nums1").innerHTML = "Pet številk: " + nums1.join(", ");
    document.getElementById("nums2").innerHTML = "Dve številki: " + nums2.join(", ");
}