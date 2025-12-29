const axios = require('axios');

async function fetchData(url) {
  const state = { data: [], isLoading: true, error: null };
  try {
    const res = await axios.get(url);
    state.data = res.data;
    state.isLoading = false;
  } catch (err) {
    state.error = err.message;
    state.isLoading = false;
  }
  return state;
}

module.exports = { fetchData };
