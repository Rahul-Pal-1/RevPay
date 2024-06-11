const mongoose = require('../connection');

const accountSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  accountNumber: { type: String, unique: true, required: true },
  sortCode: { type: String, required: true },
  activationStatus: { type: String, enum: ['ACTIVE', 'INACTIVE'], default: 'ACTIVE' },
  allowCredit: { type: Boolean, default: true },
  allowDebit: { type: Boolean, default: true },
  balance: { type: Number, default: 0 },
});

module.exports = mongoose.model('Account', accountSchema);
