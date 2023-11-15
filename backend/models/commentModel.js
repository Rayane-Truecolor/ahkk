// commentModel.js
import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
  {
    body: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    parentId: { type: mongoose.Schema.Types.ObjectId },
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;
