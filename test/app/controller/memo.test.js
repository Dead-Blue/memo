'use strict';

describe('test/app/controller/memo.test.js', () => {
  const mockMemo = [{
    title: 'TEST',
    id: 0,
    completed: false,
    list: '默认',
    priority: 'none',
    remark: '',
    show: true,
    isUploaded: true,
  }];
  let memo;
  before(function* () {
    const ctx = app.mockContext();
    memo = yield ctx.model.memo.create(mockMemo).then(memos => memos);
  });

  it('should app auto init on setup.js', () => {
    // app is auto init at `test/.setup.js`
    assert(app);
    assert(mock);
    // mock alias
    assert(mm);
    assert(request);
  });

  it('should GET /api/memo', () => {
    return request(app.callback())
      .get('/api/memo')
      .expect(res => {
        assert(res.body === memo);
      })
      .expect(200);
  });

  it('should POST /api/memo', () => {
    return request(app.callback())
      .post('/api/memo')
      .send({ memos: mockMemo })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(res => {
        assert(res.body[0].title === mockMemo[0].title);
        assert(res.body[0].id === mockMemo[0].id);
        assert(res.body[0].isUploaded === true);
      })
      .expect(201);
  });

  after(function* () {
    const ctx = app.mockContext();
    yield ctx.model.memo.remove({});
  });
});
