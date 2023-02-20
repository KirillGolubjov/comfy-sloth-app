export const formatPrice = (number) => {
  return new Intl.NumberFormat('et-EE', {
    style: 'currency',
    currency: 'EUR',
  }).format(number / 100);
};

export const getUniqueValues = () => {};
