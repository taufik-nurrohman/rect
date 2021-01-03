import {B, R, W, isWindow, setStyles} from '@taufik-nurrohman/document';

export const getAxis = (event, node) => {
    let touches = event.touches,
        x = touches ? touches[0].clientX : event.clientX,
        y = touches ? touches[0].clientY : event.clientY;
    if (node) {
        let rect = getRect(node);
        return [x - rect[0], y - rect[1], rect[0], rect[1]];
    }
    return [x, y];
};

export const getOffset = node => {
    return [node.offsetLeft, node.offsetTop];
};

export const getRect = node => {
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

export const getSize = node => {
    return isWindow(node) ? [node.innerWidth, node.innerHeight] : [node.offsetWidth, node.offsetHeight];
};

export const getScroll = node => {
    return [node.scrollLeft, node.scrollTop];
};

export const setAxis = (event, node) => {};

export const setOffset = (node, data) => {
    return setStyles(node, {
        'left': data[0],
        'top': data[1]
    });
};

export const setRect = node => node;

export const setSize = (node, data) => {
    return setStyles(node, {
        'width': data[0],
        'height': data[1]
    });
};

export const setScroll = (node, data) => {
    node.scrollLeft = data[0];
    node.scrollTop = data[1];
    return node;
};
