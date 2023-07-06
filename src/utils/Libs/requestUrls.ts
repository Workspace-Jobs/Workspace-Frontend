export const MemberController = {
  signup: '/user/registration/',
  signin: '/user/login/',
  refresh: '/user/token/refresh/',
  changeName: '/user/name/',
  user: '/user/main',
}

export const ResumeController = {
  resume: '/user/resume/',
  getResume(id: number) {
    return `/user/resume/${id}`
  },
}

export const CommunityController = {
  postCommunity: '/NB/',
  community(id: string | string[] | number | undefined) {
    return `/NB/${id}`
  },
  getCommunityList: `/NB/list/`,
  tagCommunity: `/NB/list/tag/`,
  likeCommunity(id: number | undefined) {
    return `/NB/good/${id}`
  },
  comment(id: number | undefined) {
    return `/NB/comment/${id}`
  },
}

export const EmplymentController = {
  employment: '/EM/',
  employmentJob: '/EM/job/',
  employmentSearch: '/EM/search/',
  employmentDetail(id: string | string[] | undefined) {
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
  myNB: '/NP/NB/',
}
