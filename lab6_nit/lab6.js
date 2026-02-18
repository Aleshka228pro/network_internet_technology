function strToMatrix() {

    const str = "ге_ечад__оьтжсостНинытнт_ича_во_тзшиеэ—_инж_т.__ач__тат_ие_ьдотазво_атлшчтетьнс_т,те,ьеайэ,вее,тьж_ллвс_аогш_е_окооот…лвоьклбмобвв_ь_т_лт_о_т_е__нжсчооелйок___зивуб_шьыр";

    let matrix = [];
    let size = 13;
    
    for (let i = 0; i < size; i++) {
        let row = [];
        for (let j = 0; j < size; j++) {
            let index = i * size + j;
            row.push(str[index]);
        }
        matrix.push(row);
    }
    
    return matrix;
}

let matrix = strToMatrix();

function matrixToHTML(matrix) {
    let html = '<table border="1" style="border-collapse: collapse;">';
    for (let i = 0; i < matrix.length; i++) {
        html += '<tr>';
        for (let j = 0; j < matrix[i].length; j++) {
            html += `<td style="padding: 5px;">${matrix[i][j]}</td>`;
        }
        html += '</tr>';
    }
    html += '</table>';
    return html;
}


function rightKey2(matrix) {
    const size = matrix.length;
    let text = "";
    
    let row = 0;
    let col = size - 1;
    
    text += matrix[row][col];
    
    let mode = "";

    function down() {
        if (row + 1 < size) {
            row++;
            return true;
        }
        return false;
    }

    function left() {
        if (col - 1 >= 0) {
            col--;
            return true;
        }
        return false;
    }

    function leftUp() {
        if (row - 1 >= 0 && col - 1 >= 0) {
            row--;
            col--;
            return true;
        }
        return false;
    }
    
    function rightDown() {
        if (row + 1 < size && col + 1 < size) {
            row++;
            col++;
            return true;
        }
        return false;
    }

    function move(moveFn, diagonal = false) {
        if (diagonal) {
            while (moveFn()) {
                text += matrix[row][col];
            }
        } else {
            if (moveFn()) {
                text += matrix[row][col];
            }
        }
    }

    while (text.length < size * size) {
        
        if (row === 0 && col === 0 && mode === "") {
            mode = "top";
        }
        else if (row === size - 1 && col === size - 1 && mode === "") {
            mode = "bottom";
        }
        
        if (mode === "top") {
            move(down);           
            move(rightDown, true);
            move(left);            
            move(leftUp, true);
        }
        else if (mode === "bottom") {
            move(left);            
            move(leftUp, true);    
            move(down);            
            move(rightDown, true);
        }
        else {
            move(down);           
            move(leftUp, true);   
            move(left);            
            move(rightDown, true);
        }
    }

    return text;
}

function key1(matrix) {
    const size = matrix.length;
    let text = "";
    
    let row = 0;
    let col = 0;
    
    text += matrix[row][col];
    
    let mode = "";

    function down() {
        if (row + 1 < size) {
            row++;
            return true;
        }
        return false;
    }

    function right() {
        if (col + 1 < size) {
            col++;
            return true;
        }
        return false;
    }

    function leftDown() {
        if (row + 1 < size && col - 1 >= 0) {
            row++;
            col--;
            return true;
        }
        return false;
    }
    
    function rightUp() {
        if (row - 1 >= 0 && col + 1 < size) {
            row--;
            col++;
            return true;
        }
        return false;
    }

    function move(moveFn, diagonal = false) {
        if (diagonal) {
            while (moveFn()) {
                text += matrix[row][col];
            }
        } else {
            if (moveFn()) {
                text += matrix[row][col];
            }
        }
    }

    while (text.length < size * size) {
        
        if (row === 0 && col === size - 1 && mode === "") {
            mode = "top";
        }
        else if (row === size - 1 && col === 0 && mode === "") {
            mode = "bottom";
        }
        
        if (mode === "top") {
            move(right);           
            move(rightUp, true);
            move(down);            
            move(leftDown, true);
        }
        else if (mode === "bottom") {
            move(down);            
            move(leftDown, true);    
            move(right);            
            move(rightUp, true);
        }
        else {
            move(right);           
            move(leftDown, true);   
            move(down);            
            move(rightUp, true);
        }
    }

    return text;
}

function key3(matrix) {
    const size = matrix.length;
    let text = "";
    
    let row = size - 1;
    let col = size - 1;
    
    text += matrix[row][col];
    
    let mode = "";

    function top() {
        if (row - 1 >= 0) {
            row--;
            return true;
        }
        return false;
    }

    function left() {
        if (col - 1 >= 0) {
            col--;
            return true;
        }
        return false;
    }

    function rightUp() {
        if (row - 1 >= 0 && col + 1 < size) {
            row--;
            col++;
            return true;
        }
        return false;
    }
    
    function leftDown() {
        if (row + 1 < size && col - 1 >= 0) {
            row++;
            col--;
            return true;
        }
        return false;
    }

    function move(moveFn, diagonal = false) {
        if (diagonal) {
            while (moveFn()) {
                text += matrix[row][col];
            }
        } else {
            if (moveFn()) {
                text += matrix[row][col];
            }
        }
    }

    while (text.length < size * size) {
        
        if (row === size - 1 && col === 0 && mode === "") {
            mode = "top";
        }
        else if (row === 0 && col === size - 1 && mode === "") {
            mode = "bottom";
        }
        
        if (mode === "top") {
            move(left);           
            move(leftDown, true);
            move(top);            
            move(rightUp, true);
        }
        else if (mode === "bottom") {
            move(top);            
            move(rightUp, true);    
            move(left);            
            move(leftDown, true);
        }
        else {
            move(left);          
            move(rightUp, true);   
            move(top);            
            move(leftDown, true);
        }
    }

    return text;
}

function key4(matrix) {
    const size = matrix.length;
    let text = "";
    
    let row = size - 1;
    let col = 0;
    
    text += matrix[row][col];
    
    let mode = "";

    function top() {
        if (row - 1 >= 0) {
            row--;
            return true;
        }
        return false;
    }

    function right() {
        if (col + 1 < size) {
            col++;
            return true;
        }
        return false;
    }

    function leftUp() {
        if (row - 1 >= 0 && col - 1 >= 0) {
            row--;
            col--;
            return true;
        }
        return false;
    }
    
    function rightDown() {
        if (row + 1 < size && col + 1 < size) {
            row++;
            col++;
            return true;
        }
        return false;
    }

    function move(moveFn, diagonal = false) {
        if (diagonal) {
            while (moveFn()) {
                text += matrix[row][col];
            }
        } else {
            if (moveFn()) {
                text += matrix[row][col];
            }
        }
    }

    while (text.length < size * size) {
        
        if (row === 0 && col === 0 && mode === "") {
            mode = "top";
        }
        else if (row === size - 1 && col === size - 1 && mode === "") {
            mode = "bottom";
        }
        
        if (mode === "top") {
            move(right);           
            move(rightDown, true);
            move(top);            
            move(leftUp, true);
        }
        else if (mode === "bottom") {
            move(top);            
            move(leftUp, true);    
            move(right);            
            move(rightDown, true);
        }
        else {
            move(top);
            move(rightDown, true);
            move(right);            
            move(leftUp, true);
        }
    }

    return text;
}

document.getElementById('matrix').innerHTML = matrixToHTML(matrix);

document.getElementById('key1').innerHTML = key1(matrix);
document.getElementById('key2').innerHTML = rightKey2(matrix);
document.getElementById('key3').innerHTML = key3(matrix);
document.getElementById('key4').innerHTML = key4(matrix);

