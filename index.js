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
    let h, rect, w, x, y, X, Y;
    if (isWindow(node)) {
        x = node.pageXOffset || R.scrollLeft || B.scrollLeft;
        y = node.pageYOffset || R.scrollTop || B.scrollTop;
        w = node.innerWidth;
        h = node.innerHeight;
    } else {
        rect = node.getBoundingClientRect();
        x = rect.left;
        y = rect.top;
        w = rect.width;
        h = rect.height;
        X = rect.right;
        Y = rect.bottom;
    }
    return [x, y, w, h, X, Y];
};

const getSize = node => {
    return isWindow(node) ? [node.innerWidth, node.innerHeight] : [node.offsetWidth, node.offsetHeight];
};

const getScroll = node => {
    return [node.scrollLeft, node.scrollTop];
};

const setAxis = (event, node) => {};

const setOffset = (node, data) => {
    return setStyles(node, {
        'left': data[0],
        'top': data[1]
    });
};

const setRect = node => {};

const setSize = (node, data) => {
    return setStyles(node, {
        'width': data[0],
        'height': data[1]
    });
};

const setScroll = (node, data) => {
    node.scrollLeft = data[0];
    node.scrollTop = data[1];
    return node;
};

Object.assign(exports, {
    getAxis,
    getOffset,
    getRect,
    getSize,
    getScroll,
    setAxis,
    setOffset,
    setRect,
    setSize,
    setScroll
});