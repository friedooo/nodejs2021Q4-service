module.exports = {
  users: [
    {
      id: '1',
      name: 'TEST_USER',
      login: 'test_user',
      password: 'T35t_P@55w0rd',
    },
  ],
  boards: [
    {
      title: 'Autotest board',
      columns: [
        { title: 'Backlog', order: 1 },
        { title: 'Sprint', order: 2 },
      ],
    },
  ],
  tasks: [
    {
      id: '39b91ee0-61a5-4e6e-9b3f-569fc59b4219',
      title: 'TASK',
      order: 0,
      description: 'make people happier',
      userId: null,
      boardId: 'ac572361-a127-4ea2-aee0-e38365a199d2',
      columnId: null,
    },
  ],
};
