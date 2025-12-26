// Demo scenarios for healthcare and financial services
export const demoScenarios = {
    healthcare: [
        {
            id: 'appointment',
            name: 'Appointment Scheduling',
            icon: 'Calendar',
            description: 'Schedule, reschedule, or cancel appointments',
            transcript: [
                { speaker: 'ai', text: 'Thank you for calling Cigna Healthcare. How may I help you today?', time: '0:00', sentiment: 'neutral' },
                { speaker: 'caller', text: 'Hi, I need to schedule an appointment with my primary care doctor.', time: '0:03', sentiment: 'neutral' },
                { speaker: 'ai', text: 'I\'d be happy to help you schedule that appointment. I see you\'re a member with Dr. Sarah Chen as your primary care physician. Is that correct?', time: '0:06', sentiment: 'positive' },
                { speaker: 'caller', text: 'Yes, that\'s right.', time: '0:12', sentiment: 'positive' },
                { speaker: 'ai', text: 'Dr. Chen has availability this Thursday at 2:30 PM or Friday at 10:00 AM. Which works better for you?', time: '0:14', sentiment: 'positive' },
                { speaker: 'caller', text: 'Thursday at 2:30 works great.', time: '0:20', sentiment: 'positive' },
                { speaker: 'ai', text: 'I\'ve scheduled your appointment with Dr. Chen for Thursday at 2:30 PM. You\'ll receive a confirmation text shortly. Is there anything else I can help you with?', time: '0:23', sentiment: 'positive' },
                { speaker: 'caller', text: 'No, that\'s all. Thank you!', time: '0:30', sentiment: 'positive' },
                { speaker: 'ai', text: 'You\'re welcome! Have a great day and we\'ll see you Thursday.', time: '0:32', sentiment: 'positive' },
            ],
            duration: 35,
            metrics: { accuracy: 99.8, sentiment: 94, resolution: true }
        },
        {
            id: 'insurance',
            name: 'Insurance Verification',
            icon: 'Shield',
            description: 'Check coverage and benefits information',
            transcript: [
                { speaker: 'ai', text: 'Thank you for calling Molina Healthcare. How may I assist you today?', time: '0:00', sentiment: 'neutral' },
                { speaker: 'caller', text: 'I need to verify my insurance coverage for an upcoming MRI.', time: '0:03', sentiment: 'neutral' },
                { speaker: 'ai', text: 'I can help you with that. Let me pull up your coverage details. I see you have the Gold PPO plan. MRI imaging is covered at 80% after your deductible. Your remaining deductible is $150.', time: '0:07', sentiment: 'positive' },
                { speaker: 'caller', text: 'So how much would I pay out of pocket?', time: '0:16', sentiment: 'neutral' },
                { speaker: 'ai', text: 'Based on the average MRI cost at in-network facilities, your estimated out-of-pocket would be between $200-$350 after deductible. Would you like me to find the lowest-cost in-network imaging center near you?', time: '0:19', sentiment: 'positive' },
                { speaker: 'caller', text: 'Yes please, that would be helpful.', time: '0:28', sentiment: 'positive' },
                { speaker: 'ai', text: 'I found Metro Imaging Center, 2 miles from your home, with the lowest negotiated rate. I can send you their contact information via text. Would that work?', time: '0:31', sentiment: 'positive' },
                { speaker: 'caller', text: 'Perfect, thank you!', time: '0:38', sentiment: 'positive' },
            ],
            duration: 42,
            metrics: { accuracy: 99.9, sentiment: 96, resolution: true }
        },
        {
            id: 'triage',
            name: 'Symptom Triage',
            icon: 'Activity',
            description: 'AI-powered symptom assessment',
            transcript: [
                { speaker: 'ai', text: 'Thank you for calling the nurse advice line. I\'m an AI assistant that can help assess your symptoms. What brings you in today?', time: '0:00', sentiment: 'neutral' },
                { speaker: 'caller', text: 'I\'ve had a headache for two days and some nausea.', time: '0:05', sentiment: 'concerned' },
                { speaker: 'ai', text: 'I understand you\'re not feeling well. Let me ask a few questions. On a scale of 1-10, how severe is the headache?', time: '0:09', sentiment: 'empathetic' },
                { speaker: 'caller', text: 'About a 6.', time: '0:15', sentiment: 'neutral' },
                { speaker: 'ai', text: 'Are you experiencing any vision changes, fever, or neck stiffness?', time: '0:17', sentiment: 'professional' },
                { speaker: 'caller', text: 'No, none of those.', time: '0:21', sentiment: 'neutral' },
                { speaker: 'ai', text: 'Based on your symptoms, this appears to be a tension headache. I recommend rest, hydration, and over-the-counter pain relief. However, if symptoms worsen or you develop fever, please seek immediate care. Would you like me to schedule a telehealth visit with a nurse practitioner?', time: '0:24', sentiment: 'caring' },
            ],
            duration: 38,
            metrics: { accuracy: 99.5, sentiment: 92, resolution: true }
        },
        {
            id: 'refill',
            name: 'Prescription Refill',
            icon: 'Pill',
            description: 'Request medication refills',
            transcript: [
                { speaker: 'ai', text: 'Thank you for calling the prescription refill line. How may I help you?', time: '0:00', sentiment: 'neutral' },
                { speaker: 'caller', text: 'I need to refill my blood pressure medication.', time: '0:03', sentiment: 'neutral' },
                { speaker: 'ai', text: 'I can help with that. I see you have Lisinopril 10mg with 2 refills remaining. Would you like me to send the refill to your usual pharmacy, CVS on Main Street?', time: '0:06', sentiment: 'positive' },
                { speaker: 'caller', text: 'Yes, please.', time: '0:14', sentiment: 'positive' },
                { speaker: 'ai', text: 'I\'ve submitted your refill request. It should be ready for pickup in about 2 hours. You\'ll receive a text when it\'s ready. Is there anything else?', time: '0:16', sentiment: 'positive' },
                { speaker: 'caller', text: 'That was so easy! No, I\'m all set.', time: '0:23', sentiment: 'positive' },
                { speaker: 'ai', text: 'Happy to help! Have a great day.', time: '0:26', sentiment: 'positive' },
            ],
            duration: 28,
            metrics: { accuracy: 99.9, sentiment: 98, resolution: true }
        },
    ],
    financial: [
        {
            id: 'balance',
            name: 'Account Balance',
            icon: 'CreditCard',
            description: 'Check balances and recent transactions',
            transcript: [
                { speaker: 'ai', text: 'Thank you for calling First National Bank. For security, please say or enter your account PIN.', time: '0:00', sentiment: 'neutral' },
                { speaker: 'caller', text: '[Voice verified]', time: '0:04', sentiment: 'neutral' },
                { speaker: 'ai', text: 'Thank you, I\'ve verified your identity through voice biometrics. How may I help you today?', time: '0:06', sentiment: 'positive' },
                { speaker: 'caller', text: 'I\'d like to check my checking account balance.', time: '0:10', sentiment: 'neutral' },
                { speaker: 'ai', text: 'Your checking account ending in 4521 has a current balance of $3,247.89. Your last deposit was $2,500 on December 20th. Would you like to hear recent transactions?', time: '0:13', sentiment: 'positive' },
                { speaker: 'caller', text: 'Yes, the last three please.', time: '0:22', sentiment: 'neutral' },
                { speaker: 'ai', text: 'Your last three transactions are: December 24th, Amazon purchase $89.99. December 23rd, Whole Foods $156.32. December 22nd, Electric bill payment $134.50. Is there anything else?', time: '0:25', sentiment: 'positive' },
                { speaker: 'caller', text: 'No, thank you.', time: '0:35', sentiment: 'positive' },
            ],
            duration: 38,
            metrics: { accuracy: 99.9, sentiment: 95, resolution: true }
        },
        {
            id: 'fraud',
            name: 'Fraud Alert',
            icon: 'ShieldAlert',
            description: 'Report suspicious activity',
            transcript: [
                { speaker: 'ai', text: 'Fraud protection line. I\'m detecting an urgent call. Have you noticed suspicious activity on your account?', time: '0:00', sentiment: 'alert' },
                { speaker: 'caller', text: 'Yes! I just got a text about a $500 purchase I didn\'t make!', time: '0:04', sentiment: 'distressed' },
                { speaker: 'ai', text: 'I understand this is concerning. Let me secure your account immediately. I\'ve temporarily frozen your card ending in 8842. Can you confirm the last legitimate purchase you made?', time: '0:08', sentiment: 'reassuring' },
                { speaker: 'caller', text: 'I bought groceries yesterday for about $80.', time: '0:17', sentiment: 'calmer' },
                { speaker: 'ai', text: 'Thank you. I\'ve confirmed the fraudulent charge and initiated a dispute. You\'ll receive a full refund within 24-48 hours. A new card will arrive in 2-3 business days. Would you like expedited shipping?', time: '0:21', sentiment: 'professional' },
                { speaker: 'caller', text: 'Yes please. Thank you for handling this so quickly!', time: '0:31', sentiment: 'relieved' },
                { speaker: 'ai', text: 'Absolutely. Your new card will arrive tomorrow. I\'ve also flagged your account for enhanced monitoring. Is there anything else I can help with?', time: '0:35', sentiment: 'positive' },
            ],
            duration: 42,
            metrics: { accuracy: 99.8, sentiment: 91, resolution: true }
        },
        {
            id: 'loan',
            name: 'Loan Application',
            icon: 'Building2',
            description: 'Apply for personal or auto loans',
            transcript: [
                { speaker: 'ai', text: 'Thank you for calling about loan products. Are you interested in a personal loan, auto loan, or home equity line?', time: '0:00', sentiment: 'neutral' },
                { speaker: 'caller', text: 'I\'d like to apply for a personal loan.', time: '0:05', sentiment: 'neutral' },
                { speaker: 'ai', text: 'Great! How much are you looking to borrow?', time: '0:08', sentiment: 'positive' },
                { speaker: 'caller', text: 'Around $15,000.', time: '0:11', sentiment: 'neutral' },
                { speaker: 'ai', text: 'Based on your account history and credit profile, I can offer you a pre-qualified rate of 8.9% APR for a $15,000 loan over 36 months. Your monthly payment would be approximately $476. Would you like to proceed with the full application?', time: '0:14', sentiment: 'positive' },
                { speaker: 'caller', text: 'That sounds good. What do you need from me?', time: '0:26', sentiment: 'interested' },
                { speaker: 'ai', text: 'Since you\'re an existing customer, I already have most of your information. I just need to verify your current employment and income. Are you still employed at Tech Solutions Inc?', time: '0:29', sentiment: 'helpful' },
                { speaker: 'caller', text: 'Yes, same job.', time: '0:37', sentiment: 'positive' },
                { speaker: 'ai', text: 'Excellent. Your application is approved! I\'ll send the loan documents to your email for e-signature. Funds will be deposited within 24 hours of signing.', time: '0:40', sentiment: 'positive' },
            ],
            duration: 48,
            metrics: { accuracy: 99.7, sentiment: 97, resolution: true }
        },
        {
            id: 'payment',
            name: 'Bill Payment',
            icon: 'DollarSign',
            description: 'Make payments and set up autopay',
            transcript: [
                { speaker: 'ai', text: 'Payment services, how may I help you today?', time: '0:00', sentiment: 'neutral' },
                { speaker: 'caller', text: 'I want to pay my credit card bill.', time: '0:03', sentiment: 'neutral' },
                { speaker: 'ai', text: 'I can help with that. Your current balance is $1,847.23 with a minimum payment of $35. The due date is January 3rd. How much would you like to pay?', time: '0:06', sentiment: 'positive' },
                { speaker: 'caller', text: 'I\'ll pay the full balance.', time: '0:15', sentiment: 'positive' },
                { speaker: 'ai', text: 'Excellent choice! Would you like to pay from your checking account ending in 4521?', time: '0:18', sentiment: 'positive' },
                { speaker: 'caller', text: 'Yes.', time: '0:22', sentiment: 'neutral' },
                { speaker: 'ai', text: 'I\'ve processed your payment of $1,847.23. Your new balance is $0. Would you like to set up automatic payments to avoid future due dates?', time: '0:24', sentiment: 'positive' },
                { speaker: 'caller', text: 'Actually yes, let\'s do that.', time: '0:31', sentiment: 'positive' },
                { speaker: 'ai', text: 'I\'ve enabled autopay for the full statement balance each month. You\'ll receive a confirmation email shortly. Anything else?', time: '0:34', sentiment: 'positive' },
            ],
            duration: 40,
            metrics: { accuracy: 99.9, sentiment: 96, resolution: true }
        },
    ],
};

export const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Spanish', flag: '🇪🇸' },
    { code: 'zh', name: 'Mandarin', flag: '🇨🇳' },
    { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
    { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
    { code: 'pt', name: 'Portuguese', flag: '🇧🇷' },
    { code: 'fr', name: 'French', flag: '🇫🇷' },
    { code: 'de', name: 'German', flag: '🇩🇪' },
    { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
    { code: 'ko', name: 'Korean', flag: '🇰🇷' },
    { code: 'vi', name: 'Vietnamese', flag: '🇻🇳' },
    { code: 'it', name: 'Italian', flag: '🇮🇹' },
    { code: 'ru', name: 'Russian', flag: '🇷🇺' },
    { code: 'pl', name: 'Polish', flag: '🇵🇱' },
    { code: 'nl', name: 'Dutch', flag: '🇳🇱' },
    { code: 'tr', name: 'Turkish', flag: '🇹🇷' },
    { code: 'th', name: 'Thai', flag: '🇹🇭' },
    { code: 'id', name: 'Indonesian', flag: '🇮🇩' },
    { code: 'tl', name: 'Tagalog', flag: '🇵🇭' },
    { code: 'uk', name: 'Ukrainian', flag: '🇺🇦' },
];

export const industryStats = {
    healthcare: {
        avgHandleTime: { before: 480, after: 180 }, // seconds
        costPerCall: { before: 12.50, after: 2.10 },
        firstCallResolution: { before: 72, after: 94 },
        csat: { before: 3.8, after: 4.6 },
        availability: { before: 40, after: 168 }, // hours per week
    },
    financial: {
        avgHandleTime: { before: 420, after: 150 },
        costPerCall: { before: 14.20, after: 1.85 },
        firstCallResolution: { before: 68, after: 92 },
        csat: { before: 3.6, after: 4.7 },
        availability: { before: 56, after: 168 },
    },
};
