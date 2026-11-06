/** Format an ISO date string (YYYY-MM-DD) as e.g. "14 March 2020". */
export function formatDate(iso) {
  // Parse manually to avoid timezone shifts that `new Date(iso)` can cause.
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/** Format a number as money, e.g. formatMoney(1240.5, '$') -> "$1,240.50". */
export function formatMoney(amount, currency = '$') {
  return `${currency}${amount.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}
