function formatDate(input) {
    if (!Array.isArray(input)) {
      return "Dữ liệu không hợp lệ";
    }
  
    if (input.length === 0) {
      return "Mảng không có phần tử nào";
    }
  
    const result = input.map(dateStr => {
      if (typeof dateStr !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
        return "Dữ liệu không hợp lệ";
      }
      const [year, month, day] = dateStr.split('-');
      return `${day}/${month}/${year}`;
    });
  
    return result;
  }
  
  console.log(formatDate(["2025-03-10", "2024-12-25", "2023-07-01"]));
  console.log(formatDate([]));
  console.log(formatDate("abc"));