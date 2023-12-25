import axios from "axios";

export const USER_LOGIN = "userLogin";
export const TOKEN = "accessToken";

//sử dụng axios interceptor (cấu hình chung cho tất cả request và respone của các api)

export const http = axios.create({
  baseURL: "https://shop.cyberlearn.vn/api", //domain
  timeout: 30000, //thời gian tối đa của 1 request có thể đợi
});

//cấu hình cho tất cả request
http.interceptors.request.use(
  (config) => {
    //xử lý config: object request đi
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    };
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

/*
  status code
  200: request thành công về server và được trả về response(kết quả) về
  201: dữ liệu request thành công và đã được khởi tạo (created)
  
  400: Bad request (Đường dẫn không tồn tại)
  401: Unauthorize (Không có quyền truy cập vào api này - token không hợp lệ)
  403: Forbiden (Token chưa đủ quyền truy cập vào api này)
  404: not found (không tìm thấy dữ liệu) (thường truyền sai id của get detail)

  500: Error in server (xảy ra tại server) 
  + kiểm tra lại
  FE: kiểm tra dữ liệu có đúng format backend yêu cầu không và giá trị có chuẩn như  backend qui định
  BE: kiểm tra lại tất cả logic code trên dữ liệu front đưa ra
*/
// cấu hình cho tất cả response (dữ liệu nhận về từ backend)
http.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    console.log({ err });
    //xử lý lỗi
    if (err.response?.status === 404) {
    } else if (err.response?.status === 400) {
    } else if (err.response?.status === 401) {
      alert("Đăng nhập để vào trang này");
      window.location.href = "/login";
    } else if (err.response?.status === 403) {
    }
    return Promise.reject(err);
  }
);
