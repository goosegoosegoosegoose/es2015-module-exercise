const choice = (items) => {
    let idx = Math.floor(Math.random() * items.length);
    return items[idx]
};

const remove = (items, item) => {
    let idx = items.indexOf(item);
    return items.splice(idx, 1)
};

export { choice, remove };