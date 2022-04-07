function iter (m, n) {
    var resp = 1;
    for (var i = m; i <= n; i++) {
        resp *= (i + 1/i);
    }
    return resp;
}

function rec (m, n) {
    if (m == n) {
        return (m + 1/m); 
    } else {
        return ((m + 1/m) * rec(m+1, n));
    }
}

module.exports = {
    iter,
    rec
}
