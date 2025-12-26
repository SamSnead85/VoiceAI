import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { formatCurrency } from '../../data/calculatorData';

const SavingsTimeline = ({ annualSavings, implementationCost = 50000 }) => {
    // Generate 5-year projection data
    const data = [];
    let cumulativeSavings = -implementationCost;

    for (let month = 0; month <= 60; month++) {
        const monthlySavings = annualSavings / 12;
        if (month > 0) {
            cumulativeSavings += monthlySavings;
        }

        if (month % 6 === 0 || month === 60) {
            data.push({
                month,
                label: month === 0 ? 'Start' : `M${month}`,
                cumulative: Math.round(cumulativeSavings),
                monthly: Math.round(monthlySavings),
            });
        }
    }

    const breakEvenMonth = Math.ceil(implementationCost / (annualSavings / 12));

    return (
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="font-display font-semibold text-gray-900">5-Year Savings Projection</h3>
                    <p className="text-sm text-gray-500">Cumulative savings over time</p>
                </div>
                <div className="text-right">
                    <div className="text-sm text-gray-500">Break-Even Point</div>
                    <div className="font-display font-bold text-teal-primary">Month {breakEvenMonth}</div>
                </div>
            </div>

            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#0D7C7C" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#0D7C7C" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis
                            dataKey="label"
                            tick={{ fontSize: 12, fill: '#6B7280' }}
                            axisLine={{ stroke: '#E5E7EB' }}
                        />
                        <YAxis
                            tick={{ fontSize: 12, fill: '#6B7280' }}
                            tickFormatter={(value) => value >= 1000000 ? `$${(value / 1000000).toFixed(1)}M` : `$${(value / 1000).toFixed(0)}K`}
                            axisLine={{ stroke: '#E5E7EB' }}
                        />
                        <Tooltip
                            formatter={(value) => [formatCurrency(value), 'Cumulative Savings']}
                            contentStyle={{
                                backgroundColor: 'white',
                                border: '1px solid #E5E7EB',
                                borderRadius: '12px',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                        <Area
                            type="monotone"
                            dataKey="cumulative"
                            stroke="#0D7C7C"
                            strokeWidth={3}
                            fill="url(#colorSavings)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            {/* Milestone Cards */}
            <div className="grid grid-cols-3 gap-4 mt-6">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-gray-50 text-center"
                >
                    <div className="text-sm text-gray-500 mb-1">Year 1</div>
                    <div className="font-display font-bold text-gray-900">
                        {formatCurrency(annualSavings - implementationCost)}
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="p-4 rounded-xl bg-teal-50 text-center"
                >
                    <div className="text-sm text-teal-600 mb-1">Year 3</div>
                    <div className="font-display font-bold text-teal-700">
                        {formatCurrency(annualSavings * 3 - implementationCost)}
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="p-4 rounded-xl bg-green-50 text-center"
                >
                    <div className="text-sm text-green-600 mb-1">Year 5</div>
                    <div className="font-display font-bold text-green-700">
                        {formatCurrency(annualSavings * 5 - implementationCost)}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SavingsTimeline;
