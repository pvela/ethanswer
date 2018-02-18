'use strict';
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const QuestionBountySchema = new Schema({
  questionId : {
    type:String,
    unique: true,
    required: true
  },
  walletId: {
    type: String,
    required: true
  },
  bountyAmount: {
      type: Number,
      required: true
  }
},
{
  collection:'questionBounty'
});

export default mongoose.model('question-bounty',QuestionBountySchema);
