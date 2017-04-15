'use strict';
module.exports = mongoose => {
  const MemoSchema = new mongoose.Schema({
    id: { type: Number },
    title: { type: String },
    completed: { type: Boolean },
    list: { type: String },
    priority: { type: String },
    remark: { type: String },
    show: { type: Boolean },
    isUploaded: { type: Boolean },
  });

  return mongoose.model('Memo', MemoSchema);
};
