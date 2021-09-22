export const updateImmutableObg = (items, sateId, actionId, objUpdate) => {
    return items.map((item) => {
        if (item[sateId] === actionId) {
            return { ...item, ...objUpdate };
        }
        return item;
    });
};
