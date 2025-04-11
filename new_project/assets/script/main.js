const [swithDivContain] = document.getElementsByClassName('swithDivContain');
const [longCanvas] = document.getElementsByClassName('longCanvas');

let swithDivCount = 0;

const swithDiv = (e) => {
    if (e.wheelDelta < 0) {
        swithDivCount++;
        if (swithDivCount > longCanvas.children.length - 1) {
            swithDivCount = longCanvas.children.length - 1;
        }
    } else if (e.deltaY < 0) {
        swithDivCount--;
        if (swithDivCount < 0) {
            swithDivCount = 0;
        }
    }
    // 根据 swithDivCount 更新 longCanvas 的位置
    longCanvas.style.transform = `translateY(-${swithDivCount * 100}vh)`;
};

// 绑定 wheel 事件
swithDivContain.addEventListener('wheel', swithDiv);