
const fs = require("node:fs/promises");
const path = require("node:path");

const fileBank = path.join(__dirname, "file.json");

// Đọc dữ liệu
async function getFile() {
    try {
        const data = await fs.readFile(fileBank, "utf8");
        const bank = JSON.parse(data);

        if (!Array.isArray(bank)) {
            throw new Error("invalid_bank_data");
        }

        return bank;
    } catch (err) {
        if (err.code === "ENOENT") {
            await saveFile([]);
            return [];
        }

        throw err;
    }
}

// Ghi dữ liệu
async function saveFile(data) {
    await fs.writeFile(
        fileBank,
        JSON.stringify(data, null, 2),
        "utf8"
    );
}

class BankAccount {
    #balance;

    constructor(account, balance = 0) {
        if (typeof account !== "string" || account.trim() === "") {
            throw new Error("error_account");
        }

        if (
            typeof balance !== "number" ||
            !Number.isFinite(balance) ||
            balance < 0
        ) {
            throw new Error("error_balance");
        }

        this.account = account;
        this.#balance = balance;
    }

    getBalance() {
        return this.#balance;
    }

    deposit(amount) {
        if (
            typeof amount !== "number" ||
            !Number.isFinite(amount) ||
            amount <= 0
        ) {
            throw new Error("invalid_deposit_amount");
        }

        this.#balance += amount;
        return this.#balance;
    }

    withdraw(amount) {
        if (
            typeof amount !== "number" ||
            !Number.isFinite(amount) ||
            amount <= 0
        ) {
            throw new Error("invalid_withdraw_amount");
        }

        if (amount > this.#balance) {
            throw new Error("insufficient_balance");
        }

        this.#balance -= amount;
        return this.#balance;
    }

    // Tạo object chứa dữ liệu được phép lưu
    toJSON() {
        return {
            account: this.account,
            balance: this.#balance
        };
    }
}

// Tìm tài khoản trong file
async function getAccount(accountName) {
    const accounts = await getFile();

    const data = accounts.find(
        item => item.account === accountName
    );

    if (!data) {
        throw new Error("account_not_found");
    }

    return new BankAccount(data.account, data.balance);
}

// Tạo tài khoản mới
async function createAccount(accountName, initialBalance = 0) {
    const accounts = await getFile();

    if (
        typeof accountName !== "string" ||
        accountName.trim() === ""
    ) {
        throw new Error("error_account");
    }

    const exists = accounts.some(
        item => item.account === accountName
    );

    if (exists) {
        throw new Error("account_already_exists");
    }

    const bank = new BankAccount(accountName, initialBalance);

    accounts.push(bank.toJSON());
    await saveFile(accounts);

    return bank;
}

// Lưu số dư mới của tài khoản
async function saveAccount(bank) {
    const accounts = await getFile();

    const index = accounts.findIndex(
        item => item.account === bank.account
    );

    if (index === -1) {
        throw new Error("account_not_found");
    }

    accounts[index] = bank.toJSON();

    await saveFile(accounts);
}

// Chạy thử
async function main() {
    try {
        // Tạo tài khoản nếu chưa tồn tại
        let bank;

        try {
            bank = await getAccount("Nguyen Van A");
        } catch (err) {
            if (err.message !== "account_not_found") {
                throw err;
            }

            bank = await createAccount("Nguyen Van A", 30);
        }

        console.log("Số dư ban đầu:", bank.getBalance());

        bank.deposit(100);
        await saveAccount(bank);

        console.log("Sau khi nạp 100:", bank.getBalance());

        bank.withdraw(1);
        await saveAccount(bank);

        console.log("Sau khi rút 1:", bank.getBalance());
    } catch (err) {
        console.error("Lỗi:", err.message);
    }
}

main();
