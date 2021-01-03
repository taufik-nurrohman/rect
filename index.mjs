import {B, R, W, isWindow} from '@taufik-nurrohman/document';

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
    // TODO
};
