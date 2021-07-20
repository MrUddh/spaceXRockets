export const loadingOrErrorStatus = (status) => {
  if (status === 'loading') {
    return <h2>Loading...</h2>;
  }
  if (status === 'error') {
    return <h2>Error fetching rockets, try again soon...</h2>;
  }
};
