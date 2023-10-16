export default class UserInfo {
  constructor(userName, userJob) {
    this._userName = userName;
    this._userJob = userJob;
  }

  getUserInfo() {
    this._userInfoValues = {};
    this._userInfoValues["title"] = this._userName.textContent;
    this._userInfoValues["job"] = this._userJob.textContent;

    return this._userInfoValues;
  }

  setUserInfo({ title, job }) {
    this._userName.textContent = title;
    this._userJob.textContent = job;
  }
}
