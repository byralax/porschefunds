// Account information
const accountInfo = {
    name: "Ijie ****",
    accountNumber: "2075179658",
    bank: "kuda",
    currentAmount: 55000,
    goalAmount: 100000
};

// Calculate progress percentage
const progress = (accountInfo.currentAmount / accountInfo.goalAmount) * 100;

// Update DOM elements
document.addEventListener('DOMContentLoaded', () => {
    // Update account information
    document.getElementById('accountName').textContent = accountInfo.name;
    document.getElementById('accountNumber').textContent = accountInfo.accountNumber;
    document.getElementById('bankName').textContent = accountInfo.bank;

    // Update amounts
    document.getElementById('currentAmount').textContent = `$${accountInfo.currentAmount.toLocaleString()}`;
    document.getElementById('targetAmount').textContent = `$${accountInfo.goalAmount.toLocaleString()}`;
    
    // Update progress bar and percentage
    document.getElementById('progressBar').style.width = `${progress}%`;
    document.getElementById('progressPercentage').textContent = `${progress.toFixed(1)}%`;

    // Add animation to progress bar
    setTimeout(() => {
        document.getElementById('progressBar').style.width = `${progress}%`;
    }, 500);
});
