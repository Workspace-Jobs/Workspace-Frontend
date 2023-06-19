export const MemberController = {
  signup: '/user/registration/',
  signin: '/user/login/',
  refresh: '/user/token/refresh/',
  changeName: '/user/name/',
  user: '/user/main',
}

export const ResumeController = {
  resume: '/user/resume/',
  getResume(id: string) {
    return `/user/resume/${id}`
  },
}

export const CommunityController = {
  postCommunity: '/NB/',
  community(id: string) {
    return `/NB/${id}`
  },
  getCommunityList: `/NB/list/`,
  tagCommunity: `/NB/list/tag/`,
  likeCommunity(id: string) {
    return `/NB/good/${id}`
  },
}

export const EmplymentController = {
  employment: '/EM/',
  employmentJob: '/EM/job/',
  employmentSearch: '/EM/search/',
  employmentDetail(id: string) {
    return `/EM/${id}`
  },
  employmentBookmark(id: number) {
    return `/EM/mark/${id}`
  },
  employmentApply(id: string) {
    return `/EM/su/${id}`
  },
}

export const MyController = {
  profile: '/NP/user/',
  bookmarkList: '/NP/mark',
  likeList: '/NP/good/',
  myList: '/NP/NB/',
  changeImg: '/NP/profile/',
  myStatus: '/NP/state/',
  myStatusList: '/NP/state/list/',
  myApply(id: string) {
    return `/NP/support/${id}`
  },
}
