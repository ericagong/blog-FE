// response.js

const RESP = {
  // for user realted APIs
  LOGIN_HEADER: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsYXN0bWFuIiwiYXV0aCI6IlJPTEVfTUVNQkVSIiwiZXhwIjoxNjYwMzc0NzYwfQ.md7GkryurbgmfFIjaJtvQEoOm6HqQWCCVrK2FzSqUMc",
    RefreshToken:
      "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NjA5Nzc3NjB9.sLdXvDFyE_YFyUr_rkX9LBPJSFWnyGQv39p0tkE2xD0",
  },
  LOGIN_SUCCESS: {
    result: true,
    data: {
      id: 1,
      username: "ericagong",
      nickname: "helllo_world",
      createdAt: "2022-08-13T15:42:37.493339",
      modifiedAt: "2022-08-13T15:42:37.493339",
    },
    status: {
      code: 200,
      message: "successfullly logged in.",
    },
  },
  LOGIN_FAIL: {
    result: false,
    data: null,
    status: {
      code: 400,
      message: "login failed.",
    },
  },
  LOGOUT_SUCCESS: {
    result: true,
    data: null,
    status: {
      code: 200,
      message: "successfullly logged out.",
    },
  },
  LOGOUT_FAIL: {
    result: false,
    data: null,
    status: {
      code: 400,
      message: "logout failed.",
    },
  },
  ID_CHECK_SUCCESS: {
    result: true,
    data: true,
    status: {
      code: 200,
      message: "You can use this ID.",
    },
  },
  ID_CHECK_FAIL: {
    result: false,
    data: null,
    status: {
      code: 400,
      message: "This ID is already exist. Please try other ID.",
    },
  },
  NICKNAME_CHECK_SUCCESS: {
    result: true,
    data: true,
    status: {
      code: 200,
      message: "You can use this nickname.",
    },
  },
  NICKNAME_CHECK_FAIL: {
    result: false,
    data: null,
    status: {
      code: 400,
      message: "This nickname is already exist. Please try other nickname.",
    },
  },
  SIGN_UP_SUCCESS: {
    result: true,
    data: {
      id: 1,
      username: "ericagong",
      nickname: "helllo_world",
      createdAt: "2022-08-13T15:42:37.493339",
      modifiedAt: "2022-08-13T15:42:37.493339",
    },
    status: {
      code: 200,
      message: "successfully signed in.",
    },
  },
  SIGN_UP_FAIL: {
    result: false,
    data: null,
    status: {
      code: 400,
      message: "sigin failed.",
    },
  },
  MY_SUCCESS: {
    result: true,
    data: {
      postsNum: 5,
      commentsNum: 10,
      posts: [
        {
          id: 1,
          nickname: "Norina",
          title: "Blood and Chocolate",
          imageUrl: [
            "https://user-images.githubusercontent.com/48196721/184591700-c3d418d5-d013-4659-b93b-b18fd45bb940.jpeg",
            "https://user-images.githubusercontent.com/48196721/184771730-4acbc6a6-0b91-430b-8352-eea7617e7a41.jpeg",
            "https://user-images.githubusercontent.com/48196721/184771766-ee26a6c5-cfa4-4b9e-a91e-6bfb695f4670.jpeg",
          ],
          content: "Curabitur in libero ut massa volutpat convallis.",
          numComments: 1,
          modifiedAt: "2020-04-09T19:12:30.686",
        },
        {
          id: 2,
          nickname: "Bonnee",
          title: "Infernal Affairs 2 (Mou gaan dou II)",
          imageUrl: [
            "https://user-images.githubusercontent.com/48196721/184591700-c3d418d5-d013-4659-b93b-b18fd45bb940.jpeg",
            "https://user-images.githubusercontent.com/48196721/184771730-4acbc6a6-0b91-430b-8352-eea7617e7a41.jpeg",
            "https://user-images.githubusercontent.com/48196721/184771766-ee26a6c5-cfa4-4b9e-a91e-6bfb695f4670.jpeg",
          ],
          content: "Nulla tellus.",
          numComments: 2,
          modifiedAt: "2020-04-09T19:12:30.686",
        },
        {
          id: 3,
          nickname: "Raymond",
          title: "My House in Umbria",
          imageUrl: [
            "https://user-images.githubusercontent.com/48196721/184591700-c3d418d5-d013-4659-b93b-b18fd45bb940.jpeg",
            "https://user-images.githubusercontent.com/48196721/184771730-4acbc6a6-0b91-430b-8352-eea7617e7a41.jpeg",
            "https://user-images.githubusercontent.com/48196721/184771766-ee26a6c5-cfa4-4b9e-a91e-6bfb695f4670.jpeg",
          ],
          content: "Curabitur convallis.",
          numComments: 3,
          modifiedAt: "2020-04-09T19:12:30.686",
        },
        {
          id: 4,
          nickname: "Nobe",
          title: "Goodbye, Mr. Chips",
          imageUrl: [
            "https://user-images.githubusercontent.com/48196721/184591700-c3d418d5-d013-4659-b93b-b18fd45bb940.jpeg",
            "https://user-images.githubusercontent.com/48196721/184771730-4acbc6a6-0b91-430b-8352-eea7617e7a41.jpeg",
            "https://user-images.githubusercontent.com/48196721/184771766-ee26a6c5-cfa4-4b9e-a91e-6bfb695f4670.jpeg",
          ],
          content: "Pellentesque viverra pede ac diam.",
          numComments: 4,
          modifiedAt: "2020-04-09T19:12:30.686",
        },
        {
          id: 5,
          nickname: "Kathlin",
          title: "Small Town Murder Songs",
          imageUrl: [
            "https://user-images.githubusercontent.com/48196721/184591700-c3d418d5-d013-4659-b93b-b18fd45bb940.jpeg",
            "https://user-images.githubusercontent.com/48196721/184771730-4acbc6a6-0b91-430b-8352-eea7617e7a41.jpeg",
            "https://user-images.githubusercontent.com/48196721/184771766-ee26a6c5-cfa4-4b9e-a91e-6bfb695f4670.jpeg",
          ],
          content:
            "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
          numComments: 5,
          modifiedAt: "2020-04-09T19:12:30.686",
        },
      ],
      status: {
        code: 200,
        message: "successfully load my page.",
      },
    },
    status: {
      code: 200,
      message: "successfully signed in.",
    },
  },
  MY_FAIL: {
    result: false,
    data: null,
    status: {
      code: 400,
      message: "fail to load my page.",
    },
  },

  // for post realted APIs
  UPLOAD_PHOTO_SUCCESS: {
    imageUrl: [
      "https://user-images.githubusercontent.com/48196721/184591700-c3d418d5-d013-4659-b93b-b18fd45bb940.jpeg",
      "https://user-images.githubusercontent.com/48196721/184771730-4acbc6a6-0b91-430b-8352-eea7617e7a41.jpeg",
      "https://user-images.githubusercontent.com/48196721/184771766-ee26a6c5-cfa4-4b9e-a91e-6bfb695f4670.jpeg",
    ],
  },
  CREATE_POST_SUCCESS: {
    result: true,
    data: {},
    status: {
      code: 200,
      message: "created new post.",
    },
  },
  CREATE_POST_FAIL: {
    result: false,
    data: null,
    status: {
      code: 400,
      message: "failed to create new post.",
    },
  },
  EDIT_POST_SUCCESS: {
    result: true,
    data: {},
    status: {
      code: 200,
      message: "successfully edit the post.",
    },
  },
  EDIT_POST_FAIL: {
    result: false,
    data: null,
    status: {
      code: 400,
      message: "failed to edit post.",
    },
  },
  DELETE_POST_SUCCESS: {
    result: true,
    data: {},
    status: {
      code: 200,
      message: "successfully delete the post.",
    },
  },
  DELETE_POST_FAIL: {
    result: false,
    data: null,
    status: {
      code: 400,
      message: "failed to delete post.",
    },
  },
  GET_POSTS_SUCCESS: {
    result: true,
    data: [
      {
        id: 1,
        nickname: "Norina",
        title: "Blood and Chocolate",
        imageUrl: [
          "https://user-images.githubusercontent.com/48196721/184591700-c3d418d5-d013-4659-b93b-b18fd45bb940.jpeg",
          "https://user-images.githubusercontent.com/48196721/184771730-4acbc6a6-0b91-430b-8352-eea7617e7a41.jpeg",
          "https://user-images.githubusercontent.com/48196721/184771766-ee26a6c5-cfa4-4b9e-a91e-6bfb695f4670.jpeg",
        ],
        content: "Curabitur in libero ut massa volutpat convallis.",
        numComments: 1,
        modifiedAt: "2020-04-09T19:12:30.686",
      },
      {
        id: 2,
        nickname: "Bonnee",
        title: "Infernal Affairs 2 (Mou gaan dou II)",
        imageUrl: [
          "https://user-images.githubusercontent.com/48196721/184591700-c3d418d5-d013-4659-b93b-b18fd45bb940.jpeg",
          "https://user-images.githubusercontent.com/48196721/184771730-4acbc6a6-0b91-430b-8352-eea7617e7a41.jpeg",
          "https://user-images.githubusercontent.com/48196721/184771766-ee26a6c5-cfa4-4b9e-a91e-6bfb695f4670.jpeg",
        ],
        content: "Nulla tellus.",
        numComments: 2,
        modifiedAt: "2020-04-09T19:12:30.686",
      },
      {
        id: 3,
        nickname: "Raymond",
        title: "My House in Umbria",
        imageUrl: [
          "https://user-images.githubusercontent.com/48196721/184591700-c3d418d5-d013-4659-b93b-b18fd45bb940.jpeg",
          "https://user-images.githubusercontent.com/48196721/184771730-4acbc6a6-0b91-430b-8352-eea7617e7a41.jpeg",
          "https://user-images.githubusercontent.com/48196721/184771766-ee26a6c5-cfa4-4b9e-a91e-6bfb695f4670.jpeg",
        ],
        content: "Curabitur convallis.",
        numComments: 3,
        modifiedAt: "2020-04-09T19:12:30.686",
      },
      {
        id: 4,
        nickname: "Nobe",
        title: "Goodbye, Mr. Chips",
        imageUrl: [
          "https://user-images.githubusercontent.com/48196721/184591700-c3d418d5-d013-4659-b93b-b18fd45bb940.jpeg",
          "https://user-images.githubusercontent.com/48196721/184771730-4acbc6a6-0b91-430b-8352-eea7617e7a41.jpeg",
          "https://user-images.githubusercontent.com/48196721/184771766-ee26a6c5-cfa4-4b9e-a91e-6bfb695f4670.jpeg",
        ],
        content: "Pellentesque viverra pede ac diam.",
        numComments: 4,
        modifiedAt: "2020-04-09T19:12:30.686",
      },
      {
        id: 5,
        nickname: "Kathlin",
        title: "Small Town Murder Songs",
        imageUrl: [
          "https://user-images.githubusercontent.com/48196721/184591700-c3d418d5-d013-4659-b93b-b18fd45bb940.jpeg",
          "https://user-images.githubusercontent.com/48196721/184771730-4acbc6a6-0b91-430b-8352-eea7617e7a41.jpeg",
          "https://user-images.githubusercontent.com/48196721/184771766-ee26a6c5-cfa4-4b9e-a91e-6bfb695f4670.jpeg",
        ],
        content:
          "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        numComments: 5,
        modifiedAt: "2020-04-09T19:12:30.686",
      },
      {
        id: 6,
        nickname: "Elena",
        title: "Oklahoma!",
        imageUrl: [
          "https://user-images.githubusercontent.com/48196721/184591700-c3d418d5-d013-4659-b93b-b18fd45bb940.jpeg",
          "https://user-images.githubusercontent.com/48196721/184771730-4acbc6a6-0b91-430b-8352-eea7617e7a41.jpeg",
          "https://user-images.githubusercontent.com/48196721/184771766-ee26a6c5-cfa4-4b9e-a91e-6bfb695f4670.jpeg",
        ],
        content: "Maecenas ut massa quis augue luctus tincidunt.",
        numComments: 6,
        modifiedAt: "2020-04-09T19:12:30.686",
      },
      {
        id: 7,
        nickname: "Janeta",
        title: "Claymation Comedy of Horrors",
        imageUrl: [
          "https://user-images.githubusercontent.com/48196721/184591700-c3d418d5-d013-4659-b93b-b18fd45bb940.jpeg",
          "https://user-images.githubusercontent.com/48196721/184771730-4acbc6a6-0b91-430b-8352-eea7617e7a41.jpeg",
          "https://user-images.githubusercontent.com/48196721/184771766-ee26a6c5-cfa4-4b9e-a91e-6bfb695f4670.jpeg",
        ],
        content: "Etiam vel augue.",
        numComments: 7,
        modifiedAt: "2020-04-09T19:12:30.686",
      },
      {
        id: 8,
        nickname: "Guinna",
        title: "Guns of Fort Petticoat, The",
        imageUrl: [
          "https://user-images.githubusercontent.com/48196721/184591700-c3d418d5-d013-4659-b93b-b18fd45bb940.jpeg",
          "https://user-images.githubusercontent.com/48196721/184771730-4acbc6a6-0b91-430b-8352-eea7617e7a41.jpeg",
          "https://user-images.githubusercontent.com/48196721/184771766-ee26a6c5-cfa4-4b9e-a91e-6bfb695f4670.jpeg",
        ],
        content:
          "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        numComments: 8,
        modifiedAt: "2020-04-09T19:12:30.686",
      },
      {
        id: 9,
        nickname: "Jaynell",
        title: "Raven, The",
        imageUrl: [
          "https://user-images.githubusercontent.com/48196721/184591700-c3d418d5-d013-4659-b93b-b18fd45bb940.jpeg",
          "https://user-images.githubusercontent.com/48196721/184771730-4acbc6a6-0b91-430b-8352-eea7617e7a41.jpeg",
          "https://user-images.githubusercontent.com/48196721/184771766-ee26a6c5-cfa4-4b9e-a91e-6bfb695f4670.jpeg",
        ],
        content: "Aenean fermentum.",
        numComments: 9,
        modifiedAt: "2020-04-09T19:12:30.686",
      },
      {
        id: 10,
        nickname: "Bernita",
        title: "Otis",
        imageUrl: [
          "https://user-images.githubusercontent.com/48196721/184591700-c3d418d5-d013-4659-b93b-b18fd45bb940.jpeg",
          "https://user-images.githubusercontent.com/48196721/184771730-4acbc6a6-0b91-430b-8352-eea7617e7a41.jpeg",
          "https://user-images.githubusercontent.com/48196721/184771766-ee26a6c5-cfa4-4b9e-a91e-6bfb695f4670.jpeg",
        ],
        content: "Vestibulum ac est lacinia nisi venenatis tristique.",
        numComments: 10,
        modifiedAt: "2020-04-09T19:12:30.686",
      },
    ],
    status: {
      code: 200,
      message: "successfully edit the post.",
    },
  },
  GET_POSTS_FAIL: {
    result: false,
    data: null,
    status: {
      code: 400,
      message: "failed to get posts.",
    },
  },
  GET_POST_SUCCESS: {
    result: true,
    data: {
      id: 10,
      nickname: "Bernita",
      title: "Otis",
      imageUrl: [
        "https://user-images.githubusercontent.com/48196721/184591700-c3d418d5-d013-4659-b93b-b18fd45bb940.jpeg",
        "https://user-images.githubusercontent.com/48196721/184771730-4acbc6a6-0b91-430b-8352-eea7617e7a41.jpeg",
        "https://user-images.githubusercontent.com/48196721/184771766-ee26a6c5-cfa4-4b9e-a91e-6bfb695f4670.jpeg",
      ],
      content: "Vestibulum ac est lacinia nisi venenatis tristique.",
      modifiedAt: "2020-04-09T19:12:30.686",
      isMine: true,
    },
  },
  GET_POST_FAIL: {
    result: false,
    data: null,
    status: {
      code: 400,
      message: "failed to get post.",
    },
  },

  // for comment realted APIs
  GET_COMMENTS_SUCCESS: {
    result: true,
    data: [
      {
        id: 1,
        nickname: "Lina",
        content: "Nunc rhoncus dui vel sem.",
        isMine: false,
      },
      {
        id: 2,
        nickname: "Amabel",
        content: "Fusce consequat.",
        isMine: false,
      },
      {
        id: 3,
        nickname: "Natale",
        content: "Suspendisse accumsan tortor quis turpis.",
        isMine: true,
      },
      {
        id: 4,
        nickname: "Neville",
        content: "Quisque ut erat.",
        isMine: true,
      },
      {
        id: 5,
        nickname: "Abie",
        content: "Pellentesque eget nunc.",
        isMine: false,
      },
      {
        id: 6,
        nickname: "Tricia",
        content: "Curabitur convallis.",
        isMine: false,
      },
      {
        id: 7,
        nickname: "Erinn",
        content:
          "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
        isMine: false,
      },
      {
        id: 8,
        nickname: "Flory",
        content:
          "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
        isMine: false,
      },
      {
        id: 9,
        nickname: "Ferd",
        content: "Proin interdum mauris non ligula pellentesque ultrices.",
        isMine: true,
      },
      {
        id: 10,
        nickname: "Edyth",
        content: "Integer non velit.",
        isMine: true,
      },
    ],
    status: {
      code: 200,
      message: "comments successfully loaded.",
    },
  },
  GET_COMMENTS_FAIL: {
    result: false,
    status: {
      code: 400,
      message: "failed to get comments.",
    },
  },
  CREATE_COMMENT_SUCCESS: {
    result: true,
    data: {},
    status: {
      code: 200,
      message: "successfully created comment.",
    },
  },
  CREATE_COMMENT_FAIL: {
    result: false,
    status: {
      code: 400,
      message: "failed to create comment.",
    },
  },
  EDIT_COMMENT_SUCCESS: {
    result: true,
    data: {},
    status: {
      code: 200,
      message: "successfully edit comment.",
    },
  },
  EDIT_COMMENT_FAIL: {
    result: false,
    status: {
      code: 400,
      message: "failed to edit comment.",
    },
  },
  DELETE_COMMENT_SUCCESS: {
    result: true,
    data: {},
    status: {
      code: 200,
      message: "successfully delete comment.",
    },
  },
  DELETE_COMMENT_FAIL: {
    result: false,
    status: {
      code: 400,
      message: "failed to delete comment.",
    },
  },
};

export default RESP;
