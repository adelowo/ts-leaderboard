interface User {
  readonly username: string
  readonly avatarURL: string
  readonly points: {
    allTime: number
    recent: number
  }
  readonly lastUpdated: string
}

export default User;
