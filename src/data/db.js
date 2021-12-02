module.exports = {
  users: [
    {
      id: '90bd3d25-7bfa-4d9b-94bc-e1ec637a5707',
      name: 'sasha',
      login: 'testing',
      password: 'test_password',
    },
  ],
  boards: [
    {
      id: 'ad9b8249-5c2b-4a54-85d3-e7b61bbda5a4',
      title: 'test board',
      columns: [
        {
          id: 'ccba6fef-81fc-48e7-ba5e-f797cd86a8d9',
          title: 'new column 1',
          order: 1,
        },
        {
          id: '298aa2ce-f96c-4aba-baab-c34c49f5b5c9',
          title: 'new column 2',
          order: 2,
        },
      ],
    },
  ],
  tasks: [
    {
      id: '33025884-890d-410b-8159-5555030a528b',
      title: 'task 1',
      order: 1,
      description: 'task 1 desc',
      userId: '90bd3d25-7bfa-4d9b-94bc-e1ec637a5707', // id sasha
      boardId: 'ad9b8249-5c2b-4a54-85d3-e7b61bbda5a4', // board 1 id
      columnId: 'ccba6fef-81fc-48e7-ba5e-f797cd86a8d9', // column 1 id
    },
    {
      id: '8f5227e1-e1f7-49a1-a603-224989c1dbf7',
      title: 'task 2',
      order: 2,
      description: 'task 2 desc',
      userId: '90bd3d25-7bfa-4d9b-94bc-e1ec637a5707', // id sasha
      boardId: 'ad9b8249-5c2b-4a54-85d3-e7b61bbda5a4', // board 1 id
      columnId: '298aa2ce-f96c-4aba-baab-c34c49f5b5c9', // column 2 id
    },
    {
      id: 'random-id',
      title: 'task 3',
      order: 3,
      description: 'task 3 desc',
      userId: '90bd3d25-7bfa-4d9b-94bc-e1ec637a5707', // id sasha
      boardId: 'random board id', // board 1 id
      columnId: '298aa2ce-f96c-4aba-baab-c34c49f5b5c9', // column 2 id
    },
  ],
};
