const fakeUser = {
	username: "Inyoung",
	loggedIn : false
};

export const trending = (req, res) => res.render("home", { pageTitle: "Hi", fakeUser });
// { } 중괄호 안의 변수는 home 템플릿에 전달되는 객체

export const see = (req, res) => res.render("watch")
export const edit = (req, res) => res.render("edit")
export const search = (req, res) => res.send("Search")