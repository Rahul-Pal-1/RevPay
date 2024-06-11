const Account = require('../Model/account_model');
const User = require('../Model/user_model');

const createAccount = async (req, res) => {
  const { userId, accountNumber, sortCode } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send('User not found');
    }

    const newAccount = new Account({ userId, accountNumber, sortCode });
    await newAccount.save();
    res.status(201).send(newAccount);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


const updateAccount = async (req, res) => {
  const { accountId } = req.params;
  const { activationStatus, allowCredit, allowDebit } = req.body;

  try {
    const account = await Account.findByIdAndUpdate(
      accountId,
      { activationStatus, allowCredit, allowDebit },
      { new: true }
    );
    if (!account) {
      return res.status(404).send('Account not found');
    }
    res.send(account);
  } catch (error) {
    res.status(500).send(error.message);
  }
}



module.exports = {
  createAccount,
  updateAccount

}

