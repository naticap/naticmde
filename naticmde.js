function mde (a, b) {
    alert(a);
    b();
}

mde("test", () => {
    alert('ypyp');
})