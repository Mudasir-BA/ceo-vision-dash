
// KPI Stats Data
export const mockStats = [
  {
    title: "Total Sales",
    value: "1,234,567",
    amountValue: 1234567,
    trend: 8.2,
    icon: "📈",
  },
  {
    title: "Target Achievement",
    value: "87.5%",
    amountValue: 87.5,
    trend: -2.7,
    icon: "🎯",
  },
  {
    title: "Returns",
    value: "5.3%",
    amountValue: 5.3,
    trend: -1.4,
    icon: "📦",
    inverseColors: true,
  },
  {
    title: "Low Stock Items",
    value: "24",
    amountValue: 24,
    trend: 12.3,
    icon: "⚠️",
    inverseColors: true,
  },
  {
    title: "Zero Stock Items",
    value: "7",
    amountValue: 7,
    trend: -14.5,
    icon: "❌",
    inverseColors: false,
  },
];

// Sales Trend Data
export const mockDailySales = [
  { date: "Apr 1", current: 12400, previous: 10500, forecast: 12000 },
  { date: "Apr 2", current: 14200, previous: 11200, forecast: 13500 },
  { date: "Apr 3", current: 15800, previous: 13400, forecast: 15000 },
  { date: "Apr 4", current: 13600, previous: 12800, forecast: 14500 },
  { date: "Apr 5", current: 16500, previous: 14200, forecast: 16000 },
  { date: "Apr 6", current: 18700, previous: 15800, forecast: 17500 },
  { date: "Apr 7", current: 17400, previous: 15300, forecast: 17000 },
  { date: "Apr 8", current: 14600, previous: 12900, forecast: 14000 },
  { date: "Apr 9", current: 16200, previous: 14600, forecast: 16500 },
  { date: "Apr 10", current: 19500, previous: 16800, forecast: 18000 },
  { date: "Apr 11", current: 21000, previous: 18200, forecast: 20000 },
  { date: "Apr 12", current: 19800, previous: 17500, forecast: 19000 },
];

export const mockWeeklySales = [
  { week: "Week 1", current: 82500, previous: 72000 },
  { week: "Week 2", current: 94300, previous: 80500 },
  { week: "Week 3", current: 105700, previous: 89200 },
  { week: "Week 4", current: 118400, previous: 97800 },
  { week: "Week 5", current: 126800, previous: 104500 },
];

export const mockMonthlySales = [
  { month: "Jan", current: 352000, previous: 320000 },
  { month: "Feb", current: 342000, previous: 310000 },
  { month: "Mar", current: 398000, previous: 345000 },
  { month: "Apr", current: 427500, previous: 360000 },
  { month: "May", current: 0, previous: 372000 },
  { month: "Jun", current: 0, previous: 390000 },
];

// Sales Target Data
export const mockSalesTarget = [
  { region: "Lahore Region", achievement: 93 },
  { region: "Faisalabad Region", achievement: 105 },
  { region: "Islamabad Region", achievement: 87 },
  { region: "Multan Region", achievement: 72 },
  { region: "Overall", achievement: 89 },
];

// Sales vs Returns Data
export const mockSalesReturns = [
  { category: "FG Bakery", sales: 245000, returnRate: 4.8 },
  { category: "FG Beverages", sales: 175000, returnRate: 2.3 },
  { category: "FG Dairy", sales: 320000, returnRate: 7.2 },
  { category: "FG Water", sales: 145000, returnRate: 1.5 },
  { category: "FG Biscuit", sales: 85000, returnRate: 3.6 },
];

// Low Stock Items
export const mockLowStockItems = [
  {
    code: "FB002-F01-L",
    name: "BREAD PLAIN LARGE",
    division: "FG Bakery",
    subdivision: "FG Bread",
    currentStock: 45,
    reorderLevel: 100,
    coverageDays: 2,
    fastMoving: true,
  },
  {
    code: "FC001",
    name: "BISCUIT Template",
    division: "FG Bakery",
    subdivision: "FG Biscuit",
    currentStock: 0,
    reorderLevel: 50,
    coverageDays: 0,
    fastMoving: false,
  },
  {
    code: "FV001-P07",
    name: "Cola-1500 ml",
    division: "FG Beverages",
    subdivision: "FG CSD (Pet)",
    currentStock: 120,
    reorderLevel: 200,
    coverageDays: 5,
    fastMoving: true,
  },
  {
    code: "FL009",
    name: "YOGURT (400 ML) PACK",
    division: "FG Dairy",
    subdivision: "FG Dairy Yogurt",
    currentStock: 75,
    reorderLevel: 150,
    coverageDays: 3,
    fastMoving: false,
  },
  {
    code: "FL043",
    name: "Pouch Yogurt 1 Kg",
    division: "FG Dairy",
    subdivision: "FG Dairy Yogurt",
    currentStock: 0,
    reorderLevel: 80,
    coverageDays: 0,
    fastMoving: true,
  },
  {
    code: "FW003",
    name: "Bulk Water 19 L",
    division: "FG Water",
    subdivision: "FG Bulk Water",
    currentStock: 32,
    reorderLevel: 50,
    coverageDays: 4,
    fastMoving: false,
  },
];

// Shop Performance Data
export const mockTopShops = [
  { name: "Davis Road Lhr", achievement: 128 },
  { name: "E-11", achievement: 122 },
  { name: "Rawat Gt Road", achievement: 114 },
  { name: "Jhang Road", achievement: 110 },
  { name: "College Road Township Lhr", achievement: 105 },
];

export const mockBottomShops = [
  { name: "Lodhran City", achievement: 63 },
  { name: "Vehari City", achievement: 68 },
  { name: "Awan Colony Sargodha", achievement: 72 },
  { name: "Gulshan Ravi Lhr", achievement: 79 },
  { name: "Shama Cenima Lhr", achievement: 83 },
];
