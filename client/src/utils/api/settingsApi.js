export const getUser = (budgetData) => {
  return fetch("/api/settings", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(budgetData),
  });
};
