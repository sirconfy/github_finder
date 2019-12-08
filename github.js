class Github{
  constructor(){
    this.client_id= '02cab1ddeb0a3fd49890';
    this.client_secret='c6201d65e2dd35aa913444e88d76605d6d0081e5';
  }
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profile = await profileResponse.json();

    return {
    profile
    }

  }
}



