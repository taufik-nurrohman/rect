const {B, R, W, isWindow} = require('@taufik-nurrohman/document');

const getAxis = (event, node) => {
    let touches = event.touches,
        x = touches ? touches[0].clientX : event.clientX,
        y = touches ? touches[0].clientY : event.clientY;
    if (node) {
        let rect = getRect(node);
        return [x - rect[0], y - rect[1], rect[0], rect[1]];
    }
    return [x, y];
};

const getOffset = node => {
    return [node.offsetLeft, node.offsetTop];
};

const getRect = node => {
    let x, y, rect;
    if (isWindow(node)) {
        x = node.pageXOffset || R.scrollLeft || B.scrollLeft;
        y = node.pageYOffset || R.scrollTop || B.scrollTop;
    } else {
        rect = node.getBoundingClientRect();
        x = rect.left;
        y = rect.top;
    }
    return [x, y];
};

const getSize = node => {
    return isWindow(node) ? [node.innerWidth, node.innerHeight] : [node.offsetWidth, node.offsetHeight];
};

const getScroll = node => {
    return [node.scrollLeft, node.scrollTop];
};

Object.assign(exports || {}, {
    getAxis,
    getOffset,
    getRect,
    getSize,
    getScroll
});
