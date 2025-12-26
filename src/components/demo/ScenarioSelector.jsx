import { motion } from 'framer-motion';
import { Calendar, Shield, Activity, Pill, CreditCard, ShieldAlert, Building2, DollarSign } from 'lucide-react';

const icons = {
    Calendar,
    Shield,
    Activity,
    Pill,
    CreditCard,
    ShieldAlert,
    Building2,
    DollarSign,
};

const ScenarioSelector = ({ scenarios, selectedScenario, onSelect, industry }) => {
    return (
        <div className="space-y-3">
            <h3 className="font-display font-semibold text-gray-900 mb-4">
                Select a Scenario
            </h3>
            <div className="grid grid-cols-2 gap-3">
                {scenarios.map((scenario) => {
                    const Icon = icons[scenario.icon] || Shield;
                    const isSelected = selectedScenario?.id === scenario.id;

                    return (
                        <motion.button
                            key={scenario.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => onSelect(scenario)}
                            className={`p-4 rounded-xl border-2 text-left transition-all ${isSelected
                                    ? industry === 'healthcare'
                                        ? 'border-teal-primary bg-teal-primary/5'
                                        : 'border-purple-accent bg-purple-accent/5'
                                    : 'border-gray-200 bg-white hover:border-gray-300'
                                }`}
                        >
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${isSelected
                                    ? industry === 'healthcare'
                                        ? 'bg-teal-primary text-white'
                                        : 'bg-purple-accent text-white'
                                    : 'bg-gray-100 text-gray-600'
                                }`}>
                                <Icon className="w-5 h-5" />
                            </div>
                            <div className="font-medium text-gray-900 text-sm mb-1">
                                {scenario.name}
                            </div>
                            <div className="text-xs text-gray-500 line-clamp-2">
                                {scenario.description}
                            </div>
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
};

export default ScenarioSelector;
