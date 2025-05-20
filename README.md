## Yêu cầu commit code

Để đảm bảo sự thống nhất và rõ ràng trong lịch sử commit, vui lòng tuân thủ các quy tắc commit sau đây.

#### Cấu trúc commit message

```bash
[TicketID] <type>: <subject>

<body>

<footer>

```

Trong đó:

- **TicketID**: Ticket ID trên Jira

- **type**: Loại thay đổi (bắt buộc, chữ thường)

- **subject**: Nội dung ngắn gọn về thay đổi (bắt buộc, không viết hoa toàn bộ, không chấm câu cuối)

- **body**: Mô tả chi tiết về thay đổi, mỗi dòng tối đa 100 ký tự (không bắt buộc, nếu có thì phải tuân thủ rule)

- **footer**: Các thông tin bổ sung như ticket ID, breaking change, v.v. mỗi dòng tối đa 100 ký tự (không bắt buộc, nếu
  có thì phải tuân thủ rule)

#### Type

| Type     | Ý nghĩa                                                  |
| -------- | -------------------------------------------------------- |
| build    | Thay đổi liên quan đến build system, dependencies        |
| chore    | Công việc lặt vặt, không ảnh hưởng đến source hoặc test  |
| ci       | Cấu hình CI/CD                                           |
| docs     | Thay đổi tài liệu                                        |
| feat     | Thêm tính năng mới                                       |
| fix      | Sửa bug                                                  |
| perf     | Tối ưu hiệu suất                                         |
| refactor | Refactor code, không thêm tính năng hoặc sửa lỗi         |
| revert   | Revert lại commit trước                                  |
| style    | Thay đổi style code (formatting, missing semi-colons...) |
| test     | Thêm hoặc sửa test                                       |

## Yêu cầu khi viết unit test

#### Components

- **Rendering**: Component render đúng với props mặc định
- **Props**: Component thay đổi đúng khi props thay đổi
- **Interactions**: Xử lý đúng các sự kiện người dùng (click, hover, input)
- **State**: Quản lý state nội bộ đúng cách
- **Conditional rendering**: Hiển thị đúng UI dựa trên điều kiện
- **Error states**: Xử lý lỗi đúng cách

#### Hooks

- **Return values**: Hook trả về đúng giá trị
- **State updates**: State được cập nhật đúng khi gọi các functions
- **Side effects**: Side effects được gọi đúng thời điểm
- **Error handling**: Xử lý lỗi đúng cách

#### Utility Functions

- **Input/Output**: Function trả về đúng kết quả với các input khác nhau
- **Edge cases**: Xử lý đúng các trường hợp đặc biệt
- **Error handling**: Throw errors đúng cách khi cần

#### API Routes

- **Response format**: API trả về đúng format dữ liệu
- **Status codes**: Trả về đúng status code
- **Error handling**: Xử lý lỗi đúng cách
- **Authentication/Authorization**: Kiểm tra quyền truy cập đúng
