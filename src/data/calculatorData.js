// ROI Calculator data and formulas
export const calculatorDefaults = {
    healthcare: {
        callVolume: 50000, // monthly
        avgHandleTime: 8, // minutes
        agentCost: 22, // hourly
        workingHours: 160, // monthly per agent
        aiCostPerCall: 0.35,
        aiHandleTime: 2.5, // minutes
        targetAutomation: 70, // percent
    },
    financial: {
        callVolume: 75000,
        avgHandleTime: 7,
        agentCost: 25,
        workingHours: 160,
        aiCostPerCall: 0.32,
        aiHandleTime: 2,
        targetAutomation: 75,
    },
};

export const calculateROI = (inputs) => {
    const {
        callVolume,
        avgHandleTime,
        agentCost,
        workingHours,
        aiCostPerCall,
        aiHandleTime,
        targetAutomation,
    } = inputs;

    // Current costs
    const totalHandleMinutes = callVolume * avgHandleTime;
    const totalHandleHours = totalHandleMinutes / 60;
    const agentsRequired = Math.ceil(totalHandleHours / workingHours);
    const currentMonthlyCost = agentsRequired * agentCost * workingHours;
    const costPerCall = currentMonthlyCost / callVolume;

    // AI-automated calls
    const automatedCalls = callVolume * (targetAutomation / 100);
    const humanCalls = callVolume - automatedCalls;

    // New costs with AI
    const aiCost = automatedCalls * aiCostPerCall;
    const remainingHandleHours = (humanCalls * avgHandleTime) / 60;
    const reducedAgents = Math.ceil(remainingHandleHours / workingHours);
    const remainingLaborCost = reducedAgents * agentCost * workingHours;
    const newMonthlyCost = aiCost + remainingLaborCost;

    // Savings
    const monthlySavings = currentMonthlyCost - newMonthlyCost;
    const annualSavings = monthlySavings * 12;
    const savingsPercent = ((monthlySavings / currentMonthlyCost) * 100).toFixed(1);

    // Time savings
    const aiHandleMinutes = automatedCalls * aiHandleTime;
    const totalNewMinutes = aiHandleMinutes + (humanCalls * avgHandleTime);
    const avgNewHandleTime = totalNewMinutes / callVolume;
    const timeSavingsPercent = (((avgHandleTime - avgNewHandleTime) / avgHandleTime) * 100).toFixed(1);

    // ROI metrics
    const implementationCost = 50000; // one-time
    const monthlyPlatformFee = 5000;
    const totalFirstYearCost = implementationCost + (monthlyPlatformFee * 12);
    const firstYearROI = (((annualSavings - totalFirstYearCost) / totalFirstYearCost) * 100).toFixed(0);
    const paybackMonths = Math.ceil(implementationCost / (monthlySavings - monthlyPlatformFee));

    return {
        current: {
            monthlyCost: currentMonthlyCost,
            costPerCall,
            agentsRequired,
            avgHandleTime,
        },
        projected: {
            monthlyCost: newMonthlyCost,
            costPerCall: newMonthlyCost / callVolume,
            agentsRequired: reducedAgents,
            avgHandleTime: avgNewHandleTime,
        },
        savings: {
            monthly: monthlySavings,
            annual: annualSavings,
            percent: savingsPercent,
            timeSavingsPercent,
            agentsFreed: agentsRequired - reducedAgents,
        },
        roi: {
            firstYearROI,
            paybackMonths,
            fiveYearSavings: annualSavings * 5 - implementationCost,
        },
    };
};

export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    }).format(amount);
};

export const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
};
