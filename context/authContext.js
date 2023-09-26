// Khởi tạo đối tượng chứa ngữ cảnh
var AuthContext = {
  currentUser: null,
  login: function () {},
};

// Hàm để đặt người dùng hiện tại và cập nhật localStorage
function setUser(user) {
  AuthContext.currentUser = user;
  localStorage.setItem("user", JSON.stringify(user));
}

// Hàm để mô phỏng một hành động đăng nhập thực tế
function login(username, password) {
  // TODO: Thực hiện logic đăng nhập thực tế ở đây
  // Ví dụ: Kiểm tra tên người dùng và mật khẩu có trùng khớp không
  if (username === "john" && password === "password") {
    var user = {
      id: 1,
      name: "John Doe",
      profilePic:
        "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
    };
    setUser(user);
    return true; // Đăng nhập thành công
  } else {
    return false; // Đăng nhập thất bại
  }
}

// Hàm để đăng xuất
function logout() {
  AuthContext.currentUser = null;
  localStorage.removeItem("user");
}

// Hàm để kiểm tra xem người dùng đã đăng nhập hay chưa
function isAuthenticated() {
  return AuthContext.currentUser !== null;
}

// Hàm để kiểm tra quyền truy cập
function hasPermission(permission) {
  // TODO: Thực hiện kiểm tra quyền truy cập thực tế ở đây
  // Ví dụ: Kiểm tra xem người dùng có quyền cần thiết không
  return (
    AuthContext.currentUser &&
    AuthContext.currentUser.permissions.includes(permission)
  );
}

// Hàm để khởi tạo ngữ cảnh
function initializeContext() {
  var storedUser = JSON.parse(localStorage.getItem("user"));
  if (storedUser) {
    AuthContext.currentUser = storedUser;
  }
}

// Khởi tạo ngữ cảnh khi ứng dụng của bạn bắt đầu
initializeContext();
