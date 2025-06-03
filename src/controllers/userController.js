// export : 함수를 module 밖으로 export
// req : request 객체 : 클라가 보낸 요청 정보 (ex. url, header, body) 정보를 담고 있음
// res : response 객체 : 서버가 클라에게 보낼 응답을 제어하는 객체
export const join = (req, res) => res.send("Join");
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
export const login = (req, res) => res.send("Login");
export const logout = (req, res) => res.send("Log out");
export const see = (req, res) => res.send("See User");
