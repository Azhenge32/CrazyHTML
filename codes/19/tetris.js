var createCanvas = function (rows, cols, cellWidth, cellHeight) {
    tetris_cancar = document.getElementById("canvas");
    tetris_cancar.width = cols * cellWidth;
    tetris_cancar.height = rows * cellHeight;
    tetris_cancar.style.border = "1px solid black"
    // 获取canvas上的绘图API
    tetris_ctx = tetris_cancar.getContext('2d');
    // 开始创建路径
    tetris_ctx.beginPath();
    // 绘制横向网格对应的路径
    var TETRIS_ROWS = 100;
    var TETRIS_COLS = 70;
    var CELL_SIZE = 10;
    for (var i = 1; i < TETRIS_ROWS; i ++) {
        tetris_ctx.moveTo(0, i * CELL_SIZE);
        tetris_ctx.lineTo(TETRIS_COLS * CELL_SIZE, i * CELL_SIZE);
    }
    // 绘制竖向网格对应的路径
    for (var i = 1; i < TETRIS_COLS; i ++) {
        tetris_ctx.moveTo(i * CELL_SIZE, 0);
        tetris_ctx.lineTo(i * CELL_SIZE, TETRIS_ROWS * CELL_SIZE);
    }
    tetris_ctx.closePath();
    // 设置笔触颜色
    tetris_ctx.strokeStyle = "#aaa";
    tetris_ctx.lineWidth = 0.3;
    // 绘制线条
    tetris_ctx.stroke();
}