const str = `
Node.js is a JavaScript runtime.
JavaScript is widely used for backend development.
`;

function output(str, keyword) {
    if (typeof str !== 'string' || str.trim() === '') {
        throw new Error('Loi chuoi str');
    }

    if (typeof keyword !== 'string' || keyword.trim() === '') {
        throw new Error('Loi keyword');
    }

    const newStr = str.trim().split(/\s+/);

    let count = 0;

    for (let x of newStr) {
        if (x.toLowerCase().includes(keyword.toLowerCase())) {
            count++;
        }
    }

    return {
        found: count > 0,
        count: count
    };
}

console.log( str.trim().split(/\s+/));