/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  for (const transaction of transactions) {
    const cat = transaction.category;
    const pr = transaction.price;

    if (categoryTotals[cat]) {
      categoryTotals[cat] += pr;
    } else {
      categoryTotals[cat] = pr;
    }
  }

  result = [];
  for (const cat in categoryTotals) {
    result.push({ category: cat, totalSpent: categoryTotals[cat] });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
