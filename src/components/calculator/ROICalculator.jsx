import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Users, Clock, TrendingDown, Zap, Calculator } from 'lucide-react';
import { calculatorDefaults, calculateROI, formatCurrency, formatNumber } from '../../data/calculatorData';

const ROICalculator = ({ industry = 'healthcare' }) => {
    const defaults = calculatorDefaults[industry];
    const [inputs, setInputs] = useState(defaults);
    const [results, setResults] = useState(null);

    useEffect(() => {
        setInputs(calculatorDefaults[industry]);
    }, [industry]);

    useEffect(() => {
        const calculated = calculateROI(inputs);
        setResults(calculated);
    }, [inputs]);

    const handleInputChange = (key, value) => {
        setInputs(prev => ({ ...prev, [key]: Number(value) }));
    };

    const inputFields = [
        {
            key: 'callVolume',
            label: 'Monthly Call Volume',
            icon: Calculator,
            min: 1000,
            max: 500000,
            step: 1000,
            format: formatNumber,
        },
        {
            key: 'avgHandleTime',
            label: 'Avg Handle Time (min)',
            icon: Clock,
            min: 1,
            max: 20,
            step: 0.5,
            suffix: 'min',
        },
        {
            key: 'agentCost',
            label: 'Agent Hourly Cost',
            icon: DollarSign,
            min: 10,
            max: 50,
            step: 1,
            format: (v) => `$${v}/hr`,
        },
        {
            key: 'targetAutomation',
            label: 'Target Automation',
            icon: Zap,
            min: 30,
            max: 90,
            step: 5,
            suffix: '%',
        },
    ];

    if (!results) return null;

    return (
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
            {/* Header */}
            <div className={`p-6 ${industry === 'healthcare' ? 'bg-teal-primary' : 'bg-purple-accent'}`}>
                <h2 className="font-display font-bold text-xl text-white flex items-center gap-2">
                    <Calculator className="w-6 h-6" />
                    ROI Calculator
                </h2>
                <p className="text-white/80 text-sm mt-1">
                    Estimate your cost savings with VoiceAI
                </p>
            </div>

            <div className="p-6 lg:p-8">
                {/* Input Sliders */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {inputFields.map((field) => {
                        const Icon = field.icon;
                        return (
                            <div key={field.key} className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                        <Icon className="w-4 h-4 text-gray-400" />
                                        {field.label}
                                    </label>
                                    <span className="text-sm font-bold text-gray-900">
                                        {field.format
                                            ? field.format(inputs[field.key])
                                            : `${inputs[field.key]}${field.suffix || ''}`
                                        }
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min={field.min}
                                    max={field.max}
                                    step={field.step}
                                    value={inputs[field.key]}
                                    onChange={(e) => handleInputChange(field.key, e.target.value)}
                                    className={`w-full h-2 rounded-full appearance-none cursor-pointer ${industry === 'healthcare'
                                            ? 'bg-teal-primary/20 accent-teal-primary'
                                            : 'bg-purple-accent/20 accent-purple-accent'
                                        }`}
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Results Grid */}
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <motion.div
                        key={results.savings.annual}
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200"
                    >
                        <div className="flex items-center gap-2 text-green-600 mb-2">
                            <TrendingDown className="w-5 h-5" />
                            <span className="text-sm font-medium">Annual Savings</span>
                        </div>
                        <div className="text-3xl font-display font-bold text-green-700">
                            {formatCurrency(results.savings.annual)}
                        </div>
                        <div className="text-sm text-green-600 mt-1">
                            {results.savings.percent}% cost reduction
                        </div>
                    </motion.div>

                    <motion.div
                        key={results.roi.paybackMonths}
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200"
                    >
                        <div className="flex items-center gap-2 text-blue-600 mb-2">
                            <Clock className="w-5 h-5" />
                            <span className="text-sm font-medium">Payback Period</span>
                        </div>
                        <div className="text-3xl font-display font-bold text-blue-700">
                            {results.roi.paybackMonths} months
                        </div>
                        <div className="text-sm text-blue-600 mt-1">
                            {results.roi.firstYearROI}% first-year ROI
                        </div>
                    </motion.div>

                    <motion.div
                        key={results.savings.agentsFreed}
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200"
                    >
                        <div className="flex items-center gap-2 text-purple-600 mb-2">
                            <Users className="w-5 h-5" />
                            <span className="text-sm font-medium">Agents Reallocated</span>
                        </div>
                        <div className="text-3xl font-display font-bold text-purple-700">
                            {results.savings.agentsFreed}
                        </div>
                        <div className="text-sm text-purple-600 mt-1">
                            {results.savings.timeSavingsPercent}% faster handle time
                        </div>
                    </motion.div>
                </div>

                {/* Comparison Table */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="text-left py-3 px-4 font-medium text-gray-600">Metric</th>
                                <th className="text-center py-3 px-4 font-medium text-gray-600">Current</th>
                                <th className="text-center py-3 px-4 font-medium text-green-600">With VoiceAI</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr>
                                <td className="py-3 px-4 text-gray-700">Monthly Cost</td>
                                <td className="py-3 px-4 text-center text-gray-900 font-medium">
                                    {formatCurrency(results.current.monthlyCost)}
                                </td>
                                <td className="py-3 px-4 text-center text-green-600 font-medium">
                                    {formatCurrency(results.projected.monthlyCost)}
                                </td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-gray-700">Cost Per Call</td>
                                <td className="py-3 px-4 text-center text-gray-900 font-medium">
                                    ${results.current.costPerCall.toFixed(2)}
                                </td>
                                <td className="py-3 px-4 text-center text-green-600 font-medium">
                                    ${results.projected.costPerCall.toFixed(2)}
                                </td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-gray-700">Agents Required</td>
                                <td className="py-3 px-4 text-center text-gray-900 font-medium">
                                    {results.current.agentsRequired}
                                </td>
                                <td className="py-3 px-4 text-center text-green-600 font-medium">
                                    {results.projected.agentsRequired}
                                </td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 text-gray-700">Avg Handle Time</td>
                                <td className="py-3 px-4 text-center text-gray-900 font-medium">
                                    {results.current.avgHandleTime.toFixed(1)} min
                                </td>
                                <td className="py-3 px-4 text-center text-green-600 font-medium">
                                    {results.projected.avgHandleTime.toFixed(1)} min
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ROICalculator;
