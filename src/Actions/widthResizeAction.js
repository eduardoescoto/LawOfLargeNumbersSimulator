export const WIDTH_RESIZE_ACTION = "WIDTH_RESIZE_ACTION";

export function widthResizeActionCreator(width) {
    return {
        type: WIDTH_RESIZE_ACTION,
        payload: width
    }
}