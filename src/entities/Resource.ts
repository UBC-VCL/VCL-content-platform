interface ResourceOwner {
  _id: string,
  username: string,
}

export interface Resource {
  _id: string,
  title: string,
  description: string,
  category: {
    main: string,
    sub: string,
  },
  author: string,
  owner: ResourceOwner,
  resource_link: string,
};

export interface ResourceRequestBody {
  title: string,
  description: string,
  category: {
    main: string,
    sub: string,
  },
  author: string,
  username: string | undefined,
  resource_link: string,
}