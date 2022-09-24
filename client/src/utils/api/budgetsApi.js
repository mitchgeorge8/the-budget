export const getBudgets = (budgetData) => {
  return fetch("/api/budgets", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(budgetData),
  });
};
