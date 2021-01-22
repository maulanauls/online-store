const storage = {
  set: async (key, value) => {
    const jsonValue = JSON.stringify(value);
    return await localStorage.setItem(key, jsonValue);
  },
  get: async (key, defaultEmpty = null) => {
    let jsonValue = await localStorage.getItem(key);
    if (jsonValue) {
      return JSON.parse(jsonValue);
    } else {
      return defaultEmpty;
    }
  },
  remove: async (key = null) => {
    return key
      ? await localStorage.removeItem(key)
      : await localStorage.clear();
  },
};

export default storage;
