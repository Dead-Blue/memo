'use strict';

module.exports = app => {
  class MemoController extends app.Controller {
    * saveMemo() {
      const { ctx } = this;
      const createRule = {
        memos: {
          type: 'array',
          itemType: 'object',
          required: true,
          rule: {
            id: { type: 'number' },
            title: { type: 'string' },
            completed: { type: 'boolean' },
            list: { type: 'string' },
            priority: { type: 'string' },
            remark: { type: 'string', allowEmpty: true },
            show: { type: 'boolean' },
          },
        },
      };
      try {
        ctx.validate(createRule);
      } catch (errors) {
        ctx.body = errors;
        ctx.status = 400;
        return;
      }
      const memoToSave = ctx.request.body.memos;
      yield ctx.model.memo.remove({});
      ctx.body = yield ctx.model.memo.create(memoToSave).then(memos => memos);
      ctx.status = 201;
    }

    * getMemoList() {
      const { ctx } = this;
      const memos = yield ctx.model.memo.find({}).then(memos => memos);
      ctx.body = memos;
      ctx.status = 200;
    }
    }
  return MemoController;
};
